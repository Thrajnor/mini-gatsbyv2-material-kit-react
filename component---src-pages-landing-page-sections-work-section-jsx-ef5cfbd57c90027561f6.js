(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{230:function(o,e,r){"use strict";r.r(e);var a=r(14),t=r.n(a),n=r(0),i=r.n(n),p=r(233),x=r.n(p),s=r(248),c=r(249),l=(r(69),r(10)),d=r.n(l),b=r(235),g=r.n(b),f=r(324),u=r.n(f),h=r(325),m=r.n(h),w=r(327),v=r.n(w),k=r(241),S={disabled:{"&:before":{borderColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderColor:"#D2D2D2 !important",borderWidth:"1px !important"},"&:after":{borderColor:k.k}},underlineError:{"&:after":{borderColor:k.d}},underlineSuccess:{"&:after":{borderColor:k.o}},whiteUnderline:{"&:hover:not($disabled):before,&:before":{borderColor:"#FFFFFF"},"&:after":{borderColor:"#FFFFFF"}},labelRoot:Object.assign({},k.e,{color:"#AAAAAA !important",fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",top:"10px","& + $underline":{marginTop:"0px"}}),labelRootError:{color:k.d+" !important"},labelRootSuccess:{color:k.o+" !important"},formControl:{margin:"0 0 17px 0",paddingTop:"27px",position:"relative","& svg,& .fab,& .far,& .fal,& .fas,& .material-icons":{color:"#495057"}},input:{color:"#495057","&,&::placeholder":{fontSize:"14px",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"400",lineHeight:"1.42857",opacity:"1"},"&::placeholder":{color:"#AAAAAA"}},whiteInput:{"&,&::placeholder":{color:"#FFFFFF",opacity:"1"}}};function C(o){var e,r,a,t,n,p=Object.assign({},o),x=p.classes,s=p.formControlProps,c=p.labelText,l=p.id,d=p.labelProps,b=p.inputProps,f=p.error,h=p.white,w=p.inputRootCustomClasses,k=p.success,S=g()(((e={})[" "+x.labelRootError]=f,e[" "+x.labelRootSuccess]=k&&!f,e)),C=g()(((r={})[x.underlineError]=f,r[x.underlineSuccess]=k&&!f,r[x.underline]=!0,r[x.whiteUnderline]=h,r)),F=g()(((a={})[w]=void 0!==w,a)),j=g()(((t={})[x.input]=!0,t[x.whiteInput]=h,t));return n=void 0!==s?g()(s.className,x.formControl):x.formControl,i.a.createElement(u.a,Object.assign({},s,{className:n}),void 0!==c?i.a.createElement(m.a,Object.assign({className:x.labelRoot+" "+S,htmlFor:l},d),c):null,i.a.createElement(v.a,Object.assign({classes:{input:j,root:F,disabled:x.disabled,underline:C},id:l},b)))}C.propTypes={classes:d.a.object.isRequired,labelText:d.a.node,labelProps:d.a.object,id:d.a.string,inputProps:d.a.object,formControlProps:d.a.object,inputRootCustomClasses:d.a.string,error:d.a.bool,success:d.a.bool,white:d.a.bool};var F=x()(S)(C),j=r(264),R=r(250),O={section:{padding:"70px 0"},title:Object.assign({},R.c,{marginBottom:"50px",marginTop:"30px",minHeight:"32px",textDecoration:"none",textAlign:"center"}),description:{color:"#999",textAlign:"center"},textCenter:{textAlign:"center"},textArea:{marginRight:"15px",marginLeft:"15px"}},W=function(o){function e(){return o.apply(this,arguments)||this}return t()(e,o),e.prototype.render=function(){var o=this.props.classes;return i.a.createElement("div",{className:o.section},i.a.createElement(s.a,{justify:"center"},i.a.createElement(c.a,{cs:12,sm:12,md:8},i.a.createElement("h2",{className:o.title},"Work with us"),i.a.createElement("h4",{className:o.description},"Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."),i.a.createElement("form",null,i.a.createElement(s.a,null,i.a.createElement(c.a,{xs:12,sm:12,md:6},i.a.createElement(F,{labelText:"Your Name",id:"name",formControlProps:{fullWidth:!0}})),i.a.createElement(c.a,{xs:12,sm:12,md:6},i.a.createElement(F,{labelText:"Your Email",id:"email",formControlProps:{fullWidth:!0}})),i.a.createElement(F,{labelText:"Your Message",id:"message",formControlProps:{fullWidth:!0,className:o.textArea},inputProps:{multiline:!0,rows:5}}),i.a.createElement(s.a,{justify:"center"},i.a.createElement(c.a,{xs:12,sm:12,md:4,className:o.textCenter},i.a.createElement(j.a,{color:"primary"},"Send Message"))))))))},e}(i.a.Component);e.default=x()(O)(W)},241:function(o,e,r){"use strict";r.d(e,"f",function(){return a}),r.d(e,"q",function(){return t}),r.d(e,"b",function(){return n}),r.d(e,"a",function(){return i}),r.d(e,"e",function(){return p}),r.d(e,"k",function(){return x}),r.d(e,"s",function(){return s}),r.d(e,"d",function(){return c}),r.d(e,"o",function(){return l}),r.d(e,"i",function(){return d}),r.d(e,"m",function(){return b}),r.d(e,"g",function(){return g}),r.d(e,"j",function(){return f}),r.d(e,"h",function(){return u}),r.d(e,"n",function(){return h}),r.d(e,"r",function(){return m}),r.d(e,"c",function(){return w}),r.d(e,"l",function(){return v}),r.d(e,"p",function(){return k}),r(69);var a=260,t={transition:"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"},n=Object.assign({},{paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"},{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),i={boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},p={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"},x="#9c27b0",s="#ff9800",c="#f44336",l="#4caf50",d="#00acc1",b="#e91e63",g="#999999",f={boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"},u={boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"},h={boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"},m={boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"},w={boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"},v={boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"},k=(Object.assign({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},m),Object.assign({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},h),Object.assign({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},w),Object.assign({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},u),Object.assign({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},f),Object.assign({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},v),Object.assign({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},p),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'});Object.assign({},k,{marginTop:".625rem"})},248:function(o,e,r){"use strict";var a=r(232),t=r.n(a),n=(r(69),r(0)),i=r.n(n),p=r(10),x=r.n(p),s=r(233),c=r.n(s),l=r(243),d=r.n(l);function b(o){var e=Object.assign({},o),r=e.classes,a=e.children,n=e.className,p=t()(e,["classes","children","className"]);return i.a.createElement(d.a,Object.assign({container:!0},p,{className:r.grid+" "+n}),a)}b.defaultProps={className:""},b.propTypes={classes:x.a.object.isRequired,children:x.a.node,className:x.a.string},e.a=c()({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}})(b)},249:function(o,e,r){"use strict";var a=r(232),t=r.n(a),n=(r(69),r(0)),i=r.n(n),p=r(233),x=r.n(p),s=r(243),c=r.n(s);e.a=x()({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}})(function(o){var e=Object.assign({},o),r=e.classes,a=e.children,n=e.className,p=t()(e,["classes","children","className"]);return i.a.createElement(c.a,Object.assign({item:!0},p,{className:r.grid+" "+n}),a)})},250:function(o,e,r){"use strict";r.d(e,"b",function(){return a}),r.d(e,"c",function(){return t}),r.d(e,"a",function(){return n}),r(69);var a=Object.assign({},{paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"},{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),t=(Object.assign({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},{boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},{boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},{boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},{boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},{boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},{boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"}),Object.assign({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'}),n=Object.assign({},t,{marginTop:".625rem"})},253:function(o,e,r){"use strict";var a=r(241),t={button:{minHeight:"auto",minWidth:"auto",backgroundColor:a.g,color:"#FFFFFF",boxShadow:"0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",border:"none",borderRadius:"3px",position:"relative",padding:"12px 30px",margin:".3125rem 1px",fontSize:"12px",fontWeight:"400",textTransform:"uppercase",letterSpacing:"0",willChange:"box-shadow, transform",transition:"box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",lineHeight:"1.42857143",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"middle",touchAction:"manipulation",cursor:"pointer","&:hover,&:focus":{color:"#FFFFFF",backgroundColor:a.g,boxShadow:"0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{position:"relative",display:"inline-block",top:"0",fontSize:"1.1rem",marginRight:"4px",verticalAlign:"middle"},"& svg":{position:"relative",display:"inline-block",top:"0",width:"18px",height:"18px",marginRight:"4px",verticalAlign:"middle"},"&$justIcon":{"& .fab,& .fas,& .far,& .fal,& .material-icons":{marginRight:"0px",position:"absolute",width:"100%",transform:"none",left:"0px",top:"0px",height:"100%",lineHeight:"41px",fontSize:"20px"}}},fullWidth:{width:"100%"},primary:{backgroundColor:a.k,boxShadow:"0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)","&:hover,&:focus":{backgroundColor:a.k,boxShadow:"0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"}},info:{backgroundColor:a.i,boxShadow:"0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)","&:hover,&:focus":{backgroundColor:a.i,boxShadow:"0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"}},success:{backgroundColor:a.o,boxShadow:"0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)","&:hover,&:focus":{backgroundColor:a.o,boxShadow:"0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"}},warning:{backgroundColor:a.s,boxShadow:"0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)","&:hover,&:focus":{backgroundColor:a.s,boxShadow:"0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"}},danger:{backgroundColor:a.d,boxShadow:"0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)","&:hover,&:focus":{backgroundColor:a.d,boxShadow:"0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"}},rose:{backgroundColor:a.m,boxShadow:"0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)","&:hover,&:focus":{backgroundColor:a.m,boxShadow:"0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"}},white:{"&,&:focus,&:hover,&:visited":{backgroundColor:"#FFFFFF",color:a.g}},twitter:{backgroundColor:"#55acee",color:"#fff",boxShadow:"0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)","&:hover,&:focus,&:visited":{backgroundColor:"#55acee",color:"#fff",boxShadow:"0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"}},facebook:{backgroundColor:"#3b5998",color:"#fff",boxShadow:"0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)","&:hover,&:focus":{backgroundColor:"#3b5998",color:"#fff",boxShadow:"0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"}},google:{backgroundColor:"#dd4b39",color:"#fff",boxShadow:"0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)","&:hover,&:focus":{backgroundColor:"#dd4b39",color:"#fff",boxShadow:"0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"}},github:{backgroundColor:"#333333",color:"#fff",boxShadow:"0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)","&:hover,&:focus":{backgroundColor:"#333333",color:"#fff",boxShadow:"0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"}},simple:{"&,&:focus,&:hover,&:visited":{color:"#FFFFFF",background:"transparent",boxShadow:"none"},"&$primary":{"&,&:focus,&:hover,&:visited":{color:a.k}},"&$info":{"&,&:focus,&:hover,&:visited":{color:a.i}},"&$success":{"&,&:focus,&:hover,&:visited":{color:a.o}},"&$warning":{"&,&:focus,&:hover,&:visited":{color:a.s}},"&$rose":{"&,&:focus,&:hover,&:visited":{color:a.m}},"&$danger":{"&,&:focus,&:hover,&:visited":{color:a.d}},"&$twitter":{"&,&:focus,&:hover,&:visited":{color:"#55acee"}},"&$facebook":{"&,&:focus,&:hover,&:visited":{color:"#3b5998"}},"&$google":{"&,&:focus,&:hover,&:visited":{color:"#dd4b39"}},"&$github":{"&,&:focus,&:hover,&:visited":{color:"#333333"}}},transparent:{"&,&:focus,&:hover,&:visited":{color:"inherit",background:"transparent",boxShadow:"none"}},disabled:{opacity:"0.65",pointerEvents:"none"},lg:{padding:"1.125rem 2.25rem",fontSize:"0.875rem",lineHeight:"1.333333",borderRadius:"0.2rem"},sm:{padding:"0.40625rem 1.25rem",fontSize:"0.6875rem",lineHeight:"1.5",borderRadius:"0.2rem"},round:{borderRadius:"30px"},block:{width:"100% !important"},link:{"&,&:hover,&:focus":{backgroundColor:"transparent",color:"#999999",boxShadow:"none"}},justIcon:{paddingLeft:"12px",paddingRight:"12px",fontSize:"20px",height:"41px",minWidth:"41px",width:"41px","& .fab,& .fas,& .far,& .fal,& svg,& .material-icons":{marginRight:"0px"},"&$lg":{height:"57px",minWidth:"57px",width:"57px",lineHeight:"56px","& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"32px",lineHeight:"56px"},"& svg":{width:"32px",height:"32px"}},"&$sm":{height:"30px",minWidth:"30px",width:"30px","& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"17px",lineHeight:"29px"},"& svg":{width:"17px",height:"17px"}}}};e.a=t},264:function(o,e,r){"use strict";r(281);var a=r(232),t=r.n(a),n=(r(69),r(0)),i=r.n(n),p=r(10),x=r.n(p),s=r(235),c=r.n(s),l=r(233),d=r.n(l),b=r(246),g=r.n(b),f=r(253);function u(o){var e,r=Object.assign({},o),a=r.classes,n=r.color,p=r.round,x=r.children,s=r.fullWidth,l=r.disabled,d=r.simple,b=r.size,f=r.block,u=r.link,h=r.justIcon,m=r.className,w=t()(r,["classes","color","round","children","fullWidth","disabled","simple","size","block","link","justIcon","className"]),v=c()(((e={})[a.button]=!0,e[a[b]]=b,e[a[n]]=n,e[a.round]=p,e[a.fullWidth]=s,e[a.disabled]=l,e[a.simple]=d,e[a.block]=f,e[a.link]=u,e[a.justIcon]=h,e[m]=m,e));return i.a.createElement(g.a,Object.assign({},w,{className:v}),x)}u.propTypes={classes:x.a.object.isRequired,color:x.a.oneOf(["primary","info","success","warning","danger","rose","white","facebook","twitter","google","github","transparent"]),size:x.a.oneOf(["sm","lg"]),simple:x.a.bool,round:x.a.bool,fullWidth:x.a.bool,disabled:x.a.bool,block:x.a.bool,link:x.a.bool,justIcon:x.a.bool},e.a=d()(f.a)(u)}}]);
//# sourceMappingURL=component---src-pages-landing-page-sections-work-section-jsx-ef5cfbd57c90027561f6.js.map