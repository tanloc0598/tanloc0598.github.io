(window.webpackJsonp=window.webpackJsonp||[]).push([[18,11],{348:function(t,n,e){"use strict";var r=e(349),o=e.n(r);e(350);n.a={mounted:function(){o.a.init({})}}},352:function(t,n,e){"use strict";e.r(n);e(12),e(82);var r={filters:{capitalize:function(t){return t?(t=t.toString()).toUpperCase():""}},props:{title:String,content:Object,contents:Array,li_tittle:String}},o=e(17),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"md:tw-p-8 md:tw-container md:tw-mx-auto"},[t.title?n("div",{staticClass:"tw-mb-8"},[t.li_tittle?n("div",[n("span",{staticClass:"tw-tracking-wider tw-text-sm tw-text-main-color"},[t._v(t._s(t.li_tittle)+".")]),t._v(" "),n("br")]):t._e(),t._v(" "),n("h1",{staticClass:"tw-tracking-wider tw-text-2xl"},[n("span",{},[t._v("\n        "+t._s(t._f("capitalize")(t.title))+"\n      ")])])]):t._e(),t._v(" "),n("div",[n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[t.contents?n("div",[n("div",{staticClass:"tw-col-span-2 tw-text-sm"},t._l(t.contents,(function(t){return n("nuxt-content",{key:t.slug,attrs:{document:t}})})),1)]):t._e(),t._v(" "),t.content?n("div",[n("div",{staticClass:"tw-col-span-2 tw-text-sm"}),t._v(" "),n("nuxt-content",{attrs:{document:t.content}})],1):t._e()])])])])])])}),[],!1,null,null,null);n.default=component.exports},387:function(t,n,e){"use strict";e.r(n);e(21),e(47);var r=e(7),o=(e(46),{mixins:[e(348).a],head:{title:"Tnloc | Stories",meta:[{hid:"description",name:"description",content:"Tan Loc's Stories"}]},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o,c,d,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,r=t.params,o=t.app,c=t.error,n.next=3,e(o.i18n.locale,"articles",r.slug).only(["title","description","img","slug","author","createdAt"]).sortBy("createdAt","desc").fetch().catch((function(){c({statusCode:404,message:"Page not found"})}));case 3:return d=n.sent,n.next=6,e(o.i18n.locale,"text","storiesIntro").fetch().catch((function(){c({statusCode:404,message:"Page not found"})}));case 6:return l=n.sent,n.abrupt("return",{articles:d,storiesIntro:l});case 8:case"end":return n.stop()}}),n)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=e(17),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"tw-p-3 md:tw-container md:tw-mx-auto",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",{staticClass:"tw-mb-16"},[t._m(0),t._v(" "),n("List",{staticClass:"md:tw-p-8 md:tw-pt-2 md:tw-container md:tw-mx-auto",attrs:{content:t.storiesIntro}})],1),t._v(" "),n("div",{staticClass:"md:tw-p-8"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"tw-text-justify tw-mb-6",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down","data-aos-duration":"900"}},[n("nuxt-link",{attrs:{to:"stories/"+article.slug}},[n("div",{staticClass:"md:tw-grid md:tw-grid-rows-3 md:tw-grid-cols-4 md:tw-gap-2 tw-mb-12"},[n("div",{staticClass:"md:tw-row-span-3"},[t._v("\n            "+t._s(t.formatDate(article.createdAt))+"\n          ")]),t._v(" "),n("div",{staticClass:"md:tw-col-span-3"},[t._v(t._s(article.title))]),t._v(" "),n("div",{staticClass:"md:tw-row-span-2 md:tw-col-span-3"},[t._v("\n            "+t._s(article.description)+"\n          ")])])])],1)})),0)])}),[function(){var t=this,n=t._self._c;return n("h1",{staticClass:"md:tw-p-8 md:tw-pb-2 tw-text-4xl tw-font-bold md:tw-text-6xl tw-subpixel-antialiased"},[t._v("\n      Stories"),n("span",{staticClass:"blink_me"},[t._v("_")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{List:e(352).default})}}]);