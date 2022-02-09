// @flow

import {getOperationType} from "@betty-blocks/utils-graphql";

import type {GqlRequest} from "@betty-blocks/utils-graphql/compat/cjs/types";

import requestStatuses from "./requestStatuses";

import type {Notifier} from "./types";

const createUsing = (request, operationType) => ({
  operationType,
  request,
  activeObservers: [],
  canceledObservers: [],
  isActive: true,
  requestStatus: requestStatuses.pending,
  subscriptionId: undefined
});

const create = <Variables: void | Object>(
  request: GqlRequest<Variables>
): Notifier<any, $Subtype<Variables>> =>
  createUsing(request, getOperationType(request.operation));

export default create;
