(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0494":function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("q-page",{staticClass:"flex q-pa-md"},[s("q-card",{staticClass:"full-width"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 "},[s("div",{staticClass:"q-gutter-y-md",staticStyle:{"max-width":"600px"}},[s("q-card",[s("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[s("q-tab",{attrs:{name:"register",label:"Register"}}),s("q-tab",{attrs:{name:"login",label:"Login"}})],1),s("q-separator"),s("q-tab-panels",{attrs:{animated:""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[s("q-tab-panel",{attrs:{name:"register"}},[s("div",{staticClass:"text-h6"},[a._v("Register")]),s("q-form",{on:{submit:a.signUp}},["login"==a.tab?s("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",label:"Name"},model:{value:a.name,callback:function(t){a.name=t},expression:"name"}}):a._e(),s("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",type:"email",label:"Email"},model:{value:a.email,callback:function(t){a.email=t},expression:"email"}}),s("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",type:"password",label:"Password"},model:{value:a.password,callback:function(t){a.password=t},expression:"password"}}),s("div",{staticClass:"row"},[s("q-space"),s("q-btn",{attrs:{color:"primary",type:"submit",label:a.tab}})],1)],1)],1),s("q-tab-panel",{attrs:{name:"login"}},[s("div",{staticClass:"text-h6"},[a._v("Login")]),s("q-form",{on:{submit:a.login}},["register"==a.tab?s("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",label:"Name"},model:{value:a.name,callback:function(t){a.name=t},expression:"name"}}):a._e(),s("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",type:"email",label:"Email"},model:{value:a.email,callback:function(t){a.email=t},expression:"email"}}),s("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",type:"password",label:"Password"},model:{value:a.password,callback:function(t){a.password=t},expression:"password"}}),s("div",{staticClass:"row"},[s("q-space"),s("q-btn",{attrs:{color:"primary",type:"submit",label:a.tab}})],1)],1)],1)],1)],1)],1)])])])],1)},i=[],l=s("8aa5"),n=s.n(l),o=s("fc1b"),r={name:"signup",data:function(){return{tab:"register",name:"",email:"",password:""}},methods:{signUp:function(){var a=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(t){o["c"].ref("utilisateur/").set({name:a.email,email:a.password,online:!0}),alert("Your account has been created!"),a.$router.push({path:"/index"})}),(function(a){alert("Opps!"+a.message)}))},login:function(){o["b"].signInWithEmailAndPassword(this.email,this.password).then((function(a){console.log(a)})).catch((function(a){console.log(a.message)}))}}},c=r,m=s("2877"),d=Object(m["a"])(c,e,i,!1,null,null,null);t["default"]=d.exports}}]);