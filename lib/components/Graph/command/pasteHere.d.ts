import { NodeModel } from '../../../common/interfaces';
import { BaseCommand } from './base';
export interface PasteHereCommandParams {
  models: NodeModel[];
}
declare const pasteHereCommand: BaseCommand<PasteHereCommandParams>;
export default pasteHereCommand;
