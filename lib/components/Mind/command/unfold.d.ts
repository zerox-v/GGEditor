import { BaseCommand } from '../../Graph/command/base';
export interface UnfoldCommandParams {
  id: string;
}
declare const unfoldCommand: BaseCommand<UnfoldCommandParams>;
export default unfoldCommand;
