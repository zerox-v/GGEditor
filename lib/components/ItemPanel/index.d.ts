import React from 'react';
import { EditorContextProps } from '../EditorContext';
import Item from './Item';
interface ItemPanelProps extends EditorContextProps {
  style?: React.CSSProperties;
  className?: string;
}
export { Item };
declare const _default: React.ForwardRefExoticComponent<Pick<
  React.PropsWithChildren<ItemPanelProps>,
  'style' | 'className' | 'children'
> &
  React.RefAttributes<unknown>>;
export default _default;
