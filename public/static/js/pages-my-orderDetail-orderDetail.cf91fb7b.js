(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-orderDetail-orderDetail"],{"0365":function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var a={tuiCountdown:e("612a").default,tuiListCell:e("1b0c").default,tuiListView:e("1f9f").default,tuiButton:e("7cec").default},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"tui-order-header",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchStatus.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-header-content"},[e("v-uni-view",[e("v-uni-view",{staticClass:"tui-status-text"},[t._v(t._s(t.getStatusText(t.status)))]),e("v-uni-view",{staticClass:"tui-reason"},[e("v-uni-text",{staticClass:"tui-reason-text"},[t._v(t._s(t.getReason(t.status)))]),1===t.status?e("tui-countdown",{attrs:{time:1800,color:"rgba(254,254,254,0.75)",colonColor:"rgba(254,254,254,0.75)",borderColor:"transparent",backgroundColor:"transparent"}}):t._e()],1)],1),e("v-uni-image",{staticClass:"tui-status-img",attrs:{src:t.getImg(t.status),mode:"widthFix"}})],1)],1),e("tui-list-cell",{attrs:{arrow:!0,backgroundColor:"#fefefe"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.logistics.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-flex-box"},[e("v-uni-image",{staticClass:"tui-icon-img",attrs:{src:t.webURL+"img_order_logistics3x.png"}}),e("v-uni-view",{staticClass:"tui-logistics"},[e("v-uni-view",{staticClass:"tui-logistics-text"},[t._v("快递已到收货点，请注意查收哦! 投递员: echo. 联系电话: 17788849992")]),e("v-uni-view",{staticClass:"tui-logistics-time"},[t._v("2019-06-03 12:02")])],1)],1)],1),e("tui-list-cell",{attrs:{unlined:!0,hover:!1}},[e("v-uni-view",{staticClass:"tui-flex-box"},[e("v-uni-image",{staticClass:"tui-icon-img",attrs:{src:t.webURL+"img_order_address3x.png"}}),e("v-uni-view",{staticClass:"tui-addr"},[e("v-uni-view",{staticClass:"tui-addr-userinfo"},[t._v("张一"),e("v-uni-text",{staticClass:"tui-addr-tel"},[t._v("18378849962")])],1),e("v-uni-view",{staticClass:"tui-addr-text"},[t._v("广东省广州市海珠区阅江西路222号鲜卑路16巷吉安花园 2栋106")])],1)],1)],1),e("v-uni-view",{staticClass:"tui-order-item"},[e("tui-list-cell",{attrs:{hover:!1,lineLeft:!1}},[e("v-uni-view",{staticClass:"tui-goods-title"},[t._v("商品信息")])],1),t._l(2,(function(i,a){return[e("tui-list-cell",{key:a+"_0",attrs:{padding:"0"}},[e("v-uni-view",{staticClass:"tui-goods-item"},[e("v-uni-image",{staticClass:"tui-goods-img",attrs:{src:"/static/images/mall/product/"+(a+3)+".jpg"}}),e("v-uni-view",{staticClass:"tui-goods-center"},[e("v-uni-view",{staticClass:"tui-goods-name"},[t._v("欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）")]),e("v-uni-view",{staticClass:"tui-goods-attr"},[t._v("黑色，50ml")])],1),e("v-uni-view",{staticClass:"tui-price-right"},[e("v-uni-view",[t._v("￥298.00")]),e("v-uni-view",[t._v("x2")])],1)],1)],1)]})),e("v-uni-view",{staticClass:"tui-goods-info"},[e("v-uni-view",{staticClass:"tui-price-flex tui-size24"},[e("v-uni-view",[t._v("商品总额")]),e("v-uni-view",[t._v("￥1192.00")])],1),e("v-uni-view",{staticClass:"tui-price-flex  tui-size24"},[e("v-uni-view",[t._v("优惠券")]),e("v-uni-view",[t._v("￥0.00")])],1),e("v-uni-view",{staticClass:"tui-price-flex  tui-size24"},[e("v-uni-view",[t._v("配送费")]),e("v-uni-view",[t._v("￥0.00")])],1),e("v-uni-view",{staticClass:"tui-price-flex tui-size32 tui-pbtm20"},[e("v-uni-view",{staticClass:"tui-flex-shrink"},[t._v("合计")]),e("v-uni-view",{staticClass:"tui-goods-price"},[e("v-uni-view",{staticClass:"tui-size-24"},[t._v("￥")]),e("v-uni-view",{staticClass:"tui-price-large"},[t._v("1192")]),e("v-uni-view",{staticClass:"tui-size-24"},[t._v(".00")])],1)],1),e("v-uni-view",{staticClass:"tui-price-flex tui-size32"},[e("v-uni-view",{staticClass:"tui-flex-shrink"},[t._v("实付款")]),e("v-uni-view",{staticClass:"tui-goods-price tui-primary-color"},[e("v-uni-view",{staticClass:"tui-size-24"},[t._v("￥")]),e("v-uni-view",{staticClass:"tui-price-large"},[t._v("1192")]),e("v-uni-view",{staticClass:"tui-size-24"},[t._v(".00")])],1)],1)],1)],2),e("v-uni-view",{staticClass:"tui-order-info"},[e("tui-list-cell",{attrs:{hover:!1}},[e("v-uni-view",{staticClass:"tui-order-title"},[t._v("订单信息")])],1),e("v-uni-view",{staticClass:"tui-order-content"},[e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("订单号:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("48690010100035")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("物流单号:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("33655511251265578556")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("创建时间:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("2019-05-26 10:36")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("付款时间:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("2019-05-26 10:44")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("发货时间:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("2019-05-27 10:20")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("配送方式:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("包邮")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("订单备注:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("麻烦尽快发货，打包包裹时请多拿几个泡沫放在纸箱盒内，防止摔碎")])],1)],1),e("tui-list-view",{attrs:{unlined:"bottom"}},[e("tui-list-cell",{attrs:{unlined:!0}},[e("v-uni-view",{staticClass:"tui-contact"},[e("v-uni-image",{attrs:{src:"https://thorui.cn/images/mall/group/icon_order_contactmerchant.png"}}),e("v-uni-text",[t._v("联系商家")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"tui-safe-area"}),e("v-uni-view",{staticClass:"tui-tabbar tui-order-btn"},[e("v-uni-view",{staticClass:"tui-btn-mr"},[e("tui-button",{attrs:{type:"black",plain:!0,width:"152rpx",height:"56rpx",size:26,shape:"circle"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.refund.apply(void 0,arguments)}}},[t._v("申请售后")])],1),e("v-uni-view",{staticClass:"tui-btn-mr"},[e("tui-button",{attrs:{type:"danger",plain:!0,width:"152rpx",height:"56rpx",size:26,shape:"circle"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.btnPay.apply(void 0,arguments)}}},[t._v("立即支付")])],1)],1),e("t-pay-way",{attrs:{show:t.show},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.popupClose.apply(void 0,arguments)}}})],1)},n=[]},"182a":function(t,i,e){"use strict";e.r(i);var a=e("d7a5"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"18b5":function(t,i,e){"use strict";var a=e("70e0"),s=e.n(a);s.a},"1f9f":function(t,i,e){"use strict";e.r(i);var a=e("d82d"),s=e("b0c3");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("c5b9");var o,r=e("f0c5"),u=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"89702c30",null,!1,a["a"],o);i["default"]=u.exports},"2f8e":function(t,i,e){"use strict";e.r(i);var a=e("0365"),s=e("182a");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("18b5");var o,r=e("f0c5"),u=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"92a69932",null,!1,a["a"],o);i["default"]=u.exports},"519c":function(t,i,e){var a=e("a788");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("3cb4da7f",a,!0,{sourceMap:!1,shadowMode:!1})},"70e0":function(t,i,e){var a=e("7d37");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("f0aea73e",a,!0,{sourceMap:!1,shadowMode:!1})},"7d37":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.container[data-v-92a69932]{padding-bottom:%?118?%}.tui-order-header[data-v-92a69932]{width:100%;height:%?160?%;position:relative;background-color:#eb0909}.tui-img-bg[data-v-92a69932]{width:100%;height:%?160?%}.tui-header-content[data-v-92a69932]{width:100%;height:%?160?%;position:absolute;z-index:10;left:0;top:0;display:flex;align-items:center;justify-content:space-between;padding:0 %?70?%;box-sizing:border-box}.tui-status-text[data-v-92a69932]{font-size:%?34?%;line-height:%?34?%;color:#fefefe}.tui-reason[data-v-92a69932]{font-size:%?24?%;line-height:%?24?%;color:hsla(0,0%,99.6%,.75);padding-top:%?15?%;display:flex;align-items:center}.tui-reason-text[data-v-92a69932]{padding-right:%?12?%}.tui-status-img[data-v-92a69932]{width:%?80?%;height:%?80?%;display:block}.tui-flex-box[data-v-92a69932]{width:100%;display:flex;align-items:center}.tui-icon-img[data-v-92a69932]{width:%?44?%;height:%?44?%;flex-shrink:0}.tui-logistics[data-v-92a69932]{display:flex;flex-direction:column;justify-content:center;padding:0 %?24?% 0 %?20?%;box-sizing:border-box}.tui-logistics-text[data-v-92a69932]{font-size:%?26?%;line-height:%?32?%}.tui-logistics-time[data-v-92a69932]{font-size:%?24?%;line-height:%?24?%;padding-top:%?16?%;color:#666}.tui-addr[data-v-92a69932]{display:flex;flex-direction:column;justify-content:center;padding-left:%?20?%;box-sizing:border-box}.tui-addr-userinfo[data-v-92a69932]{font-size:%?30?%;line-height:%?30?%;font-weight:700}.tui-addr-text[data-v-92a69932]{font-size:%?24?%;line-height:%?32?%;padding-top:%?16?%}.tui-addr-tel[data-v-92a69932]{padding-left:%?40?%}.tui-order-item[data-v-92a69932]{margin-top:%?20?%;border-radius:%?10?%;overflow:hidden}.tui-goods-title[data-v-92a69932]{width:100%;font-size:%?28?%;line-height:%?28?%;display:flex;align-items:center;justify-content:space-between}.tui-goods-item[data-v-92a69932]{width:100%;padding:%?20?% %?30?%;box-sizing:border-box;display:flex;justify-content:space-between}.tui-goods-img[data-v-92a69932]{width:%?180?%;height:%?180?%;display:block;flex-shrink:0}.tui-goods-center[data-v-92a69932]{flex:1;padding:%?20?% %?8?%;box-sizing:border-box}.tui-goods-name[data-v-92a69932]{max-width:%?310?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:%?26?%;line-height:%?32?%}.tui-goods-attr[data-v-92a69932]{font-size:%?22?%;color:#888;line-height:%?32?%;padding-top:%?20?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.tui-price-right[data-v-92a69932]{text-align:right;font-size:%?24?%;color:#888;line-height:%?30?%;padding-top:%?20?%}.tui-color-red[data-v-92a69932]{color:#e41f19;padding-right:%?30?%}.tui-goods-price[data-v-92a69932]{width:100%;display:flex;align-items:flex-end;justify-content:flex-end;font-size:%?24?%}.tui-size-24[data-v-92a69932]{font-size:%?24?%;line-height:%?24?%}.tui-price-large[data-v-92a69932]{font-size:%?32?%;line-height:%?30?%}.tui-goods-info[data-v-92a69932]{width:100%;padding:%?30?%;box-sizing:border-box;background:#fff}.tui-price-flex[data-v-92a69932]{display:flex;align-items:center;justify-content:space-between}.tui-size24[data-v-92a69932]{padding-bottom:%?20?%;font-size:%?24?%;line-height:%?24?%;color:#888}.tui-size32[data-v-92a69932]{font-size:%?32?%;line-height:%?32?%;font-weight:500}.tui-pbtm20[data-v-92a69932]{padding-bottom:%?20?%}.tui-flex-shrink[data-v-92a69932]{flex-shrink:0}.tui-primary-color[data-v-92a69932]{color:#eb0909}.tui-order-info[data-v-92a69932]{margin-top:%?20?%}.tui-order-title[data-v-92a69932]{position:relative;font-size:%?28?%;line-height:%?28?%;padding-left:%?12?%;box-sizing:border-box}.tui-order-title[data-v-92a69932]::before{content:"";position:absolute;left:0;top:0;border-left:%?4?% solid #eb0909;height:100%}.tui-order-content[data-v-92a69932]{width:100%;padding:%?24?% %?30?%;box-sizing:border-box;background:#fff;font-size:%?24?%;line-height:%?30?%}.tui-order-flex[data-v-92a69932]{display:flex;padding-top:%?18?%}.tui-order-flex[data-v-92a69932]:first-child{padding-top:0}.tui-item-title[data-v-92a69932]{width:%?132?%;flex-shrink:0}.tui-item-content[data-v-92a69932]{color:#666;line-height:%?32?%}.tui-safe-area[data-v-92a69932]{height:%?1?%;padding-bottom:env(safe-area-inset-bottom)}.tui-tabbar[data-v-92a69932]{width:100%;height:%?98?%;background:#fff;position:fixed;left:0;bottom:0;display:flex;align-items:center;justify-content:flex-end;font-size:%?26?%;box-shadow:0 0 1px rgba(0,0,0,.3);padding-bottom:env(safe-area-inset-bottom);z-index:996}.tui-btn-mr[data-v-92a69932]{margin-right:%?30?%}.tui-contact[data-v-92a69932]{display:flex;align-items:center;justify-content:center;font-size:%?28?%}.tui-contact uni-image[data-v-92a69932]{width:%?36?%;height:%?36?%;margin-right:%?16?%}',""]),t.exports=i},8527:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"tuiListView",props:{title:{type:String,default:""},color:{type:String,default:"#666"},size:{type:Number,default:30},backgroundColor:{type:String,default:"transparent"},unlined:{type:String,default:""},marginTop:{type:String,default:"0"}}};i.default=a},a788:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.tui-list-title[data-v-89702c30]{width:100%;padding:%?30?%;box-sizing:border-box}.tui-list-content[data-v-89702c30]{width:100%;position:relative}.tui-list-content[data-v-89702c30]::before{content:" ";position:absolute;top:0;right:0;left:0;border-top:1px solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 0;transform-origin:0 0;z-index:2;pointer-events:none}.tui-list-content[data-v-89702c30]::after{content:"";width:100%;position:absolute;border-bottom:1px solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0}.tui-border-top[data-v-89702c30]::before{border-top:0}.tui-border-bottom[data-v-89702c30]::after{border-bottom:0}.tui-border-all[data-v-89702c30]::after{border-bottom:0}.tui-border-all[data-v-89702c30]::before{border-top:0}',""]),t.exports=i},b0c3:function(t,i,e){"use strict";e.r(i);var a=e("8527"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},c5b9:function(t,i,e){"use strict";var a=e("519c"),s=e.n(a);s.a},d7a5:function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("6171")),n={components:{tPayWay:s.default},data:function(){return{webURL:"https://www.thorui.cn/wx/static/images/mall/order/",status:1,show:!1}},methods:{getImg:function(t){return this.webURL+["img_order_payment3x.png","img_order_send3x.png","img_order_received3x.png","img_order_signed3x.png","img_order_closed3x.png"][t-1]},getStatusText:function(t){return["等待您付款","付款成功","待收货","订单已完成","交易关闭"][t-1]},getReason:function(t){return["剩余时间","等待卖家发货","还剩X天XX小时自动确认","","超时未付款，订单自动取消"][t-1]},switchStatus:function(){var t=this.status+1;this.status=t>5?1:t,this.tui.toast("状态切换成功")},logistics:function(){this.tui.href("/pages/my/logistics/logistics")},btnPay:function(){this.show=!0},popupClose:function(){this.show=!1},refund:function(){this.tui.href("/pages/my/refund/refund")}}};i.default=n},d82d:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-list-view tui-view-class",style:{backgroundColor:t.backgroundColor,marginTop:t.marginTop}},[t.title?e("v-uni-view",{staticClass:"tui-list-title",style:{color:t.color,fontSize:t.size+"rpx",lineHeight:"30rpx"}},[t._v(t._s(t.title))]):t._e(),e("v-uni-view",{staticClass:"tui-list-content",class:[t.unlined?"tui-border-"+t.unlined:""]},[t._t("default")],2)],1)},n=[]}}]);