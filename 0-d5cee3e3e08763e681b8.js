(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,a,t){"use strict";t(151),t(75),t(76),t(77);var n=t(7),c=t.n(n),l=t(0),r=t.n(l),i=(t(188),t(150));a.a=function(e){return function(a){function t(e){return a.call(this,e)||this}return c()(t,a),t.prototype.render=function(){return this.props.location.search.includes(i.b)?r.a.createElement("div",{className:"showcase","data-name":this.props.meta.name},r.a.createElement(e,this.props)):r.a.createElement(e,this.props)},t}(r.a.Component)}},146:function(e,a,t){"use strict";t(32),t(75);var n=t(0),c=t.n(n),l=t(22),r=t(189),i=t.n(r);a.a=function(e){return function(a){return c.a.createElement(l.Location,null,function(t){var n=t.location,l=t.navigate;return c.a.createElement(e,Object.assign({},a,{location:n,navigate:l,search:n.search?i.a.parse(n.search):{}}))})}}},148:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return v}),t.d(a,"StaticQueryContext",function(){return u}),t.d(a,"StaticQuery",function(){return E});var n=t(0),c=t.n(n),l=t(4),r=t.n(l),i=t(149),s=t.n(i);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var m=t(156),o=t.n(m);t.d(a,"PageRenderer",function(){return o.a});var d=t(48);t.d(a,"parsePath",function(){return d.a});var u=c.a.createContext({}),E=function(e){return c.a.createElement(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}E.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},150:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return c});var n="left",c="showcase"},156:function(e,a,t){var n;e.exports=(n=t(181))&&n.default||n},158:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(148),r=(t(187),t(145)),i=t(146);a.a=Object(i.a)(Object(r.a)(function(e){var a=e.meta,t=a.heading,n=a.html,r=a.btnTxt,i=a.btnUrl,s=e.elemId;return c.a.createElement("section",{className:"banner",id:s},c.a.createElement("div",{className:"banner__bg"},c.a.createElement("div",{className:"banner__bg__img"})),c.a.createElement("div",{className:"container fullscreen"},c.a.createElement("div",{className:"row fullscreen banner__wrapper"},c.a.createElement("div",{className:"banner__text col-lg-7"},c.a.createElement("h1",{className:"banner__text__heading"},t),c.a.createElement("div",{className:"banner__text__body",dangerouslySetInnerHTML:{__html:n}}),c.a.createElement(l.Link,{className:"primary-btn",to:i},r)))))}))},159:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=(t(191),t(146)),r=t(145),i=function(e){var a=e.html,t=e.icon;return c.a.createElement("div",{className:"single-offer d-flex flex-row"},c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:"/icons/"+t,alt:""})),c.a.createElement("div",{className:"desc"},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))};a.a=Object(l.a)(Object(r.a)(function(e){var a=e.meta,t=a.heading,n=a.description,l=a.tiles,r=e.elemId;return c.a.createElement("section",{className:"grid section-gap",id:r},c.a.createElement("div",{className:"grid__content container"},c.a.createElement("div",{className:"row d-flex justify-content-center"},c.a.createElement("div",{className:"menu-content pb-60 col-lg-10"},c.a.createElement("div",{className:"title text-center"},c.a.createElement("h1",{className:"mb-10"},t),c.a.createElement("p",null,n)))),c.a.createElement("div",{className:"row flex-wrap"},l.map(function(e,a){return c.a.createElement(i,{html:e.html,icon:e.icon,key:a})}))))}))},160:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(148),r=(t(192),t(146)),i=t(145);a.a=Object(r.a)(Object(i.a)(function(e){var a=e.meta,t=a.heading,n=a.html,r=a.btnTxt,i=a.image,s=e.elemId;return c.a.createElement("section",{id:s,className:"callto-action-area relative section-gap",style:{backgroundImage:"url(/images/"+i+")"}},c.a.createElement("div",{className:"overlay overlay-bg"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row d-flex justify-content-center"},c.a.createElement("div",{className:"menu-content col-lg-9"},c.a.createElement("div",{className:"title text-center"},c.a.createElement("h1",{className:"mb-10 text-white"},t),c.a.createElement("p",{className:"text-white",dangerouslySetInnerHTML:{__html:n}}),c.a.createElement(l.Link,{to:"",className:"primary-btn",fragment:"contact"},r))))))}))},163:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(148),r=t(150),i=(t(198),t(146)),s=t(145);a.a=Object(i.a)(Object(s.a)(function(e){var a=e.meta,t=a.headline,n=a.heading,i=a.html,s=a.btnTxt,m=a.btnUrl,o=a.image,d=a.imagePosition,u=e.elemId;return c.a.createElement("section",{className:d===r.a?"image-text image-left section-gap":"image-text image-right section-gap",id:u},c.a.createElement("div",{className:"container m-auto"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:d===r.a?"col-md-5 image-col":"col-md-5 image-col offset-md-1 order-md-2"},c.a.createElement("div",{className:"image-wrap inview"},c.a.createElement("div",{className:"image",style:{backgroundImage:"url(/images/"+o+")"}}))),c.a.createElement("div",{className:d===r.a?"text-col col-md-6 offset-md-1":"text-col col-md-6"},c.a.createElement("div",{className:"text-container"},c.a.createElement("div",{className:"text-wrap"},c.a.createElement("h6",null,t),c.a.createElement("h2",null,n),c.a.createElement("div",{className:"pt-20 pb-20",dangerouslySetInnerHTML:{__html:i}}),s&&c.a.createElement(l.Link,{className:"primary-btn",to:m},s)))))))}))},164:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=(t(199),t(146)),r=t(145),i=function(e){var a=e.industry,t=e.heading,n=e.description,l=e.image,r=e.moreTxt;return c.a.createElement("a",{href:"/behavioral-analytics/",className:"card"},c.a.createElement("span",{className:"card__title"},a),c.a.createElement("h4",null,t),c.a.createElement("img",{src:"/images/"+l,alt:""}),c.a.createElement("p",null,n),c.a.createElement("span",{className:"card__more"},r))};a.a=Object(l.a)(Object(r.a)(function(e){var a=e.meta,t=a.headline,n=a.moreTxt,l=a.cards,r=e.elemId;return c.a.createElement("section",{className:"cards section-gap",id:r},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"cards__wrapper"},t&&c.a.createElement("div",{className:"cards__heading"},c.a.createElement("h1",null,t)),l.map(function(e,a){var t=e.industry,l=e.heading,r=e.image,s=e.description;return c.a.createElement(i,{industry:t,heading:l,image:r,description:s,moreTxt:n,key:a})}))))}))},165:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=(t(200),t(148)),r=t(146),i=t(145);a.a=Object(r.a)(Object(i.a)(function(e){var a=e.meta,t=a.heading,n=a.description,r=(a.html,a.image),i=a.btnTxt,s=a.btnUrl,m=e.elemId;return c.a.createElement("section",{className:"hero",id:m},c.a.createElement("div",{className:"hero__bg"},c.a.createElement("div",{className:"hero__bg__img",style:{backgroundImage:"url(/images/"+r+")"}})),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row align-items-center justify-content-center"},c.a.createElement("div",{className:"col-lg-10"},c.a.createElement("div",{className:"generic-banner-content"},c.a.createElement("h1",{className:"text-white"},t),c.a.createElement("p",null,n),i&&c.a.createElement(l.Link,{className:"primary-btn",to:s},i))))))}))},166:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=(t(201),t(146)),r=t(145),i=function(e){var a=e.heading,t=e.icon,n=e.description;return c.a.createElement("div",{className:"pill"},c.a.createElement("img",{src:"/icons/"+t,alt:""}),c.a.createElement("h4",{className:"pill__heading"},a),c.a.createElement("p",{className:"pill__description"},n))};a.a=Object(l.a)(Object(r.a)(function(e){var a=e.meta.pills,t=e.elemId;return c.a.createElement("section",{className:"pills",id:t},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"pills__wrapper"},a.map(function(e,a){var t=e.heading,n=e.icon,l=e.description;return c.a.createElement(i,{heading:t,icon:n,description:l,key:a})}))))}))},167:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=(t(202),t(146)),r=t(145),i=function(e){var a=e.heading,t=e.icon,n=e.description;return c.a.createElement("div",{className:"quarter"},c.a.createElement("div",{className:"quarter__image"},c.a.createElement("img",{src:"/icons/"+t,alt:""})),c.a.createElement("h4",{className:"quarter__heading"},a),c.a.createElement("div",{className:"quarter__description"},n))};a.a=Object(l.a)(Object(r.a)(function(e){var a=e.meta,t=a.heading,n=a.description,l=a.image,r=a.quarters,s=e.elemId;return c.a.createElement("section",{className:"quartet section-gap",id:s},c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"quartet__heading"},t),c.a.createElement("p",{className:"quartet__description"},n),c.a.createElement("div",{className:"quartet__quarters"},c.a.createElement("div",{className:"quartet__separator"},c.a.createElement("img",{src:"/icons/"+l,alt:""})),r.map(function(e,a){var t=e.heading,n=e.icon,l=e.description;return c.a.createElement(i,{heading:t,icon:n,description:l,key:a})}))))}))},168:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(148),r=(t(203),t(146)),i=t(145),s=t(150);a.a=Object(r.a)(Object(i.a)(function(e){var a=e.meta,t=a.headline,n=a.heading,r=a.html,i=a.btnTxt,m=a.btnUrl,o=a.icons,d=a.imagePosition,u=e.elemId;return c.a.createElement("section",{className:d===s.a?"image-text image-left section-gap":"image-text image-right section-gap",id:u},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:d===s.a?"graph col-md-5":"graph col-md-5 offset-md-1 order-md-2"},c.a.createElement("div",{className:"nodes"},c.a.createElement("div",{className:"nodes__image",style:{backgroundImage:"url(/icons/"+o[0]+")"}}),c.a.createElement("div",{className:"node node--1"},c.a.createElement("div",{className:"node__image node__image--1",style:{backgroundImage:"url(/icons/"+o[1]+")"}})),c.a.createElement("div",{className:"node node--2"},c.a.createElement("div",{className:"node__image node__image--2",style:{backgroundImage:"url(/icons/"+o[2]+")"}})),c.a.createElement("div",{className:"node node--3"},c.a.createElement("div",{className:"node__image node__image--3",style:{backgroundImage:"url(/icons/"+o[3]+")"}})),c.a.createElement("div",{className:"node node--4"},c.a.createElement("div",{className:"node__image node__image--4",style:{backgroundImage:"url(/icons/"+o[4]+")"}})))),c.a.createElement("div",{className:d===s.a?"text-col col-md-6 offset-md-1":"text-col col-md-6"},c.a.createElement("div",{className:"text-container"},c.a.createElement("div",{className:"text-wrap"},c.a.createElement("h6",null,t),c.a.createElement("h2",null,n),c.a.createElement("div",{className:"pt-20 pb-20",dangerouslySetInnerHTML:{__html:r}}),i&&c.a.createElement(l.Link,{className:"primary-btn",to:m},i)))))))}))},169:function(e,a,t){"use strict";var n=t(7),c=t.n(n),l=t(170),r=t(0),i=t.n(r),s=t(4),m=t.n(s),o=t(171),d=t.n(o),u=t(148),E=t(157),v=t(183),g=(t(184),t(152)),h=function(){return i.a.createElement("footer",{id:"footer",className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"footer__contact row d-flex justify-content-between align-items-center"},i.a.createElement("div",{className:"footer__logo"},i.a.createElement("img",{src:"/images/logo.png",alt:"Squaredev"})),i.a.createElement("div",{className:"footer__address col-sm-12 col-md-6"},i.a.createElement("h5",{className:"pb-15"},"Get in touch with us"),i.a.createElement("div",{className:"d-flex pt-15 justify-content-center justify-content-md-end"},i.a.createElement("div",{className:"footer__address__icon"},i.a.createElement(E.a,{icon:g.b})),i.a.createElement("div",{className:"pl-md-3"},i.a.createElement("div",{className:"pb-1"},"Aarschotsestraat 52 / 004"),i.a.createElement("div",{className:"pb-1"},"1800 Vilvoorde"),i.a.createElement("div",{className:"pb-1"},"Belgium"))),i.a.createElement("div",{className:"d-flex pt-15 justify-content-center justify-content-md-end"},i.a.createElement("div",{className:"footer__address__icon"},i.a.createElement(E.a,{icon:g.a})),i.a.createElement("div",{className:"pl-md-3"},"hello@thesquaredev.com")))),i.a.createElement("div",{className:"row d-flex justify-content-between align-items-center"},i.a.createElement("div",{className:"footer__text col-md-9 col-sm-12 footer-text order-1 order-md-0"},i.a.createElement("span",null,"Copyright © ",(new Date).getFullYear()," Squaredev, All rights reserved | Cookies | Policy")),i.a.createElement("div",{className:"col-md-3 col-sm-12 footer__social"},i.a.createElement("a",{href:"https://twitter.com/thesquaredev",target:"_blank"},i.a.createElement(E.a,{icon:v.c})),i.a.createElement("a",{href:"https://www.linkedin.com/company/thesquaredev/",target:"_blank"},i.a.createElement(E.a,{icon:v.b})),i.a.createElement("a",{href:"https://github.com/thesquaredev",target:"_blank"},i.a.createElement(E.a,{icon:v.a}))))))},p=(t(185),function(){return i.a.createElement("svg",{viewBox:"0 0 477.72 104.06667",height:"104.06667",width:"477.72",xmlSpace:"preserve",id:"svg2",version:"1.1"},i.a.createElement("defs",{id:"defs6"},i.a.createElement("clipPath",{id:"clipPath20",clipPathUnits:"userSpaceOnUse"},i.a.createElement("path",{id:"path18",d:"M 0,780.512 V 0 h 3582.91 v 780.512 z"}))),i.a.createElement("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,104.06667)",id:"g10"},i.a.createElement("g",{transform:"scale(0.1)",id:"g12"},i.a.createElement("g",{id:"g14"},i.a.createElement("g",{clipPath:"url(#clipPath20)",id:"g16"},i.a.createElement("path",{id:"path22",style:{fill:"#1c2034",fillOpacity:1,fillRule:"nonzero",stroke:"none"},d:"m 1438.13,152.449 c -37.41,31.692 -73.96,64.067 -110.41,97.024 l -35.47,-39.813 41.26,-35.129 c -9.77,-4.695 -21,-6.875 -33.3,-6.875 -44.89,0 -76.74,36.203 -76.74,79.649 v 0.715 c 0,43.433 31.12,78.914 76.01,78.914 44.89,0 76.75,-36.192 76.75,-79.629 v -0.731 c 0,-2.98 -0.14,-5.929 -0.41,-8.808 l 47.92,-41.953 c 6.91,15.859 10.77,33.25 10.77,51.492 v 0.715 c 0,72.039 -56.11,130.32 -134.3,130.32 -78.19,0 -135.02,-59.004 -135.02,-131.035 v -0.731 c 0,-72.043 56.11,-130.324 134.29,-130.324 28.24,0 53.94,7.969 75.31,21.73 l 27.87,-24.984 z m 1327.45,-32.078 h 95.41 c 74.52,0 135.7,49.492 135.7,126.758 v 0.801 c 0,77.363 -61.34,125.957 -135.7,125.957 h -95.41 z m 31.22,25.117 V 348.77 h 64.19 c 59.57,0 101.64,-42.059 101.64,-101.641 v -0.82 c 0,-59.707 -42.2,-100.821 -101.64,-100.821 z m 287.28,-25.117 h 185.51 v 24.297 h -154.7 v 91.328 h 134.34 v 24.297 h -134.34 v 89.277 h 152.66 v 24.317 h -183.47 z m 362.17,-2.031 h 34.08 l 102.58,255.547 h -33.36 l -85.45,-230.203 -85.44,230.203 h -34.99 z m -1810.72,-1.719 c 68.06,0 111.14,37.649 111.14,114.387 v 142.984 h -55.75 V 228.84 c 0,-40.188 -20.63,-60.82 -54.66,-60.82 -34.03,0 -54.66,21.367 -54.66,62.625 v 143.347 h -55.76 V 229.199 c 0,-74.57 41.64,-112.578 109.69,-112.578 z m 592.09,134.297 v 72.766 h 55.39 c 27.15,0 43.8,-12.305 43.8,-36.204 v -0.722 c 0,-21.356 -15.56,-35.84 -42.71,-35.84 z m -55.74,-130.313 h 55.74 v 81.086 h 43.81 l 54.3,-81.086 h 65.15 l -61.89,90.489 c 32.22,11.953 54.3,37.656 54.3,78.554 v 0.723 c 0,23.887 -7.6,43.801 -21.72,57.922 -16.65,16.648 -41.63,25.699 -73.85,25.699 h -115.84 z m 307.45,0 h 192.94 v 49.583 h -137.56 v 53.222 h 119.46 v 49.586 h -119.46 v 51.399 h 135.74 v 49.597 h -191.12 z m -551.19,253.387 h 49.23 l 102.44,-255.203 h -60.09 l -66.25,178.469 -66.24,-178.469 h -61.54 z M 989.141,116.984 c 54.659,0 93.029,28.231 93.029,78.543 v 0.735 c 0,44.16 -28.96,62.617 -80.36,76.015 -43.802,11.219 -54.665,16.649 -54.665,33.309 v 0.715 c 0,12.312 11.222,22.09 32.582,22.09 21.353,0 43.433,-9.426 65.883,-24.981 l 28.96,41.992 c -25.7,20.625 -57.21,32.207 -94.117,32.207 -51.769,0 -88.691,-30.402 -88.691,-76.367 v -0.722 c 0,-50.325 32.945,-64.446 83.984,-77.473 42.354,-10.859 51.044,-18.106 51.044,-32.219 v -0.73 c 0,-14.832 -13.76,-23.887 -36.571,-23.887 -28.949,0 -52.848,11.945 -75.653,30.773 l -32.941,-39.453 c 30.406,-27.148 69.141,-40.547 107.516,-40.547"}),i.a.createElement("path",{id:"path24",style:{fill:"#1c2034",fillOpacity:1,fillRule:"evenodd",stroke:"none"},d:"M 329.762,22.3047 C 222.551,35.2656 152.336,122.492 142.141,226.574 c -10.504,107.227 49.304,200.942 -4.442,349.153 -4.004,11.035 0.196,35.718 22.481,35.718 h 95.039 c 14.668,0 29.035,9.602 29.105,32.907 l 0.356,111.949 c 0.148,48.183 217.043,-33.125 99.539,-231.844 C 344.047,456.52 227.98,372.129 238.852,227.512 244.527,151.945 265.211,74.082 329.762,22.3047 Z M 112.898,762.848 V 665.16 c 0,-9.719 7.946,-17.66 17.665,-17.66 h 97.691 c 9.719,0 17.66,7.941 17.66,17.66 v 97.688 c 0,9.722 -7.941,17.664 -17.66,17.664 h -97.691 c -9.719,0 -17.665,-7.942 -17.665,-17.664 z M 0,738.168 V 687.25 c 0,-8.176 6.69531,-14.863 14.8672,-14.863 h 50.9141 c 8.1835,0 14.8671,6.687 14.8671,14.863 v 50.918 c 0,8.176 -6.6836,14.863 -14.8671,14.863 H 14.8672 C 6.69531,753.031 0,746.344 0,738.168 Z M 34.6328,633.234 v -38.347 c 0,-3.813 3.1211,-6.926 6.9336,-6.926 h 38.3438 c 3.8164,0 6.9296,3.113 6.9296,6.926 v 38.347 c 0,3.813 -3.1132,6.934 -6.9296,6.934 H 41.5664 c -3.8125,0 -6.9336,-3.121 -6.9336,-6.934"}),i.a.createElement("path",{id:"path26",style:{fill:"#1c2034",fillOpacity:1,fillRule:"evenodd",stroke:"none"},d:"m 685.777,563.422 c -8.593,-8.149 -22.031,-9.098 -31.808,-1.664 -9.766,7.437 -12.547,20.738 -7.149,31.316 8.606,8.149 22.043,9.098 31.809,1.668 9.766,-7.437 12.559,-20.738 7.148,-31.32 z M 557.379,45.1953 h 105.535 c 50.422,0 -7.285,30.4102 -49.48,41.7188 18.015,14.1409 52.468,51.9529 68.789,106.5039 25.84,86.387 -61.27,78.898 -58.606,42.961 C 628.395,172.238 591.195,99.4258 554.828,76.5938 537.203,65.5273 541.402,45.1953 557.379,45.1953 Z m 246.57,485.7457 c 1.262,33.997 -45.164,108.977 -84.297,126.446 -5.359,22.535 -17.82,44.156 -37.097,64.89 -6.739,-14.875 -13.477,-29.742 -20.215,-44.617 -12.383,2.442 -41.758,-3.234 -52.481,-5.305 -15.214,21.766 -33.3,35.477 -53.976,41.915 -3.106,-24.786 -6.211,-49.571 -9.305,-74.36 C 515.113,613.414 513.063,574.672 513.297,530.629 513.512,487.461 299.109,413.137 239.945,276.055 189.273,158.645 242.273,0 393.379,0 H 528.16 c 60.547,0 -11.582,42.8438 -67.207,57.1797 237.129,136.2383 72.664,356.9763 -119.191,238.7113 -6.367,-3.926 25.547,65.195 115.871,72.859 28.75,2.441 81.543,1.535 126.64,-63.164 10.938,-15.684 33.692,-33.016 25.762,13.906 -3.926,23.235 -17.461,55.774 -30.527,72.813 -36.68,47.832 9.57,81.925 69.004,81.925 86.816,0 153.75,10.969 155.437,56.711"}))))))}),f=function(e){var a=e.isScrolled;return i.a.createElement("header",{className:a?"header header-scrolled":"header"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-center justify-content-between d-flex"},i.a.createElement("div",{className:"header__logo"},i.a.createElement(u.Link,{to:"/"},i.a.createElement(p,{className:"logo"}))),i.a.createElement("nav",{id:"nav-menu-container"},i.a.createElement("ul",{className:"nav-menu sf-arrows"},i.a.createElement("li",{className:"menu-has-children"},i.a.createElement(u.Link,{to:"/solutions"},i.a.createElement("span",null,"Solutions")),i.a.createElement("ul",{className:"nav-submenu"},i.a.createElement("span",{className:"nav-submenu__col"},i.a.createElement("h6",null,"By Use Case"),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/solutions/life-sciences"},i.a.createElement("img",{src:"/icons/pills-icon.png",alt:""}),i.a.createElement("div",{className:"nav-submenu__item"},i.a.createElement("span",null,"Pharmacovigilance"),i.a.createElement("span",null,"Leverage data-driven innovation")))),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/solutions/financial-services"},i.a.createElement("img",{src:"/icons/user-credit-card-bold-green.png",alt:""}),i.a.createElement("div",{className:"nav-submenu__item"},i.a.createElement("span",null,"KYC / Customer 360"),i.a.createElement("span",null,"Meet data challenges with AI")))),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/generic"},i.a.createElement("img",{src:"/icons/user-shield.png",alt:""}),i.a.createElement("div",{className:"nav-submenu__item"},i.a.createElement("span",null,"Data privacy"),i.a.createElement("span",null,"Ensure GDPR compliance"))))),i.a.createElement("span",{className:"nav-submenu__col"},i.a.createElement("h6",null,"By Technology"),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/generic"},i.a.createElement("img",{src:"/icons/brain-icon.png",alt:""}),i.a.createElement("div",{className:"nav-submenu__item"},i.a.createElement("span",null,"Knowledge graphs"),i.a.createElement("span",null,"Break down data silos")))),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/generic"},i.a.createElement("img",{src:"/icons/robot-head.png",alt:""}),i.a.createElement("div",{className:"nav-submenu__item"},i.a.createElement("span",null,"AI & machine learning"),i.a.createElement("span",null,"Lorem ipsum dolor sit amet")))),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/generic"},i.a.createElement("img",{src:"/icons/visualizations.png",alt:""}),i.a.createElement("div",{className:"nav-submenu__item"},i.a.createElement("span",null,"Data engineering"),i.a.createElement("span",null,"Lorem ipsum dolor sit amet"))))))),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/showcase"},"Company")),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/technology"},"Labs")),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/showcase"},"Contact Us")))))))},N=(t(186),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isScrolled:!1},t}c()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;document.addEventListener("scroll",function(){var a=window.scrollY>10;a!==e.state.isScrolled&&e.setState({isScrolled:a})})},t.render=function(){var e=this;return i.a.createElement(u.StaticQuery,{query:"1044757290",render:function(a){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"We make it possible to turn your organisation's big data into actionable insights and build a sustainable competitive advantage."},{name:"keywords",content:"Squaredev, software development, big data analytics, data visualisations, graph analytics, knowledge rraph, IOT, IIOT, augmented analytics, digital twins, machine learning, natural language processing, data silos"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("script",{async:!0,src:"https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver"})),i.a.createElement(f,{isScrolled:e.state.isScrolled}),e.props.children,i.a.createElement(h,null),i.a.createElement("div",{id:"mobile-body-overly",style:{display:"none"}}))},data:l})},a}(i.a.Component));N.propTypes={children:m.a.node.isRequired};a.a=N},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Data management & intelligence"}}}}},181:function(e,a,t){"use strict";t.r(a);t(32);var n=t(0),c=t.n(n),l=t(4),r=t.n(l),i=t(69),s=t(2),m=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return c.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};m.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=m},184:function(e,a,t){},185:function(e,a,t){},186:function(e,a,t){},187:function(e,a,t){},188:function(e,a,t){},191:function(e,a,t){},192:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){},202:function(e,a,t){},203:function(e,a,t){}}]);
//# sourceMappingURL=0-d5cee3e3e08763e681b8.js.map