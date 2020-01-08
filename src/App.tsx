import React, { useState } from 'react';
import './App.css';
import h from './createElement';
import { diff } from './diff';
import Tree from './components/Tree';

const App: React.FC = () => {

  const oldVNode = h('div', {
    id: 'root'
  }, [
    h('ul', {
      class: 'list'
    }, [
      h('li', { key: 1 }, '01'),
      h('li', { key: 2 }, '02'),
      h('li', { key: 3 }, '03'),
      h('li', { key: 4 }, '04'),
      h('li', { key: 5 }, '05')
    ]),
    h('div', {}, 'old')
  ])

  const newVNode = h('div', {
    id: 'root'
  }, [
    h('ul', {
      class: 'list'
    }, [
      h('li', { key: 5 }, '05'),
      h('li', { key: 2 }, '02'),
      h('li', { key: 3 }, '03'),
      h('li', { key: 4 }, '04'),
      h('li', { key: 1 }, '01')
    ]),
    h('div', {}, 'new')
  ])

  const snapshots = diff(oldVNode, newVNode)
  const [ state, setState ] = useState(oldVNode)

  return (
    <div className="App">
      <Tree data={state} />
    </div>
  );
}

export default App;