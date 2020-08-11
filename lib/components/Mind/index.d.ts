import React from 'react';
import { Graph, GraphOptions, MindData, GraphReactEventProps } from '../../common/interfaces';
import './command';
interface MindProps extends Partial<GraphReactEventProps> {
  style?: React.CSSProperties;
  className?: string;
  data: MindData;
  graphConfig?: Partial<GraphOptions>;
  customModes?: (mode: string, behaviors: any) => object;
}
interface MindState {}
declare class Mind extends React.Component<MindProps, MindState> {
  static defaultProps: {
    graphConfig: {};
  };
  graph: Graph | null;
  containerId: string;
  canDragOrZoomCanvas: () => boolean;
  canCollapseExpand: ({ target }: { target: any }) => boolean;
  parseData: (data: any) => void;
  initGraph: (width: number, height: number) => Graph;
  render(): JSX.Element;
}
export default Mind;
