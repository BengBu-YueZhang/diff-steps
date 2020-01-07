export type VNodeType = string;

export type VNodeChildren = VNode[] | string | null;

export type VNodeProps = Data | null;

export enum LightType {
  ADD = '#4baf50',
  CHANGE = '#2196f3',
  DELETE = '#fe4081',
  DEFAULT = '#f5f5f5'
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
