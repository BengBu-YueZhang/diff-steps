export type VNodeType = string;

export type VNodeChildren = VNode[];

export type VNodeProps = Data;

export enum LightType {
  DEFAULT = '#3e51b5'
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
