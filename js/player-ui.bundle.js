(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[11],{140:function(t,e,a){var s=a(189);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(20)(s,i);s.locals&&(t.exports=s.locals)},141:function(t,e,a){var s=a(191);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(20)(s,i);s.locals&&(t.exports=s.locals)},157:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return!t.hideEmpty||t.avail.length>0?a("div",[t.title?a("span",[t._v(t._s(t.title)+":")]):t._e(),t._v(" "),t.avail.length>0?a("button",{staticClass:"task-btn",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.cur)},click:t.select}},[t._v(t._s(t.cur?t.cur.name:"None"))]):t._e()]):t._e()};s._withStripped=!0;var i=a(2),r=a(21),n=a(1),l={props:["pick","title","choices","pickEvent","hideEmpty","mustPay"],mixins:[r.a],data(){return{pEvent:this.pickEvent||n.A,cur:i.c.state.getSlot(this.pick)}},methods:{toggleChange(){this.changing=!this.changing},select(){this.emit("choice",this.avail,{cb:t=>{t&&(this.emit(this.pEvent,t),this.cur=i.c.state.getSlot(this.pick))},elm:this.$el,title:this.title||this.pick,mustPay:this.mustPay})}},computed:{avail(){return this.choices?this.choices:i.c.state.filterItems(t=>t.slot===this.pick&&!t.disabled&&!t.locks&&!t.locked&&(t.owned||!t.buy))}}},o=a(6),v=Object(o.a)(l,s,[],!1,null,null,null);v.options.__file="src/ui/components/slotpick.vue";e.a=v.exports},188:function(t,e,a){"use strict";var s=a(140);a.n(s).a},189:function(t,e,a){(e=a(19)(!1)).push([t.i,"\ndiv.allupgrades[data-v-0f3fdedc] {\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\theight:100%;\n}\ndiv.up-list[data-v-0f3fdedc] {\n\tmargin-bottom:1rem;\n\toverflow-x:visible;\n}\n\n",""]),t.exports=e},190:function(t,e,a){"use strict";var s=a(141);a.n(s).a},191:function(t,e,a){(e=a(19)(!1)).push([t.i,"\ndiv.player-view[data-v-6ceabf00] {\n\tdisplay:flex;\n\tflex-direction: row;\n\theight:100%;\n\tpadding-left:1rem;\n\tjustify-content: space-between;\n}\ndiv.player-view div.player-tables[data-v-6ceabf00] {\n\tdisplay:flex;\n\tflex-flow: row wrap;\n\talign-content:flex-start;\n\tflex-grow: 1;\n}\ndiv.player-tables div[data-v-6ceabf00] {\n\tmargin-top:var(--md-gap);\n\tflex-basis: 50%;\n}\ndiv.player-view input[type=text].fld-name[data-v-6ceabf00] { margin: 0;\n}\ndiv.player-view input[type=text][data-v-6ceabf00] {\n\tborder: none; background: transparent; font-size: 1em; cursor: text; position: relative;\n}\ntd[data-v-6ceabf00], th[data-v-6ceabf00] {\n\tpadding:var(--tiny-gap) var(--sm-gap);\n\tvertical-align: text-top;\n}\ntd[data-v-6ceabf00] {\n\ttext-align:right;\n}\nth[data-v-6ceabf00] { text-align: left;\n}\n\n",""]),t.exports=e},225:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player-view"},[t.hallOpen?a("hall",{on:{close:t.closeHall}}):t._e(),t._v(" "),a("div",{staticClass:"player-tables"},[a("div",[a("table",[a("tr",[a("td",[t._v("名字")]),a("th",{staticClass:"text-entry"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.wizName,expression:"wizName"}],staticClass:"fld-name",attrs:{type:"text"},domProps:{value:t.wizName},on:{input:function(e){e.target.composing||(t.wizName=e.target.value)}}})])]),t._v(" "),t.hallUnlocked?a("tr",[a("td"),a("th",[a("button",{on:{click:t.openHall}},[t._v(t._s(t.hallName))])])]):t._e(),t._v(" "),a("tr",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.player.titles,null,"Titles")}}},[a("td",[t.player.titles.length>0?a("span",[a("button",{staticClass:"config",on:{click:function(e){return t.pickTitle(e)}}})]):t._e(),t._v("头衔")]),a("th",[t._v(" "+t._s(t.title))])]),t._v(" "),a("tr",[a("td",[t._v("尊号")]),a("th",[a("slotpick",{attrs:{pick:"honorific"}})],1)]),t._v(" "),a("tr",[a("td",[t._v("名望")]),a("th",[t._v(t._s(Math.floor(t.player.fame.valueOf())))])]),t._v(" "),a("tr",[a("td",[t._v("等级")]),a("th",[t._v(" "+t._s(t.level))])]),t._v(" "),a("tr",[a("td",[t._v("经验")]),a("th",[t._v(" "+t._s(t.exp)+" / "+t._s(t.next)+" ")])]),t._v(" "),a("tr",[a("td",[t._v("善 : 恶")]),a("th",[t._v(" "+t._s(Math.floor(t.player.virtue.valueOf()))+" : "+t._s(Math.floor(t.player.evilamt.valueOf())))])]),t._v(" "),a("tr",[a("td",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.sp)}}},[t._v("技能点")]),a("th",[t._v(" "+t._s(t.spStr))])]),t._v(" "),a("tr",[a("td",[t._v("休息")]),a("th",[a("slotpick",{attrs:{pick:"rest"}})],1)]),t._v(" "),a("tr",[a("td",[t._v("坐骑")]),a("th",[a("slotpick",{attrs:{pick:"mount"}})],1)]),t._v(" "),a("tr",[a("td",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.dist)}}},[t._v("距离")]),a("th",[t._v(t._s(t.dist.current))])])])]),t._v(" "),a("div",[a("table",[a("tr",[a("td",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.hp)}}},[t._v("气血")]),a("th",[t._v("\n\t\t"+t._s(t.floor(t.hp.valueOf()))+" / "+t._s(t.floor(t.hp.max.value)))])]),t._v(" "),a("tr",[a("td",[t._v("精力")]),a("th",[t._v("\n\t\t"+t._s(t.floor(t.stamina.valueOf()))+" / "+t._s(t.floor(t.stamina.max.value)))])]),t._v(" "),a("tr",[a("td",[t._v("防御")]),a("th",[t._v(t._s(t.defense))])]),t._v(" "),a("tr",[a("td",[t._v("闪避")]),a("th",[t._v(t._s(t.dodge))])]),t._v(" "),a("tr",[a("td",[t._v("幸运")]),a("th",[t._v(t._s(t.luck))])]),t._v(" "),a("tr",[a("td",[t._v("伤害加成")]),a("th",[t._v(t._s(t.damage))])]),t._v(" "),a("tr",[a("td",[t._v("命中加成")]),a("th",[t._v(t._s(t.precise(t.tohit)))])]),t._v(" "),a("tr",[a("td",[t._v("速度")]),a("th",[t._v(t._s(t.speed))])]),t._v(" "),a("tr",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.player.weapon)}}},[a("td",[t._v("武器")]),a("th",[t._v(t._s(t.player.weapon?t.player.weapon.name.toTitleCase():"None"))])]),t._v(" "),a("tr",[a("td",[t._v("神机")]),a("th",[a("slotpick",{attrs:{pick:"core"}})],1)])])]),t._v(" "),a("div",[a("table",{staticClass:"resists"},[t._m(0),t._v(" "),t._l(t.player.resist,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s.toString().toTitleCase()))]),a("td",{staticClass:"num-align"},[t._v(t._s(t.precise(e.value))+"%")])])}))],2)]),t._v(" "),a("div",[a("table",{staticClass:"bonuses"},[t._m(1),t._v(" "),t._l(t.player.bonuses,(function(e,s){return a("tr",{key:s},[0!==e.valueOf()?a("td",[t._v(t._s(s.toString().toTitleCase())+": "+t._s(e.valueOf()))]):t._e()])}))],2)]),t._v(" "),a("div",[a("table",{staticClass:"hits"},[t._m(2),t._v(" "),t._l(t.player.hits,(function(e,s){return a("tr",{key:s},[0!==e.valueOf()?a("td",[t._v(t._s(s.toString().toTitleCase())+": "+t._s(e.valueOf()))]):t._e()])}))],2)]),t._v(" "),a("div",[a("table",{staticClass:"immunities"},[t._m(3),t._v(" "),t._l(t.player.immunities,(function(e,s){return a("tr",{key:s},[e>0?a("td",[t._v(t._s(s.toString().toTitleCase()))]):t._e()])}))],2)])]),t._v(" "),a("upgrades")],1)};s._withStripped=!0;var i=a(2),r=a(11),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"allupgrades"},[a("div",{staticClass:"up-list"},[0!=t.classes.length?a("div",{staticClass:"div-hr"},[t._v("Classes")]):t._e(),t._v(" "),t._l(t.classes,(function(e){return a("div",{key:e.id,on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[t._v(t._s(e.name.toTitleCase()+t.count(e)))])})),t._v(" "),0!=t.tasks.length?a("div",{staticClass:"div-hr"},[t._v("Tasks")]):t._e(),t._v(" "),t._l(t.tasks,(function(e){return a("div",{key:e.id,on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[t._v(t._s(e.name.toTitleCase()+t.count(e)))])})),t._v(" "),0!=t.upgrades.length?a("div",{staticClass:"div-hr"},[t._v("Upgrades")]):t._e(),t._v(" "),t._l(t.upgrades,(function(e){return a("div",{key:e.id,on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[t._v(t._s(e.name.toTitleCase()+t.count(e)))])}))],2)])};n._withStripped=!0;var l=a(16),o={methods:{count:t=>t.value>1?" ("+Math.floor(t.value)+")":""},computed:{classes:()=>i.c.state.classes.filter(t=>!t.disabled&&t.value>=1),tasks:()=>i.c.state.tasks.filter(t=>1==t.max&&!t.disabled&&t.value>=1).sort(l.a),upgrades:()=>i.c.state.upgrades.filter(t=>!t.disabled&&t.value>=1).sort(l.a)}},v=(a(188),a(6)),c=Object(v.a)(o,n,[],!1,null,"0f3fdedc",null);c.options.__file="src/ui/panes/allupgrades.vue";var u=c.exports,p=a(157),_=a(10),d={components:{upgrades:u,slotpick:p.a,hall:()=>a.e(6).then(a.bind(null,227))},data:()=>({hallOpen:!1}),beforeCreate(){this.player=i.c.state.player},computed:{wizName:{get(){return this.player.name},set(t){t&&this.player.setName(t)}},hallUnlocked:()=>_.a.hasHall(),hallName:()=>_.a.hall.name,title(){return this.player.title},speed(){return this.player.speed.value},stamina(){return this.player.stamina},hp(){return this.player.hp},bonusNames(){return Object.keys(this.player.bonuses)},hitNames(){return Object.keys(this.player.hits)},level(){return this.player.level.value},defense(){return this.player.defense},dodge(){return Math.floor(this.player.dodge.valueOf())},luck(){return Math.floor(this.player.luck.valueOf())},damage(){return this.player.damage.valueOf()},tohit(){return this.player.tohit.value},exp(){return this.floor(this.player.exp.value)},next(){return this.floor(this.player.next)},mount:()=>i.c.state.getSlot("mount"),core:()=>i.c.state.getSlot("core"),honorific:()=>i.c.state.getSlot("honorific"),dist(){return this.player.dist},sp(){return this.player.sp},spStr(){return Object(r.c)(this.player.sp)}},methods:{floor:r.b,precise:r.d,openHall(){this.hallOpen=!0},closeHall(){this.hallOpen=!1},pickTitle(t){this.emit("choice",this.player.titles,{cb:t=>{t&&this.player.setTitle(t)},elm:t.target,strings:!0})}}},h=(a(190),Object(v.a)(d,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("抗性")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("伤害加成")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("命中加成")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("免疫")])])}],!1,null,"6ceabf00",null));h.options.__file="src/ui/sections/player.vue";e.default=h.exports}}]);