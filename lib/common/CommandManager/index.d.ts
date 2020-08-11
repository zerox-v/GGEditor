import { Graph, Command } from '../interfaces';
declare class CommandManager {
  command: {
    [propName: string]: Command;
  };
  commandQueue: Command[];
  commandIndex: number;
  constructor();
  /** 注册命令 */
  register(name: string, command: Command): void;
  /** 执行命令 */
  execute(graph: Graph, name: string, params?: object): void;
  /** 判断是否可以执行 */
  canExecute(graph: Graph, name: string): boolean;
  /** 注入是否应该执行 */
  injectShouldExecute(name: string, shouldExecute: (graph: Graph) => boolean): void;
}
export default CommandManager;
