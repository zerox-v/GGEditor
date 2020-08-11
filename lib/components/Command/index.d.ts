import React from 'react';
import { EditorContextProps } from '../EditorContext';
interface CommandProps extends EditorContextProps {
  name: string;
  className?: string;
  disabledClassName?: string;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  React.PropsWithChildren<CommandProps>,
  'name' | 'className' | 'disabledClassName' | 'children'
> &
  React.RefAttributes<unknown>>;
export default _default;
