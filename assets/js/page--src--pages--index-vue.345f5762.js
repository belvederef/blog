(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0Qs1":function(e,t,s){"use strict";s("aku+")},aK7f:function(e,t,s){},"aku+":function(e,t,s){},gEGz:function(e,t,s){"use strict";s("aK7f")},iyQ6:function(e,t,s){"use strict";s.r(t);var a=s("G0B5"),r=function(e,t,s,a){var r,i=arguments.length,o=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i<3?r(o):i>3?r(t,s,o):r(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o};let i=class extends a.c{};r([Object(a.b)()],i.prototype,"post",void 0),i=r([a.a],i);var o=i,n=(s("0Qs1"),s("KHd+")),c=Object(n.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("g-link",{staticClass:"clickable-div",attrs:{to:e.post.path,"aria-label":"Link to article '"+e.post.title+"'"}},[s("article",{staticClass:"post-preview"},[s("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"title",domProps:{innerHTML:e._s(e.post.title)}}),s("time",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"date",domProps:{innerHTML:e._s(e.post.date)}}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"description",domProps:{innerHTML:e._s(e.post.description)}}),s("em",{staticClass:"time-to-read"},[e._v(e._s(e.post.timeToRead)+" min read")])])])}),[],!1,null,"ba3b5fd0",null).exports,l=function(e,t,s,a){var r,i=arguments.length,o=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,a);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i<3?r(o):i>3?r(t,s,o):r(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o};let p=class extends a.c{get featuredPosts(){return this.$page.allPost.edges.filter(({node:e})=>!0===e.featured).map(({node:e})=>Object.assign(Object.assign({},e),{date:e.fullDate}))}get postsByYear(){const e=this.$page.allPost.edges.reduce((e,{node:t})=>{const s=new Date(t.isoDate).getFullYear().toString();if(!s)throw Error("Could not read year of post: "+t.title);return Array.isArray(e[s])||(e[s]=[]),e[s].push(Object.assign(Object.assign({},t),{date:t.shortDate})),e},{});return Object.entries(e).sort(([e,t],[s,a])=>+s-+e)}};p=l([Object(a.a)({metaInfo:{title:"Homepage"},components:{PostPreview:c}})],p);var d=p,u=(s("gEGz"),null),f=Object(n.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Layout",[s("header",{staticClass:"header"},[s("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(e.$page.metadata.siteName)}}),s("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(e.$page.metadata.siteDescription)}})]),s("section",{staticClass:"posts"},[s("h3",{staticClass:"post-header"},[e._v("Featured")]),e._l(e.featuredPosts,(function(e){return s("PostPreview",{key:e.id,attrs:{post:e}})}))],2),s("section",{staticClass:"posts"},[s("h3",{staticClass:"post-header"},[e._v("Latest")]),e._l(e.postsByYear,(function(t){var a=t[0],r=t[1];return[s("div",{key:a},[s("h4",{staticClass:"year"},[e._v(e._s(a))]),s("hr",{staticClass:"line"})]),e._l(r,(function(e){return s("PostPreview",{key:e.id,attrs:{post:e}})}))]}))],2)])}),[],!1,null,null,null);"function"==typeof u&&u(f);t.default=f.exports}}]);