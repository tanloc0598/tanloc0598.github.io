(window.webpackJsonp=window.webpackJsonp||[]).push([[17,10],{357:function(t,e,r){"use strict";var n=r(358),l=r.n(n);r(359);e.a={mounted:function(){l.a.init({})}}},360:function(t,e,r){var content=r(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("855331f0",content,!0,{sourceMap:!1})},362:function(t,e,r){"use strict";r(360)},363:function(t,e,r){var n=r(71)((function(i){return i[1]}));n.push([t.i,".dark-mode .psn-card-visit[data-v-57a33950]{background-color:#121212;color:#ebf4f1;border-color:hsla(0,0%,100%,.12)}.dark-mode .psn-card-visit-name[data-v-57a33950]{color:#fff}.dark-mode .psn-card-visit-intro[data-v-57a33950]{color:hsla(0,0%,100%,.7)}.dark-mode .psn-cta-btn[data-v-57a33950]{background:hsla(0,0%,100%,.16)}.dark-mode .psn-cta-btn[data-v-57a33950]:focus{border-color:hsla(0,0%,100%,.16)}.dark-mode .psn-cta-btn[data-v-57a33950]:hover{border-color:hsla(0,0%,100%,.08)}",""]),n.locals={},t.exports=n},370:function(t,e,r){"use strict";r.r(e);var n={name:"CardVisit"},l=(r(362),r(14)),component=Object(l.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-p-4 tw-transition tw-duration-500 tw-ease-in-out tw-transform tw-bg-white tw-border tw-rounded-lg psn-card-visit",staticStyle:{"user-select":"auto"}},[e("div",{staticClass:"tw-grid tw-gap-2",staticStyle:{"user-select":"auto"}},[e("div",{staticClass:"tw-flex"},[e("img",{staticClass:"tw-object-cover tw-w-10 tw-h-10 tw-mr-2 tw-rounded-full",staticStyle:{"user-select":"auto"},attrs:{src:"https://s.gravatar.com/avatar/052b8e5a539ee4a6e4e7bbe6b1605458?s=80"}}),t._v(" "),e("div",{staticStyle:{"user-select":"auto"}},[e("p",{staticClass:"tw-text-sm tw-font-semibold tw-tracking-tight tw-text-black psn-card-visit-name",staticStyle:{"user-select":"auto"}},[t._v("\n          Tnloc Nguyen\n        ")]),t._v(" "),e("p",{staticClass:"tw-text-sm tw-font-normal tw-tracking-tight tw-text-coolGray-400 psn-card-visit-intro",staticStyle:{"user-select":"auto"}},[t._v("\n          Coffee aholic ☕\n        ")])])]),t._v(" "),e("a",{staticClass:"tw-w-full tw-text-center tw-py-2 tw-text-base tw-text-white tw-transition tw-duration-500 tw-ease-in-out tw-transform tw-bg-yellow-500 tw-border-yellow-500 tw-rounded-md focus:tw-shadow-outline focus:tw-outline-none tw-ring-offset-current tw-ring-offset-2 hover:tw-bg-yellow-600 psn-cta-btn",attrs:{href:"/contact",target:"_blank"}},[t._v("\n      Follow me\n    ")])])])}],!1,null,"57a33950",null);e.default=component.exports},403:function(t,e,r){"use strict";r.r(e);r(15),r(45);var n=r(6),l=(r(44),{mixins:[r(357).a],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,l=t.app,c=t.error,e.next=3,r(l.i18n.locale,"articles",n.slug).fetch().catch((function(t){c({statusCode:t.code,message:t.message})}));case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=r(14),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-container tw-px-5 tw-mx-auto lg:tw-px-16",staticStyle:{"user-select":"auto"}},[e("div",{staticClass:"tw-flex tw-flex-col tw-w-full tw-mb-2 tw-text-left",staticStyle:{"user-select":"auto"}},[e("h1",{staticClass:"tw-mb-2 tw-text-3xl tw-font-black tw-tracking-tighter tw-text-black lg:tw-text-7xl md:tw-text-4xl",staticStyle:{"user-select":"auto"}},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),e("p",{staticClass:"tw-mt-4 tw-text-lg tw-leading-snug tw-tracking-tight tw-text-gray-500",staticStyle:{"user-select":"auto"}},[t._v("\n      "+t._s(t.article.description)+"\n    ")])]),t._v(" "),e("div",{staticClass:"tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-x-12",staticStyle:{"user-select":"auto"}},[e("div",{staticClass:"tw-w-full tw-mt-12 tw-text-lg tw-leading-snug tw-tracking-tight tw-text-gray-800 lg:tw-px-0 lg:tw-w-3/4 tw-text-base tw-text-justify tw-break-words",staticStyle:{"user-select":"auto"}},[e("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),e("div",{staticClass:"tw-w-full tw-max-w-screen-sm tw-m-auto tw-mt-12 lg:tw-w-1/4",staticStyle:{"user-select":"auto"}},[e("CardVisit"),t._v(" "),e("p",{staticClass:"tw-mt-4 tw-text-sm tw-leading-snug tw-tracking-tight tw-text-gray-500",staticStyle:{"user-select":"auto"}},[t._v("\n        Article last updated: "+t._s(t.formatDate(t.article.updatedAt))+"\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardVisit:r(370).default})}}]);