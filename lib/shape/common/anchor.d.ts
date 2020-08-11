import { ShapeStyle, NodeModel, Item, Node } from '../../common/interfaces';
interface AnchorPointContextProps {
  getAnchorPoints?(model: NodeModel): number[][];
}
declare type GetAnchorPointStyle = (item: Node, anchorPoint: number[]) => ShapeStyle;
declare type GetAnchorPointDisabledStyle = (
  item: Node,
  anchorPoint: number[],
) => ShapeStyle & {
  img?: string;
};
declare function setAnchorPointsState(
  this: AnchorPointContextProps,
  name: string,
  value: string | boolean,
  item: Item,
  getAnchorPointStyle?: GetAnchorPointStyle,
  getAnchorPointDisabledStyle?: GetAnchorPointDisabledStyle,
): void;
export { setAnchorPointsState };
