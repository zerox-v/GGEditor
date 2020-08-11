import React from 'react';
import { EditorEvent } from '../../common/constants';
import { Graph, CommandEvent } from '../../common/interfaces';
import { EditorContextProps, EditorPrivateContextProps } from '../EditorContext';
interface EditorProps {
  style?: React.CSSProperties;
  className?: string;
  [EditorEvent.onBeforeExecuteCommand]?: (e: CommandEvent) => void;
  [EditorEvent.onAfterExecuteCommand]?: (e: CommandEvent) => void;
}
interface EditorState extends EditorContextProps, EditorPrivateContextProps {}
declare class Editor extends React.Component<EditorProps, EditorState> {
  static setTrackable(trackable: boolean): void;
  static defaultProps: {
    onBeforeExecuteCommand: () => void;
    onAfterExecuteCommand: () => void;
  };
  lastMousedownTarget: HTMLElement | null;
  constructor(props: EditorProps);
  shouldTriggerShortcut(graph: Graph, target: HTMLElement | null): boolean;
  bindEvent(graph: Graph): void;
  bindShortcut(graph: Graph): void;
  setGraph: (graph: Graph) => void;
  executeCommand: (name: string, params?: object) => void;
  render(): JSX.Element;
}
export default Editor;
