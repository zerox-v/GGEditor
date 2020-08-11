import React from 'react';
import { EditorPrivateContextProps } from '../EditorContext';
interface RegisterProps extends EditorPrivateContextProps {
  name: string;
  config: object;
  extend?: string;
}
export declare const RegisterNode: React.ForwardRefExoticComponent<Pick<
  React.PropsWithChildren<RegisterProps>,
  'name' | 'config' | 'extend' | 'children'
> &
  React.RefAttributes<unknown>>;
export declare const RegisterEdge: React.ForwardRefExoticComponent<Pick<
  React.PropsWithChildren<RegisterProps>,
  'name' | 'config' | 'extend' | 'children'
> &
  React.RefAttributes<unknown>>;
export declare const RegisterCommand: React.ForwardRefExoticComponent<Pick<
  React.PropsWithChildren<RegisterProps>,
  'name' | 'config' | 'extend' | 'children'
> &
  React.RefAttributes<unknown>>;
export declare const RegisterBehavior: React.ForwardRefExoticComponent<Pick<
  React.PropsWithChildren<RegisterProps>,
  'name' | 'config' | 'extend' | 'children'
> &
  React.RefAttributes<unknown>>;
export {};
