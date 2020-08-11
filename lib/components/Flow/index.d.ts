import React from 'react';
import { Graph, GraphOptions, FlowData, GraphEvent, GraphReactEventProps } from '../../common/interfaces';
import './behavior';
interface FlowProps extends Partial<GraphReactEventProps> {
  style?: React.CSSProperties;
  className?: string;
  data: FlowData;
  graphConfig?: Partial<GraphOptions>;
  customModes?: (mode: string, behaviors: any) => object;
}
interface FlowState {}
declare class Flow extends React.Component<FlowProps, FlowState> {
  static defaultProps: {
    graphConfig: {};
  };
  graph: Graph | null;
  containerId: string;
  canDragNode: (e: GraphEvent) => boolean;
  canDragOrZoomCanvas: () => boolean;
  parseData: (data: any) => void;
  initGraph: (width: number, height: number) => Graph;
  render(): JSX.Element;
}
export default Flow;
