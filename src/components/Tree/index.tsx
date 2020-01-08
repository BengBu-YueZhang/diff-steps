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
            keys && keys.map((key, index) => (
              <p key={index}>{ key }: { props[key] }</p>
            ))
          }
        </div>
      </div>
      <div className="tree-node-children">
        {
          isArray(children) && children.map((child, index) => 
            // TODO:
            <Tree key={index} data={child}/>
          )
        }
      </div>
    </div>
    
  )
}

export default Tree
