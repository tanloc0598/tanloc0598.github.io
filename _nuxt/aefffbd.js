(window.webpackJsonp=window.webpackJsonp||[]).push([[18,11,12],{240:function(t,e,n){"use strict";var r=n(241),o=n.n(r);n(242);e.a={mounted:function(){o.a.init({})}}},243:function(t,e,n){"use strict";n.r(e);var r={computed:{}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-flex tw-justify-around tw-m-5 md:tw-grid-flow-row md:tw-justify-end tw-gap-4"},[n("div",[n("a",{attrs:{href:"mailto:tnloc@outlook.com",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fas","envelope"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://github.com/tanloc0598",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.facebook.com/ngtnloc/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.instagram.com/tnloc/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.linkedin.com/in/nguyen-tan-loc-46862a125/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"lg",color:"grey"}})],1)])])}),[],!1,null,"838f77e4",null);e.default=component.exports},244:function(t,e,n){"use strict";n.r(e);n(11),n(86);var r={props:{title:String,content:Object,contents:Array},filters:{capitalize:function(t){return t?(t=t.toString()).toUpperCase():""}}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:tw-p-8 md:tw-container md:tw-mx-auto"},[t.title?n("div",{staticClass:"tw-mb-8"},[n("span",{staticClass:"tw-tracking-wider tw-text-2xl"},[t._v(t._s(t._f("capitalize")(t.title)))])]):t._e(),t._v(" "),n("div",[n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[t.contents?n("div",[n("div",{staticClass:"tw-col-span-2 tw-text-sm"},t._l(t.contents,(function(t){return n("nuxt-content",{key:t.slug,attrs:{document:t}})})),1)]):t._e(),t._v(" "),t.content?n("div",[n("div",{staticClass:"tw-col-span-2 tw-text-sm"}),t._v(" "),n("nuxt-content",{attrs:{document:t.content}})],1):t._e()])])])])])])}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(38),{mixins:[n(240).a],asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).only(["title","description","img","slug","author","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return o=e.sent,e.next=6,n("text","storiesIntro").fetch();case 6:return c=e.sent,e.abrupt("return",{articles:o,storiesIntro:c});case 8:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=n(29),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-p-3 md:tw-container md:tw-mx-auto",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",{staticClass:"tw-mb-16"},[t._m(0),t._v(" "),n("List",{attrs:{content:t.storiesIntro}})],1),t._v(" "),n("div",{staticClass:"md:tw-p-8"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"tw-text-justify tw-mb-6",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down","data-aos-duration":"900"}},[n("nuxt-link",{attrs:{to:"stories/"+article.slug}},[n("div",{staticClass:"md:tw-grid md:tw-grid-rows-3 md:tw-grid-cols-4 md:tw-gap-2 tw-mb-12"},[n("div",{staticClass:"md:tw-row-span-3"},[t._v("\n            "+t._s(t.formatDate(article.createdAt))+"\n          ")]),t._v(" "),n("div",{staticClass:"md:tw-col-span-3"},[t._v(t._s(article.title))]),t._v(" "),n("div",{staticClass:"md:tw-row-span-2 md:tw-col-span-3"},[t._v("\n            "+t._s(article.description)+"\n          ")])])])],1)})),0),t._v(" "),n("div",{staticClass:"md:tw-container md:tw-mx-auto"},[n("Social")],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"md:tw-p-8 tw-text-4xl tw-font-bold md:tw-text-6xl tw-subpixel-antialiased"},[t._v("\n      Stories"),n("span",{staticClass:"blink_me"},[t._v("_")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{List:n(244).default,Social:n(243).default})}}]);