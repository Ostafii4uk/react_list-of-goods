(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(3),s=n.n(r),o=n(6),i=n(4),c=n(5),a=n(8),u=n(7),l=n(1),b=n.n(l),h=n(17),d=(n(13),n(0)),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e){return{name:e,id:Object(h.a)()}})),j=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isReversed:!1,sortBy:"none",isVisible:!1},e.visibilityApp=function(){return e.setState({isVisible:!0})},e.createrOfGoods=function(){var t=e.state,n=t.isReversed,r=t.sortBy,s=Object(o.a)(f),i=s.sort((function(e,t){switch(r){case"name":return e[r].localeCompare(t[r]);case"length":return e.name.length-t.name.length;default:return 0}}));return n&&s.reverse(),i},e.reverseOfGoods=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortByName=function(){return e.setState({sortBy:"name"})},e.sortByNameLength=function(){return e.setState({sortBy:"length"})},e.resetOfGoods=function(){return e.setState({isReversed:!1,sortBy:"none"})},e}return Object(c.a)(n,[{key:"render",value:function(){return this.state.isVisible?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"List of Goods"}),Object(d.jsx)("ul",{children:this.createrOfGoods().map((function(e){return Object(d.jsx)("li",{children:e.name},e.id)}))}),Object(d.jsx)("button",{type:"button",onClick:this.reverseOfGoods,children:"Reverse"}),Object(d.jsx)("button",{onClick:this.sortByName,type:"button",children:"Sort by ABC"}),Object(d.jsx)("button",{onClick:this.sortByNameLength,type:"button",children:"Sort by Length"}),Object(d.jsx)("button",{onClick:this.resetOfGoods,type:"button",children:"Reset"})]}):Object(d.jsx)("button",{type:"button",onClick:this.visibilityApp,children:"Select"})}}]),n}(b.a.Component);s.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8f0c9ec0.chunk.js.map