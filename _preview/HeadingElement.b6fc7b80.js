import{m as k}from"./constants.8e39bf94.js";import{d as H,r as n,o as _,c as M,a as r,b as m,e as T,f as d,t as A,m as B,n as F}from"./entry.819ce933.js";import"./HLConst.18ce99b8.js";const L=["innerHTML"],R={key:1},j=H({__name:"HeadingElement",props:{item:{type:Object}},setup(i){var c;const e=i,o=n(),s=n((c=e.item)==null?void 0:c.label);_(()=>{o.value&&(o.value.innerHTML=s.value)});const t=n({color:"000000",size:"40",weight:"400",align:"left"}),C=M(()=>{var a,l,g,u,f,p,h,x,b,v,y,w,z,S;return(a=e==null?void 0:e.item)!=null&&a.bgColor?{color:"#"+(e.item.color||t.value.color),backgroundColor:"#"+e.item.bgColor,border:((l=e.item.border)==null?void 0:l.border)+"px "+((g=e.item.border)==null?void 0:g.type)+" #"+((u=e.item.border)==null?void 0:u.color),borderRadius:((f=e.item.border)==null?void 0:f.radius)+"px",fontFamily:"'"+e.item.fontFamily+"'",fontSize:(e.item.fontSize||t.value.size)+"px",fontWeight:e.item.weight||t.value.weight,textAlign:e.item.textAlign||t.value.align,padding:((p=e.item.padding)==null?void 0:p.top)+"px "+((h=e.item.padding)==null?void 0:h.right)+"px "+((x=e.item.padding)==null?void 0:x.bottom)+"px "+((b=e.item.padding)==null?void 0:b.left)+"px",boxShadow:((v=e.item.shadow)==null?void 0:v.horizontal)+"px "+((y=e.item.shadow)==null?void 0:y.vertical)+"px "+((w=e.item.shadow)==null?void 0:w.blur)+"px "+((z=e.item.shadow)==null?void 0:z.spread)+"px #"+((S=e.item.shadow)==null?void 0:S.color),lineHeight:"1.5"}:{color:"#"+(e.item.color||t.value.color),fontFamily:e.item.font||"inherit",fontSize:(e.item.size||t.value.size)+"px",fontWeight:e.item.weight||t.value.weight,textAlign:e.item.align||t.value.align,lineHeight:"1.2"}});return(a,l)=>(r(),m("div",{class:F([{"d-none":i.item.hidden},"form-builder--item heading-element"])},[T("div",{class:"text-element",style:B(d(C))},[i.item.bgColor?(r(),m("div",{key:0,innerHTML:d(s),ref_key:"textRenderer",ref:o},null,8,L)):(r(),m("div",R,A(d(k)(i.item.label)),1))],4)],2))}});export{j as default};
