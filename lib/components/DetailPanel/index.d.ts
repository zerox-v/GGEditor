import React from 'react';
import { EditorContextProps } from '../EditorContext';
import { Node, Edge } from '../../common/interfaces';
declare type DetailPanelType = 'node' | 'edge' | 'multi' | 'canvas';
export interface DetailPanelComponentProps {
  type: DetailPanelType;
  nodes: Node[];
  edges: Edge[];
}
declare class DetailPanel {
  static create: <P extends DetailPanelComponentProps>(
    type: DetailPanelType,
  ) => (
    WrappedComponent: React.ComponentType<P>,
  ) => React.ForwardRefExoticComponent<
    React.PropsWithoutRef<
      Pick<
        React.PropsWithChildren<EditorContextProps & Pick<P, Exclude<keyof P, 'type' | 'nodes' | 'edges'>>>,
        | 'children'
        | Exclude<Exclude<keyof P, 'type' | 'nodes' | 'edges'>, 'graph' | 'executeCommand' | 'commandManager'>
      >
    > &
      React.RefAttributes<unknown>
  >;
}
export default DetailPanel;
