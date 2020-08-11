import { GraphType } from '../constants';
import { Behavior } from '../interfaces';
declare class BehaviorManager {
  behaviors: {
    [propName: string]: Behavior;
  };
  constructor();
  getRegisteredBehaviors(type: GraphType): {};
  wrapEventHandler(type: GraphType, behavior: Behavior): Behavior;
  register(name: string, behavior: Behavior): void;
}
declare const _default: BehaviorManager;
export default _default;
