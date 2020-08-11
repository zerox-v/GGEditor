declare const _default: {
  topic: import('../../Graph/command/base').BaseCommand<
    import('./topic').TopicCommandParams,
    import('../../../common/interfaces').TreeGraph
  >;
  subtopic: import('../../Graph/command/base').BaseCommand<
    import('./subtopic').SubtopicCommandParams,
    import('../../../common/interfaces').TreeGraph
  >;
  fold: import('../../Graph/command/base').BaseCommand<
    import('./fold').FoldCommandParams,
    import('../../../common/interfaces').Graph
  >;
  unfold: import('../../Graph/command/base').BaseCommand<
    import('./unfold').UnfoldCommandParams,
    import('../../../common/interfaces').Graph
  >;
};
export default _default;
