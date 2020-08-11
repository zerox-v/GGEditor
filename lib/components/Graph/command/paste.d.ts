import { NodeModel } from '../../../common/interfaces';
import { BaseCommand } from './base';
export interface PasteCommandParams {
  models: NodeModel[];
}
declare const pasteCommand: BaseCommand<PasteCommandParams>;
export default pasteCommand;
