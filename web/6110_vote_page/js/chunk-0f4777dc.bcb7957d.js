(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f4777dc"],{"4cb1":function(t,e,s){},"95ea":function(t,e,s){"use strict";var o=s("4cb1"),a=s.n(o);a.a},c2e3:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t.showPopupSuccess||t.showPopupFailed?s("div",{staticClass:"overlay"}):t._e(),s("transition",{attrs:{name:"popup"},on:{"after-leave":t.afterLeave}},[t.showPopupSuccess?s("div",{staticClass:"popup success"},[s("h2",[t._v("投票成功!")]),s("p",[t._v("您对"+t._s(t.voteName)+"的投票已成功提交。")])]):t._e()]),s("transition",{attrs:{name:"popup"},on:{"after-leave":t.afterLeave}},[t.showPopupFailed?s("div",{staticClass:"popup failed"},[s("h2",[t._v("投票失败!")]),s("p",[t._v("因网络原因投票失败。")])]):t._e()]),s("div",{staticClass:"title"},[t._v("\n        Vote Time —— Dogs vs Cats!\n    ")]),s("div",{staticClass:"vote-content"},[s("div",{staticClass:"vote-btn dog",on:{click:function(e){return t.btnClick(2)}}},[s("span",[t._v("Dogs")])]),s("div",{staticClass:"vote-btn cat",on:{click:function(e){return t.btnClick(1)}}},[s("span",[t._v("Cats")])])])],1)},a=[],n={data:function(){return{showPopupSuccess:!1,showPopupFailed:!1,voteName:"dogs"}},beforeCreate:function(){},created:function(){},beforeMount:function(){},methods:{btnClick:function(t){var e=this,s=(new Date).toLocaleString();switch(t){case 1:this.api.updateVoteResults({name:"Cats",last_vote:s}).then((function(t){200==t.code?(e.voteName="Cats",e.showPopupMessage(1)):e.showPopupMessage(0)})).catch((function(t){e.showPopupMessage(0)}));break;case 2:this.api.updateVoteResults({name:"Dogs",last_vote:s}).then((function(t){200==t.code?(e.voteName="Dogs",e.showPopupMessage(1)):e.showPopupMessage(0)})).catch((function(t){e.showPopupMessage(0)}));break}},showPopupMessage:function(t){var e=this;t?(this.showPopupSuccess=!0,setTimeout((function(){e.showPopupSuccess=!1}),500)):(this.showPopupFailed=!0,setTimeout((function(){e.showPopupFailed=!1}),500))},afterLeave:function(){}},mounted:function(){this.$nextTick((function(){}))},beforeDestroy:function(){},destroyed:function(){}},c=n,i=(s("95ea"),s("2877")),u=Object(i["a"])(c,o,a,!1,null,"85d9dab4",null);e["default"]=u.exports}}]);