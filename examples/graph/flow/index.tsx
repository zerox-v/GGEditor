import React from 'react';
import GGEditor, { Flow } from 'gg-editor';
import styles from './index.less';

const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 50,
      y: 50,
      anchorPoints: [
        [0, 1],
        [0.5, 1],
      ],
    },
    {
      id: '1',
      label: 'Node',
      x: 50,
      y: 200,
    },
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      sourceAnchor: 1,
      target: '1',
      targetAnchor: 0,
    },
  ],
};

function App() {
  return (
    <GGEditor>
      <Flow className={styles.graph} data={data} />
    </GGEditor>
  );
}

export default App;
