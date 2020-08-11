import { TreeGraph, MindData } from '../../../common/interfaces';
import { BaseCommand } from '../../Graph/command/base';
export interface TopicCommandParams {
  id: string;
  model: MindData;
}
export declare const topicCommand: BaseCommand<TopicCommandParams, TreeGraph>;
export default topicCommand;
