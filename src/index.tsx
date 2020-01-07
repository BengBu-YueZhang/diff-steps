import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// target
// 1. 基于DOM的tree（使用canvas计算坐标太复杂，放弃）
// 2. 保存diff过程中的每一个快照（在快照上给发生变化的元素添加一个高亮的标记）到数组中
// 3. 将快照依次播放展现

// todo
// 1. 添加动画效果 https://github.com/googlearchive/flipjs

ReactDOM.render(<App />, document.getElementById('root'));
