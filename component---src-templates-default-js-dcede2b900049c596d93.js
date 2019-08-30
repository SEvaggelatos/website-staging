(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,a,t){"use strict";t.r(a);t(149);var n=t(0),l=t.n(n),s=t(164),m=t(155),c=t(156),r=t(157),o=(t(74),t(75),t(77),t(7)),i=t.n(o),d=t(150),p=t(154),u=(t(188),t(145)),h=t(144),E=t(148),g=t(153),v=t.n(g),f=function(e){return v()({contact__actions__response:!0,expanded:e})},N=function(e){var a=e.loading,t=e.responseText,n=e.submitBtnTxt,s=t?E.q:n,m=a?l.a.createElement(d.a,{className:"contact__actions__spinner",icon:p.d}):s;return l.a.createElement("div",{className:"contact__actions"},l.a.createElement("div",{className:f(t)},t),l.a.createElement("button",{type:"submit",className:v()({"primary-btn":!0,contact__actions__spinner:!1}),disabled:a},m))},x=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleSubmit=function(e,a){if(e.preventDefault(),a)t.setState({responseText:""});else{var n=e.target,l=t.validateForm(n);if(l.length>0)t.setState({errors:l});else{t.setState({errors:[]});var s=new FormData(n);t.sendToEmailService(s)}}},t.handleChange=function(e){var a,n=e.target,l=n.name,s=n.value;t.state.form;t.setState(((a={})[l]=s,a))},t.state={name:"",company:"",job:"",email:"",message:"",errors:[],responseText:"",loading:!1},t}i()(a,e);var t=a.prototype;return t.validateForm=function(e){var a=[];return!e.name.value&&a.push(E.n),!e.company.value&&a.push(E.a),!e.email.value&&a.push(E.f),e.email.value&&!e.email.value.match(E.e)&&a.push(E.h),!e.message.value&&a.push(E.l),a},t.sendToEmailService=function(e){var a=this;this.setState({loading:!0}),fetch(E.j,{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:e}).then(function(e){a.resetFormAndSetResponse(E.d)}).catch(function(e){a.resetFormAndSetResponse(E.c)})},t.getContactFormClass=function(e){return v()({contact__form:!0,"contact__form--center":!e})},t.resetFormAndSetResponse=function(e){this.setState({responseText:e,loading:!1,name:"",email:"",message:"",company:"",job:""})},t.render=function(){var e=this,a=this.props,t=a.meta,n=t.heading,s=t.description,m=t.form,c=t.address,r=t.showAddress,o=a.elemId,i=this.state,u=i.name,h=i.email,g=i.job,v=i.company,f=i.message,x=i.errors,_=i.responseText,b=i.loading;return l.a.createElement("section",{id:o,className:"contact"},l.a.createElement("div",{className:"container"},n&&l.a.createElement("h2",{className:"contact__heading"},n),s&&l.a.createElement("p",{className:"contact__description"},s),l.a.createElement("div",{className:"row contact__wrapper"},l.a.createElement("div",{className:this.getContactFormClass(r)},m.title&&l.a.createElement("h4",{className:"pb-15"},m.title),l.a.createElement("form",{name:"contactForm",onSubmit:function(a){return e.handleSubmit(a,_)},noValidate:!0},l.a.createElement("div",{className:"mt-15"},l.a.createElement("input",{name:"name",type:"text",placeholder:m.namePlaceholder,maxLength:"120",className:"single-input",onChange:this.handleChange,value:u,required:!0}),x.includes(E.n)&&l.a.createElement("small",{className:"form-text text-danger"},E.o)),l.a.createElement("div",{className:"mt-15"},l.a.createElement("input",{name:"company",type:"text",placeholder:m.companyPlaceholder,maxLength:"120",className:"single-input",onChange:this.handleChange,value:v,required:!0}),x.includes(E.a)&&l.a.createElement("small",{className:"form-text text-danger"},E.b)),l.a.createElement("div",{className:"mt-15"},l.a.createElement("input",{name:"job",type:"text",placeholder:m.jobPlaceholder,maxLength:"120",className:"single-input",onChange:this.handleChange,value:g,required:!0})),l.a.createElement("div",{className:"mt-15"},l.a.createElement("input",{type:"email",name:"email",placeholder:m.emailPlaceholder,maxLength:"120",className:"single-input",onChange:this.handleChange,value:h,required:!0}),x.includes(E.f)&&l.a.createElement("small",{className:"form-text text-danger"},E.g),x.includes(E.h)&&l.a.createElement("small",{className:"form-text text-danger"},E.i)),l.a.createElement("div",{className:"mt-15 pb-25"},l.a.createElement("textarea",{name:"message",placeholder:m.messagePlaceholder,maxLength:"1000",rows:"5",className:"single-textarea",onChange:this.handleChange,value:f,required:!0}),x.includes(E.l)&&l.a.createElement("small",{className:"form-text text-danger"},E.m)),l.a.createElement(N,{loading:b,responseText:_,submitBtnTxt:m.submitBtnTxt}),l.a.createElement("input",{name:"_formsubmit_id",type:"text",style:{display:"none"}}))),r&&l.a.createElement("div",{className:"contact__address"},c.title&&l.a.createElement("h4",{className:"pb-15"},c.title),l.a.createElement("div",{className:"d-flex pt-15"},l.a.createElement("div",{className:"contact__address__icon"},l.a.createElement(d.a,{icon:p.c})),l.a.createElement("div",{className:"pl-30"},l.a.createElement("div",{className:"pb-10"},c.line1),l.a.createElement("div",{className:"pb-10"},c.line2),l.a.createElement("div",{className:"pb-10"},c.country))),l.a.createElement("div",{className:"d-flex pt-15"},l.a.createElement("div",{className:"contact__address__icon"},l.a.createElement(d.a,{icon:p.a})),l.a.createElement("div",{className:"pl-30"},c.email))))))},a}(l.a.Component),_=Object(u.a)(Object(h.a)(x)),b=t(158),y=t(159),C=t(160),S=t(161),w=t(162),k=t(163);a.default=function(e){var a=e.pageContext.components;return l.a.createElement(s.a,null,a.map(function(e,a){var t=e.name.toLowerCase();return function(e,a,t){var n;return(n={}).banner=l.a.createElement(m.a,{meta:e,elemId:a,key:t}),n.grid=l.a.createElement(c.a,{meta:e,elemId:a,key:t}),n.calltoaction=l.a.createElement(r.a,{meta:e,elemId:a,key:t}),n.contact=l.a.createElement(_,{meta:e,elemId:a,key:t}),n.imagetext=l.a.createElement(b.a,{meta:e,elemId:a,key:t}),n.cards=l.a.createElement(y.a,{meta:e,elemId:a,key:t}),n.hero=l.a.createElement(C.a,{meta:e,elemId:a,key:t}),n.pills=l.a.createElement(S.a,{meta:e,elemId:a,key:t}),n.quartet=l.a.createElement(w.a,{meta:e,elemId:a,key:t}),n.networkgraph=l.a.createElement(k.a,{meta:e,elemId:a,key:t}),n}(e,""+t+e.position,a)[t]}))}},188:function(e,a,t){}}]);
//# sourceMappingURL=component---src-templates-default-js-dcede2b900049c596d93.js.map