import React from 'react';
import { Item } from '../../common/interfaces';
import { EditorContextProps } from '../../components/EditorContext';
export declare enum ContextMenuType {
  Canvas = 'canvas',
  Node = 'node',
  Edge = 'edge',
}
interface ContextMenuProps extends EditorContextProps {
  /** 菜单类型 */
  type?: ContextMenuType;
  /** 菜单内容 */
  renderContent: (
    item: Item,
    position: {
      x: number;
      y: number;
    },
    hide: () => void,
  ) => React.ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  React.PropsWithChildren<ContextMenuProps>,
  'type' | 'renderContent' | 'children'
> &
  React.RefAttributes<unknown>>;
export default _default;
