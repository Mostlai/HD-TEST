(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[20],{152:function(e,t,r){var i=r(197);"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r(24)(i,s);i.locals&&(e.exports=i.locals)},196:function(e,t,r){"use strict";var i=r(152);r.n(i).a},197:function(e,t,r){(t=r(23)(!1)).push([e.i,"\n.popup[data-v-70f3611a] {\n\tmax-width: unset;\n\twidth: unset;\n}\n\n",""]),e.exports=t},277:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"popup",attrs:{id:"firebaseui-auth-container"}})};i._withStripped=!0;var s={props:[],data:()=>({}),beforeDestroy(){this.ui&&this.ui.delete(),this.removeListener("login",this.emitClose)},mounted(){this.listen("login",this.emitClose,this);var e={signInFlow:"popup",callbacks:{signInSuccessWithAuthResult:(e,t)=>{this.$emit("close")},signInFailure:e=>{console.log("SIGN IN ERROR: "+e)}},signInOptions:[firebase.auth.GoogleAuthProvider.PROVIDER_ID,firebase.auth.EmailAuthProvider.PROVIDER_ID,firebase.auth.PhoneAuthProvider.PROVIDER_ID,window.firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID],tosUrl:"lololol",privacyPolicyUrl:"./privacy.html"};this.ui||(this.ui=new firebaseui.auth.AuthUI(firebase.auth())),this.ui.start("#firebaseui-auth-container",e)},methods:{emitClose(){this.$emit("close")}}},a=(r(196),r(7)),o=Object(a.a)(s,i,[],!1,null,"70f3611a",null);o.options.__file="src/ui/popups/login.vue";t.default=o.exports},278:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"popup"},[e.err?r("div",[e._v(" "+e._s(e.err))]):e._e(),e._v(" "),e.sent?e._e():r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email@email.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.pw,expression:"pw"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.pw},on:{input:function(t){t.target.composing||(e.pw=t.target.value)}}}),e._v(" "),r("input",{attrs:{type:"submit",value:"register"},on:{click:e.register}}),e._v(" "),r("button",{on:{click:function(t){return e.$emit("close")}}},[e._v("cancel")])])])};i._withStripped=!0;var s={data:()=>({email:null,pw:null,err:null,sent:!1}),mounted(){this.listen("register-sent",this.onRegister,this),this.listen("register-error",this.onError,this)},beforeDestroy(){this.removeListener("register-sent",this.onRegister,this),this.removeListener("register-error",this.onError,this)},methods:{register(){this.email?this.pw?(this.dispatch("try-register",this.email,this.pw),this.email=null):this.err="password required":this.err="Email required"},onRegister(){this.err="Confirmation email sent.\nCheck any junk-mail folders."},onError(e){console.dir(e),this.err=e.message}}},a=r(7),o=Object(a.a)(s,i,[],!1,null,null,null);o.options.__file="src/ui/components/register.vue";t.default=o.exports},297:function(e,t,r){"use strict";r.r(t),r.d(t,"Remote",(function(){return u}));var i=r(192),s=(r(194),r(268),r(89)),a=r(3);const o=i.storage.StringFormat;window.firebase=i;const n={apiKey:"AIzaSyDa2Qj2VQvTzhG0MwzxS-IhQy9LYpCgrRM",authDomain:"theory-of-magic-49589.firebaseapp.com",databaseURL:"https://theory-of-magic-49589.firebaseio.com",projectId:"theory-of-magic-49589",storageBucket:"theory-of-magic-49589.appspot.com",messagingSenderId:"347528879664",appId:"1:347528879664:web:1ba41f1286d54923e317f5"},l={get userid(){return this.auth.currentUser.uid},get loggedIn(){return null!=this.auth.currentUser},init(){i.initializeApp(n),this.auth=i.auth(),this.auth.onAuthStateChanged(e=>{e&&console.log("AUTH: "+e.uid),a.M.dispatch("login-changed",null!=e)})},logout(){return this.auth.signOut()},login(e,t){},register(e,t){},deleteHall:e=>null,loadHall(){return i.storage().ref(this.hallDir(this.userid)).getDownloadURL().then(e=>Object(s.a)(e,!1),e=>{throw console.warn(e),e})},loadChar(e){var t=i.storage().ref(this.saveDir(this.userid,e));return console.log("LOADING FIREBASE: "+e),t.getDownloadURL().then(e=>Object(s.a)(e,!1),e=>(console.warn(e),null))},deleteChar(e){return i.storage().ref(this.saveDir(this.userid,e)).delete()},saveChar(e,t){return i.storage().ref(this.saveDir(this.userid,t)).putString(e,o.RAW)},saveHall(e,t){return i.storage().ref(this.hallDir(this.userid)).putString(e,o.RAW)},hallDir:e=>"usersaves/"+e+"/hall.json",saveDir:(e,t)=>"usersaves/"+e+"/"+t+".json"};l.init();const u={lastSave:0,lastHallSave:0,logout:()=>l.logout(),loggedIn:()=>l.loggedIn,clearAll(){if(!l.loggedIn)return null},tryRegister(e,t){console.log("try register: "+e),this.remote&&this.remote.register(e,t).then(()=>{this.dispatch("register-sent")},e=>{console.log("dispatch reg error"),this.dispatch("register-error",e)})},manualSave(e,t){return this.saveChar(e,t,1e4)},manualSaveHall(e,t){return this.saveHall(e,t,1e4)},saveChar(e,t,r=18e4){if(!l.loggedIn)return null;console.log("saving remote: "+t);var i=Date.now();return i-this.lastSave<r?null:(this.lastSave=i,l.saveChar(e,t))},saveHall(e,t,r=18e4){if(!l.loggedIn)return null;var i=Date.now();return i-this.lastHallSave<r?null:(this.lastHallSave=i,l.saveHall(e,t))},loadChar:e=>l.loggedIn?l.loadChar(e):null,loadHall:e=>l.loggedIn?l.loadHall(e):null}}}]);