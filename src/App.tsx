import React, { useState } from 'react';
import './App.css';
import h from './createElement';
import { diff, snapshots } from './diff';
import Tree from './components/Tree';
import { simpleCloneDeepVNode } from './util';

export const oldVNode = h('div', {
  id: 'root'
}, [
  h('ul', {
    class: 'list'
  }, [
    h('li', { key: 1 }, []),
    h('li', { key: 2 }, []),
    h('li', { key: 3 }, []),
    h('li', { key: 4 }, []),
    h('li', { key: 5 }, []),
    h('li', { key: 6 }, [])
  ])
])

const newVNode = h('div', {
  id: 'root'
}, [
  h('ul', {
    class: 'list'
  }, [
    h('li', { key: 5 }, []),
    h('li', { key: 6 }, []),
    h('li', { key: 3 }, []),
    h('li', { key: 4 }, []),
    h('li', { key: 1 }, []),
    h('li', { key: 2 }, [])
  ])
])


const App: React.FC = () => {
  const [ vnode, setVNode ] = useState(simpleCloneDeepVNode(oldVNode));
  diff(newVNode, oldVNode);
  console.log(`snapshots:`, snapshots)
  return (
    <div className="App">
      <Tree data={vnode} />
    </div>
  );
}

export default App;