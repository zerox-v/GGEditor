import { BaseCommand } from '../../Graph/command/base';
export interface FoldCommandParams {
  id: string;
}
declare const foldCommand: BaseCommand<FoldCommandParams>;
export default foldCommand;
