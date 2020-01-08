import { VNode, VNodeProps, LightType } from '../createElement';
import { simpleCloneDeepVNode } from '../util';
import { oldVNode as rootVNode } from '../App'; 

export interface ISnapshot {
  describe: string;
  vnode: VNode;
}

const snapshots:ISnapshot[] = []

const setProperty = (vnode: VNode, key: string, value: any, oldValue?: any) => {
  if (value === null || value === false) {
    vnode.light = LightType.DELETE;
    snapshots.push({
      describe: `删除属性${key}`,
      vnode: simpleCloneDeepVNode(rootVNode)
    });
    delete vnode.props[key];
    delete vnode.light
  } else {
    vnode.props[key] = value;
    vnode.light = LightType.CHANGE;
    snapshots.push({
      describe: `修改属性${key}, 由${oldValue}到${value}`,
      vnode: simpleCloneDeepVNode(rootVNode)
    });
  }
}

const toChildArray = () => {
}

export const diffElementNodes = (newVNode: VNode, oldVNode: VNode) => {
  const newProps = newVNode.props;
  const oldProps = oldVNode.props;
  diffProps(oldVNode, newProps, oldProps);
  diffChildren(newVNode, oldVNode);
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
  let oldChildrenLength = oldChildren!.length;
}

export const diff = (newVNode: VNode, oldVNode: VNode): ISnapshot[] => {
  diffElementNodes(newVNode, oldVNode);
  return snapshots;
}
