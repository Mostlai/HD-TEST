(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[18],{122:function(t,e,s){var i=s(124);"string"==typeof i&&(i=[[t.i,i,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};s(20)(i,l);i.locals&&(t.exports=i.locals)},123:function(t,e,s){"use strict";var i=s(122);s.n(i).a},124:function(t,e,s){(e=s(19)(!1)).push([t.i,"\nlabel[data-v-6d0e0bec] {\n\tmargin-right:var(--md-gap);\n}\n",""]),t.exports=e},125:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return!this.minItems||t.text||this.items.length>=this.minItems?s("div",{staticClass:"filter-box"},[s("label",{attrs:{for:t.elmId("filter")}},[t._v("Find")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.findText,expression:"findText"}],attrs:{id:t.elmId("filter"),type:"text"},domProps:{value:t.findText},on:{input:function(e){e.target.composing||(t.findText=e.target.value)}}})]):t._e()};i._withStripped=!0;var l={props:["value","items","prop","minItems"],data(){return{text:"",pprop:this.prop||"name"}},watch:{items(t,e){this.findText=this.findText}},created(){this.findText=this.text},methods:{clear(){this.text=""}},computed:{findText:{get(){return this.text},set(t){this.text=t;let e=this.pprop;t||this.$emit("input",this.items);var s=t.toLowerCase();"function"==typeof e?this.$emit("input",this.items.filter(t=>e(t,s))):this.$emit("input",this.items.filter(t=>"object"==typeof t&&"string"==typeof t[e]&&t[e].toLowerCase().includes(s)))}}}},n=(s(123),s(6)),a=Object(n.a)(l,i,[],!1,null,"6d0e0bec",null);a.options.__file="src/ui/components/filterbox.vue";e.a=a.exports},144:function(t,e,s){var i=s(195);"string"==typeof i&&(i=[[t.i,i,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};s(20)(i,l);i.locals&&(t.exports=i.locals)},145:function(t,e,s){var i=s(197);"string"==typeof i&&(i=[[t.i,i,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};s(20)(i,l);i.locals&&(t.exports=i.locals)},146:function(t,e,s){var i=s(199);"string"==typeof i&&(i=[[t.i,i,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};s(20)(i,l);i.locals&&(t.exports=i.locals)},194:function(t,e,s){"use strict";var i=s(144);s.n(i).a},195:function(t,e,s){(e=s(19)(!1)).push([t.i,"\n.spellbook[data-v-6adcb0a2] {\n\tpadding: var(--sm-gap);\n\toverflow-y: auto;\n\theight:100%;\n\tmargin-bottom: 1.2rem;\n}\ndiv.spellbook table[data-v-6adcb0a2] { display: flex; flex-flow: row wrap; justify-content: space-between;\n}\n.spellbook table tr[data-v-6adcb0a2] { display:flex; flex-basis: 48%;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(1), .spellbook table tr td[data-v-6adcb0a2]:nth-child(3) {\n\tflex-basis: 20%; order: 3;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(2) { flex: 1; order: 1;}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(3) { flex-basis: 20%; order: 2;\n}\n.spellbook table td[data-v-6adcb0a2] { display: flex;\n}\ndiv.spellbook[data-v-6adcb0a2] { flex-direction: column; padding: 0;\n}\ndiv.spellbook[data-v-6adcb0a2] { margin: 0; padding: var(--md-gap);\n}\ndiv.spellbook  table tr[data-v-6adcb0a2] { padding: var(--sm-gap); display:flex; align-items:center;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(1),\n    div.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 1;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 2;\n}\ndiv.spellbook button[data-v-6adcb0a2] { flex: 1; font-size: var(--compact-small-font); margin: 0;\n}\n\n\n",""]),t.exports=e},196:function(t,e,s){"use strict";var i=s(145);s.n(i).a},197:function(t,e,s){(e=s(19)(!1)).push([t.i,"\n.spelllist span[data-v-b96b8a38]:first-child {\n\tborder-bottom: 1px solid var(--separator-color);\n\tmargin-bottom: var(--sm-gap);\n}\n\n",""]),t.exports=e},198:function(t,e,s){"use strict";var i=s(146);s.n(i).a},199:function(t,e,s){(e=s(19)(!1)).push([t.i,"\ndiv.spells[data-v-1967362c] {\n\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\tpadding: var(--sm-gap) var(--md-gap);\n\theight:100%;\n}\ndiv.spells .bottom[data-v-1967362c] {\n\tdisplay:flex;\n\tflex-flow: row nowrap;\n}\ndiv.spells .spellbook[data-v-1967362c] {\n\tflex-basis: 80%;\n\tflex-grow: 1;\n}\ndiv.spells .spelllist[data-v-1967362c] {\n\tborder-left: 1px solid var( --separator-color );\n\tpadding: var( --sm-gap );\n}\ndiv.spells div.filters div[data-v-1967362c] { box-sizing: border-box; margin: 0;\n}\ndiv.spells div.filters div[data-v-1967362c]:nth-child(1),\ndiv.spells div.filters div[data-v-1967362c]:nth-child(2) {\n        flex-basis: 50%;\n}\ndiv.spells div.filters > div input[type=text][data-v-1967362c],\ndiv.spells div.filters > div input[type=number][data-v-1967362c] {\n\n\t\tflex: 1;\n\t\tmargin-right: 1em;\n\t\tmargin-left: 1em;\n\t\tmin-width: unset;\n\t\tmax-width: unset;\n\t\tpadding:var(--tiny-gap) 0;\n\t\tfont-size: 105%;\n}\ndiv.spells div.filters > div input[data-v-1967362c] { min-width: 0; padding: 0; text-indent: var(--sm-gap);\n}\ndiv.spells .filters[data-v-1967362c] {\n        flex-flow: row wrap; display: flex; text-align: center;\n        border-bottom: 1px solid var(--separator-color);\n        margin: 0; padding: var(--sm-gap); line-height: 2em; justify-content: flex-start;\n}\ndiv.spells div.filters div.checks[data-v-1967362c] { margin: 0; padding: 0 0.5em; flex-basis: unset;\n}\n\n\n\n",""]),t.exports=e},223:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spells"},[s("div",{staticClass:"filters"},[s("filterbox",{attrs:{items:t.spells},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),s("div",[s("label",{staticClass:"level-lbl",attrs:{for:t.elmId("level")}},[t._v("等级:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.minLevel,expression:"minLevel"}],staticClass:"level",attrs:{id:t.elmId("level"),type:"number",min:"0",size:"5"},domProps:{value:t.minLevel},on:{input:function(e){e.target.composing||(t.minLevel=e.target.value)}}})]),t._v(" "),t._l(t.allSchools,(function(e,i){return s("div",{key:i,staticClass:"checks"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.viewSchools,expression:"viewSchools"}],attrs:{type:"checkbox",id:t.elmId("chk"+i)},domProps:{value:i,checked:Array.isArray(t.viewSchools)?t._i(t.viewSchools,i)>-1:t.viewSchools},on:{change:function(e){var s=t.viewSchools,l=e.target,n=!!l.checked;if(Array.isArray(s)){var a=i,o=t._i(s,a);l.checked?o<0&&(t.viewSchools=s.concat([a])):o>-1&&(t.viewSchools=s.slice(0,o).concat(s.slice(o+1)))}else t.viewSchools=n}}}),t._v(" "),s("label",{attrs:{for:t.elmId("chk"+i)}},[t._v(t._s(i.toTitleCase()))])])})),t._v(" "),s("button",{on:{click:t.toggle}},[t._v("已记忆")])],2),t._v(" "),s("div",{staticClass:"bottom"},[s("book",{staticClass:"spellbook",attrs:{viewing:t.viewing}}),t._v(" "),s("spelllist",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"spelllist",attrs:{list:t.list}})],1)])};i._withStripped=!0;var l=s(2),n=s(13),a=s(21),o=s(125),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spellbook"},[s("table",t._l(t.viewing,(function(e){return s("tr",{key:e.id,on:{"!mouseenter":function(s){return s.stopPropagation(),t.itemOver(s,e)}}},[s("td",[e.owned&&t.list.canAdd(e)?s("button",{on:{click:function(s){return t.list.add(e)}}},[t._v("记忆")]):t._e()]),t._v(" "),s("td",[t._v(t._s(e.name.toTitleCase()))]),t._v(" "),s("td",[e.owned?s("button",{attrs:{disabled:!e.canUse(t.game)},on:{click:function(s){return t.emit("spell",e)}}},[t._v("施放")]):s("button",{attrs:{disabled:!e.canBuy(t.game)},on:{click:function(s){return t.emit("buy",e)}}},[t._v("学习")])])])})),0)])};r._withStripped=!0;var d={props:["viewing"],mixins:[a.a],created(){this.game=l.c},computed:{state:()=>l.c.state,list:()=>l.c.state.spelllist}},c=(s(194),s(6)),v=Object(c.a)(d,r,[],!1,null,"6adcb0a2",null);v.options.__file="src/ui/spellbook.vue";var p=v.exports,u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spelllist",attrs:{functional:""}},[s("span",[t._v("最大等级: "+t._s(t.list.used+" / "+Math.floor(t.list.max.value))+"\n\t\t"),t.list.full()?s("div",{staticClass:"warn-text note-text"},[t._v("法术表已满")]):t._e()]),t._v(" "),t._l(t.list.items,(function(e,i){return s("div",{key:i,on:{"!mouseenter":function(s){return s.stopPropagation(),t.itemOver(s,e)}}},[s("button",{staticClass:"stop",on:{click:function(e){return t.list.removeAt(i)}}},[t._v("X")]),s("span",[t._v(t._s(e.name.toTitleCase()))])])}))],2)};u._withStripped=!0;var h={props:["list"]},m=(s(196),Object(c.a)(h,u,[],!1,null,"b96b8a38",null));m.options.__file="src/ui/spelllist.vue";var f=m.exports,b={data(){let t=n.a.getSubVars("spells");return Object.assign({showList:!1,filtered:null,schools:[],min:null,max:null},t)},mixins:[a.a],components:{filterbox:o.a,book:p,spelllist:f},created(){let t=this.allSchools,e=[];for(let s=this.schools.length-1;s>=0;s--)t[this.schools[s]]&&e.push(this.schools[s]);this.schools=e},methods:{toggle(){this.showList=n.a.setSubVar("spells","showList",!this.showList)}},computed:{state:()=>l.c.state,list:()=>l.c.state.spelllist,minLevel:{get(){return this.min},set(t){this.min=n.a.setSubVar("spells","min",Number(t))}},viewSchools:{get(){return this.schools},set(t){this.schools=t,n.a.setSubVar("spells","schools",this.schools.concat())}},allSchools(){let t={},e=this.spells;for(let i=e.length-1;i>=0;i--){var s=e[i];s.school&&(t[s.school]=!0)}return t},viewing(){let t=this.filtered||this.spells,e=this.schools,s=this.minLevel;return e.length>0||s?t.filter(t=>(0===e.length||e.includes(t.school))&&(!s||t.level===s)):t},spells(){return this.state.filterItems(t=>"spell"===t.type&&!this.locked(t))}}},g=(s(198),Object(c.a)(b,i,[],!1,null,"1967362c",null));g.options.__file="src/ui/sections/spells.vue";e.default=g.exports}}]);