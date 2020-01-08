import { VNode } from '../createElement';

const snapshots:VNode[] = []

export const diff = (oldVNode: VNode, newVNode: VNode): VNode[] => {
  return snapshots;
}
