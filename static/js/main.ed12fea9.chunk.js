(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(18),i=n.n(r),a=n(8),o=n(9),s=n(11),u=n(10),l=n(14),d=n(2),j=function(t){return t.children},p=(n(25),n(26),n(0)),h=function(t){return Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(l.b,{to:"".concat(t.link),children:t.children})})},b=(n(36),function(){return Object(p.jsxs)("ul",{className:"nav-items",children:[Object(p.jsx)(h,{link:"/",children:"Shopping"}),Object(p.jsx)(h,{link:"/account",children:"Account"})]})}),O=function(){return Object(p.jsx)("header",{className:"navbar",children:Object(p.jsx)("nav",{children:Object(p.jsx)(b,{})})})},f=(n(37),function(t){return Object(p.jsxs)(j,{children:[Object(p.jsx)(O,{}),Object(p.jsx)("main",{className:"content",children:t.children})]})}),v=n(7),m=(n(38),function(t){return Object(p.jsx)("button",{className:"btn ".concat(t.btnType),onClick:t.click,children:t.children})}),x=(n(39),function(t){return Object(p.jsxs)("div",{className:"builder",children:[Object(p.jsx)("div",{children:t.title}),Object(p.jsx)(m,{btnType:"control-btn",click:t.add,children:"Add"}),Object(p.jsx)(m,{btnType:"control-btn",click:t.remove,children:"Remove"})]})}),y=(n(40),[{title:"Product1",type:"product1"},{title:"Product2",type:"product2"},{title:"Product3",type:"product3"},{title:"Product4",type:"product4"}]),k=function(t){return Object(p.jsxs)("div",{className:"controls",children:[Object(p.jsxs)("h1",{children:["Total Price: ",t.totalPrice]}),y.map((function(e){return Object(p.jsx)(x,{title:e.title,add:function(){return t.productAdd(e.type)},remove:function(){return t.productRemove(e.type)}},e.title)})),Object(p.jsx)(m,{btnType:"order-btn",click:t.order,children:"Order"})]})},g=(n(41),n(42),function(t){return t.show?Object(p.jsx)("div",{className:"backdrop",onClick:t.click}):null}),C=function(t){return Object(p.jsxs)(j,{children:[Object(p.jsx)(g,{show:t.show,click:t.modalClose}),Object(p.jsx)("div",{className:"modal",style:{transform:t.show?"translateY(0)":"translateY(-100vh)",opacity:t.show?"1":"0"},children:t.children})]})},P=function(t){var e=Object.keys(t.products).map((function(e){return Object(p.jsxs)("li",{children:[e,": ",t.products[e]]},e)}));return Object(p.jsxs)(j,{children:[Object(p.jsx)("h1",{children:"order list"}),Object(p.jsx)("ul",{children:e}),Object(p.jsxs)("p",{children:["Total Price : ",t.price]}),Object(p.jsx)("p",{children:"Continue?!"}),Object(p.jsx)(m,{btnType:"success",click:t.continue,children:"Yes"}),Object(p.jsx)(m,{btnType:"danger",click:t.cancel,children:"No"})]})},H={product1:50,product2:80,product3:30,product4:90},N=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={products:{product1:0,product2:0,product3:0,product4:0},totalPrice:0,purchased:!1,continue:!1},t.addProductHandler=function(e){var n=t.state.products[e]+1,c=Object(v.a)({},t.state.products);c[e]=n;var r=H[e],i=t.state.totalPrice+r;t.setState({products:c,totalPrice:i})},t.removeProductHandler=function(e){var n=t.state.products[e]-1,c=Object(v.a)({},t.state.products);c[e]=n;var r=H[e],i=t.state.totalPrice-r;t.setState({products:c,totalPrice:i})},t.purchasedHandler=function(){t.setState({purchased:!0})},t.modalCloseHandler=function(){t.setState({purchased:!1})},t.purchasedContinueHandler=function(){t.props.history.push("/checkout"),t.setState({continue:!0})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=Object(p.jsx)(P,{products:this.state.products,price:this.state.totalPrice,cancel:this.modalCloseHandler,continue:this.purchasedContinueHandler});return this.state.continue&&(t=Object(p.jsx)("h2",{style:{color:"darkgreen"},children:"order success!"})),Object(p.jsxs)(j,{children:[Object(p.jsx)(C,{show:this.state.purchased,modalClose:this.modalCloseHandler,children:t}),Object(p.jsx)(k,{productAdd:this.addProductHandler,productRemove:this.removeProductHandler,order:this.purchasedHandler,totalPrice:this.state.totalPrice})]})}}]),n}(c.Component),w=N,S=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h2",{children:"Checkout page"})})}}]),n}(c.Component),T=S,A=(n(43),n(44),function(t){var e=null,n=["input-element"];return t.invalid&&t.used&&n.push("invalid"),t.inputtype,e=Object(p.jsx)("input",Object(v.a)(Object(v.a)({className:n.join(" ")},t.elementConfig),{},{value:t.value,onChange:t.change})),Object(p.jsx)("div",{className:"input",children:e})}),q=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={form:{name:{inputtype:"input",elementConfig:{type:"text",placeholder:"Name..."},value:"",validation:{required:!0},valid:!1,used:!1},email:{inputtype:"input",elementConfig:{type:"text",placeholder:"Email..."},value:"",validation:{required:!0},valid:!1,used:!1},password:{inputtype:"input",elementConfig:{type:"password",placeholder:"Password..."},value:"",validation:{required:!0},valid:!1,used:!1}}},t.submitHandler=function(e){e.preventDefault();var n={};for(var c in t.state.form)n[c]=t.state.form[c].value;console.log(n)},t.checkValidation=function(t,e){var n=!1;return e.required&&(n=""!==t.trim()),n},t.inputChangeHandler=function(e,n){var c=Object(v.a)({},t.state.form),r=Object(v.a)({},c[n]);r.value=e.target.value,r.valid=t.checkValidation(r.value,r.validation),r.used=!0,c[n]=r,t.setState({form:c})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=[];for(var n in this.state.form)e.push({id:n,config:this.state.form[n]});return Object(p.jsxs)("div",{className:"account",children:[Object(p.jsx)("h2",{children:" Account "}),Object(p.jsxs)("form",{onSubmit:this.submitHandler,children:[e.map((function(e){return Object(p.jsx)(A,{inputtype:e.config.inputtype,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,used:e.config.used,change:function(n){return t.inputChangeHandler(n,e.id)}},e.id)})),Object(p.jsx)(m,{btnType:"order-btn",children:" Submit "})]})]})}}]),n}(c.Component),R=q,Y=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(l.a,{children:Object(p.jsx)(f,{children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{path:"/checkout",component:T}),Object(p.jsx)(d.a,{path:"/account",component:R}),Object(p.jsx)(d.a,{path:"/",exact:!0,component:w})]})})})}}]),n}(c.Component),E=Y;i.a.render(Object(p.jsx)(E,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.ed12fea9.chunk.js.map