// @flow

import type {Disposable} from "react-relay";
import type {Notifier} from "@absinthe-betty/socket";

const subscriptions: WeakMap<
  Disposable,
  Promise<Notifier<any>>
> = new WeakMap();

export default subscriptions;
