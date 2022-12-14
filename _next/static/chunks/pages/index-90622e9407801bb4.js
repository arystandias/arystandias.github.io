(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(3619)}])},3619:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return q}});var r=o(5893),i=o(7294),s=o(3366),n=o(7462),l=o(4780),g=o(6010),a=o(1719),c=o(8884),p=o(1588),m=o(4867);function u(t){return(0,m.Z)("MuiImageList",t)}(0,p.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);let d=i.createContext({}),y=["children","className","cols","component","rowHeight","gap","style","variant"],h=t=>{let{classes:e,variant:o}=t;return(0,l.Z)({root:["root",o]},u,e)},f=(0,a.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver(t,e){let{ownerState:o}=t;return[e.root,e[o.variant]]}})(({ownerState:t})=>(0,n.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===t.variant&&{display:"block"})),w=i.forwardRef(function(t,e){let o=(0,c.Z)({props:t,name:"MuiImageList"}),{children:l,className:a,cols:p=2,component:m="ul",rowHeight:u="auto",gap:w=4,style:v,variant:b="standard"}=o,S=(0,s.Z)(o,y),Z=i.useMemo(()=>({rowHeight:u,gap:w,variant:b}),[u,w,b]);i.useEffect(()=>{},[]);let _="masonry"===b?(0,n.Z)({columnCount:p,columnGap:w},v):(0,n.Z)({gridTemplateColumns:`repeat(${p}, 1fr)`,gap:w},v),j=(0,n.Z)({},o,{component:m,gap:w,rowHeight:u,variant:b}),k=h(j);return(0,r.jsx)(f,(0,n.Z)({as:m,className:(0,g.Z)(k.root,k[b],a),ref:e,style:_,ownerState:j},S,{children:(0,r.jsx)(d.Provider,{value:Z,children:l})}))});o(9864);var v=o(7335);function b(t){return(0,m.Z)("MuiImageListItem",t)}let S=(0,p.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),Z=["children","className","cols","component","rows","style"],_=t=>{let{classes:e,variant:o}=t;return(0,l.Z)({root:["root",o],img:["img"]},b,e)},j=(0,a.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver(t,e){let{ownerState:o}=t;return[{[`& .${S.img}`]:e.img},e.root,e[o.variant]]}})(({ownerState:t})=>(0,n.Z)({display:"block",position:"relative"},"standard"===t.variant&&{display:"flex",flexDirection:"column"},"woven"===t.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${S.img}`]:(0,n.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===t.variant&&{height:"auto",flexGrow:1})})),k=i.forwardRef(function(t,e){let o=(0,c.Z)({props:t,name:"MuiImageListItem"}),{children:l,className:a,cols:p=1,component:m="li",rows:u=1,style:y}=o,h=(0,s.Z)(o,Z),{rowHeight:f="auto",gap:w,variant:b}=i.useContext(d),S="auto";"woven"===b?S=void 0:"auto"!==f&&(S=f*u+w*(u-1));let k=(0,n.Z)({},o,{cols:p,component:m,gap:w,rowHeight:f,rows:u,variant:b}),x=_(k);return(0,r.jsx)(j,(0,n.Z)({as:m,className:(0,g.Z)(x.root,x[b],a),ref:e,style:(0,n.Z)({height:S,gridColumnEnd:"masonry"!==b?`span ${p}`:void 0,gridRowEnd:"masonry"!==b?`span ${u}`:void 0,marginBottom:"masonry"===b?w:void 0},y),ownerState:k},h,{children:i.Children.map(l,t=>i.isValidElement(t)?"img"===t.type||(0,v.Z)(t,["Image"])?i.cloneElement(t,{className:(0,g.Z)(x.img,t.props.className)}):t:null)}))});var x=o(1163),E=o(2097),L=o(1664),I=o.n(L),M=o(1225);function N(){(0,x.useRouter)();let t=(0,E.Z)(),e=function(){let[t,e]=(0,i.useState)({width:0,height:0});return(0,i.useEffect)(()=>{function t(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),t}(),[o,s]=(0,i.useState)(-1),n=(0,M.Z)(t.breakpoints.between("sm","md"));return(0,i.useEffect)(()=>{n?console.log("tablet"):console.log("desktop")},[n]),(0,r.jsx)(w,{cols:6,rowHeight:e.height/3-20,sx:{overflow:"hidden",mt:t.spacing(3),mb:t.spacing(3)},children:R.map((t,e)=>(0,r.jsx)(I(),{href:t.route,children:(0,r.jsx)(k,{style:{cursor:"pointer",opacity:e===o?1:.8},onMouseOver(t){s(e)},children:(0,r.jsx)("img",{src:t.img,srcSet:t.img,alt:t.title,loading:"lazy",width:"auto",height:"auto"})},t.img)},e))})}let R=[{title:"JavaScript",route:"/category/javascript",img:"/posts/javascript/logo.png"},{title:"TypeScript",route:"/category/typescript",img:"posts/typescript/logo.png"},{title:"Docker",route:"/category/docker",img:"/posts/docker/logo.png"},{title:"Bash",route:"/category/bash/",img:"/posts/bash/logo.png"},{title:"MySQL",route:"/category/mysql",img:"/posts/mysql/logo.png"},{title:"React",route:"/category/react",img:"/posts/react/logo.png"},{title:"php",route:"/category/php",img:"/posts/php/logo.png"},{title:"kubernetes",route:"/posts/kubernetes",img:"/posts/kubernetes/logo.png"},{img:"/posts/c_sharp/logo.png",title:"c#",route:"/category/c_sharp"},{title:"node_js",route:"/category/node_js",img:"/posts/node_js/logo.png"},{title:"yii",route:"/category/yii",img:"/posts/yii/logo.png"},{img:"/posts/golang/logo.png",title:"golang",route:"/category/golang/logo.png"},{img:"/posts/html5/logo.png",title:"html5",route:"/category/html5"},{img:"/posts/redis/logo.png",title:"redis",route:"/category/redis"},{title:"google",route:"/category/google",img:"/posts/google/logo.png"},{img:"/posts/html5/logo.png",title:"html5",route:"/category/html5"},{img:"/posts/redis/logo.png",title:"redis",route:"/category/redis"},{title:"1C",route:"/category/1c",img:"/posts/1c/logo.png"}];function C(){(0,x.useRouter)(),(0,E.Z)(),function(){let[t,e]=(0,i.useState)({width:0,height:0});(0,i.useEffect)(()=>{function t(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[])}();let[t,e]=(0,i.useState)(-1);return(0,r.jsx)(w,{cols:2,sx:{overflow:"hidden",mt:0},children:z.map((o,i)=>(0,r.jsx)(I(),{href:o.route,children:(0,r.jsx)(k,{style:{cursor:"pointer",opacity:i===t?1:.9},onMouseOver(t){e(i)},children:(0,r.jsx)("img",{src:o.img,srcSet:o.img,alt:o.title,loading:"lazy",width:"auto",height:"auto"})},o.img)},i))})}let z=[{title:"JavaScript",route:"/category/javascript",img:"/posts/javascript/logo.png"},{title:"TypeScript",route:"/category/typescript",img:"posts/typescript/logo.png"},{title:"Docker",route:"/category/docker",img:"/posts/docker/logo.png"},{title:"Bash",route:"/category/bash/",img:"/posts/bash/logo.png"},{title:"MySQL",route:"/category/mysql",img:"/posts/mysql/logo.png"},{title:"React",route:"/category/react",img:"/posts/react/logo.png"},{title:"php",route:"/category/php",img:"/posts/php/logo.png"},{title:"kubernetes",route:"/posts/kubernetes",img:"/posts/kubernetes/logo.png"},{img:"/posts/c_sharp/logo.png",title:"c#",route:"/category/c_sharp"},{title:"node_js",route:"/category/node_js",img:"/posts/node_js/logo.png"},{title:"yii",route:"/category/yii",img:"/posts/yii/logo.png"},{img:"/posts/golang/logo.png",title:"golang",route:"/category/golang/logo.png"},{img:"/posts/html5/logo.png",title:"html5",route:"/category/html5"},{img:"/posts/redis/logo.png",title:"redis",route:"/category/redis"},{title:"google",route:"/category/google",img:"/posts/google/logo.png"},{img:"/posts/html5/logo.png",title:"html5",route:"/category/html5"},{img:"/posts/redis/logo.png",title:"redis",route:"/category/redis"},{title:"1C",route:"/category/1c",img:"/posts/1c/logo.png"}];function q(){let t=(0,E.Z)(),e=(0,M.Z)(t.breakpoints.down("lg"));return e?(0,r.jsx)(C,{}):(0,r.jsx)(N,{})}},9921:function(t,e){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},9864:function(t,e,o){"use strict";o(9921)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);