(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-userInfo-userInfo"],{"06e5":function(t,a,e){var i=e("5d16");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("71585351",i,!0,{sourceMap:!1,shadowMode:!1})},"11b6":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"tui-modal__container",class:[t.show?"tui-modal-show":""],style:{zIndex:t.zIndex},on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"tui-modal-box",class:[t.fadeIn||t.show?"tui-modal-normal":"tui-modal-scale",t.show?"tui-modal-show":""],style:{width:t.width,padding:t.padding,borderRadius:t.radius,backgroundColor:t.backgroundColor,zIndex:t.zIndex+1}},[t.custom?e("v-uni-view",[t._t("default")],2):e("v-uni-view",[t.title?e("v-uni-view",{staticClass:"tui-modal-title"},[t._v(t._s(t.title))]):t._e(),e("v-uni-view",{staticClass:"tui-modal-content",class:[t.title?"":"tui-mtop"],style:{color:t.color,fontSize:t.size+"rpx"}},[t._v(t._s(t.content))]),e("v-uni-view",{staticClass:"tui-modalBtn-box",class:[2!=t.button.length?"tui-flex-column":""]},[t._l(t.button,(function(a,i){return[e("v-uni-button",{key:i+"_0",staticClass:"tui-modal-btn",class:["tui-"+(a.type||"primary")+(a.plain?"-outline":""),2!=t.button.length?"tui-btn-width":"",t.button.length>2?"tui-mbtm":"","circle"==t.shape?"tui-circle-btn":""],attrs:{"hover-class":"tui-"+(a.plain?"outline":a.type||"primary")+"-hover","data-index":i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t._v(t._s(a.text||"确定"))])]}))],2)],1)],1),e("v-uni-view",{staticClass:"tui-modal-mask",class:[t.show?"tui-mask-show":""],style:{zIndex:t.maskZIndex},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClickCancel.apply(void 0,arguments)}}})],1)},o=[]},"169c":function(t,a,e){"use strict";e.r(a);var i=e("7967"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"1b0c":function(t,a,e){"use strict";e.r(a);var i=e("d38b"),n=e("cd40");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("abe6");var r,d=e("f0c5"),l=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"497f7da0",null,!1,i["a"],r);a["default"]=l.exports},"1c7a":function(t,a,e){"use strict";var i=e("c598"),n=e.n(i);n.a},2143:function(t,a,e){"use strict";e.r(a);var i=e("6afd"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"3dfc":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"tuiListCell",emits:["click"],props:{arrow:{type:Boolean,default:!1},arrowColor:{type:String,default:""},hover:{type:Boolean,default:!0},unlined:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#333"},radius:{type:Boolean,default:!1},arrowRight:{type:Boolean,default:!0},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};a.default=i},"40cd":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{class:{"tui-input__border":t.inputBorder,"tui-radius__fillet":t.isFillet},style:{marginTop:t.marginTop+"rpx"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.fieldClick.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-input__wrap",class:{"tui-line__left":t.lineLeft,"tui-border__top":!t.borderTop||t.inputBorder,"tui-border__bottom":!t.borderBottom||t.inputBorder,"tui-radius__fillet":t.isFillet},style:{padding:t.padding,backgroundColor:t.backgroundColor}},[t.required?e("v-uni-view",{staticClass:"tui-input__required",style:{color:t.requiredColor}},[t._v("*")]):t._e(),t.label?e("v-uni-view",{staticClass:"tui-input__label",style:{fontSize:t.labelSize+"rpx",color:t.labelColor,minWidth:t.labelWidth+"rpx"}},[e("v-uni-text",{style:{fontSize:t.labelSize+"rpx",color:t.labelColor}},[t._v(t._s(t.label))])],1):t._e(),t._t("left"),e("v-uni-input",{staticClass:"tui-input__self",class:{"tui-text__right":t.textRight},style:{fontSize:t.size+"rpx",color:t.color},attrs:{"placeholder-class":"tui-input__placeholder",type:t.type,name:t.name,value:t.inputVal,password:t.password,placeholder:t.placeholder,"placeholder-style":t.placeholderStyl,disabled:t.disabled,"cursor-spacing":t.cursorSpacing,maxlength:t.maxlength,focus:t.focused,"confirm-type":t.confirmType,"confirm-hold":t.confirmHold,cursor:t.cursor,"selection-start":t.selectionStart,"selection-end":t.selectionEnd,"adjust-position":t.adjustPosition,"hold-keyboard":t.holdKeyboard,"auto-blur":t.autoBlur},on:{focus:function(a){arguments[0]=a=t.$handleEvent(a),t.onFocus.apply(void 0,arguments)},blur:function(a){arguments[0]=a=t.$handleEvent(a),t.onBlur.apply(void 0,arguments)},input:function(a){arguments[0]=a=t.$handleEvent(a),t.onInput.apply(void 0,arguments)},confirm:function(a){arguments[0]=a=t.$handleEvent(a),t.onConfirm.apply(void 0,arguments)},keyboardheightchange:function(a){arguments[0]=a=t.$handleEvent(a),t.onKeyboardheightchange.apply(void 0,arguments)}}}),t.clearable&&""!=t.value?e("v-uni-icon",{attrs:{type:"clear",size:t.clearSize,color:t.clearColor},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.onClear.apply(void 0,arguments)}}}):t._e(),t._t("right")],2)],1)},o=[]},"439c":function(t,a,e){"use strict";e.r(a);var i=e("6e2f"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"521a":function(t,a,e){var i=e("5df8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1b2eb429",i,!0,{sourceMap:!1,shadowMode:!1})},"588a":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var n=i(e("1da1")),o=i(e("ade3")),r=(e("b006"),e("7163")),d=(i(e("3da5")),{data:function(){return{sex:"男",date:"请选择",isLogin:!1,isVerify:!1,user_info:[],show:!1,buttons:[{text:"取消"},{text:"确定",color:"#586c94"}],custom:!0,nicknameInfo:null}},methods:{onLoad:function(t){console.log("090")},onShow:function(){this.isLogin=this.app_data.getToken(),this.user_info=this.app_data.getUserInfo(),this.isVerify=this.user_info.certification,this.nicknameInfo=this.app_data.getUserInfo().nickname,this.wlog.log(this.user_info)},changeAvatar:function(){var t=this,a=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var i,n=e.tempFilePaths[0],r=e.tempFiles[0];console.log("path"),console.log(e),uni.uploadFile((i={url:"/Api/Upload/image",filePath:n,name:r.name},(0,o.default)(i,"name","file"),(0,o.default)(i,"success",(function(e){console.log(e.data);var i=JSON.parse(e.data);console.log(i.code),200==i.code?a.updateHeaderUrl(i.data.url):t.tui.toast("图片上传失败，请重试～")})),i))}})},buttonTap:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var e,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t.nicknameInfo){a.next=8;break}return a.next=3,(0,r.updateUserInfo)({nickname:t.nicknameInfo});case 3:e=a.sent,i=e.code,200==i?(uni.showToast({title:"修改成功",icon:"success",duration:2e3}),t.user_info.nickname=t.nicknameInfo,t.app_data.setUserInfo(t.user_info),t.show=!1):uni.showToast({title:"修改失败",icon:"success",duration:2e3}),a.next=9;break;case 8:uni.showToast({title:"请填写昵称",icon:"success",duration:2e3});case 9:case"end":return a.stop()}}),a)})))()},updateHeaderUrl:function(t){var a=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,(0,r.updateUserInfo)({head_pic_small:t});case 3:i=e.sent,n=i.code,200==n?(uni.showToast({title:"修改成功",icon:"success",duration:2e3}),a.user_info.head_pic_small=t,a.user_info.head_pic=t,a.app_data.setUserInfo(a.user_info)):uni.showToast({title:"修改失败",icon:"success",duration:2e3}),e.next=9;break;case 8:uni.showToast({title:"请选择头像",icon:"success",duration:2e3});case 9:case"end":return e.stop()}}),e)})))()},buttoncancel:function(){this.show=!1},verify:function(){1!=this.isVerify&&uni.navigateTo({url:"/pages/my/verify/verify"})},nickname:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.isLogin&&(t.show=!0);case 1:case"end":return a.stop()}}),a)})))()},exitLogin:function(){this.app_data.setToken(""),setTimeout((function(){uni.navigateBack()}),200)},changeSex:function(){var t=this;uni.showActionSheet({itemList:["男","女"],success:function(a){t.sex=["男","女"][a.tapIndex]}})},changeDate:function(t){console.log(t),this.date=t.detail.value}}});a.default=d},"5d16":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.tui-btn-primary[data-v-13dab07b]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-13dab07b]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-13dab07b]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-13dab07b]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-13dab07b]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-13dab07b]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-13dab07b]{background:#07c160!important;color:#fff}.tui-shadow-green[data-v-13dab07b]{box-shadow:0 %?10?% %?14?% 0 rgba(7,193,96,.2)}.tui-btn-blue[data-v-13dab07b]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-13dab07b]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-13dab07b]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-13dab07b]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-13dab07b]{background:#333!important;color:#fff!important}.tui-btn-brown[data-v-13dab07b]{background:#ac9157!important;color:#fff!important}.tui-btn-gray-black[data-v-13dab07b]{background:#f2f2f2!important;color:#333}.tui-btn-gray-primary[data-v-13dab07b]{background:#f2f2f2!important;color:#5677fc!important}.tui-gray-primary-hover[data-v-13dab07b]{background:#d9d9d9!important}.tui-btn-gray-green[data-v-13dab07b]{background:#f2f2f2!important;color:#07c160!important}.tui-gray-green-hover[data-v-13dab07b]{background:#d9d9d9!important}.tui-btn-gray-danger[data-v-13dab07b]{background:#f2f2f2!important;color:#eb0909!important}.tui-gray-danger-hover[data-v-13dab07b]{background:#d9d9d9!important}.tui-btn-gray-warning[data-v-13dab07b]{background:#f2f2f2!important;color:#fc872d!important}.tui-gray-warning-hover[data-v-13dab07b]{background:#d9d9d9!important}.tui-shadow-gray[data-v-13dab07b]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-13dab07b]{background:#f7f7f9!important}.tui-black-hover[data-v-13dab07b]{background:#555!important;color:#e5e5e5!important}.tui-brown-hover[data-v-13dab07b]{background:#a37f49!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-13dab07b]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible}.tui-btn[data-v-13dab07b]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-text-bold[data-v-13dab07b]{font-weight:700}.tui-btn-white[data-v-13dab07b]::after{border:1px solid #bfbfbf}.tui-white-hover[data-v-13dab07b]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-13dab07b]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-13dab07b]{opacity:.5!important}.tui-gray-disabled[data-v-13dab07b]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-13dab07b]{opacity:.5}.tui-primary-hover[data-v-13dab07b]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-13dab07b]::after{border:1px solid #5677fc!important}.tui-primary-outline[data-v-13dab07b]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-13dab07b]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-13dab07b]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-13dab07b]::after{border:1px solid #eb0909!important}.tui-warning-hover[data-v-13dab07b]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-13dab07b]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-13dab07b]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-13dab07b]{background:#06ad56!important;color:#e5e5e5!important}.tui-green-outline[data-v-13dab07b]{color:#07c160!important;background:transparent}.tui-green-outline[data-v-13dab07b]::after{border:1px solid #07c160!important}.tui-blue-hover[data-v-13dab07b]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-13dab07b]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-13dab07b]::after{border:1px solid #007aff!important}\n.tui-btn-gradual[data-v-13dab07b]{background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-13dab07b]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-13dab07b]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-13dab07b]{background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-13dab07b]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-13dab07b]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-13dab07b]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-13dab07b]::after{border:1px solid #ccc!important}.tui-white-outline[data-v-13dab07b]::after{border:1px solid #fff!important}.tui-black-outline[data-v-13dab07b]::after{border:1px solid #333!important}.tui-brown-outline[data-v-13dab07b]{color:#ac9157!important;background:transparent}.tui-brown-outline[data-v-13dab07b]::after{border:1px solid #ac9157!important}\n\n/*圆角 */.tui-fillet[data-v-13dab07b]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-13dab07b]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-13dab07b]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-13dab07b]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-13dab07b]::after{border-radius:0}.tui-outline-rightAngle[data-v-13dab07b]::after{border-radius:0}.tui-btn__link[data-v-13dab07b]::after{border:0!important}',""]),t.exports=a},"5df8":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".tui-modal__title[data-v-0af92700]{text-align:center;font-weight:700;padding-bottom:%?8?%}.btn-wrap[data-v-0af92700]{display:flex;justify-content:space-between;margin-top:%?20?%}.btn[data-v-0af92700]{width:100px!important}.tui-userinfo-box[data-v-0af92700]{margin:%?20?% 0;color:#333}.tui-list-cell[data-v-0af92700]{width:100%;display:flex;align-items:center;justify-content:space-between;padding:%?24?% %?60?% %?24?% %?30?%;box-sizing:border-box;font-size:%?30?%}.tui-pr30[data-v-0af92700]{padding-right:%?30?%}.tui-avatar[data-v-0af92700]{width:%?100?%;height:%?100?%;display:block;border-radius:50%}.tui-content[data-v-0af92700]{font-size:%?26?%;color:#666}",""]),t.exports=a},"6afd":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"tuiModal",emits:["click","cancel"],props:{show:{type:Boolean,default:!1},width:{type:String,default:"84%"},backgroundColor:{type:String,default:"#fff"},padding:{type:String,default:"40rpx 64rpx"},radius:{type:String,default:"24rpx"},title:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"#999"},size:{type:Number,default:28},shape:{type:String,default:"square"},button:{type:Array,default:function(){return[{text:"取消",type:"red",plain:!0},{text:"确定",type:"red",plain:!1}]}},maskClosable:{type:Boolean,default:!0},fadeIn:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},zIndex:{type:Number,default:9997},maskZIndex:{type:Number,default:9990}},data:function(){return{}},methods:{handleClick:function(t){if(this.show){var a=t.currentTarget.dataset;this.$emit("click",{index:Number(a.index)})}},handleClickCancel:function(){this.maskClosable&&this.$emit("cancel")}}};a.default=i},"6e2f":function(t,a,e){"use strict";e("a9e3"),e("ac1f"),e("5319"),e("498a"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"tui-input",emits:["input","update:modelValue","focus","blur","confirm","click","keyboardheightchange"],props:{required:{type:Boolean,default:!1},requiredColor:{type:String,default:"#EB0909"},label:{type:String,default:""},labelSize:{type:Number,default:32},labelColor:{type:String,default:"#333"},labelWidth:{type:Number,default:140},clearable:{type:Boolean,default:!1},clearSize:{type:Number,default:15},clearColor:{type:String,default:"#bfbfbf"},focus:{type:Boolean,default:!1},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},name:{type:String,default:""},value:{type:[Number,String],default:""},type:{type:String,default:"text"},password:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},cursorSpacing:{type:Number,default:0},confirmType:{type:String,default:"done"},confirmHold:{type:Boolean,default:!1},cursor:{type:Number,default:-1},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},adjustPosition:{type:Boolean,default:!0},holdKeyboard:{type:Boolean,default:!1},autoBlur:{type:Boolean,default:!1},size:{type:Number,default:32},color:{type:String,default:"#333"},inputBorder:{type:Boolean,default:!1},isFillet:{type:Boolean,default:!1},borderTop:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},lineLeft:{type:Boolean,default:!0},trim:{type:Boolean,default:!0},textRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#FFFFFF"},marginTop:{type:Number,default:0}},data:function(){return{placeholderStyl:"",focused:!1,inputVal:""}},watch:{focus:function(t){var a=this;this.$nextTick((function(){a.focused=t}))},placeholderStyle:function(){this.fieldPlaceholderStyle()},value:function(t){this.inputVal=t}},created:function(){this.inputVal=this.value,this.fieldPlaceholderStyle()},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.focused=t.focus}),120)}))},methods:{fieldPlaceholderStyle:function(){if(this.placeholderStyle)this.placeholderStyl=this.placeholderStyle;else{var t=uni.upx2px(this.size);this.placeholderStyl="fontSize:".concat(t,"px")}},onInput:function(t){var a=t.detail.value;this.trim&&(a=this.trimStr(a)),this.$emit("input",a)},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){this.$emit("blur",t)},onConfirm:function(t){this.$emit("confirm",t)},onClear:function(t){uni.hideKeyboard(),this.inputVal="",this.$emit("input","")},fieldClick:function(){this.$emit("click",{name:this.name})},onKeyboardheightchange:function(t){this.$emit("keyboardheightchange",t.detail)},trimStr:function(t){return t.replace(/^\s+|\s+$/g,"")}}};a.default=i},7967:function(t,a,e){"use strict";e("c975"),e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"tuiButton",emits:["click","getuserinfo","contact","getphonenumber","error"],behaviors:["wx://form-field-button"],props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},bold:{type:Boolean,default:!1},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},link:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},index:{type:[Number,String],default:0},preventClick:{type:Boolean,default:!1}},data:function(){return{time:0}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.preventClick){if((new Date).getTime()-this.time<=200)return;this.time=(new Date).getTime(),setTimeout((function(){t.time=0}),200)}this.$emit("click",{index:Number(this.index)})}},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.detail,e=void 0===a?{}:a;this.$emit("getuserinfo",e)},bindcontact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.detail,e=void 0===a?{}:a;this.$emit("contact",e)},bindgetphonenumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.detail,e=void 0===a?{}:a;this.$emit("getphonenumber",e)},binderror:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.detail,e=void 0===a?{}:a;this.$emit("error",e)},getShadowClass:function(t,a,e){var i="";return a&&"white"!=t&&!e&&(i="tui-shadow-"+t),i},getDisabledClass:function(t,a,e){var i="";if(t&&"white"!=a&&-1==a.indexOf("-")){var n=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";i=e?"tui-dark-disabled-outline":n}return i},getShapeClass:function(t,a){var e="";return"circle"==t?e=a?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(e=a?"tui-outline-rightAngle":"tui-rightAngle"),e},getHoverClass:function(t,a,e){var i="";return t||(i=e?"tui-outline-hover":"tui-"+(a||"primary")+"-hover"),i}}};a.default=i},"7cec":function(t,a,e){"use strict";e.r(a);var i=e("8e98"),n=e("169c");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("e808");var r,d=e("f0c5"),l=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"13dab07b",null,!1,i["a"],r);a["default"]=l.exports},"83c8":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={tuiListCell:e("1b0c").default,tuiModal:e("e9cd").default,tuiInput:e("c12f").default,tuiButton:e("7cec").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"tui-userinfo-box"},[e("tui-list-cell",{attrs:{padding:"0",arrow:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeAvatar.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-list-cell"},[e("v-uni-view",[t._v("头像")]),e("v-uni-image",{staticClass:"tui-avatar",attrs:{src:t.isLogin?t.user_info.head_pic_small:"/static/images/my/mine_def_touxiang_3x.png"}})],1)],1),e("tui-list-cell",{attrs:{padding:"0",arrow:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.nickname.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-list-cell"},[e("v-uni-view",[t._v("昵称")]),e("v-uni-view",{staticClass:"tui-content"},[t._v(t._s(t.isLogin?t.user_info.nickname:"未登录"))])],1)],1),e("tui-list-cell",{attrs:{padding:"0",arrow:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.verify.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-list-cell"},[e("v-uni-view",[t._v("实名认证")]),e("v-uni-view",{staticClass:"tui-content"},[t._v(t._s(1==t.isVerify?"已认证":"未认证"))])],1)],1),t.isLogin?e("tui-list-cell",{attrs:{padding:"0",arrow:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.exitLogin.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-list-cell"},[e("v-uni-view",[t._v("退出")]),e("v-uni-view",{staticClass:"tui-content"})],1)],1):t._e(),e("page-back"),e("tui-modal",{attrs:{button:t.buttons,show:t.show,title:"修改昵称",custom:!0}},[e("v-uni-view",{staticClass:"tui-modal-custom"},[e("v-uni-view",{staticClass:"tui-modal__title"},[t._v("修改昵称")]),e("tui-input",{attrs:{placeholder:"请输入昵称"},model:{value:t.nicknameInfo,callback:function(a){t.nicknameInfo=a},expression:"nicknameInfo"}}),e("v-uni-view",{staticClass:"btn-wrap"},[e("tui-button",{staticClass:"btn",attrs:{height:"72rpx",size:28,type:"white",shape:"circle"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.buttoncancel.apply(void 0,arguments)}}},[t._v("取消")]),e("tui-button",{staticClass:"btn",attrs:{height:"72rpx",size:28,type:"danger",shape:"circle"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.buttonTap.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)},o=[]},"8e98":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain),t.bold?"tui-text-bold":"",t.link?"tui-btn__link":""],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"form-type":t.formType,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(a){arguments[0]=a=t.$handleEvent(a),t.bindgetuserinfo.apply(void 0,arguments)},getphonenumber:function(a){arguments[0]=a=t.$handleEvent(a),t.bindgetphonenumber.apply(void 0,arguments)},contact:function(a){arguments[0]=a=t.$handleEvent(a),t.bindcontact.apply(void 0,arguments)},error:function(a){arguments[0]=a=t.$handleEvent(a),t.binderror.apply(void 0,arguments)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},abe6:function(t,a,e){"use strict";var i=e("c64d"),n=e.n(i);n.a},abf0:function(t,a,e){var i=e("e186");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("65b562aa",i,!0,{sourceMap:!1,shadowMode:!1})},b006:function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.loginXcx=r,a.H5Login=d,a.getVerifyCode=l,a.webLogin=u;var n=i(e("6ee2")),o=n.default.request;function r(t){return o({method:"POST",url:"User/loginXcx",isForm:!0,postData:t})}function d(t){return o({method:"POST",url:"/Api/Mobile/wx_login",isForm:!0,postData:t})}function l(t){return o({method:"POST",url:"/Api/Mobile/verify_code",isForm:!0,postData:t})}function u(t){return o({method:"POST",url:"/Api/WxWeb/is_login",isForm:!0,postData:t})}},bdf1:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.tui-list-cell[data-v-497f7da0]{position:relative;width:100%;box-sizing:border-box}.tui-radius[data-v-497f7da0]{border-radius:%?6?%;overflow:hidden}.tui-cell-hover[data-v-497f7da0]{background-color:#f1f1f1!important}.tui-list-cell[data-v-497f7da0]::after{content:"";position:absolute;border-bottom:1px solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0;pointer-events:none}.tui-line-left[data-v-497f7da0]::after{left:%?30?%!important}.tui-line-right[data-v-497f7da0]::after{right:%?30?%!important}.tui-cell-unlined[data-v-497f7da0]::after{border-bottom:0!important}.tui-cell-arrow[data-v-497f7da0]::before{content:" ";height:10px;width:10px;border-width:2px 2px 0 0;border-color:silver;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0);position:absolute;top:50%;margin-top:-6px;right:%?30?%}.tui-arrow-right[data-v-497f7da0]::before{right:0!important}.tui-arrow-gray[data-v-497f7da0]::before{border-color:#666!important}.tui-arrow-white[data-v-497f7da0]::before{border-color:#fff!important}.tui-arrow-warning[data-v-497f7da0]::before{border-color:#ff7900!important}.tui-arrow-success[data-v-497f7da0]::before{border-color:#19be6b!important}.tui-arrow-danger[data-v-497f7da0]::before{border-color:#eb0909!important}',""]),t.exports=a},c0f6:function(t,a,e){"use strict";var i=e("abf0"),n=e.n(i);n.a},c12f:function(t,a,e){"use strict";e.r(a);var i=e("40cd"),n=e("439c");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("c0f6");var r,d=e("f0c5"),l=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"6ec3ab76",null,!1,i["a"],r);a["default"]=l.exports},c598:function(t,a,e){var i=e("f4e9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("74876d8a",i,!0,{sourceMap:!1,shadowMode:!1})},c64d:function(t,a,e){var i=e("bdf1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("3b423fce",i,!0,{sourceMap:!1,shadowMode:!1})},cca4:function(t,a,e){"use strict";var i=e("521a"),n=e.n(i);n.a},ccd0:function(t,a,e){"use strict";e.r(a);var i=e("588a"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},cd40:function(t,a,e){"use strict";e.r(a);var i=e("3dfc"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},d38b:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"tui-list-class tui-list-cell",class:[t.arrow?"tui-cell-arrow":"",t.arrow&&t.arrowRight?"":"tui-arrow-right",t.unlined?"tui-cell-unlined":"",t.lineLeft?"tui-line-left":"",t.lineRight?"tui-line-right":"",t.arrow&&t.arrowColor?"tui-arrow-"+t.arrowColor:"",t.radius?"tui-radius":""],style:{backgroundColor:t.backgroundColor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},e186:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.tui-input__wrap[data-v-6ec3ab76]{\nwidth:100%;box-sizing:border-box;display:flex;\nflex-direction:row;flex:1;align-items:center;position:relative;\n}\n.tui-input__wrap[data-v-6ec3ab76]::before{content:" ";position:absolute;top:0;right:0;left:0;border-top:1px solid var(--thorui-line-color,rgba(0,0,0,.1));-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0;z-index:2;pointer-events:none}.tui-input__wrap[data-v-6ec3ab76]::after{content:" ";position:absolute;border-bottom:1px solid var(--thorui-line-color,rgba(0,0,0,.1));-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0;z-index:2;pointer-events:none}.tui-line__left[data-v-6ec3ab76]::after{left:%?30?%!important}.tui-border__top[data-v-6ec3ab76]::before{border-top:0}.tui-border__bottom[data-v-6ec3ab76]::after{border-bottom:0}\n.tui-input__required[data-v-6ec3ab76]{position:absolute;left:%?12?%;\nheight:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);line-height:1.15;\n}.tui-input__label[data-v-6ec3ab76]{padding-right:%?12?%;\nflex-shrink:0\n}.tui-input__self[data-v-6ec3ab76]{flex:1;padding-right:%?12?%;\nbox-sizing:border-box;overflow:visible;\nbackground-color:initial}.tui-input__placeholder[data-v-6ec3ab76]{\ncolor:var(--thorui-text-color-placeholder,#ccc);overflow:visible;\n}\n.tui-input__border[data-v-6ec3ab76]{border-radius:%?4?%;position:relative;\n\n\nborder-width:0\n}\n.tui-input__border[data-v-6ec3ab76]::after{content:" ";position:absolute;height:200%;width:200%;border:1px solid var(--thorui-border-color,#d1d1d1);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);left:0;top:0;border-radius:%?8?%;pointer-events:none}.tui-radius__fillet[data-v-6ec3ab76]::after{border-radius:100px!important}\n.tui-radius__fillet[data-v-6ec3ab76]{border-radius:100px!important}.tui-text__right[data-v-6ec3ab76]{text-align:right}',""]),t.exports=a},e808:function(t,a,e){"use strict";var i=e("06e5"),n=e.n(i);n.a},e9cd:function(t,a,e){"use strict";e.r(a);var i=e("11b6"),n=e("2143");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("1c7a");var r,d=e("f0c5"),l=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"5c0a813c",null,!1,i["a"],r);a["default"]=l.exports},f4e9:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.tui-modal__container[data-v-5c0a813c]{width:100%;height:100%;position:fixed;left:0;top:0;display:flex;align-items:center;justify-content:center;visibility:hidden}.tui-modal-box[data-v-5c0a813c]{position:relative;opacity:0;visibility:hidden;box-sizing:border-box;transition:all .3s ease-in-out}.tui-modal-scale[data-v-5c0a813c]{-webkit-transform:scale(0);transform:scale(0)}.tui-modal-normal[data-v-5c0a813c]{-webkit-transform:scale(1);transform:scale(1)}.tui-modal-show[data-v-5c0a813c]{opacity:1;visibility:visible}.tui-modal-mask[data-v-5c0a813c]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-5c0a813c]{visibility:visible;opacity:1}.tui-modal-title[data-v-5c0a813c]{text-align:center;font-size:%?34?%;color:#333;padding-top:%?20?%;font-weight:700}.tui-modal-content[data-v-5c0a813c]{text-align:center;color:#999;font-size:%?28?%;padding-top:%?20?%;padding-bottom:%?60?%}.tui-mtop[data-v-5c0a813c]{margin-top:%?30?%}.tui-mbtm[data-v-5c0a813c]{margin-bottom:%?30?%}.tui-modalBtn-box[data-v-5c0a813c]{width:100%;display:flex;align-items:center;justify-content:space-between}.tui-flex-column[data-v-5c0a813c]{flex-direction:column}.tui-modal-btn[data-v-5c0a813c]{width:46%;height:%?68?%;line-height:%?68?%;position:relative;border-radius:%?10?%;font-size:%?26?%;overflow:visible;margin-left:0;margin-right:0}.tui-modal-btn[data-v-5c0a813c]::after{content:" ";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);left:0;top:0;border-radius:%?20?%;z-index:2}.tui-btn-width[data-v-5c0a813c]{width:80%!important}.tui-primary[data-v-5c0a813c]{background:#5677fc;color:#fff}.tui-primary-hover[data-v-5c0a813c]{background:#4a67d6;color:#e5e5e5}.tui-primary-outline[data-v-5c0a813c]{color:#5677fc;background:transparent}.tui-primary-outline[data-v-5c0a813c]::after{border:1px solid #5677fc}.tui-danger[data-v-5c0a813c]{background:#ed3f14;color:#fff}.tui-danger-hover[data-v-5c0a813c]{background:#d53912;color:#e5e5e5}.tui-danger-outline[data-v-5c0a813c]{color:#ed3f14;background:transparent}.tui-danger-outline[data-v-5c0a813c]::after{border:1px solid #ed3f14}.tui-red[data-v-5c0a813c]{background:#e41f19;color:#fff}.tui-red-hover[data-v-5c0a813c]{background:#c51a15;color:#e5e5e5}.tui-red-outline[data-v-5c0a813c]{color:#e41f19;background:transparent}.tui-red-outline[data-v-5c0a813c]::after{border:1px solid #e41f19}.tui-warning[data-v-5c0a813c]{background:#ff7900;color:#fff}.tui-warning-hover[data-v-5c0a813c]{background:#e56d00;color:#e5e5e5}.tui-warning-outline[data-v-5c0a813c]{color:#ff7900;background:transparent}.tui-warning-outline[data-v-5c0a813c]::after{border:1px solid #ff7900}.tui-green[data-v-5c0a813c]{background:#19be6b;color:#fff}.tui-green-hover[data-v-5c0a813c]{background:#16ab60;color:#e5e5e5}.tui-green-outline[data-v-5c0a813c]{color:#19be6b;background:transparent}.tui-green-outline[data-v-5c0a813c]::after{border:1px solid #19be6b}.tui-white[data-v-5c0a813c]{background:#fff;color:#333}.tui-white-hover[data-v-5c0a813c]{background:#f7f7f9;color:#666}.tui-white-outline[data-v-5c0a813c]{color:#333;background:transparent}.tui-white-outline[data-v-5c0a813c]::after{border:1px solid #333}.tui-gray[data-v-5c0a813c]{background:#ededed;color:#999}.tui-gray-hover[data-v-5c0a813c]{background:#d5d5d5;color:#898989}.tui-gray-outline[data-v-5c0a813c]{color:#999;background:transparent}.tui-gray-outline[data-v-5c0a813c]::after{border:1px solid #999}.tui-outline-hover[data-v-5c0a813c]{opacity:.6}.tui-circle-btn[data-v-5c0a813c]{border-radius:%?40?%!important}.tui-circle-btn[data-v-5c0a813c]::after{border-radius:%?80?%!important}',""]),t.exports=a},f549:function(t,a,e){"use strict";e.r(a);var i=e("83c8"),n=e("ccd0");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("cca4");var r,d=e("f0c5"),l=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"0af92700",null,!1,i["a"],r);a["default"]=l.exports}}]);