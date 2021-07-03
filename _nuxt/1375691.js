(window.webpackJsonp=window.webpackJsonp||[]).push([[17,12],{240:function(t,e,n){"use strict";var l=n(241),r=n.n(l);n(242);e.a={mounted:function(){r.a.init({})}}},243:function(t,e,n){"use strict";n.r(e);var l={computed:{}},r=n(29),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-flex tw-justify-around tw-m-5 md:tw-grid-flow-row md:tw-justify-end tw-gap-4"},[n("div",[n("a",{attrs:{href:"mailto:tnloc@outlook.com",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fas","envelope"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://github.com/tanloc0598",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.facebook.com/ngtnloc/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.instagram.com/tnloc/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.linkedin.com/in/nguyen-tan-loc-46862a125/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"lg",color:"grey"}})],1)])])}),[],!1,null,"838f77e4",null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);var l=n(6),r=(n(38),{mixins:[n(240).a],asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.params,e.next=3,n("articles",l.slug).fetch().catch((function(t){console.log(t)}));case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-container tw-px-5 tw-mx-auto lg:tw-px-16",staticStyle:{"user-select":"auto"}},[n("div",{staticClass:"tw-flex tw-flex-col tw-w-full tw-mb-2 tw-text-left ",staticStyle:{"user-select":"auto"}},[n("h1",{staticClass:"tw-mb-2 tw-text-3xl tw-font-black tw-tracking-tighter tw-text-black lg:tw-text-7xl md:tw-text-4xl",staticStyle:{"user-select":"auto"}},[t._v(" "+t._s(t.article.title)+" ")]),t._v(" "),n("p",{staticClass:"tw-mt-4 tw-text-lg tw-leading-snug tw-tracking-tight tw-text-gray-500 ",staticStyle:{"user-select":"auto"}},[t._v("\n        "+t._s(t.article.description)+" ")])]),t._v(" "),n("div",{staticClass:"tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-x-12",staticStyle:{"user-select":"auto"}},[n("div",{staticClass:"tw-w-full tw-mt-12 tw-text-lg tw-leading-snug tw-tracking-tight tw-text-gray-800 lg:tw-px-0 lg:tw-w-3/4 tw-text-base tw-text-justify tw-break-words",staticStyle:{"user-select":"auto"}},[n("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),n("div",{staticClass:"tw-w-full tw-max-w-screen-sm tw-m-auto tw-mt-12 lg:tw-w-1/4",staticStyle:{"user-select":"auto"}},[t._m(0),t._v(" "),n("p",{staticClass:"tw-mt-4 tw-text-lg tw-leading-snug tw-tracking-tight tw-text-gray-500 ",staticStyle:{"user-select":"auto"}},[t._v("\n          Article last updated: "+t._s(t.formatDate(t.article.updatedAt))+" ")])])]),t._v(" "),n("Social")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-p-4 tw-transition tw-duration-500 tw-ease-in-out tw-transform tw-bg-white tw-border tw-rounded-lg ",staticStyle:{"user-select":"auto"}},[n("div",{staticClass:"tw-flex tw-py-2",staticStyle:{"user-select":"auto"}},[n("img",{staticClass:"tw-object-cover tw-w-10 tw-h-10 tw-mr-2 tw-rounded-full",staticStyle:{"user-select":"auto"},attrs:{src:"https://s.gravatar.com/avatar/052b8e5a539ee4a6e4e7bbe6b1605458?s=80"}}),t._v(" "),n("div",{staticStyle:{"user-select":"auto"}},[n("p",{staticClass:"tw-text-sm tw-font-semibold tw-tracking-tight tw-text-black ",staticStyle:{"user-select":"auto"}},[t._v(" Tnloc\n                Nguyen ")]),t._v(" "),n("p",{staticClass:"tw-text-sm tw-font-normal tw-tracking-tight tw-text-coolGray-400",staticStyle:{"user-select":"auto"}},[t._v("\n                Coffee aholic ☕ ")])])]),t._v(" "),n("button",{staticClass:"tw-w-full tw-px-8 tw-py-2 tw-mt-4 tw-text-base tw-text-white tw-transition tw-duration-500 tw-ease-in-out tw-transform tw-bg-blue-600 tw-border-blue-600 tw-rounded-md focus:tw-shadow-outline focus:tw-outline-none focus:tw-ring-2 tw-ring-offset-current tw-ring-offset-2 hover:tw-bg-blue-800",staticStyle:{"user-select":"auto"}},[t._v(" Follow on Twitter\n          ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Social:n(243).default})}}]);