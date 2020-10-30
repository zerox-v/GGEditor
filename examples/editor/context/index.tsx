import React, { useState } from 'react';
import GGEditor, { Flow, ContextMenu } from 'gg-editor';
import WrappedClassComponent from './WrappedClassComponent';
import WrappedFunctionComponent from './WrappedFunctionComponent';
import styles from './index.less';
import { Button, Menu } from 'antd';

function App() {
  const flowRef = React.createRef<Flow>();
  const [flowData, setflowData] = useState({
    nodes: [],
    edges: [],
  });
  function addStep() {
    const model = {
      label: '新步骤',
      x: 200,
      y: 150,
    };
    flowRef.current?.graph?.addItem('node', model);
  }

  function deleteStep(item) {
    flowRef.current?.graph?.removeItem(item);
  }

  function getData() {
    console.log(flowRef.current?.graph?.save());
  }

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

  function getSyncData() {
    setflowData(data);
  }

  return (
    <div>
      <div>
        <Button onClick={addStep} type="primary">
          添加步骤
        </Button>
        <Button onClick={getData} type="primary">
          获取数据
        </Button>

        <Button onClick={getSyncData} type="primary">
          异步加载数据
        </Button>
      </div>
      <GGEditor>
        <Flow className={styles.graph} ref={flowRef} data={flowData} />
        <ContextMenu
          type="node"
          renderContent={(item, position, hide) => {
            console.log(item);
            const { x: left, y: top } = position;
            return (
              <div style={{ position: 'absolute', top, left }}>
                <Menu
                  mode="vertical"
                  selectable={false}
                  onClick={() => {
                    deleteStep(item);
                    hide();
                  }}
                >
                  <Menu.Item>复制</Menu.Item>
                  <Menu.Item>删除</Menu.Item>
                </Menu>
              </div>
            );
          }}
        />

        <ContextMenu
          type="edge"
          renderContent={(item, position, hide) => {
            console.log(item);
            const { x: left, y: top } = position;
            return (
              <div style={{ position: 'absolute', top, left }}>
                <Menu
                  mode="vertical"
                  selectable={false}
                  onClick={() => {
                    deleteStep(item);
                    hide();
                  }}
                >
                  <Menu.Item>删除</Menu.Item>
                </Menu>
              </div>
            );
          }}
        />
      </GGEditor>
    </div>
  );
}

export default App;
