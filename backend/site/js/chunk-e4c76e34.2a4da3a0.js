(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4c76e34"],{"0d36":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Background",[n("Formulario",{attrs:{text:t.value},on:{submit:t.createUser}})],1)},s=[],a=n("31f6"),r=n("2f15"),o=n("34c1"),c={components:{Formulario:a["a"],Background:r["a"]},data:function(){return{value:{title:"Sign up",button_label:"Register",redirect_label:"Do you already have an account?",path:"/login",link_text:"Sign in here!",errorMessage:""}}},methods:{createUser:function(t){var e=this;Object(o["b"])(t).then((function(){sessionStorage.setItem("username",t.username),e.$router.push("/user/admin")})).catch((function(t){return e.value.errorMessage=t.response.data.message}))}},mounted:function(){null!=sessionStorage.getItem("username")&&this.$router.go(1)}},u=c,l=n("2877"),d=Object(l["a"])(u,i,s,!1,null,null,null);e["default"]=d.exports},"22b2":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{timeout:t.info.timeout},model:{value:t.info.snackbar,callback:function(e){t.$set(t.info,"snackbar",e)},expression:"info.snackbar"}},[t._v(" "+t._s(t.info.text)+" ")])},s=[],a={props:{info:Object}},r=a,o=(n("d981"),n("2877")),c=n("6544"),u=n.n(c),l=n("ade3"),d=(n("a9e3"),n("caad"),n("ca71"),n("8dd9")),h=n("a9ad"),f=n("7560"),p=n("f2e7"),m=n("fe6c"),v=n("58df"),b=n("80d2"),g=n("d9bd"),k=Object(v["a"])(d["a"],h["a"],p["a"],Object(m["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:f["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,i=t.footer,s=t.insetFooter,a=t.left,r=t.right,o=t.top;return{paddingBottom:Object(b["f"])(n+i+s),paddingLeft:this.app?Object(b["f"])(a):void 0,paddingRight:this.app?Object(b["f"])(r):void 0,paddingTop:Object(b["f"])(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(g["e"])("auto-height",this),0==this.timeout&&Object(g["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(b["l"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(l["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(b["l"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,n=e(this.color,{staticClass:"v-snack__wrapper",class:d["a"].options.computed.classes.call(this),style:d["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",n,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),x=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=x.exports;u()(x,{VSnackbar:k})},"30f4":function(t,e,n){},"31f6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mx-auto transition-swing contenedor rounded-lg flat pa-10 dark"},[n("h2",{staticClass:"text-center white--text text-h3 mb-4"},[t._v(t._s(t.text.title))]),n("v-form",{staticClass:"d-flex flex-column justify-space-between",attrs:{"lazy-validation":"",id:"form"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("div",[n("v-text-field",{attrs:{rules:t.inputRules,label:"Username",hint:"At least 5 characters",required:"",outlined:"",clearable:"",dark:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",rules:t.inputRules,type:t.show?"text":"password",label:"Password",hint:"At least 5 characters",outlined:"",required:"",clearable:"",dark:""},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("div",[n("v-btn",{attrs:{bottom:"",block:"",id:"btn",depressed:"",color:"primary"},on:{click:t.sendInputs}},[t._v(" "+t._s(t.text.button_label)+" ")]),n("p",{staticClass:"white--text"},[t._v(" "+t._s(t.text.redirect_label)+" "),n("RouterLink",{attrs:{to:t.text.path}},[t._v(t._s(t.text.link_text))])],1)],1)]),n("Snackbar",{attrs:{info:t.snack_text}})],1)},s=[],a=(n("b0c0"),n("22b2")),r={components:{Snackbar:a["a"]},props:{text:Object},data:function(){return{valid:!1,name:"",password:"",show:!1,inputRules:[function(t){return!!t||"Field is required"},function(t){return t.length>=5||"Min 5 characters"}],snack_text:{snackbar:!1,text:"",timeout:2e3}}},methods:{sendInputs:function(){var t=this;if(this.valid=this.checkForm(),this.valid){var e={username:this.name,password:this.password};this.$emit("submit",e),setTimeout((function(){null!=t.text.errorMessage&&(t.snack_text.text=t.text.errorMessage,t.snack_text.snackbar=!0)}),1e3)}},checkForm:function(){if(this.name&&this.password&&this.name.length>=5&&this.password.length>=5)return!0;this.name?this.password?this.name.length<5?this.snack_text.text="The username must be at least 5 characters long.":this.password.length<5&&(this.snack_text.text="The password must be at least 5 characters long."):this.snack_text.text="Password is required.":this.snack_text.text="Username is required.",this.snack_text.snackbar=!0}}},o=r,c=(n("4136"),n("2877")),u=n("6544"),l=n.n(u),d=n("8336"),h=n("a523"),f=n("4bd4"),p=n("8654"),m=Object(c["a"])(o,i,s,!1,null,null,null);e["a"]=m.exports;l()(m,{VBtn:d["a"],VContainer:h["a"],VForm:f["a"],VTextField:p["a"]})},"34c1":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return c}));var i=n("4878"),s="/api/users",a=function(t){return i["a"].post(s,t)},r=function(t){return i["a"].get(s+"/"+t)},o=function(t){return i["a"].post(s+"/validation",t)},c=function(t,e){return i["a"].put(s+"/"+t,e)}},4136:function(t,e,n){"use strict";n("5086")},"4bd4":function(t,e,n){"use strict";var i=n("5530"),s=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("159b"),n("7db0"),n("58df")),a=n("7e2b"),r=n("3206");e["a"]=Object(s["a"])(a["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=n(t)))})):i.valid=n(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5086:function(t,e,n){},ca71:function(t,e,n){},d981:function(t,e,n){"use strict";n("30f4")}}]);
//# sourceMappingURL=chunk-e4c76e34.2a4da3a0.js.map