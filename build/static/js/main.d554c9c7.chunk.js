(this["webpackJsonpdiff-steps"]=this["webpackJsonpdiff-steps"]||[]).push([[0],{23:function(e,n,t){e.exports=t(35)},28:function(e,n,t){},29:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var r,a=t(0),c=t.n(a),i=t(10),l=t.n(i),o=(t(28),t(18));t(29);!function(e){e.DEFAULT="#3e51b5"}(r||(r={}));var s=function(e,n,t){return{type:e,props:n,children:t}},u=function(e){return"[object Array]"===(n=e,Object.prototype.toString.call(n));var n},p=function(e){return JSON.parse(JSON.stringify(e))},d=function(e,n){for(var t=-1,r=0;r<e.children.length;r++){if(e.children[r]===n){t=r;break}}-1===t?(e.children.push(n),v.push({describe:"\u4f7f\u7528appendChild\u65b9\u6cd5, \u5411".concat(e.type,"\u7684\u5b50\u8282\u70b9\u5217\u8868\u7684\u672b\u5c3e\uff0c\u6dfb\u52a0\u65b0\u7684\u5b50\u8282\u70b9").concat(n.type),vnode:p(F)})):(e.children.splice(t,1),e.children.push(n),v.push({describe:"\u4f7f\u7528appendChild\u65b9\u6cd5, \u79fb\u52a8".concat(n.type,"\u8282\u70b9\u7684\u4f4d\u7f6e\uff0c\u79fb\u52a8\u5230\u5f53\u524d\u5b50\u8282\u70b9\u5217\u8868\u7684\u672b\u5c3e"),vnode:p(F)}))},f=function(e,n,t){for(var r=-1,a=-1,c=0;c<e.children.length;c++){var i=e.children[c];i===n&&(r=c),i===t&&(a=c)}if(-1===a)return e.children.push(n),void v.push({describe:"\u4f7f\u7528insertBefore\u65b9\u6cd5, \u6dfb\u52a0\u8282\u70b9".concat(n.type,"\uff0c\u6dfb\u52a0\u5230\u5f53\u524d\u5b50\u8282\u70b9\u5217\u8868\u7684\u672b\u5c3e"),vnode:p(F)});if(-1===r)e.children.splice(a,0,n),v.push({describe:"\u4f7f\u7528insertBefore\u65b9\u6cd5, \u6dfb\u52a0\u8282\u70b9".concat(n.type,"\uff0c\u6dfb\u52a0\u5230\u5f53\u524d\u5217\u8868\u7d22\u5f15").concat(a,"\u4e4b\u524d"),vnode:p(F)});else{e.children.splice(a,0,n);for(var l=0;l<e.children.length;l++){if(e.children[l]===n&&l!==a){e.children.splice(l,1);break}}v.push({describe:"\u4f7f\u7528insertBefore\u65b9\u6cd5, \u79fb\u52a8".concat(n.type,"\u8282\u70b9\u7684\u4f4d\u7f6e\uff0c\u79fb\u52a8\u5230\u5f53\u524d\u5217\u8868\u7d22\u5f15").concat(a,"\u4e4b\u524d"),vnode:p(F)})}},h=function(e,n){for(var t=0;t<e.children.length;t++){if(e.children[t]===n&&t<e.children.length-1)return e.children[t+1]}return null},v=[],m=function(e,n,t,r){null===t||!1===t?(delete e.props[n],delete e.light,v.push({describe:"\u5220\u9664".concat(e.type,"\u8282\u70b9\u7684\u5c5e\u6027").concat(n),vnode:p(F)})):(e.props[n]=t,v.push({describe:"\n        ".concat(void 0==r?"\u6dfb\u52a0":"\u4fee\u6539").concat(e.type,"\u8282\u70b9\u7684\u5c5e\u6027").concat(n,", \u7531").concat(r,"\u5230").concat(t,"\n      "),vnode:p(F)}))},y=function(e,n,t){for(var r in t)r in n||m(e,r,null);for(var a in n)n[a]!==t[a]&&m(e,a,n[a],t[a])},b=function(e,n){for(var t=n.children,r=e.children,a=0;a<t.length;a++)t[a].reuse=!1;for(var c=t.length?t[0]:null,i=0;i<r.length;i++){var l=r[i],o=void 0;if(null!=l){if((o=t[i])&&o.props.key===l.props.key&&o.type===l.type)t[i].reuse=!0;else for(var s=0;s<t.length;s++){if((o=t[s])&&o.props.key===l.props.key&&o.type===l.type&&!o.reuse){t[s].reuse=!0;break}o=null}var u={props:{},children:[]},m=E(l,o=o||u);if(m!=c)e:if(null==c||m===u)d(n,m);else{var y=c;y=h(n,y);for(var b=0;b<t.length&&y;b+=2){if(y===m)break e;y=h(n,y)}f(n,m,c)}c=h(n,m)}}!function(e){for(var n=0;n<e.children.length;n++){var t=e.children[n];!1===t.reuse&&(e.children.splice(n,1),n--,v.push({describe:"\u5220\u9664\u8282\u70b9".concat(t.type),vnode:p(F)}))}}(n)},E=function(e,n){return function(e,n){var t=e.props,r=n.props||{};return void 0==n.type&&(n.type=e.type,v.push({describe:"\u521b\u5efa".concat(e.type,"\u7c7b\u578b\u8282\u70b9"),vnode:p(F)})),y(n,t,r),b(e,n),n}(e,n)},g=t(52),k=t(57),O=t(58),j=t(54),N=t(55),x=Object(g.a)((function(){return Object(k.a)({header:{flexGrow:1},headerTitle:{flexGrow:1}})})),S=function(){var e=x();return c.a.createElement("div",{className:e.header},c.a.createElement(O.a,{position:"static"},c.a.createElement(j.a,null,c.a.createElement(N.a,{variant:"h6",className:e.headerTitle},"Diff Steps"))))},D=Object(g.a)((function(){return Object(k.a)({main:{margin:"40px auto",width:"100%",maxWidth:"960px"}})})),B=function(e){var n=e.children,t=D();return c.a.createElement("div",{className:t.main},n)},T=Object(g.a)((function(){return Object(k.a)({title:{fontSize:"33px",lineHeight:1.4,color:"#000",marginTop:"30px",marginBottom:"10px"}})})),w=function(e){var n=e.children,t=T();return c.a.createElement("h3",{className:t.title},n)},A=Object(g.a)((function(){return Object(k.a)({describe:{fontSize:"17px",lineHeight:"1.7",marginTop:"20px"}})})),C=function(e){var n=e.children,t=A();return c.a.createElement("p",{className:t.describe},n)},J=(t(34),function e(n){var t=n.data,a=t.type,i=t.props,l=t.children,o=t.light,s=void 0===o?r.DEFAULT:o,p=Object.keys(i);return c.a.createElement("div",null,c.a.createElement("div",{className:"tree-node",style:{backgroundColor:s}},c.a.createElement("div",{className:"tree-node-type"},c.a.createElement("p",null,a)),c.a.createElement("div",{className:"tree-node-props"},p&&p.map((function(e,n){return c.a.createElement("p",{key:n},e,": ",i[e])})))),c.a.createElement("div",{className:"tree-node-children"},u(l)&&l.map((function(n,t){return c.a.createElement(e,{key:t,data:n})}))))}),z=t(56),U=Object(g.a)((function(){return Object(k.a)({button:{margin:"30px 0"}})})),F=s("div",{id:"root"},[s("nav",{class:"nav"},[s("a",{href:"/login",class:"active"},[])]),s("ul",{class:"list"},[s("li",{key:"1"},[]),s("li",{key:"2"},[]),s("li",{key:"3"},[]),s("li",{key:"4"},[]),s("li",{key:"5"},[])])]),G=s("div",{id:"root"},[s("nav",{class:"nav"},[s("a",{href:"/login",class:"nav-item"},[]),s("a",{href:"/home",class:"active"},[])]),s("ul",{class:"list"},[s("li",{key:"5"},[]),s("li",{key:"2"},[]),s("li",{key:"4"},[]),s("li",{key:"1"},[]),s("li",{key:"3"},[])])]),H=0,L=function(){var e=Object(a.useState)(p(F)),n=Object(o.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),s=l[0],u=l[1],d=U();E(G,F);return c.a.createElement("div",{className:"App"},c.a.createElement(S,null),c.a.createElement(B,null,c.a.createElement(w,null,"\u4ec0\u4e48\u662f Diff Steps"),c.a.createElement(C,null,"DiffSteps\uff0c\u662f\u4e00\u4e2a\u5c06diff\u7b97\u6cd5\u7684\u66f4\u65b0\u8fc7\u7a0b\uff0c\u62c6\u89e3\u4e3a\u53ef\u9010\u6b65\u5c55\u793a\u7684\u5c0f\u5de5\u5177\u3002"),c.a.createElement(C,null,"\u4e8b\u60c5\u7684\u8d77\u56e0\u662f\u8fd9\u6837\u7684\u3002\u4e4b\u524d12\u6708\u53c2\u52a0\u4e86\u4e00\u573a\u9762\u8bd5\u3002\u9762\u8bd5\u5b98\u95ee\u6211\uff0c\u5f53\u4e00\u4e2a\u7531\u6570\u7ec4\u7684\u6e32\u67d3\u7684\u5217\u8868\uff0c\u5f53\u6570\u7ec4\u7684\u9996\u5c3e\u98a0\u5012\uff0cDOM\u662f\u5982\u4f55\u53d8\u5316\u7684\uff1f"),c.a.createElement(C,null,"\u6211\u5f53\u65f6\u56de\u7b54\u7684\u4e0d\u662f\u7279\u522b\u597d\uff0c\u6240\u4ee5\u540e\u6765\u4e13\u95e8\u4e0a\u7f51\u7814\u7a76\u4e86\u4e00\u4e0b\u3002"),c.a.createElement(C,null,"\u7f51\u4e0a\u6709\u8bb8\u591a\u4ecb\u7ecddiff\u7b97\u6cd5\u7684\u6587\u7ae0\uff0c\u4f46\u662f\u4e00\u5927\u5768\u6587\u5b57\u914d\u4e0a\u5927\u91cf\u6e90\u7801\uff0c\u8ba9\u4eba\u5b9e\u5728\u6ca1\u6709\u770b\u4e0b\u53bb\u7684\u6b32\u671b\u3002\u4e8e\u662f\u4e4e\uff0c\u6211\u505a\u4e86\u8fd9\u4e2a\u5c0f\u5de5\u5177\uff0c\u5e0c\u671b\u5927\u5bb6\u53ef\u4ee5\u8f7b\u677e\u4e86\u89e3Diff\u66f4\u65b0\u7684\u8fc7\u7a0b\u3002"),c.a.createElement(w,null,"\u65e7\u8282\u70b9"),c.a.createElement("img",{src:"https://i.loli.net/2020/01/11/53NCti9PXRSQ6VY.png"}),c.a.createElement(w,null,"\u65b0\u8282\u70b9"),c.a.createElement("img",{src:"https://i.loli.net/2020/01/11/B94ixrqkUNDAY2u.png"}),c.a.createElement(w,null,"\u53d8\u5316\u8fc7\u7a0b"),c.a.createElement(z.a,{onClick:function(){if(H>=v.length)return u("\u5b8c\u6210");var e=v[H],n=e.describe,t=e.vnode;u(n),r(t),H+=1},size:"large",variant:"contained",color:"primary",disableElevation:!0,className:d.button},"\u4e0b \u4e00 \u6b65"),s?"\uff08".concat(s,"\uff09"):"",c.a.createElement(J,{data:t})))};l.a.render(c.a.createElement(L,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.d554c9c7.chunk.js.map