(window.webpackJsonp=window.webpackJsonp||[]).push([[16,4,6,7,11,12,13],{241:function(t,e,n){"use strict";var l=n(242),o=n.n(l);n(243);e.a={mounted:function(){o.a.init({})}}},244:function(t,e,n){"use strict";n.r(e);var l={computed:{}},o=n(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-flex tw-justify-around tw-m-5 md:tw-grid-flow-row md:tw-justify-end tw-gap-4"},[n("div",[n("a",{attrs:{href:"mailto:tnloc@outlook.com",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fas","envelope"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://github.com/tanloc0598",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.facebook.com/ngtnloc/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.instagram.com/tnloc/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"],size:"lg",color:"grey"}})],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.linkedin.com/in/nguyen-tan-loc-46862a125/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"lg",color:"grey"}})],1)])])}),[],!1,null,"838f77e4",null);e.default=component.exports},245:function(t,e,n){"use strict";n.r(e);n(11),n(86);var l={props:{title:String,content:Object,contents:Array},filters:{capitalize:function(t){return t?(t=t.toString()).toUpperCase():""}}},o=n(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:tw-p-8 md:tw-container md:tw-mx-auto"},[t.title?n("div",{staticClass:"tw-mb-8"},[n("span",{staticClass:"tw-tracking-wider tw-text-2xl"},[t._v(t._s(t._f("capitalize")(t.title)))])]):t._e(),t._v(" "),n("div",[n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[t.contents?n("div",[n("div",{staticClass:"tw-col-span-2 tw-text-sm"},t._l(t.contents,(function(t){return n("nuxt-content",{key:t.slug,attrs:{document:t}})})),1)]):t._e(),t._v(" "),t.content?n("div",[n("div",{staticClass:"tw-col-span-2 tw-text-sm"}),t._v(" "),n("nuxt-content",{attrs:{document:t.content}})],1):t._e()])])])])])])}),[],!1,null,null,null);e.default=component.exports},248:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{}},mounted:function(){}},o=n(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-h-screen tw-flex tw-items-stretch tw-p-3 md:tw-p-8"},[n("div",{staticClass:"tw-self-center"},[n("p",{staticClass:"tw-text-4xl tw-font-extrabold md:tw-text-6xl tw-subpixel-antialiased tw-leading-none shadow-md"},[t._v("\n      Tnloc"),n("span",{staticClass:"blink_me"},[t._v("_")])]),t._v(" "),n("p",{staticClass:"tw-text-4xl tw-font-extrabold md:tw-text-6xl tw-subpixel-antialiased tw-leading-none"},[t._v("\n      Developer\n    ")]),t._v(" "),n("p",{staticClass:"tw-text-4xl tw-font-extrabold md:tw-text-6xl tw-subpixel-antialiased tw-leading-none"},[t._v("\n      Coffee Lover\n    ")])])])}],!1,null,null,null);e.default=component.exports},249:function(t,e,n){"use strict";n.r(e);n(11),n(86);var l={filters:{capitalize:function(t){return t?(t=t.toString()).toUpperCase():""}},props:{title:String,items:Array}},o=n(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:tw-p-8 md:tw-container md:tw-mx-auto"},[n("div",{staticClass:"tw-mb-8"},[n("span",{staticClass:"tw-tracking-wider tw-text-2xl"},[t._v(t._s(t._f("capitalize")(t.title)))])]),t._v(" "),n("div",t._l(t.items,(function(e){return n("div",{key:e.slug,staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v(" "+t._s(e.date)+" ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{staticClass:"tw-text-sm"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"tw-col-span-2"},[n("nuxt-content",{attrs:{document:e}})],1)])])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,n){"use strict";n.r(e);var l={mixins:[n(241).a],data:function(){return{}},methods:{}},o=n(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:tw-p-8 md:tw-container md:tw-mx-auto"},[n("div",{staticClass:"tw-mb-8"},[n("span",{staticClass:"tw-tracking-wider tw-text-2xl"},[t._v("WORKING EXPERIENCE")])]),t._v(" "),n("div",{},[n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v(" Oct 2020 - now ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{staticClass:"tw-text-sm"},[t._v("Fullstack Developer")])]),t._v(" "),n("div",{staticClass:"tw-col-span-2"},[t._v("\n              @ "),n("span",{staticClass:"tw-text-red-600"},[t._v("J&T Express Vietnam")])])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v(" Jan 2020 - Apr 2020 ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{staticClass:"tw-text-sm"},[t._v("Web development Internship ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-2"},[t._v("\n              @ "),n("span",{staticClass:"tw-text-blue-500"},[t._v("Freelancer")]),n("span",{staticClass:"tw-text-orange-500"},[t._v("Viet")])])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v(" Jan 2018 - Aug 2018 ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{staticClass:"tw-text-sm"},[t._v("Infrastructure Internship ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-2"},[t._v("\n              @ "),n("span",{staticClass:"tw-text-orange-700"},[t._v("AseanFan")])])])])])])])])}],!1,null,null,null);e.default=component.exports},251:function(t,e,n){"use strict";n.r(e);var l={mixins:[n(241).a],data:function(){return{}},methods:{}},o=n(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:tw-p-8 md:tw-container md:tw-mx-auto"},[n("div",{staticClass:"tw-mb-8"},[n("span",{staticClass:"tw-tracking-wider tw-text-2xl"},[t._v("MY PROJECTS")])]),t._v(" "),n("div",[n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Mar 2021 - Now ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v(" Persona ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"},[t._v("\n              A Minimalist personal portfolio website built on\n              "),n("span",{staticClass:"tw-text-green-700"},[t._v("Vue")]),t._v(",\n              "),n("span",{staticClass:"tw-text-green-900"},[t._v("Nuxt")]),n("span",{staticClass:"tw-text-green-700"},[t._v("JS")]),t._v(" and TailwindCSS.\n            ")])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Oct 2020 - Now ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v("\n                OA @\n                "),n("span",{staticClass:"tw-text-red-600"},[t._v("J&T Express Vietnam")])])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"},[t._v("\n              Office automation system of\n              "),n("span",{staticClass:"tw-text-red-600"},[t._v("J&T Express Vietnam")]),t._v(". Build\n              on Laravel and Nuxt framework.\n            ")])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Sep 2020")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v(" Indiegogo Campaign crawler")])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"},[t._v("\n              A crawler using NestJS, PuppeteerJS, and MongoDB to get backer's\n              data, fund progress, raised amount ... because of the need for\n              campaigners in the time of Indiegogo closed some of their API.\n            ")])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Jul 2020 - Oct 2020 ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v("\n                Specific subject registration web app for school\n              ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"})])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Apr 2020")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v(" Covid19Nhom9 ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"},[t._v("\n              Mini web app built on ExpressJS, MySQL, and PugJS to tracking\n              the number of covid-19 cases in Vietnam and the world using\n              Government's API data. Besides that, Covid19Nhom9 also gathers\n              the latest news about Covid-19's topic from top newspapers in\n              Vietnam ( Tuoitre.vn, dantri.vn, VNExpress,... )\n            ")])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Mar 2020")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v("\n                40 Tuần yêu thương @\n                "),n("span",{staticClass:"tw-text-blue-500"},[t._v("Freelancer")]),n("span",{staticClass:"tw-text-orange-500"},[t._v("Viet")])])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"},[t._v('\n              "40 Tuần yêu thương" (40 weeks of love)- Doppelherz Vietnam\'s\n              campaign to give helpful information for pregnant mothers.\n            ')])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Feb 2020")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v("\n                NitroTech @ "),n("span",{staticClass:"tw-text-blue-500"},[t._v("Freelancer")]),n("span",{staticClass:"tw-text-orange-500"},[t._v("Viet")])])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"},[t._v("\n              NITRO TECH ASIA, Inc. landing page\n            ")])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Feb 2020")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v("\n                CorpTools @ "),n("span",{staticClass:"tw-text-blue-500"},[t._v("Freelancer")]),n("span",{staticClass:"tw-text-orange-500"},[t._v("Viet")])])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"},[t._v("\n              A place that connects people who are looking for a part-time job\n              to the agency whose running their campaigns.\n            ")])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Feb 2020")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v("\n                FlamingoCorp website @\n                "),n("span",{staticClass:"tw-text-blue-500"},[t._v("Freelancer")]),n("span",{staticClass:"tw-text-orange-500"},[t._v("Viet")])])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"},[t._v("\n              Company website\n            ")])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Dec 2019")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v(" BookStore ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"},[t._v("\n              Simple book store website built on Laravel for managing and\n              selling book online.\n            ")])])])])]),t._v(" "),n("div",{staticClass:"tw-grid tw-grid-cols-4 tw-gap-4 tw-mb-8",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",[n("span",[t._v("Jun 2019")])]),t._v(" "),n("div",{staticClass:"tw-col-span-3"},[n("div",{staticClass:"tw-grid tw-gap-1"},[n("div",{staticClass:"tw-col-span-2"},[n("div",{staticClass:"tw-col-span-2"},[n("span",{},[t._v(" Tatcaphim.loc ")])]),t._v(" "),n("div",{staticClass:"tw-col-span-2 tw-text-sm tw-text-justify"},[t._v("\n              A template for movie website built on UIkit - A lightweight and\n              modular front-end framework for developing fast and powerful web\n              interfaces.\n            ")])])])])])])])}],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);var l=n(6),o=(n(38),{mixins:[n(241).a],asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("text","shortIntro").fetch();case 3:return l=e.sent,e.next=6,n("skill").sortBy("createdAt","desc").fetch();case 6:return o=e.sent,e.next=9,n("education").sortBy("createdAt","desc").fetch();case 9:return c=e.sent,e.abrupt("return",{shortIntro:l,skills:o,education:c});case 11:case"end":return e.stop()}}),e)})))()},data:function(){return{}},methods:{}}),c=n(18),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md:tw-container md:tw-mx-auto",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-up"}},[n("AboutTitle")],1),t._v(" "),n("div",{staticClass:"tw-m-5 md:tw-m-4",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down","data-aos-anchor-placement":"center-bottom"}},[n("List",{attrs:{content:t.shortIntro}})],1),t._v(" "),n("div",{staticClass:"tw-m-5 md:tw-m-4"},[n("div",{attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("TimelineList",{attrs:{title:"EDUCATION BACKGROUND",items:t.education}})],1),t._v(" "),n("div",{attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("List",{attrs:{title:"skills",contents:t.skills}})],1),t._v(" "),n("div",{attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("AboutWorkingExperience")],1),t._v(" "),n("div",{attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("AboutProject")],1)]),t._v(" "),n("div",{staticClass:"md:tw-container md:tw-mx-auto"},[n("Social")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AboutTitle:n(248).default,List:n(245).default,TimelineList:n(249).default,AboutWorkingExperience:n(250).default,AboutProject:n(251).default,Social:n(244).default})}}]);