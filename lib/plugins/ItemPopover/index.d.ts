import React from 'react';
import { Item } from '../../common/interfaces';
import { EditorContextProps } from '../../components/EditorContext';
export declare enum ItemPopoverType {
  Node = 'node',
  Edge = 'edge',
}
interface ItemPopoverProps extends EditorContextProps {
  /** 浮层类型 */
  type?: ItemPopoverType;
  /** 浮层内容 */
  renderContent: (
    item: Item,
    position: {
      minX: number;
      minY: number;
      maxX: number;
      maxY: number;
      centerX: number;
      centerY: number;
    },
  ) => React.ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  React.PropsWithChildren<ItemPopoverProps>,
  'type' | 'renderContent' | 'children'
> &
  React.RefAttributes<unknown>>;
export default _default;
