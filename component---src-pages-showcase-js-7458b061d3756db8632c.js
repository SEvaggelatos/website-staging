(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),c=a(171),i=a(154),s=a(161),l=a(167),m=a(165),o=a(159),u=a(169),d=a(150),g="Lorem ipsum dolor sit amet, utamur consetetur nam an, per et graece disputando, an probo copiosae mnesarchum eum. Te nominavi quaerendum vim, ullum dicit ea est. Ne vim natum meliore omnesque. Mundi ornatus habemus nam no, utinam essent option an has. Denique volutpat has cu. Ad sit inani exerci phaedrum.",f={heading:g.substring(0,11),btnTxt:g.substring(0,11),btnUrl:"#",description:g.substring(0,60),imagePosition:d.a,moreTxt:g.substring(0,11),headline:g.substring(0,30),image:"grid.jpg",html:"<p>"+g.substring(0,150)+"</p>",cards:[{industry:g.substring(0,11),heading:g.substring(0,60),description:g.substring(0,150),image:"",moreTxt:g.substring(0,11)},{industry:g.substring(0,11),heading:g.substring(0,60),description:g.substring(0,150),image:"",moreTxt:g.substring(0,11)},{industry:g.substring(0,11),heading:g.substring(0,60),description:g.substring(0,150),image:"",moreTxt:g.substring(0,11)}],tiles:[{html:"<p>"+g.substring(0,150)+"</p>",icon:"engineering.svg"},{html:"<p>"+g.substring(0,150)+"</p>",icon:"networking.svg"},{html:"<p>"+g.substring(0,150)+"</p>",icon:"iot.svg"},{html:"<p>"+g.substring(0,150)+"</p>",icon:"ml.svg"}]};t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{meta:Object.assign({},f,{name:"Banner"})}),r.a.createElement(l.a,{meta:Object.assign({},f,{name:"Cards"})}),r.a.createElement(s.a,{meta:Object.assign({},f,{name:"CallToAction"})}),r.a.createElement(o.a,{meta:Object.assign({},f,{name:"Grid"})}),r.a.createElement(u.a,{meta:Object.assign({},f,{name:"Hero"})}),r.a.createElement(m.a,{meta:Object.assign({},f,{name:"ImageText"})}))}},145:function(e,t,a){"use strict";a(151),a(74),a(76),a(77);var n=a(7),r=a.n(n),c=a(0),i=a.n(c),s=(a(156),a(150));t.a=function(e){return function(t){function a(e){return t.call(this,e)||this}return r()(a,t),a.prototype.render=function(){return this.props.location.search.includes(s.b)?i.a.createElement("div",{className:"showcase","data-name":this.props.meta.name},i.a.createElement(e,this.props)):i.a.createElement(e,this.props)},a}(i.a.Component)}},146:function(e,t,a){"use strict";a(32),a(74);var n=a(0),r=a.n(n),c=a(22),i=a(157),s=a.n(i);t.a=function(e){return function(t){return r.a.createElement(c.Location,null,function(a){var n=a.location,c=a.navigate;return r.a.createElement(e,Object.assign({},t,{location:n,navigate:c,search:n.search?s.a.parse(n.search):{}}))})}}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n="left",r="showcase"},151:function(e,t,a){var n=a(24).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(147),i=(a(155),a(145)),s=a(146);t.a=Object(s.a)(Object(i.a)(function(e){var t=e.meta,a=t.heading,n=t.html,i=t.btnTxt,s=t.btnUrl,l=e.elemId;return r.a.createElement("section",{className:"banner",id:l},r.a.createElement("div",{className:"banner__bg"},r.a.createElement("div",{className:"banner__bg__img"})),r.a.createElement("div",{className:"container fullscreen"},r.a.createElement("div",{className:"row fullscreen banner__wrapper"},r.a.createElement("div",{className:"banner__text col-lg-7"},r.a.createElement("h1",{className:"banner__text__heading"},a),r.a.createElement("div",{className:"banner__text__body",dangerouslySetInnerHTML:{__html:n}}),r.a.createElement(c.Link,{className:"primary-btn",to:s},i)))))}))},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){"use strict";var n=a(158),r=a(51);function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),a(decodeURIComponent(r),c,n)}),Object.keys(n).sort().reduce(function(e,t){var a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(a):e[t]=a,e},Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[c(t,e),"[",n,"]"].join(""):[c(t,e),"[",c(n,e),"]=",c(a,e)].join("")};case"bracket":return function(t,a){return null===a?c(t,e):[c(t,e),"[]=",c(a,e)].join("")};default:return function(t,a){return null===a?c(t,e):[c(t,e),"=",c(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map(function(n){var r=e[n];if(void 0===r)return"";if(null===r)return c(n,t);if(Array.isArray(r)){var i=[];return r.slice().forEach(function(e){void 0!==e&&i.push(a(n,e,i.length))}),i.join("&")}return c(n,t)+"="+c(r,t)}).filter(function(e){return e.length>0}).join("&"):""}},158:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(160),a(146)),i=a(145),s=function(e){var t=e.html,a=e.icon;return r.a.createElement("div",{className:"single-offer d-flex flex-row"},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"images/"+a,alt:""})),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))};t.a=Object(c.a)(Object(i.a)(function(e){var t=e.meta,a=t.heading,n=t.description,c=t.tiles,i=e.elemId;return r.a.createElement("section",{className:"grid section-gap",id:i},r.a.createElement("div",{className:"grid__content container"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"menu-content pb-60 col-lg-10"},r.a.createElement("div",{className:"title text-center"},r.a.createElement("h1",{className:"mb-10"},a),r.a.createElement("p",null,n)))),r.a.createElement("div",{className:"row flex-wrap"},c.map(function(e,t){return r.a.createElement(s,{html:e.html,icon:e.icon,key:t})}))))}))},160:function(e,t,a){},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(147),i=(a(162),a(146)),s=a(145);t.a=Object(i.a)(Object(s.a)(function(e){var t=e.meta,a=t.heading,n=t.html,i=t.btnTxt,s=t.image,l=e.elemId;return r.a.createElement("section",{id:l,className:"callto-action-area relative section-gap",style:{backgroundImage:"url(images/"+s+")"}},r.a.createElement("div",{className:"overlay overlay-bg"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"menu-content col-lg-9"},r.a.createElement("div",{className:"title text-center"},r.a.createElement("h1",{className:"mb-10 text-white"},a),r.a.createElement("p",{className:"text-white",dangerouslySetInnerHTML:{__html:n}}),r.a.createElement(c.Link,{to:"",className:"primary-btn",fragment:"contact"},i))))))}))},162:function(e,t,a){},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(150),i=(a(166),a(146)),s=a(145);t.a=Object(i.a)(Object(s.a)(function(e){var t=e.meta,a=t.headline,n=t.heading,i=t.html,s=t.btnTxt,l=t.btnUrl,m=t.image,o=t.imagePosition,u=e.elemId;return r.a.createElement("section",{className:o===c.a?"image-text image-left section-gap":"image-text image-right section-gap",id:u},r.a.createElement("div",{className:"container m-auto"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:o===c.a?"col-md-5 image-col":"col-md-5 image-col offset-md-1 order-md-2"},r.a.createElement("div",{className:"image-wrap inview"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(/images/"+m+")"}}))),r.a.createElement("div",{className:o===c.a?"text-col col-md-6 offset-md-1":"text-col col-md-6"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"text-wrap"},r.a.createElement("h6",null,a),r.a.createElement("h2",null,n),r.a.createElement("div",{className:"pt-20 pb-20",dangerouslySetInnerHTML:{__html:i}}),s&&r.a.createElement("a",{className:"primary-btn",href:l,target:"_blank"},s)))))))}))},166:function(e,t,a){},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(168),a(146)),i=a(145),s=function(e){var t=e.industry,a=e.heading,n=e.description,c=e.image,i=e.moreTxt;return r.a.createElement("a",{href:"/behavioral-analytics/",className:"card"},r.a.createElement("span",{className:"card__title"},t),r.a.createElement("h4",null,a),r.a.createElement("img",{src:"images/"+c,alt:""}),r.a.createElement("p",null,n),r.a.createElement("span",{className:"card__more"},i))};t.a=Object(c.a)(Object(i.a)(function(e){var t=e.meta,a=t.headline,n=t.moreTxt,c=t.cards,i=e.elemId;return r.a.createElement("section",{className:"cards section-gap",id:i},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"cards__wrapper"},a&&r.a.createElement("div",{className:"cards__heading"},r.a.createElement("h1",null,a)),c.map(function(e,t){var a=e.industry,c=e.heading,i=e.image,l=e.description;return r.a.createElement(s,{industry:a,heading:c,image:i,description:l,moreTxt:n,key:t})}))))}))},168:function(e,t,a){},169:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(170),a(147)),i=a(146),s=a(145);t.a=Object(i.a)(Object(s.a)(function(e){var t=e.meta,a=t.heading,n=t.html,i=t.image,s=t.btnTxt,l=t.btnUrl,m=e.elemId;return r.a.createElement("section",{className:"hero",id:m},r.a.createElement("div",{className:"hero__bg"},r.a.createElement("div",{className:"hero__bg__img",style:{backgroundImage:"url(images/"+i+")"}})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement("div",{className:"col-lg-10"},r.a.createElement("div",{className:"generic-banner-content"},r.a.createElement("h1",{className:"text-white"},a),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),r.a.createElement(c.Link,{className:"primary-btn",to:l},s))))))}))},170:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-showcase-js-7458b061d3756db8632c.js.map