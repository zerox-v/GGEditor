import { TreeGraph, MindData } from '../../../common/interfaces';
import { BaseCommand } from '../../Graph/command/base';
export interface SubtopicCommandParams {
  id: string;
  model: MindData;
}
declare const subtopicCommand: BaseCommand<SubtopicCommandParams, TreeGraph>;
export default subtopicCommand;
