import { Node } from '../../common/interfaces';
export declare function getNodeSide(item: Node): 'left' | 'right';
export declare function getRectPath(x: number, y: number, w: number, h: number, r: number): (string | number)[][];
export declare function getFoldButtonPath(): string;
export declare function getUnfoldButtonPath(): string;
export declare function optimizeMultilineText(text: string, font: string, maxRows: number, maxWidth: number): string;
