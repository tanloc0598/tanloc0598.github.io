(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{261:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(38),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).only(["title","description","img","slug","author","createdAt"]).sortBy("createdAt","asc").fetch();case 3:return c=e.sent,e.abrupt("return",{articles:c});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=n(29),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-h-screen tw-m-5 md:tw-m-4 md:tw-container md:tw-mx-auto"},[t._m(0),t._v(" "),t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"tw-text-justify tw-mb-3"},[n("nuxt-link",{attrs:{to:"stories/"+article.slug}},[t._v("\n      "+t._s(article.title))])],1)}))],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"tw-text-4xl tw-font-extrabold md:tw-text-6xl tw-subpixel-antialiased"},[t._v("\n      Stories\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);