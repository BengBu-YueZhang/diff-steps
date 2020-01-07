import React from 'react';
import './App.css';
import h from './createElement';
import { diff } from './diff';

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

  const snapshot = diff(oldVNode, newVNode)

  return (
    <div className="App">
    </div>
  );
}

export default App;