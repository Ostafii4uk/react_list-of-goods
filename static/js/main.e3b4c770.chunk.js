(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n.n(s),o=n(6),i=n(4),c=n(5),a=n(8),u=n(7),l=n(1),b=n.n(l),h=n(17),d=(n(13),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e){return{name:e,id:Object(h.a)()}})),p=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isReversed:!1,sortBy:"none",isVisible:!1},e.visibilityApp=function(){return e.setState({isVisible:!0})},e.getVisibleGoods=function(){var t=e.state,n=t.isReversed,s=t.sortBy,r=Object(o.a)(j),i=r.sort((function(e,t){switch(s){case"name":return e[s].localeCompare(t[s]);case"length":return e.name.length-t.name.length;default:return 0}}));return n&&r.reverse(),i},e.reverseGoods=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortByName=function(){return e.setState({sortBy:"name"})},e.sortByNameLength=function(){return e.setState({sortBy:"length"})},e.resetGoods=function(){return e.setState({isReversed:!1,sortBy:"none"})},e}return Object(c.a)(n,[{key:"render",value:function(){return this.state.isVisible?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"List of Goods"}),Object(d.jsx)("ul",{children:this.getVisibleGoods().map((function(e){return Object(d.jsx)("li",{children:e.name},e.id)}))}),Object(d.jsx)("button",{type:"button",onClick:this.reverseGoods,children:"Reverse"}),Object(d.jsx)("button",{onClick:this.sortByName,type:"button",children:"Sort by ABC"}),Object(d.jsx)("button",{onClick:this.sortByNameLength,type:"button",children:"Sort by Length"}),Object(d.jsx)("button",{onClick:this.resetGoods,type:"button",children:"Reset"})]}):Object(d.jsx)("button",{type:"button",onClick:this.visibilityApp,children:"Select"})}}]),n}(b.a.Component);r.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e3b4c770.chunk.js.map