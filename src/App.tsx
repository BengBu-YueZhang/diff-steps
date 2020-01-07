import React, { useState } from 'react';
import './App.css';
import h from './createElement';
import { diff } from './diff';
import Tree from './components/Tree';

const App: React.FC = () => {

  const oldVNode = h('div', {
    id: 'root'
  }, [
    h('div', {
      class: 'list'
    }, [
      h('div', { key: 1 }, '01'),
      h('div', { key: 2 }, '02'),
      h('div', { key: 3 }, '03'),
      h('div', { key: 4 }, '04'),
      h('div', { key: 5 }, '05')
    ]),
    h('div', null, 'old')
  ])

  const newVNode = h('div', {
    id: 'root'
  }, [
    h('div', {
      class: 'list'
    }, [
      h('div', { key: 5 }, '05'),
      h('div', { key: 2 }, '02'),
      h('div', { key: 3 }, '03'),
      h('div', { key: 4 }, '04'),
      h('div', { key: 1 }, '01')
    ]),
    h('div', null, 'new')
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