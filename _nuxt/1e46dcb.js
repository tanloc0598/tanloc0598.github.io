(window.webpackJsonp=window.webpackJsonp||[]).push([[15,13],{241:function(t,e,n){"use strict";var o=n(242),r=n.n(o);n(243);e.a={mounted:function(){r.a.init({})}}},244:function(t,e,n){"use strict";n.r(e);var o={computed:{}},r=n(18),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-flex tw-justify-around tw-m-5 md:tw-grid-flow-row md:tw-justify-end tw-gap-4"},[n("div",[n("a",{attrs:{href:"mailto:tnloc@outlook.com",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fas","envelope"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://github.com/tanloc0598",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.facebook.com/ngtnloc/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.instagram.com/tnloc/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.linkedin.com/in/nguyen-tan-loc-46862a125/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"lg",color:"grey"}})],1)])])}),[],!1,null,"838f77e4",null);e.default=component.exports},246:function(t,e,n){var content=n(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("9afd640e",content,!0,{sourceMap:!1})},255:function(t,e,n){"use strict";n(246)},256:function(t,e,n){var o=n(39)(!1);o.push([t.i,".separatorheader[data-v-baa38fa0]{background-color:#fff;background-image:linear-gradient(1turn,#fff,#fdfbfb 29%,#ebedee 61%,#fdfbfb 80%,#fff)}.title-solid[data-v-baa38fa0]{font-family:KgSecondChancesSolid}.title-sketch[data-v-baa38fa0]{font-family:KgSecondChancesSketch}.tn-section[data-v-baa38fa0]{min-height:calc(1vh - 2.5rem)}",""]),t.exports=o},273:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(38),{mixins:[n(241).a],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("bookmarks",o.slug).only(["title","description","cover","url","tag","author","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{bookmarks:r});case 5:case"end":return e.stop()}}),e)})))()}}),l=(n(255),n(18)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:tw-p-8 tw-min-h-screen separatorheader"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"md:tw-container md:tw-mx-auto tw-p-5 md:tw-mb-24 tw-mb-8 tn-section",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down","data-aos-duration":"900"}},[t._m(2),t._v(" "),n("div",{staticClass:"tw-m-5 md:tw-m-4 md:tw-container md:tw-mx-auto md:tw-grid md:tw-grid-cols-2 tw-gap-6"},t._l(t.bookmarks,(function(e){return n("div",{key:e.slug,staticClass:"tw-bg-white tw-rounded-xl tw-shadow-md tw-overflow-hidden tw-mb-6 tw-bg-opacity-25 hover:tw-shadow-xl",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down","data-aos-duration":"900"}},[n("div",{class:e.cover.src?"md:tw-grid md:tw-grid-cols-2":""},[e.cover.src?n("div",{staticClass:"tw-flex tw-items-stretch"},[n("img",{staticClass:"tw-w-full tw-rounded-xl tw-self-centers",attrs:{src:e.cover.src,alt:e.cover.alt}})]):t._e(),t._v(" "),n("div",{staticClass:"tw-p-6"},[n("div",{staticClass:"tw-uppercase tw-tracking-wide tw-text-sm tw-text-indigo-500 tw-font-semibold"},[t._v("\n              "+t._s(e.tag)+"\n            ")]),t._v(" "),n("a",{staticClass:"tw-block tw-mt-1 tw-text-lg tw-leading-tight tw-font-medium tw-text-black hover:tw-underline",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))]),t._v(" "),e.description?n("div",[n("p",{staticClass:"tw-mt-2 tw-text-gray-900"},[t._v("\n                "+t._s(e.description)+"\n              ")])]):t._e()])])])})),0)]),t._v(" "),n("div",{staticClass:"md:tw-container md:tw-mx-auto tw-p-5 md:tw-mb-24 tw-mb-8 tn-section",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down","data-aos-duration":"900"}},[t._m(3),t._v(" "),n("div",{staticClass:"tw-m-5 md:tw-m-4 md:tw-container md:tw-mx-auto md:tw-grid md:tw-grid-cols-2 tw-gap-6"},[t._l(t.bookmarks,(function(e){return n("div",{key:e.slug,staticClass:"tw-bg-white tw-rounded-xl tw-shadow-md tw-overflow-hidden tw-mb-6 tw-bg-opacity-25 hover:tw-shadow-xl",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down","data-aos-duration":"900"}},[n("div",{class:e.cover.src?"md:tw-grid md:tw-grid-cols-2":""},[e.cover.src?n("div",{staticClass:"tw-flex tw-items-stretch"},[n("img",{staticClass:"tw-w-full tw-rounded-xl tw-self-centers",attrs:{src:e.cover.src,alt:e.cover.alt}})]):t._e(),t._v(" "),n("div",{staticClass:"tw-p-6"},[n("div",{staticClass:"tw-uppercase tw-tracking-wide tw-text-sm tw-text-indigo-500 tw-font-semibold"},[t._v("\n              "+t._s(e.tag)+"\n            ")]),t._v(" "),n("a",{staticClass:"tw-block tw-mt-1 tw-text-lg tw-leading-tight tw-font-medium tw-text-black hover:tw-underline",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))]),t._v(" "),e.description?n("div",[n("p",{staticClass:"tw-mt-2 tw-text-gray-900"},[t._v("\n                "+t._s(e.description)+"\n              ")])]):t._e()])])])})),t._v(" "),t._m(4),t._v(" "),t._m(5)],2)]),t._v(" "),n("div",{staticClass:"md:tw-container md:tw-mx-auto md:tw-container tn-section"},[n("Social")],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-m-3 md:tw-container md:tw-mx-auto tw-mb-24",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",{staticClass:"linetebel"}),t._v(" "),n("div",{staticClass:"linetipis"}),t._v(" "),n("div",[n("h1",{staticClass:"tw-text-4xl tw-font-bold md:tw-text-6xl tw-subpixel-antialiased tw-text-center"},[n("span",{staticClass:"title-solid"},[t._v("Playlist")]),t._v(" &\n        "),n("span",{staticClass:"title-sketch"},[t._v("Bookmarks")]),n("span",{staticClass:"blink_me"},[t._v("_")])])]),t._v(" "),n("div",{staticClass:"linetipis"}),t._v(" "),n("div",{staticClass:"linetebel"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:tw-container md:tw-mx-auto tw-p-5 md:tw-mb-24 tw-mb-8 tn-section",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",{staticClass:"tw-mb-12 md:tw-mb-24"},[n("h1",{staticClass:"tw-text-4xl tw-font-bold md:tw-text-6xl tw-subpixel-antialiased"},[t._v("\n        Quotes"),n("span",{staticClass:"blink_me"},[t._v("_")])])]),t._v(" "),n("div",{staticClass:"tw-mb-8"},[n("div",{staticClass:"tw-grid tw-grid-cols-5 tw-gap-4"},[n("div",{staticClass:"tw-text-2xl tw-text-gray-800 tw-font-light"},[t._v("\n          Fred Jung\n        ")]),t._v(" "),n("div",{staticClass:"tw-text-justify tw-col-span-5 md:tw-col-span-4 tw-text-xl md:tw-text-4xl tw-text-gray-900 tw-font-light tw-subpixel-antialiased"},[t._v("\n          Sometimes you're flush and sometimes you're bust, and when you're\n          up, it's never as good as it seems, and when you're down, you never\n          think you'll be up again, but life goes on.\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-mb-12 md:tw-mb-24"},[n("h1",{staticClass:"tw-text-4xl tw-font-bold md:tw-text-6xl tw-subpixel-antialiased"},[t._v("\n        Bookmark"),n("span",{staticClass:"blink_me"},[t._v("_")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-mb-12 md:tw-mb-24"},[n("h1",{staticClass:"tw-text-4xl tw-font-bold md:tw-text-6xl tw-subpixel-antialiased"},[t._v("\n        Podcast"),n("span",{staticClass:"blink_me"},[t._v("_")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tw-mb-8"},[e("iframe",{attrs:{src:"https://open.spotify.com/embed-podcast/show/56emqEDuawIbeO5mdLkNoD",width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tw-mb-8"},[e("iframe",{attrs:{src:"https://open.spotify.com/embed-podcast/show/6wPSMH6Yg6ghl4yPZ9YWMf",width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}})])}],!1,null,"baa38fa0",null);e.default=component.exports;installComponents(component,{Social:n(244).default})}}]);