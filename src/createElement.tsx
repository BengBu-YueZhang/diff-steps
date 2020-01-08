export type VNodeType = string;

export type VNodeChildren = VNode[] | string | null;

export type VNodeProps = Data;

export enum LightType {
  ADD = '#4baf50',
  CHANGE = '#2196f3',
  DELETE = '#f44335',
  DEFAULT = '#fe4081'
}

export interface Data {
  [key: string]: any;
}

export interface VNode {
  type: VNodeType;
  props: VNodeProps;
  children: VNodeChildren;
  light?: LightType;
}

const h = (
  type: VNodeType,
  props: VNodeProps,
  children: VNodeChildren
): VNode => {
  return {
    type,
    props,
    children
  }
}

export default h
