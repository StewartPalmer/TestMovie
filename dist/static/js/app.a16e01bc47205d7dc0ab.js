webpackJsonp([1],{"5uD5":function(t,i){},Dlsl:function(t,i){},Mi88:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("7+uW"),s=(e("Dlsl"),{render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("button",{class:["menu-trigger",{"menu-trigger--open":t.showModal}],staticStyle:{"z-index":"100000"},on:{click:t.menuAction}},[t._v("Menu")]),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showModal?e("div",{attrs:{id:"menu"}},[e("div",{attrs:{id:"menu_inner"}},t._l(t.items,function(i){return e("router-link",{key:i.route,attrs:{to:i.path},nativeOn:{click:function(i){t.menuAction(i)}}},[e("li",[t._v(" "+t._s(i.name))])])}))]):t._e()])],1)},staticRenderFns:[]});var o={name:"app",components:{Navigation:e("VU/8")({name:"Navigation",data:function(){return{showModal:!1,items:[]}},methods:{menuAction:function(){return this.showModal,0==this.showModal?this.showModal=!0:this.showModal=!1,this.showModal}},created:function(){var t=this;this.$router.options.routes.forEach(function(i){t.items.push({name:i.name,path:i.path})})}},s,!1,function(t){e("5uD5")},"data-v-64a488f1",null).exports},watch:{$route:function(t,i){t.path.split("/").length,i.path.split("/").length;this.transitionName="fade"}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("Navigation"),this._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)},staticRenderFns:[]};var r=e("VU/8")(o,a,!1,function(t){e("QSvS")},null,null).exports,l=e("/ocq"),d=e("7t+N"),c=e.n(d);if("undefined"!=typeof window)e("gqkz");var h={props:{options:{type:Object,default:function(){return{}}}},mounted:function(){this.create()},destroyed:function(){c()(this.$el).slick("unslick")},methods:{create:function(){var t=c()(this.$el);t.on("afterChange",this.onAfterChange),t.on("beforeChange",this.onBeforeChange),t.on("breakpoint",this.onBreakpoint),t.on("destroy",this.onDestroy),t.on("edge",this.onEdge),t.on("init",this.onInit),t.on("reInit",this.onReInit),t.on("setPosition",this.onSetPosition),t.on("swipe",this.onSwipe),t.on("lazyLoaded",this.onLazyLoaded),t.on("lazyLoadError",this.onLazyLoadError),t.slick(this.options)},destroy:function(){var t=c()(this.$el);t.off("afterChange",this.onAfterChange),t.off("beforeChange",this.onBeforeChange),t.off("breakpoint",this.onBreakpoint),t.off("destroy",this.onDestroy),t.off("edge",this.onEdge),t.off("init",this.onInit),t.off("reInit",this.onReInit),t.off("setPosition",this.onSetPosition),t.off("swipe",this.onSwipe),t.off("lazyLoaded",this.onLazyLoaded),t.off("lazyLoadError",this.onLazyLoadError),c()(this.$el).slick("unslick")},reSlick:function(){this.destroy(),this.create()},next:function(){c()(this.$el).slick("slickNext")},prev:function(){c()(this.$el).slick("slickPrev")},pause:function(){c()(this.$el).slick("slickPause")},play:function(){c()(this.$el).slick("slickPlay")},goTo:function(t,i){c()(this.$el).slick("slickGoTo",t,i)},currentSlide:function(){return c()(this.$el).slick("slickCurrentSlide")},add:function(t,i,e){c()(this.$el).slick("slickAdd",t,i,e)},remove:function(t,i){c()(this.$el).slick("slickRemove",t,i)},filter:function(t){c()(this.$el).slick("slickFilter",t)},unfilter:function(){c()(this.$el).slick("slickUnfilter")},getOption:function(t){c()(this.$el).slick("slickGetOption",t)},setOption:function(t,i,e){c()(this.$el).slick("slickSetOption",t,i,e)},setPosition:function(){c()(this.$el).slick("setPosition")},onAfterChange:function(t,i,e){this.$emit("afterChange",t,i,e)},onBeforeChange:function(t,i,e,n){this.$emit("beforeChange",t,i,e,n)},onBreakpoint:function(t,i,e){this.$emit("breakpoint",t,i,e)},onDestroy:function(t,i){this.$emit("destroy",t,i)},onEdge:function(t,i,e){this.$emit("edge",t,i,e)},onInit:function(t,i){this.$emit("init",t,i)},onReInit:function(t,i){this.$emit("reInit",t,i)},onSetPosition:function(t,i){this.$emit("setPosition",t,i)},onSwipe:function(t,i,e){this.$emit("swipe",t,i,e)},onLazyLoaded:function(t,i,e,n){this.$emit("lazyLoaded",t,i,e,n)},onLazyLoadError:function(t,i,e,n){this.$emit("lazyLoadError",t,i,e,n)}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},f={name:"MainSlider",data:function(){return{slickOptions:{slidesToShow:1.5,slidesToScroll:1,infinite:!1,arrows:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]},sliderData:[{title:"About Test",subTitle:"Find out more about the film",background:"static/POSTER_v3.jpg",navigation:"./About"},{title:"The Crew",subTitle:"Find out more about the film",background:"static/IMG_9030.JPG",navigation:"./Team"}]}},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},reInit:function(){var t=this;this.$nextTick(function(){t.$refs.slick.reSlick()})}},components:{slick:e("VU/8")(h,u,!1,null,null,null).exports}},m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"fade","transition-mode":"in-out"}},[e("div",{staticClass:"slider_container"},[e("slick",{ref:"slick",attrs:{options:t.slickOptions}},t._l(t.sliderData,function(i){return e("div",{key:i.title,staticClass:"slider_element"},[e("router-link",{attrs:{to:i.navigation}},[e("div",{staticClass:"slider_inner",style:{"background-image":"url("+i.background+")"}},[e("div",{staticClass:"slider_content"},[e("h1",[t._v(t._s(i.title))]),t._v(" "),e("h2",{staticClass:"slider_sub-title"},[t._v(t._s(i.subTitle))])])])])],1)}))],1)])},staticRenderFns:[]};var p=e("VU/8")(f,m,!1,function(t){e("kzmp")},"data-v-357725fa",null).exports,v={name:"About",data:function(){return{data:"adddatahere"}},methods:{scrollToEnd:function(){window.scrollTo(0,300,0)}}},_={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"hero-image",staticStyle:{"background-image":"url(static/brock5.jpg)"},attrs:{id:"scroll-down-js"}},[t._m(0),t._v(" "),e("div",{staticClass:"hero-image_scroll",on:{click:function(i){t.scrollToEnd()}}})]),t._v(" "),t._m(1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hero-image_inner"},[i("div",{staticClass:"hero-image_content"},[i("h1",[this._v("About Test")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"sidebyside "},[i("div",{staticClass:"sidebyside__inner "},[i("div",{staticClass:"sidebyside__half"},[i("div",{staticClass:"sidebyside__text"},[i("div",{staticClass:"title-block"},[i("div",{staticClass:"title-block__pretitle"},[i("span",[this._v("Lorem ipsum dolor sit amet")])]),this._v(" "),i("div",{staticClass:"title-block__title"},[i("h2",[this._v("What is TEST")])]),this._v(" "),i("div",{staticClass:"title-block__subtitle"},[i("span",[this._v("Lorem ipsum dolor sit amet")])])]),this._v(" "),i("div",{staticClass:"sidebyside__bodytext"},[i("p",[this._v("\r\n                        TEST is a Feature film about a young amateur Bodybuilder, Eddie, who must balance his relationship with his suffocating, religious mother and his manipulative coach, who introduces Eddie to the world of steroids and exploitation, all in the name of the sport of Bodybuilding.")]),this._v(" "),i("p",[this._v("\r\n                      I competed in my first bodybuilding show when I was 20, and I won first place in the middle weight division. I lost terribly in the overall division, but that's a story for another time. During my time competing, I met some of the most dedicated and determined men and women. In Film, bodybuilders are a punchline. They're portrayed as big, clunky, neanderthal-types. But behind the stereotype is a vast world of intricate science, physically-demanding training, and more self-discipline than most can understand\r\n                    ")])])])]),this._v(" "),i("div",{staticClass:"sidebyside__half sidebyside__half--image",staticStyle:{"background-image":"url(static/tank.jpeg)"}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"sidebyside"},[i("div",{staticClass:"sidebyside__inner "},[i("div",{staticClass:"sidebyside__half sidebyside__half--imageright",staticStyle:{"background-image":"url(static/brock.test.needle_cropped.jpg)"}}),this._v(" "),i("div",{staticClass:"sidebyside__half"},[i("div",{staticClass:"sidebyside__text"},[i("div",{staticClass:"sidebyside__bodytext"},[i("p",[this._v("\r\n                         However, my personal battle with steroid abuse is what prompted me to write TEST. I was addicted, and over the course of a couple years I lost a couple friends who were addicted as well, due to heart failure. \r\n                        ")]),this._v(" "),i("p",[this._v('\r\n                           Physical perfection is a huge issue in the world. We are bombarded with images every day of what we "should" look like. The bodybuilding world is a testament to that. I want to explore the truth of the industry for a lot of young men and women.\r\n                        ')])])])])])])}]};var k=e("VU/8")(v,_,!1,function(t){e("Mi88")},"data-v-637069a5",null).exports;n.a.use(l.a);var y=new l.a({routes:[{path:"/",name:"Home",component:p},{path:"/About/",name:"About",component:k}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:y,template:"<App/>",components:{App:r}})},QSvS:function(t,i){},kzmp:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.a16e01bc47205d7dc0ab.js.map