import { Graph, Item, Node, Edge, Command } from '../../../common/interfaces';
export interface BaseCommand<P = object, G = Graph> extends Command<P, G> {
  /** 判断是否脑图 */
  isMind(graph: G): boolean;
  /** 获取选中节点 */
  getSelectedNodes(graph: G): Node[];
  /** 获取选中连线 */
  getSelectedEdges(graph: G): Edge[];
  /** 设置选中元素 */
  setSelectedItems(graph: G, items: Item[] | string[]): void;
  /** 编辑选中节点 */
  editSelectedNode(graph: G): void;
}
export declare const baseCommand: BaseCommand;
