import { GraphState } from '../common/constants';
import { Graph, TreeGraph, Item, Node, Edge } from '../common/interfaces';
/** 生成唯一标识 */
export declare function guid(): string;
/** 拼接查询字符 */
export declare const toQueryString: (obj: object) => string;
/** 执行批量处理 */
export declare function executeBatch(graph: Graph, execute: Function): void;
/** 执行递归遍历 */
export declare function recursiveTraversal(root: any, callback: any): void;
/** 判断是否流程图 */
export declare function isFlow(graph: Graph): boolean;
/** 判断是否脑图 */
export declare function isMind(graph: Graph): boolean;
/** 判断是否节点 */
export declare function isNode(item: Item): boolean;
/** 判断是否边线 */
export declare function isEdge(item: Item): boolean;
/** 获取选中节点 */
export declare function getSelectedNodes(graph: Graph): Node[];
/** 获取选中边线 */
export declare function getSelectedEdges(graph: Graph): Edge[];
/** 获取高亮边线 */
export declare function getHighlightEdges(graph: Graph): Edge[];
/** 获取图表状态 */
export declare function getGraphState(graph: Graph): GraphState;
/** 设置选中元素 */
export declare function setSelectedItems(graph: Graph, items: Item[] | string[]): void;
/** 清除选中状态 */
export declare function clearSelectedState(graph: Graph, shouldUpdate?: (item: Item) => boolean): void;
/** 获取回溯路径 - Flow */
export declare function getFlowRecallEdges(graph: Graph, node: Node, targetIds?: string[], edges?: Edge[]): Edge[];
/** 获取回溯路径 - Mind */
export declare function getMindRecallEdges(graph: TreeGraph, node: Node, edges?: Edge[]): any;
