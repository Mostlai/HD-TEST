(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[3],{179:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return o}));var a=n(3),r=n(90);const s=(t,e,n)=>{if(!a.c.state.exists(e))return;let r=t[e];t[e]=r?r+n:n},l=t=>{let e=t.level,n={gold:100*Math.ceil(Math.pow(e,1.7))};return t.kind&&i(t.kind,n,e),t.biome&&i(t.biome,n,e),t.regen&&s(n,"bloodgem",5*Object(r.c)(e)),n},i=(t,e={},n=1)=>{if(t){t=Object(r.b)(t);let a=Object(r.d)(t,n);s(e,a,n-Object(r.f)(n)+1)}else if(Array.isArray(t))for(let a=t.length-1;a>=0;a--)t[a]&&i(t[a],e,n);return e},o=t=>{var e={};for(let a=t.length-1;a>=0;a--){var n=t[a];e.money=(e.money||0)+200*n.level,e.alculation=(e.alculation||0)+100*n.level,e.lxue=(e.lxue||0)+1*n.level,e.life_crystal=(e.life_crystal||0)+.6*n.level,e.heli=(e.heli||0)+5*n.level}return e}},180:function(t,e,n){var a=n(245);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(22)(a,r);a.locals&&(t.exports=a.locals)},244:function(t,e,n){"use strict";var a=n(180);n.n(a).a},245:function(t,e,n){(e=n(21)(!1)).push([t.i,"\ntr .table-head[data-v-28e20fbc] {\n\tcursor: pointer;\n\ttext-decoration: underline;\n\tuser-select: none;\n\t-moz-user-select: none;\n\t-webkit-user-select: none;\n}\ndiv.bestiary[data-v-28e20fbc] {\ndisplay:flex;\nflex-direction: column;\nmargin-left:0.9em;\npadding:0;\nmargin:0;\n}\n.char-list[data-v-28e20fbc] {\n\twidth:100%;\n\tpadding: 0; margin: 0;\n\toverflow-y:auto;\n\tmargin-bottom:1rem;\n}\ntable.bestiary[data-v-28e20fbc] {\n\tborder-spacing: var(--sm-gap) 0;\n\tborder-collapse: collapse;\n\trow-gap: var(--sm-gap);\n\tcolumn-gap: var(--md-gap);\n}\ntr:first-child .table-head[data-v-28e20fbc] {\n\tborder-bottom: 1pt solid black;\n\tmargin:var(--sm-gap);\n}\n.table-head[data-v-28e20fbc] {\n\tpadding: var(--sm-gap) var(--md-gap);\n}\ntd.num-align[data-v-28e20fbc] {\n\tpadding: var(--md-gap);\n}\n\n",""]),t.exports=e},298:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bestiary"},[n("filterbox",{attrs:{items:t.allItems,"min-items":"14"},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),n("div",{staticClass:"char-list"},[n("table",{staticClass:"bestiary"},[n("tr",[n("th",{staticClass:"table-head",on:{click:function(e){return t.setSort("name")}}},[t._v("Creature")]),t._v(" "),n("th",{staticClass:"table-head",on:{click:function(e){return t.setSort("level")}}},[t._v("Level")]),t._v(" "),n("th",{staticClass:"table-head",on:{click:function(e){return t.setSort("value")}}},[t._v("Slain")]),t._v(" "),n("th",{staticClass:"num-align table-head",on:{click:function(e){return t.setSort("hp")}}},[t._v("Hp")])]),t._v(" "),t._l(t.sorted,(function(e){return n("tr",{key:e.id,on:{"!mouseenter":function(n){return n.stopPropagation(),t.itemOver(n,e)}}},[n("th",{staticClass:"lg-name"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"num-align"},[t._v(t._s(Math.floor(e.level)))]),t._v(" "),n("td",{staticClass:"num-align"},[t._v(t._s(Math.floor(e.value)))]),t._v(" "),n("td",{staticClass:"num-align"},[t._v(t._s(t.showHp(e)?t.toNum(e.hp):"???"))]),t._v(" "),n("td",[n("button",{attrs:{disabled:e.unique||!e.canUse(t.game)||0==t.minions.freeSpace()},on:{click:function(n){return t.tryUse(e)}}},[t._v("Buy")])])])}))],2)])],1)};a._withStripped=!0;var r=n(3),s=n(17),l=(n(29),n(42)),i=n(4),o=n(179),c=n(2),d=n(90),u={mixins:[s.a],data:()=>({filtered:null,sortBy:"level",sortOrder:1,loreLevels:{}}),components:{filterbox:l.a},beforeCreate(){this.game=r.c},methods:{tryUse(t){this.emit(i.K,t)},loreLevel(t){let e=this.loreLevels[t.kind];return void 0===e&&(e=this.$set(this.loreLevels,t.kind,Object(d.a)(t.kind,r.c))),e},showHp(t){return this.loreLevel(t)>=4*t.level},toNum:t=>("object"==typeof t?t.type===c.G?t.max:t.value:t).toFixed(0),setSort(t){this.sortBy===t?this.sortOrder=-this.sortOrder:this.sortBy=t}},computed:{minions:()=>r.c.state.minions,allItems(){let t=r.c.state.monsters;for(let e=t.length-1;e>=0;e--)t[e].name=t[e].name.toTitleCase();var e=[];for(let a=t.length-1;a>=0;a--){var n=t[a];n.value<=0||(n.cost||this.$set(n,"cost",Object(o.a)(n)),e.push(n))}return e},sorted(){let t,e,n=this.sortBy,a=this.sortOrder;return(this.filtered||this.allItems).sort((r,s)=>(t=r[n],e=s[n],t>e?a:e>t?-a:0))}}},v=(n(244),n(6)),m=Object(v.a)(u,a,[],!1,null,"28e20fbc",null);m.options.__file="src/ui/sections/bestiary.vue";e.default=m.exports}}]);