(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-myGroupDetail-myGroupDetail"],{"0665":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-divider",style:{height:t.height+"rpx"}},[e("v-uni-view",{staticClass:"tui-divider-line",style:{width:t.width,background:t.getBgColor(t.gradual,t.gradualColor,t.dividerColor)}}),e("v-uni-view",{staticClass:"tui-divider-text",style:{color:t.color,fontSize:t.size+"rpx",lineHeight:t.size+"rpx",backgroundColor:t.backgroundColor,fontWeight:t.bold?"bold":"normal"}},[t._t("default")],2)],1)},o=[]},"11b6":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-modal__container",class:[t.show?"tui-modal-show":""],style:{zIndex:t.zIndex},on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i)}}},[e("v-uni-view",{staticClass:"tui-modal-box",class:[t.fadeIn||t.show?"tui-modal-normal":"tui-modal-scale",t.show?"tui-modal-show":""],style:{width:t.width,padding:t.padding,borderRadius:t.radius,backgroundColor:t.backgroundColor,zIndex:t.zIndex+1}},[t.custom?e("v-uni-view",[t._t("default")],2):e("v-uni-view",[t.title?e("v-uni-view",{staticClass:"tui-modal-title"},[t._v(t._s(t.title))]):t._e(),e("v-uni-view",{staticClass:"tui-modal-content",class:[t.title?"":"tui-mtop"],style:{color:t.color,fontSize:t.size+"rpx"}},[t._v(t._s(t.content))]),e("v-uni-view",{staticClass:"tui-modalBtn-box",class:[2!=t.button.length?"tui-flex-column":""]},[t._l(t.button,(function(i,a){return[e("v-uni-button",{key:a+"_0",staticClass:"tui-modal-btn",class:["tui-"+(i.type||"primary")+(i.plain?"-outline":""),2!=t.button.length?"tui-btn-width":"",t.button.length>2?"tui-mbtm":"","circle"==t.shape?"tui-circle-btn":""],attrs:{"hover-class":"tui-"+(i.plain?"outline":i.type||"primary")+"-hover","data-index":a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClick.apply(void 0,arguments)}}},[t._v(t._s(i.text||"确定"))])]}))],2)],1)],1),e("v-uni-view",{staticClass:"tui-modal-mask",class:[t.show?"tui-mask-show":""],style:{zIndex:t.maskZIndex},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClickCancel.apply(void 0,arguments)}}})],1)},o=[]},"1b0c":function(t,i,e){"use strict";e.r(i);var a=e("d38b"),n=e("cd40");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("abe6");var r,s=e("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"497f7da0",null,!1,a["a"],r);i["default"]=u.exports},"1c7a":function(t,i,e){"use strict";var a=e("c598"),n=e.n(a);n.a},2143:function(t,i,e){"use strict";e.r(i);var a=e("6afd"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"29ae":function(t,i,e){var a=e("c067");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("146a340c",a,!0,{sourceMap:!1,shadowMode:!1})},"3dfc":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"tuiListCell",emits:["click"],props:{arrow:{type:Boolean,default:!1},arrowColor:{type:String,default:""},hover:{type:Boolean,default:!0},unlined:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#333"},radius:{type:Boolean,default:!1},arrowRight:{type:Boolean,default:!0},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};i.default=a},"3e54":function(t,i,e){"use strict";e.r(i);var a=e("4d82"),n=e("aead");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("5283");var r,s=e("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"7942d763",null,!1,a["a"],r);i["default"]=u.exports},"4d82":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={tuiDivider:e("67d7").default,tuiCountdown:e("612a").default,tuiButton:e("7cec").default,tuiListCell:e("1b0c").default,tuiModal:e("e9cd").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"tui-goods-item"},[e("v-uni-image",{staticClass:"tui-goods-img",attrs:{src:"/static/images/mall/product/4.jpg"}}),e("v-uni-view",{staticClass:"tui-goods-center"},[e("v-uni-view",{staticClass:"tui-goods-name"},[t._v("欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）")]),e("v-uni-view",{staticClass:"tui-price__box"},[e("v-uni-view",{staticClass:"tui-goods-price"},[e("v-uni-view",{staticClass:"tui-size-24"},[t._v("￥")]),e("v-uni-view",{staticClass:"tui-price-large"},[t._v("118")]),e("v-uni-view",{staticClass:"tui-size-24"},[t._v(".00")]),e("v-uni-text",[t._v("已拼2020件")])],1),e("v-uni-view",{staticClass:"tui-price-tag"},[t._v("2人团")])],1)],1)],1),e("v-uni-view",{staticClass:"tui-group__box tui-mtop__20"},[1!=t.status?e("tui-divider",{attrs:{backgroundColor:"#fff",width:"70%",gradual:!0}},[e("v-uni-view",{staticClass:"tui-divider__content"},[2==t.status?e("v-uni-image",{attrs:{src:t.webURL+"img_invoice_success3x.png"}}):t._e(),e("v-uni-text",[t._v(t._s(2==t.status?"拼团成功":"拼团失败"))])],1)],1):t._e(),1!=t.status?e("v-uni-view",{staticClass:"tui-group__time"},[t._v("开团时间：2020-09-01 12:30:10")]):t._e(),1==t.status?e("v-uni-view",{staticClass:"tui-group__title"},[e("v-uni-text",[t._v("还差")]),e("v-uni-text",{staticClass:"tui-color__red"},[t._v("1")]),e("v-uni-text",[t._v("人，赶快邀请好友来拼团吧")])],1):t._e(),1==t.status?e("v-uni-view",{staticClass:"tui-group-countdown"},[e("v-uni-view",{staticClass:"tui-countdown-right"},[t._v("剩余")]),e("tui-countdown",{attrs:{time:3800,scale:!0,colonColor:"#EB0909",borderColor:"#EB0909",color:"#EB0909"}}),e("v-uni-view",{staticClass:"tui-countdown-left"},[t._v("结束")])],1):t._e(),e("v-uni-view",{staticClass:"tui-user__box"},[e("v-uni-view",{staticClass:"tui-user__item"},[e("v-uni-view",{staticClass:"tui-avatar__box tui-size"},[e("v-uni-image",{staticClass:"tui-size",attrs:{src:t.webURL+"mine_avatar_3x.jpg"}}),e("v-uni-view",{staticClass:"tui-team__leader"},[t._v("团长")])],1),e("v-uni-view",{staticClass:"tui-nickname"},[t._v("不许人间见白头")])],1),2!=t.status?e("v-uni-view",{staticClass:"tui-user__item"},[e("v-uni-view",{staticClass:"tui-avatar__box tui-user__none"},[e("v-uni-image",{staticClass:"tui-size",attrs:{src:t.webURL+"img_not_tuxedo.png"}})],1),e("v-uni-view",{staticClass:"tui-nickname"},[t._v("暂无")])],1):e("v-uni-view",{staticClass:"tui-user__item"},[e("v-uni-view",{staticClass:"tui-avatar__box tui-size"},[e("v-uni-image",{staticClass:"tui-size",attrs:{src:t.webURL+"mine_avatar_3x.jpg"}})],1),e("v-uni-view",{staticClass:"tui-nickname"},[t._v("小可爱本人")])],1)],1),e("v-uni-view",{staticClass:"tui-btn__box"},[e("tui-button",{attrs:{type:"danger",height:"88rpx",shadow:!0,shape:"circle"}},[t._v(t._s(1==t.status?"邀请好友拼团":"查看更多拼团商品"))])],1)],1),1==t.status?e("v-uni-view",{staticClass:"tui-group-rule tui-mtop__20"},[e("tui-list-cell",{attrs:{padding:"30rpx",hover:!1}},[e("v-uni-view",{staticClass:"tui-group__text tui-group__start tui-between"},[e("v-uni-view",{staticClass:"tui-group-title"},[t._v("开团时间")]),e("v-uni-view",{staticClass:"tui-sub__info"},[t._v("2020-09-01 12:30:01")])],1)],1),e("tui-list-cell",{attrs:{padding:"30rpx",arrow:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-group__text tui-between"},[e("v-uni-view",{staticClass:"tui-group-title"},[t._v("拼团规则")]),e("v-uni-view",{staticClass:"tui-sub__info"},[t._v("拼团玩法介绍")])],1)],1),e("v-uni-view",{staticClass:"tui-step__box"},[e("v-uni-view",{staticClass:"tui-step-item"},[e("v-uni-image",{attrs:{src:t.webURL+"img_opengroup_3x.png"}}),e("v-uni-view",{staticClass:"tui-step-text"},[t._v("团长开团")])],1),e("v-uni-view",{staticClass:"tui-step-arrow"},[e("v-uni-image",{attrs:{src:t.webURL+"img_arrow_3x.png"}})],1),e("v-uni-view",{staticClass:"tui-step-item"},[e("v-uni-image",{attrs:{src:t.webURL+"img_invitefriends_3x.png"}}),e("v-uni-view",{staticClass:"tui-step-text"},[t._v("邀请好友")])],1),e("v-uni-view",{staticClass:"tui-step-arrow"},[e("v-uni-image",{attrs:{src:t.webURL+"img_arrow_3x.png"}})],1),e("v-uni-view",{staticClass:"tui-step-item"},[e("v-uni-image",{attrs:{src:t.webURL+"img_spellgroupsuccess_3x.png"}}),e("v-uni-view",{staticClass:"tui-step-text"},[t._v("拼团成功")])],1),e("v-uni-view",{staticClass:"tui-step-arrow"},[e("v-uni-image",{attrs:{src:t.webURL+"img_arrow_3x.png"}})],1),e("v-uni-view",{staticClass:"tui-step-item"},[e("v-uni-image",{attrs:{src:t.webURL+"img_tosend_3x.png"}}),e("v-uni-view",{staticClass:"tui-step-text"},[t._v("等待发货")])],1)],1)],1):t._e(),e("tui-divider",{attrs:{width:"50%",gradual:!0}},[e("v-uni-text",{staticClass:"tui-hot__title"},[t._v("热销爆品")])],1),e("v-uni-view",{staticClass:"tui-product__box"},[e("v-uni-view",{staticClass:"tui-product-list"},[e("v-uni-view",{staticClass:"tui-product-container"},[t._l(t.productList,(function(i,a){return(a+1)%2!=0?[e("v-uni-view",{key:a+"_0",staticClass:"tui-pro-item",attrs:{"hover-class":"tui-hover","hover-start-time":150},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.detail.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"tui-pro-img",attrs:{src:"/static/images/mall/product/"+i.img+".jpg",mode:"widthFix"}}),e("v-uni-view",{staticClass:"tui-pro-content"},[e("v-uni-view",{staticClass:"tui-pro-tit"},[t._v(t._s(i.name))]),e("v-uni-view",[e("v-uni-view",{staticClass:"tui-price__box"},[e("v-uni-view",{staticClass:"tui-price"},[e("v-uni-view",{staticClass:"tui-price__small"},[t._v("￥")]),e("v-uni-view",{staticClass:"tui-price__large"},[t._v(t._s(i.sale))]),e("v-uni-view",{staticClass:"tui-price__small"},[t._v(".00")])],1),e("v-uni-view",{staticClass:"tui-price__original"},[t._v("￥"+t._s(i.factory)+".00")])],1),e("v-uni-view",{staticClass:"tui-group-text"},[t._v("已有"+t._s(i.payNum)+"人拼团")]),e("v-uni-view",{staticClass:"tui-group-btn"},[e("v-uni-view",{staticClass:"tui-flex-btn tui-color-red"},[t._v("2人团")]),e("v-uni-view",{staticClass:"tui-flex-btn"},[t._v("去拼团")])],1)],1)],1)],1)]:t._e()}))],2),e("v-uni-view",{staticClass:"tui-product-container"},[t._l(t.productList,(function(i,a){return(a+1)%2==0?[e("v-uni-view",{key:a+"_0",staticClass:"tui-pro-item",attrs:{"hover-class":"tui-hover","hover-start-time":150},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.detail.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"tui-pro-img",attrs:{src:"/static/images/mall/product/"+i.img+".jpg",mode:"widthFix"}}),e("v-uni-view",{staticClass:"tui-pro-content"},[e("v-uni-view",{staticClass:"tui-pro-tit"},[t._v(t._s(i.name))]),e("v-uni-view",[e("v-uni-view",{staticClass:"tui-price__box"},[e("v-uni-view",{staticClass:"tui-price"},[e("v-uni-view",{staticClass:"tui-price__small"},[t._v("￥")]),e("v-uni-view",{staticClass:"tui-price__large"},[t._v(t._s(i.sale))]),e("v-uni-view",{staticClass:"tui-price__small"},[t._v(".00")])],1),e("v-uni-view",{staticClass:"tui-price__original"},[t._v("￥"+t._s(i.factory)+".00")])],1),e("v-uni-view",{staticClass:"tui-group-text"},[t._v("已有"+t._s(i.payNum)+"人拼团")]),e("v-uni-view",{staticClass:"tui-group-btn"},[e("v-uni-view",{staticClass:"tui-flex-btn tui-color-red"},[t._v("2人团")]),e("v-uni-view",{staticClass:"tui-flex-btn"},[t._v("去拼团")])],1)],1)],1)],1)]:t._e()}))],2)],1)],1),e("tui-modal",{attrs:{show:t.modal,shape:"circle",padding:"30rpx 40rpx",custom:!0}},[e("v-uni-view",{staticClass:"tui-modal__title"},[t._v("拼团玩法")]),e("v-uni-view",{staticClass:"tui-modal__p"},[t._v("1.全民拼团，所有用户都可直接参团或开团；")]),e("v-uni-view",{staticClass:"tui-modal__p"},[t._v("2.拼团成功，指开团在规定时间内达到规定成团人数；")]),e("v-uni-view",{staticClass:"tui-modal__p"},[t._v("3.拼团失败，指开团后在规定时间内未能找到相应的人数的好友参团，该团失败，系统取消该团订单，退款原路退回。")]),e("v-uni-view",{staticClass:"tui-modal__btn"},[e("tui-button",{attrs:{type:"danger",shape:"circle",width:"280rpx",height:"68rpx",size:26},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.modal=!1}}},[t._v("我知道了")])],1)],1)],1)},o=[]},5283:function(t,i,e){"use strict";var a=e("6476"),n=e.n(a);n.a},"5acc":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"tuiDivider",props:{height:{type:Number,default:100},width:{type:String,default:"100%"},dividerColor:{type:String,default:"#e5e5e5"},color:{type:String,default:"#999"},size:{type:Number,default:24},bold:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#fafafa"},gradual:{type:Boolean,default:!1},gradualColor:{type:Array,default:function(){return["#eee","#ccc"]}}},methods:{getBgColor:function(t,i,e){var a=e;return t&&(a="linear-gradient(to right,"+i[0]+","+i[1]+","+i[1]+","+i[0]+")"),a}}};i.default=a},6476:function(t,i,e){var a=e("a077");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("a9ff6f6e",a,!0,{sourceMap:!1,shadowMode:!1})},"67d7":function(t,i,e){"use strict";e.r(i);var a=e("0665"),n=e("e4c8");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("ad7f");var r,s=e("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"485b358a",null,!1,a["a"],r);i["default"]=u.exports},"6afd":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"tuiModal",emits:["click","cancel"],props:{show:{type:Boolean,default:!1},width:{type:String,default:"84%"},backgroundColor:{type:String,default:"#fff"},padding:{type:String,default:"40rpx 64rpx"},radius:{type:String,default:"24rpx"},title:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"#999"},size:{type:Number,default:28},shape:{type:String,default:"square"},button:{type:Array,default:function(){return[{text:"取消",type:"red",plain:!0},{text:"确定",type:"red",plain:!1}]}},maskClosable:{type:Boolean,default:!0},fadeIn:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},zIndex:{type:Number,default:9997},maskZIndex:{type:Number,default:9990}},data:function(){return{}},methods:{handleClick:function(t){if(this.show){var i=t.currentTarget.dataset;this.$emit("click",{index:Number(i.index)})}},handleClickCancel:function(){this.maskClosable&&this.$emit("cancel")}}};i.default=a},"97ad":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{webURL:"https://thorui.cn/images/mall/group/",modal:!1,productList:[{img:1,name:"欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）",sale:599,factory:899,payNum:2342},{img:2,name:"德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",sale:29,factory:69,payNum:999},{img:3,name:"【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",sale:299,factory:699,payNum:666},{img:4,name:"百雀羚套装女补水保湿护肤品",sale:1599,factory:2899,payNum:236},{img:5,name:"百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",sale:599,factory:899,payNum:2399},{img:6,name:"短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",sale:599,factory:899,payNum:2399},{img:1,name:"欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",sale:599,factory:899,payNum:2342},{img:2,name:"德国DMK进口牛奶",sale:29,factory:69,payNum:999},{img:3,name:"【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",sale:299,factory:699,payNum:666},{img:4,name:"百雀羚套装女补水保湿护肤品",sale:1599,factory:2899,payNum:236}],status:1}},onLoad:function(t){this.status=t.status||1},methods:{showModal:function(){this.modal=!0},detail:function(){this.tui.href("/pages/index/groupDetail/groupDetail")}}};i.default=a},a077:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".tui-goods-item[data-v-7942d763]{width:100%;padding:%?20?% %?25?%;box-sizing:border-box;display:flex;justify-content:space-between;background-color:#fff}.tui-goods-img[data-v-7942d763]{width:%?180?%;height:%?180?%;display:block;flex-shrink:0}.tui-goods-center[data-v-7942d763]{flex:1;padding:%?12?% %?12?%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between}.tui-goods-name[data-v-7942d763]{word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:%?26?%;line-height:%?32?%}.tui-price__box[data-v-7942d763]{width:100%;display:flex;align-items:center;justify-content:space-between}.tui-goods-price[data-v-7942d763]{width:100%;display:flex;align-items:flex-end;font-size:%?24?%;color:#eb0909}.tui-goods-price uni-text[data-v-7942d763]{font-size:%?24?%;line-height:%?24?%;color:#999;padding-left:%?20?%}.tui-size-24[data-v-7942d763]{font-size:%?24?%;line-height:%?24?%}.tui-price-large[data-v-7942d763]{font-size:%?32?%;line-height:%?30?%;font-weight:500}.tui-price-tag[data-v-7942d763]{height:%?38?%;border:%?1?% solid #eb0909;border-radius:%?6?%;display:flex;align-items:center;justify-content:center;font-size:%?24?%;line-height:%?24?%;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:100% center;transform-origin:100% center;border-radius:%?6?%;padding:0 %?8?%;color:#eb0909;flex-shrink:0}.tui-mtop__20[data-v-7942d763]{margin-top:%?20?%}.tui-divider__content[data-v-7942d763]{display:flex;align-items:center}.tui-divider__content uni-image[data-v-7942d763]{width:%?36?%;height:%?36?%;margin-right:%?20?%}.tui-divider__content uni-text[data-v-7942d763]{font-size:%?34?%;line-height:%?34?%;color:#000;font-weight:700}.tui-group__time[data-v-7942d763]{font-size:%?24?%;font-weight:400;color:#999;text-align:center}.tui-group__box[data-v-7942d763]{width:100%;padding:%?50?% %?25?%;box-sizing:border-box;background-color:#fff}.tui-group__title[data-v-7942d763]{width:100%;font-size:%?34?%;line-height:%?34?%;font-weight:500;text-align:center}.tui-color__red[data-v-7942d763]{color:#eb0909}.tui-group-countdown[data-v-7942d763]{display:flex;align-items:center;justify-content:center;font-size:%?24?%;color:#666;padding-top:%?20?%}.tui-countdown-right[data-v-7942d763]{padding-right:%?6?%}.tui-countdown-left[data-v-7942d763]{padding-left:%?6?%}.tui-user__box[data-v-7942d763]{width:100%;display:flex;align-items:center;justify-content:center;padding-top:%?60?%}.tui-user__item[data-v-7942d763]{max-width:%?128?%;margin:0 %?40?%}.tui-size[data-v-7942d763]{width:%?100?%;height:%?100?%;border-radius:50%}.tui-avatar__box[data-v-7942d763]{position:relative;border:%?4?% solid #eb0909}.tui-user__none[data-v-7942d763]{width:%?108?%;height:%?108?%;border:0}.tui-avatar__box uni-image[data-v-7942d763]{display:block}.tui-team__leader[data-v-7942d763]{position:absolute;width:%?64?%;height:%?28?%;font-size:%?24?%;background-color:#eb0909;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:30px;left:50%;top:%?-14?%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:10}.tui-nickname[data-v-7942d763]{font-size:%?24?%;color:#999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;padding-top:%?12?%}.tui-btn__box[data-v-7942d763]{padding-top:%?60?%}.tui-group__text[data-v-7942d763]{width:100%;display:flex;align-items:center}.tui-group-title[data-v-7942d763]{font-size:%?30?%;line-height:%?30?%;padding-left:%?16?%;border-left:2px solid #eb0909;box-sizing:border-box}.tui-sub__info[data-v-7942d763]{font-size:%?26?%;padding-right:%?30?%}.tui-group__start .tui-group-title[data-v-7942d763]{border-left:0;padding-left:0}.tui-group__start .tui-sub__info[data-v-7942d763]{padding-right:0}.tui-step__box[data-v-7942d763]{width:100%;height:%?210?%;background:#fff;padding:0 %?60?%;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box}.tui-step-item[data-v-7942d763]{display:flex;align-items:center;justify-content:center;flex-direction:column;font-size:%?26?%;color:#666}.tui-step-item uni-image[data-v-7942d763]{width:%?64?%;height:%?55?%;flex-shrink:0}.tui-step-item uni-image[data-v-7942d763]:first-child{width:%?60?%!important}.tui-step-arrow[data-v-7942d763]{height:%?90?%}.tui-step-arrow uni-image[data-v-7942d763]{width:%?11?%;height:%?20?%;flex-shrink:0}.tui-step-text[data-v-7942d763]{line-height:%?26?%;padding-top:%?24?%}.tui-between[data-v-7942d763]{justify-content:space-between}\n\n/*拼团玩法介绍 modal*/.tui-modal__title[data-v-7942d763]{text-align:center;font-weight:700;padding-bottom:%?8?%}.tui-modal__p[data-v-7942d763]{font-size:%?26?%;color:#888;padding-top:%?20?%}.tui-modal__btn[data-v-7942d763]{width:100%;padding:%?60?% 0 %?20?%;display:flex;justify-content:center}.tui-hot__title[data-v-7942d763]{font-size:%?30?%;line-height:%?30?%;color:#333;font-weight:700}\n\n/*========商品 start======*/.tui-product__box[data-v-7942d763]{width:100%;padding:0 %?25?% %?60?% %?25?%;box-sizing:border-box}.tui-product-list[data-v-7942d763]{display:flex;justify-content:space-between;flex-direction:row;flex-wrap:wrap;box-sizing:border-box}.tui-product-container[data-v-7942d763]{flex:1;margin-right:%?10?%}.tui-product-container[data-v-7942d763]:last-child{margin-right:0}.tui-pro-item[data-v-7942d763]{width:100%;margin-bottom:%?10?%;background:#fff;box-sizing:border-box;border-radius:%?12?%;overflow:hidden;transition:all .15s ease-in-out}.tui-pro-img[data-v-7942d763]{width:100%;display:block;flex-shrink:0;background-color:#f5f5f5}.tui-proimg-list[data-v-7942d763]{width:%?280?%;height:%?280?%!important;flex-shrink:0;border-radius:%?12?%}.tui-pro-content[data-v-7942d763]{flex:1;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;padding:%?20?%}.tui-pro-tit[data-v-7942d763]{color:#2e2e2e;font-size:%?26?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.tui-price__box[data-v-7942d763]{width:100%;display:flex;align-items:center;padding-top:%?12?%}.tui-price[data-v-7942d763]{display:flex;align-items:flex-end;color:#eb0909}.tui-price__small[data-v-7942d763]{font-size:%?24?%;line-height:%?24?%}.tui-price__large[data-v-7942d763]{font-size:%?34?%;line-height:%?32?%;font-weight:600}.tui-price__original[data-v-7942d763]{font-size:%?24?%;line-height:%?24?%;text-decoration:line-through;color:#999;padding-top:%?10?%;padding-left:%?12?%}.tui-group-btn[data-v-7942d763]{max-width:%?312?%;height:%?48?%;border-radius:%?6?%;background:#eb0909;display:flex;align-items:center;padding:%?4?%;margin-top:%?10?%;box-sizing:border-box}.tui-flex-btn[data-v-7942d763]{height:100%;flex:1;text-align:center;font-size:%?26?%;line-height:%?26?%;font-weight:400;color:#fff;display:flex;align-items:center;justify-content:center}.tui-flex-btn[data-v-7942d763]:first-child{background:#fff}.tui-group-text[data-v-7942d763]{font-size:%?25?%;line-height:%?25?%;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:0 center;transform-origin:0 center;padding-top:%?30?%;color:#999}.tui-color-red[data-v-7942d763]{color:#eb0909}\n\n/*======商品======= end*/",""]),t.exports=i},abe6:function(t,i,e){"use strict";var a=e("c64d"),n=e.n(a);n.a},ad7f:function(t,i,e){"use strict";var a=e("29ae"),n=e.n(a);n.a},aead:function(t,i,e){"use strict";e.r(i);var a=e("97ad"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},bdf1:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.tui-list-cell[data-v-497f7da0]{position:relative;width:100%;box-sizing:border-box}.tui-radius[data-v-497f7da0]{border-radius:%?6?%;overflow:hidden}.tui-cell-hover[data-v-497f7da0]{background-color:#f1f1f1!important}.tui-list-cell[data-v-497f7da0]::after{content:"";position:absolute;border-bottom:1px solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0;pointer-events:none}.tui-line-left[data-v-497f7da0]::after{left:%?30?%!important}.tui-line-right[data-v-497f7da0]::after{right:%?30?%!important}.tui-cell-unlined[data-v-497f7da0]::after{border-bottom:0!important}.tui-cell-arrow[data-v-497f7da0]::before{content:" ";height:10px;width:10px;border-width:2px 2px 0 0;border-color:silver;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0);position:absolute;top:50%;margin-top:-6px;right:%?30?%}.tui-arrow-right[data-v-497f7da0]::before{right:0!important}.tui-arrow-gray[data-v-497f7da0]::before{border-color:#666!important}.tui-arrow-white[data-v-497f7da0]::before{border-color:#fff!important}.tui-arrow-warning[data-v-497f7da0]::before{border-color:#ff7900!important}.tui-arrow-success[data-v-497f7da0]::before{border-color:#19be6b!important}.tui-arrow-danger[data-v-497f7da0]::before{border-color:#eb0909!important}',""]),t.exports=i},c067:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".tui-divider[data-v-485b358a]{width:100%;position:relative;text-align:center;display:flex;justify-content:center;align-items:center;box-sizing:border-box;overflow:hidden}.tui-divider-line[data-v-485b358a]{position:absolute;height:%?1?%;top:50%;left:50%;-webkit-transform:scaleY(.5) translateX(-50%) translateZ(0);transform:scaleY(.5) translateX(-50%) translateZ(0)}.tui-divider-text[data-v-485b358a]{position:relative;text-align:center;padding:0 %?18?%;z-index:1}",""]),t.exports=i},c598:function(t,i,e){var a=e("f4e9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("74876d8a",a,!0,{sourceMap:!1,shadowMode:!1})},c64d:function(t,i,e){var a=e("bdf1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("3b423fce",a,!0,{sourceMap:!1,shadowMode:!1})},cd40:function(t,i,e){"use strict";e.r(i);var a=e("3dfc"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},d38b:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-list-class tui-list-cell",class:[t.arrow?"tui-cell-arrow":"",t.arrow&&t.arrowRight?"":"tui-arrow-right",t.unlined?"tui-cell-unlined":"",t.lineLeft?"tui-line-left":"",t.lineRight?"tui-line-right":"",t.arrow&&t.arrowColor?"tui-arrow-"+t.arrowColor:"",t.radius?"tui-radius":""],style:{backgroundColor:t.backgroundColor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},e4c8:function(t,i,e){"use strict";e.r(i);var a=e("5acc"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},e9cd:function(t,i,e){"use strict";e.r(i);var a=e("11b6"),n=e("2143");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("1c7a");var r,s=e("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5c0a813c",null,!1,a["a"],r);i["default"]=u.exports},f4e9:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.tui-modal__container[data-v-5c0a813c]{width:100%;height:100%;position:fixed;left:0;top:0;display:flex;align-items:center;justify-content:center;visibility:hidden}.tui-modal-box[data-v-5c0a813c]{position:relative;opacity:0;visibility:hidden;box-sizing:border-box;transition:all .3s ease-in-out}.tui-modal-scale[data-v-5c0a813c]{-webkit-transform:scale(0);transform:scale(0)}.tui-modal-normal[data-v-5c0a813c]{-webkit-transform:scale(1);transform:scale(1)}.tui-modal-show[data-v-5c0a813c]{opacity:1;visibility:visible}.tui-modal-mask[data-v-5c0a813c]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-5c0a813c]{visibility:visible;opacity:1}.tui-modal-title[data-v-5c0a813c]{text-align:center;font-size:%?34?%;color:#333;padding-top:%?20?%;font-weight:700}.tui-modal-content[data-v-5c0a813c]{text-align:center;color:#999;font-size:%?28?%;padding-top:%?20?%;padding-bottom:%?60?%}.tui-mtop[data-v-5c0a813c]{margin-top:%?30?%}.tui-mbtm[data-v-5c0a813c]{margin-bottom:%?30?%}.tui-modalBtn-box[data-v-5c0a813c]{width:100%;display:flex;align-items:center;justify-content:space-between}.tui-flex-column[data-v-5c0a813c]{flex-direction:column}.tui-modal-btn[data-v-5c0a813c]{width:46%;height:%?68?%;line-height:%?68?%;position:relative;border-radius:%?10?%;font-size:%?26?%;overflow:visible;margin-left:0;margin-right:0}.tui-modal-btn[data-v-5c0a813c]::after{content:" ";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);left:0;top:0;border-radius:%?20?%;z-index:2}.tui-btn-width[data-v-5c0a813c]{width:80%!important}.tui-primary[data-v-5c0a813c]{background:#5677fc;color:#fff}.tui-primary-hover[data-v-5c0a813c]{background:#4a67d6;color:#e5e5e5}.tui-primary-outline[data-v-5c0a813c]{color:#5677fc;background:transparent}.tui-primary-outline[data-v-5c0a813c]::after{border:1px solid #5677fc}.tui-danger[data-v-5c0a813c]{background:#ed3f14;color:#fff}.tui-danger-hover[data-v-5c0a813c]{background:#d53912;color:#e5e5e5}.tui-danger-outline[data-v-5c0a813c]{color:#ed3f14;background:transparent}.tui-danger-outline[data-v-5c0a813c]::after{border:1px solid #ed3f14}.tui-red[data-v-5c0a813c]{background:#e41f19;color:#fff}.tui-red-hover[data-v-5c0a813c]{background:#c51a15;color:#e5e5e5}.tui-red-outline[data-v-5c0a813c]{color:#e41f19;background:transparent}.tui-red-outline[data-v-5c0a813c]::after{border:1px solid #e41f19}.tui-warning[data-v-5c0a813c]{background:#ff7900;color:#fff}.tui-warning-hover[data-v-5c0a813c]{background:#e56d00;color:#e5e5e5}.tui-warning-outline[data-v-5c0a813c]{color:#ff7900;background:transparent}.tui-warning-outline[data-v-5c0a813c]::after{border:1px solid #ff7900}.tui-green[data-v-5c0a813c]{background:#19be6b;color:#fff}.tui-green-hover[data-v-5c0a813c]{background:#16ab60;color:#e5e5e5}.tui-green-outline[data-v-5c0a813c]{color:#19be6b;background:transparent}.tui-green-outline[data-v-5c0a813c]::after{border:1px solid #19be6b}.tui-white[data-v-5c0a813c]{background:#fff;color:#333}.tui-white-hover[data-v-5c0a813c]{background:#f7f7f9;color:#666}.tui-white-outline[data-v-5c0a813c]{color:#333;background:transparent}.tui-white-outline[data-v-5c0a813c]::after{border:1px solid #333}.tui-gray[data-v-5c0a813c]{background:#ededed;color:#999}.tui-gray-hover[data-v-5c0a813c]{background:#d5d5d5;color:#898989}.tui-gray-outline[data-v-5c0a813c]{color:#999;background:transparent}.tui-gray-outline[data-v-5c0a813c]::after{border:1px solid #999}.tui-outline-hover[data-v-5c0a813c]{opacity:.6}.tui-circle-btn[data-v-5c0a813c]{border-radius:%?40?%!important}.tui-circle-btn[data-v-5c0a813c]::after{border-radius:%?80?%!important}',""]),t.exports=i}}]);