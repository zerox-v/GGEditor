import React from 'react';
import GGEditor, { Flow } from 'gg-editor';
import WrappedClassComponent from './WrappedClassComponent';
import WrappedFunctionComponent from './WrappedFunctionComponent';
import styles from './index.less';
import { Button } from 'antd';
const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 50,
      y: 50,
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

const flowRef = React.createRef<Flow>();

function addStep() {
  const model = {
    label: '新步骤',
    x: 200,
    y: 150,
  };
  
  flowRef.current?.graph?.addItem('node', model);
}

function App() {

  return (
    <div>
      <div>
        <Button onClick={addStep} type="primary">添加步骤</Button>
      </div>
      <GGEditor>
        <Flow
          className={styles.graph}
          ref={flowRef}
          data={data}
        />
        <WrappedClassComponent
          ref={component => {
            console.log('wrappedClassComponentRef:', component);
          }}
        />
        <WrappedFunctionComponent
          ref={el => {
            console.log('wrappedFunctionComponentRef:', el);
          }}
        />
      </GGEditor>
    </div>

  );
}

export default App;
