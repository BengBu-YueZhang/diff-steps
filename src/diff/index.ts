import { VNode, VNodeProps } from '../createElement';
import { simpleCloneDeepVNode } from '../util';
import { oldVNode as rootVNode } from '../App'; 

const createEmptyVNode = () => {
  return {
    props: {},
    children: []
  }
}

const appendChild = (parant: VNode, vnode: VNode) => {
  let isNew = -1;
  for (let i = 0; i < parant.children.length; i++) {
    const childVNode = parant.children[i];
    if (childVNode === vnode) {
      isNew = i
      break
    }
  }
  if (isNew === -1) {
    parant.children.push(vnode);
    snapshots.push({
      describe: `使用appendChild方法, 向${parant.type}的子节点列表的末尾，添加新的子节点${vnode.type}`,
      vnode: simpleCloneDeepVNode(rootVNode)
    });
  } else {
    parant.children.splice(isNew, 1);
    parant.children.push(vnode);
    snapshots.push({
      describe: `使用appendChild方法, 移动${vnode.type}节点的位置，移动到当前子节点列表的末尾`,
      vnode: simpleCloneDeepVNode(rootVNode)
    });
  }
}

const insertBefore = (parant: VNode, newVNode: VNode, referenceVNode: VNode) => {
  let isNew = -1;
  let reference = -1
  for (let i = 0; i < parant.children.length; i++) {
    const childVNode = parant.children[i];
    if (childVNode === newVNode) {
      isNew = i
    }
    if (childVNode === referenceVNode) {
      reference = i
    }
  }
  if (reference === -1) {
    parant.children.push(newVNode);
    snapshots.push({
      describe: `使用insertBefore方法, 添加节点${newVNode.type}，添加到当前子节点列表的末尾`,
      vnode: simpleCloneDeepVNode(rootVNode)
    });
    return
  }
  if (isNew === -1) {
    parant.children.splice(reference, 0, newVNode)
    snapshots.push({
      describe: `使用insertBefore方法, 添加节点${newVNode.type}，添加到当前列表索引${reference}之前`,
      vnode: simpleCloneDeepVNode(rootVNode)
    });
  } else {
    parant.children.splice(reference, 0, newVNode);
    for (let i = 0; i < parant.children.length; i++) {
      const childVNode = parant.children[i];
      if (childVNode === newVNode && i !== reference) {
        parant.children.splice(i, 1);
        break;
      }
    }
    snapshots.push({
      describe: `使用insertBefore方法, 移动${newVNode.type}节点的位置，移动到当前列表索引${reference}之前`,
      vnode: simpleCloneDeepVNode(rootVNode)
    });
  }
}

const getNextBrother = (parant: VNode, vnode: VNode): VNode | null => {
  for (let i = 0; i < parant.children.length; i++) {
    const childVNode = parant.children[i];
    if (
      childVNode === vnode &&
      i < parant.children.length - 1
    ) {
      return parant.children[i + 1]
    }
  }
  return null;
}

const unmount = (parant: VNode) => {
  for (let i = 0; i < parant.children.length; i++) {
    const childVNode = parant.children[i];
    if (
      (childVNode as any).reuse === false
    ) {
      parant.children.splice(i, 1);
      i--;
      snapshots.push({
        describe: `删除节点${childVNode.type}`,
        vnode: simpleCloneDeepVNode(rootVNode)
      });
    }
  }
}

export interface ISnapshot {
  describe: string;
  vnode: VNode;
}

export const snapshots:ISnapshot[] = []

const setProperty = (vnode: VNode, key: string, value: any, oldValue?: any) => {
  if (value === null || value === false) {
    delete vnode.props[key];
    delete vnode.light
    snapshots.push({
      describe: `删除${vnode.type}节点的属性${key}`,
      vnode: simpleCloneDeepVNode(rootVNode)
    });
  } else {
    vnode.props[key] = value;
    snapshots.push({
      describe: `
        ${oldValue == undefined ? '添加' : '修改'}${vnode.type}节点的属性${key}, 由${oldValue}到${value}
      `,
      vnode: simpleCloneDeepVNode(rootVNode)
    });
  }
}

export const diffElementNodes = (newVNode: VNode, oldVNode: VNode): VNode => {
  const newProps = newVNode.props;
  const oldProps = oldVNode.props || {};
  if (oldVNode.type == undefined) {
    oldVNode.type = newVNode.type;
    snapshots.push({
      describe: `创建${newVNode.type}类型节点`,
      vnode: simpleCloneDeepVNode(rootVNode)
    });
  }
  diffProps(oldVNode, newProps, oldProps);
  diffChildren(newVNode, oldVNode);
  return oldVNode;
}

export const diffProps = (vnode: VNode, newProps: VNodeProps, oldProps: VNodeProps) => {
  for (let key in oldProps) {
    if (!(key in newProps)) {
      setProperty(vnode, key, null)
    }
  }
  for (let key in newProps) {
    if (newProps[key] !== oldProps[key]) {
      setProperty(vnode, key, newProps[key], oldProps[key])
    }
  }
}

export const diffChildren = (newParentVNode: VNode, oldParentVNode: VNode) => {
  let oldChildren = oldParentVNode.children;
  let newChildren = newParentVNode.children;
  for (let i = 0; i < oldChildren.length; i++) {
    (oldChildren[i] as any).reuse = false
  }
  let firstOldVNode = oldChildren.length ? oldChildren[0] : null
  for (let i = 0; i < newChildren.length; i++) {
    let childVNode = newChildren[i];
    let oldVNode;
    if (childVNode != null) {
      oldVNode = oldChildren[i];
      if (
        oldVNode &&
        oldVNode.props.key === childVNode.props.key &&
        oldVNode.type === childVNode.type
      ) {
        (oldChildren[i] as any).reuse = true
      } else {
        for (let j = 0; j < oldChildren.length; j++) {
          oldVNode = oldChildren[j];
          if (
            oldVNode &&
            oldVNode.props.key === childVNode.props.key &&
            oldVNode.type === childVNode.type &&
            !(oldVNode as any).reuse
          ) {
            (oldChildren[j] as any).reuse = true
            break
          }
          oldVNode = null;
        }
      }
      const EMPTY_OBJ = createEmptyVNode();
      oldVNode = oldVNode || EMPTY_OBJ;
      let vnode = diff(childVNode, oldVNode as any);
      if (vnode != firstOldVNode) {
        outer: if (
          firstOldVNode == null ||
          vnode === EMPTY_OBJ as any
        ) {
          appendChild(oldParentVNode, vnode)
        } else {
          let sibVNode = firstOldVNode as any;
          sibVNode = getNextBrother(oldParentVNode, sibVNode as any)
          for (let j = 0; j < oldChildren.length && sibVNode; j+=2) {
            if (sibVNode === vnode) {
              break outer;
            }
            sibVNode = getNextBrother(oldParentVNode, sibVNode as any)
          }
          insertBefore(oldParentVNode, vnode, firstOldVNode)
        }
      }
      firstOldVNode = getNextBrother(oldParentVNode, vnode)
    }
  }
  unmount(oldParentVNode);
}

export const diff = (newVNode: VNode, oldVNode: VNode): VNode => {
  return diffElementNodes(newVNode, oldVNode);
}
