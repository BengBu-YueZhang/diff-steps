export type VNodeType = string

export type VNodeChildren = VNode[] | string | null

export type VNodeProps = Data | null

export interface Data {
  [key: string]: any
}

export interface VNode {
  type: VNodeType,
  props: VNodeProps,
  children: VNodeChildren
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
