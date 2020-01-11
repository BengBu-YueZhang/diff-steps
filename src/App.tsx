import React, { useState } from 'react';
import './App.css';
import h from './createElement';
import { diff, snapshots } from './diff';
import { simpleCloneDeepVNode } from './util';
import Header from './components/Header';
import Main from './components/Main';
import Title from './components/Title';
import Describe from './components/Describe';
import Tree from './components/Tree';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: `40px 0`
    }
  }),
);

// <div class="root">
//  <nav class="nav">
//    <a href="/login" class="avtive"></a>
//  </nav>
//  <ul class="list">
//    <li key="1"></li>
//    <li key="2"></li>
//    <li key="3"></li>
//    <li key="4"></li>
//    <li key="5"></li>
//  </ul>
// </div>
export const oldVNode = h('div', {
  id: 'root'
}, [
  h('nav', {
    class: 'nav'
  }, [
    h('a', {
      href: '/login',
      class: 'active'
    }, [])
  ]),
  h('ul', {
    class: 'list'
  }, [
    h('li', { key: '1' }, []),
    h('li', { key: '2' }, []),
    h('li', { key: '3' }, []),
    h('li', { key: '4' }, []),
    h('li', { key: '5' }, [])
  ])
]);

const fixedOldVNode = simpleCloneDeepVNode(oldVNode);

// <div class="root">
//  <nav class="nav">
//    <a href="/login" class="nav-item"></a>
//    <a href="/home" class="avtive"></a>
//  </nav>
//  <ul class="list">
//    <li key="5"></li>
//    <li key="2"></li>
//    <li key="4"></li>
//    <li key="1"></li>
//    <li key="3"></li>
//  </ul>
// </div>
const newVNode = h('div', {
  id: 'root'
}, [
  h('nav', {
    class: 'nav'
  }, [
    h('a', {
      href: '/login',
      class: 'nav-item'
    }, []),
    h('a', {
      href: '/home',
      class: 'active'
    }, [])
  ]),
  h('ul', {
    class: 'list'
  }, [
    h('li', { key: '5' }, []),
    h('li', { key: '2' }, []),
    h('li', { key: '4' }, []),
    h('li', { key: '1' }, []),
    h('li', { key: '3' }, [])
  ])
])

const fixedNewVNode = simpleCloneDeepVNode(newVNode);

let snapshotIndex = 0

const App: React.FC = () => {
  const [ vnode, setVNode ] = useState(simpleCloneDeepVNode(oldVNode));
  const [ describe, setDescribe ] = useState('');
  const classes = useStyles();

  diff(newVNode, oldVNode);

  const handleNextSnapshot = () => {
    if (snapshotIndex >= snapshots.length) {
      return setDescribe('')
    }
    const { describe, vnode } = snapshots[snapshotIndex]
    setDescribe(describe);
    setVNode(vnode)
    snapshotIndex += 1
  }

  return (
    <div className="App">
      <Header/>
      <Main>
        <Title>什么是 Diff Steps</Title>
        <Describe>
          DiffSteps，是一个将diff算法的更新过程，拆解为可逐步展示的小工具。
        </Describe>
        <Describe>
          事情的起因是这样的。之前12月参加了一场面试。面试官问我，当一个由数组的渲染的列表，当数组的首尾颠倒，真实DOM是如何变化的？我当时回答的不是特别好，所以后来专门上网研究了一下。
        </Describe>
        <Describe>
          网上有许多介绍diff算法的文章，但是一大坨文字配上大量源码，让人实在没有看下去的欲望。于是乎，我做了这个小工具，希望大家可以轻松了解Diff更新的过程。
        </Describe>
        <Title>旧节点</Title>
        <img src="https://i.loli.net/2020/01/11/53NCti9PXRSQ6VY.png"/>
        <Title>新节点</Title>
        <img src="https://i.loli.net/2020/01/11/B94ixrqkUNDAY2u.png"/>
        <Title>Steps</Title>
        <Button
          onClick={handleNextSnapshot}
          size="large"
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
        >
          下 一 步 { describe ? `（${describe}）` : '' }
        </Button>
        <Tree data={vnode}/>
      </Main>
    </div>
  );
}

export default App;