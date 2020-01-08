import React from 'react';
import { VNode, LightType } from '../../createElement';
import { isArray } from '../../util';
import './styles.css';

export interface ITree {
  data: VNode;
}

const Tree: React.FC<ITree> = (params) => {
  
  const {
    data: {
      type,
      props,
      children,
      light = LightType.DEFAULT
    }
  } = params;

  const keys = Object.keys(props!)

  return (
    <div>
      <div className="tree-node" style={{
        backgroundColor: light
      }}>
        <div className="tree-node-type">
          <p>{ type }</p>
        </div>
        <div className="tree-node-props">
          {
            keys && keys.map(key => (
              <p>{ key }: { props[key] }</p>
            ))
          }
          { !isArray(children) && <p>innerHTML: {children}</p> }
        </div>
      </div>
      <div className="tree-node-children">
        {
          isArray(children) && children.map(child => <Tree data={child}/>)
        }
      </div>
    </div>
    
  )
}

export default Tree
