(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8da212a"],{"22b2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-snackbar",{attrs:{timeout:t.info.timeout},model:{value:t.info.snackbar,callback:function(e){t.$set(t.info,"snackbar",e)},expression:"info.snackbar"}},[t._v(" "+t._s(t.info.text)+" ")])},a=[],s={props:{info:Object}},r=s,o=(i("51cd"),i("2877")),c=i("6544"),l=i.n(c),u=i("ade3"),h=(i("a9e3"),i("caad"),i("ca71"),i("8dd9")),d=i("a9ad"),f=i("7560"),p=i("f2e7"),v=i("fe6c"),b=i("58df"),m=i("80d2"),g=i("d9bd"),k=Object(b["a"])(h["a"],d["a"],p["a"],Object(v["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:f["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,n=t.footer,a=t.insetFooter,s=t.left,r=t.right,o=t.top;return{paddingBottom:Object(m["f"])(i+n+a),paddingLeft:this.app?Object(m["f"])(s):void 0,paddingRight:this.app?Object(m["f"])(r):void 0,paddingTop:Object(m["f"])(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(g["e"])("auto-height",this),0==this.timeout&&Object(g["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(m["l"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(u["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(m["l"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,i=e(this.color,{staticClass:"v-snack__wrapper",class:h["a"].options.computed.classes.call(this),style:h["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",i,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),y=Object(o["a"])(r,n,a,!1,null,"328f58f2",null);e["a"]=y.exports;l()(y,{VSnackbar:k})},"23a7":function(t,e,i){"use strict";var n=i("2909"),a=i("5530"),s=i("53ca"),r=(i("a9e3"),i("caad"),i("d81d"),i("b0c0"),i("99af"),i("a434"),i("159b"),i("fb6a"),i("5803"),i("2677")),o=i("3835"),c=(i("4de4"),i("8adc"),i("58df")),l=i("0789"),u=i("9d26"),h=i("a9ad"),d=i("4e82"),f=i("7560"),p=i("f2e7"),v=i("1c87"),b=i("af2b"),m=i("d9bd"),g=Object(c["a"])(h["a"],b["a"],v["a"],f["a"],Object(d["a"])("chipGroup"),Object(p["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({"v-chip":!0},v["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(v["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(o["a"])(e,2),n=i[0],a=i[1];t.$attrs.hasOwnProperty(n)&&Object(m["a"])(n,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(u["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l["b"],t)},genClose:function(){var t=this;return this.$createElement(u["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),n=i.tag,s=i.data;s.attrs=Object(a["a"])(Object(a["a"])({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var r=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(r,s),e)}}),k=i("80d2"),y=i("d9f7");e["a"]=r["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(k["v"])(t).every((function(t){return null!=t&&"object"===Object(s["a"])(t)}))}}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,n=void 0===i?0:i;return t+n}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(k["n"])(e,1024===this.base))},internalArrayValue:function(){return Object(k["v"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var i=e.name,n=void 0===i?"":i,a=e.size,s=void 0===a?0:a,r=t.truncateText(n);return t.showSize?"".concat(r," (").concat(Object(k["n"])(s,1024===t.base),")"):r})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(m["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(k["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(g,{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=r["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(y["b"])(t.data.style,{display:"none"})),t},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:i,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=r["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(a["a"])(Object(a["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(n["a"])(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,i){"use strict";var n=i("8654");e["a"]=n["a"]},"3be1":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"d",(function(){return r})),i.d(e,"e",(function(){return o})),i.d(e,"a",(function(){return c})),i.d(e,"c",(function(){return l}));i("99af");var n=i("4878"),a="/api/user/documents",s=function(t){return n["a"].get("".concat(a,"/").concat(t))},r=function(t,e){return n["a"].put("".concat(a,"/upload/").concat(t),e,{headers:{"Content-Type":"multipart/form-data"}})},o=function(t,e){return n["a"].put("".concat(a,"/updateowner/").concat(t),e)},c=function(t,e){return n["a"].patch("".concat(a,"/delete/").concat(t),e)},l=function(t,e){return n["a"].get("".concat(a,"/").concat(t,"/").concat(e))}},"3e71":function(t,e,i){},"3fa3":function(t,e,i){},"4bd4":function(t,e,i){"use strict";var n=i("5530"),a=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),r=i("3206");e["a"]=Object(a["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"51cd":function(t,e,i){"use strict";i("3fa3")},5803:function(t,e,i){},"615b":function(t,e,i){},"8adc":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return c}));var n=i("b0af"),a=i("80d2"),s=Object(a["g"])("v-card__actions"),r=Object(a["g"])("v-card__subtitle"),o=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");n["a"]},a352:function(t,e,i){"use strict";i("a8c5")},a8c5:function(t,e,i){},b0af:function(t,e,i){"use strict";var n=i("5530"),a=(i("a9e3"),i("0481"),i("615b"),i("10d2")),s=i("297c"),r=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(s["a"],r["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},b28c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"dark-background white--text",attrs:{fluid:""}},[i("Menu",{attrs:{content:t.menu_content}}),i("v-row",{staticClass:"justify-center"},[i("v-col",{attrs:{lg:"6"}},[i("DocumentChooserForm",{on:{addDocument:t.insertDocument}})],1)],1),i("Snackbar",{attrs:{info:t.info}})],1)},a=[],s=(i("d3b7"),i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"dark-background pa-4"},[i("v-card-title",{staticClass:"white--text"},[i("h2",[t._v("Upload a new file")])]),i("v-form",{staticClass:"w-50"},[i("v-text-field",{attrs:{dark:"","prepend-icon":"mdi-file-outline",label:"File name",clearable:"",required:"",rules:t.rules},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),i("v-file-input",{attrs:{dark:"",accept:".pdf",label:"Choose a file",required:""},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"ma-2 white--text",attrs:{loading:t.loading,color:"blue-grey"},on:{click:t.send}},[t._v(" Upload "),i("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-cloud-upload ")])],1)],1),i("Snackbar",{attrs:{info:t.snackData}})],1)}),r=[],o=i("22b2"),c={components:{Snackbar:o["a"]},data:function(){return{title:"",file:null,loading:!1,snackData:{snackbar:!1,text:"",timeout:2e3},rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}]}},methods:{send:function(){if(this.checkInputs()){var t=new FormData;t.append("title",this.title),t.append("file",this.file),t.append("date",(new Date).toISOString()),this.$emit("addDocument",t)}},checkInputs:function(){return!(!this.file||!this.title||this.title.length<3)||(this.snackData.text="Please fill all fields.",this.snackData.snackbar=!0,!1)}}},l=c,u=(i("c036"),i("2877")),h=i("6544"),d=i.n(h),f=i("8336"),p=i("b0af"),v=i("99d9"),b=i("23a7"),m=i("4bd4"),g=i("132d"),k=i("2fa4"),y=i("8654"),C=Object(u["a"])(l,s,r,!1,null,"4ccc7358",null),_=C.exports;d()(C,{VBtn:f["a"],VCard:p["a"],VCardActions:v["a"],VCardTitle:v["b"],VFileInput:b["a"],VForm:m["a"],VIcon:g["a"],VSpacer:k["a"],VTextField:y["a"]});var O=i("fb62"),j=i("3be1"),S=i("34c1"),$={components:{DocumentChooserForm:_,Menu:O["a"],Snackbar:o["a"]},data:function(){return{menu_content:{user:{picture:null,name:"User"},items:[{title:"Uploaded documents",icon:"mdi-file",path:"/user/admin"},{title:"Settings",icon:"mdi-cog-outline",path:"/user/settings"}]},info:{snackbar:!1,timeout:2e3,text:""}}},methods:{insertDocument:function(t){var e=this,i=sessionStorage.getItem("username");Object(j["d"])(i,t).then((function(t){return e.info.text=t.data})).catch((function(t){return e.info.text=t.response.data.message})).finally((function(){return e.info.snackbar=!0}))}},created:function(){var t=this,e=sessionStorage.getItem("username");this.menu_content.user.username=e,Object(S["a"])(e).then((function(i){var n=i.data.picture;t.menu_content.user.picture="picture"==n?"/".concat(e,"/").concat(n):n})).catch((function(t){return console.error(t.message)})),this.username=e}},x=$,B=(i("a352"),i("62ad")),w=i("a523"),V=i("0fd9"),T=Object(u["a"])(x,n,a,!1,null,"02fc2b84",null);e["default"]=T.exports;d()(T,{VCol:B["a"],VContainer:w["a"],VRow:V["a"]})},c036:function(t,e,i){"use strict";i("3e71")},ca71:function(t,e,i){}}]);
//# sourceMappingURL=chunk-c8da212a.1253ce10.js.map