(this["webpackJsonpbudget-calc-context"]=this["webpackJsonpbudget-calc-context"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=a(3),u=(a(25),a(4)),s=a.n(u),i=a(7),m=a(19),p=a(2),d=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,transactions:t.payload});case"ADD_TRANSACTION":return Object(p.a)(Object(p.a)({},e),{},{transactions:[].concat(Object(m.a)(e.transactions),[t.payload])});case"DELETE_TRANSACTION":return Object(p.a)(Object(p.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"TRANSACTION_ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});default:return e}},E=a(8),f=a.n(E),b={transactions:[],error:null,loading:!0},v=Object(n.createContext)(b),O=function(e){var t=e.children,a=Object(n.useReducer)(d,b),c=Object(o.a)(a,2),l=c[0],u=c[1],m=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/v1/transactions");case 3:t=e.sent,u({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete("/api/v1/transactions/".concat(t));case 3:u({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),u({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,f.a.post("/api/v1/transactions/",t,a);case 4:n=e.sent,u({type:"ADD_TRANSACTION",payload:n.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),u({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.Provider,{value:{transactions:l.transactions,error:l.error,loading:l.loading,getTransactions:m,deleteTransaction:p,addTransaction:E}},t)},h=a(46),x=function(){var e=Object(n.useContext)(v).addTransaction,t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(""),s=Object(o.a)(u,2),i=s[0],m=s[1];return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"add new transaction"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={id:Object(h.a)(),text:c,amount:+i};e(a),l(""),m("")}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"text"),r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},type:"text",placeholder:"enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"amount",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{value:i,onChange:function(e){return m(e.target.value)},type:"number",placeholder:"enter amount..."})),r.a.createElement("button",{className:"btn"},"add transaction")))},N=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},T=function(){var e=Object(n.useContext)(v).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2),t=e>0?"+":"-";return r.a.createElement(n.Fragment,null,r.a.createElement("h4",null,"your balance"),r.a.createElement("h1",null,t,"$",N(Math.abs(e))))},j=function(e){var t=e.header;return r.a.createElement("h2",null,t)},y=function(){var e=Object(n.useContext)(v).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),a=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",{className:""},r.a.createElement("h4",null,"income"),r.a.createElement("p",{className:"money plus"},"+$",N(t))),r.a.createElement("div",{className:""},r.a.createElement("h4",null,"expense"),r.a.createElement("p",{className:"money minus"},"-$",N(Math.abs(a).toFixed(2)))))},R=function(e){var t=e.transaction,a=Object(n.useContext)(v).deleteTransaction,c=t.text,l=t.amount,o=l>0?"+":"-";return r.a.createElement("li",{className:l>0?"plus":"minus"},c," ",r.a.createElement("span",null,o,"$",N(Math.abs(l))),r.a.createElement("button",{className:"delete-btn",onClick:function(){return a(t._id)}},"X"))},A=function(){var e=Object(n.useContext)(v),t=e.transactions,a=e.getTransactions;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"history"),r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(R,{key:e.id,transaction:e})}))))},g=function(){var e=Object(n.useState)("expence tracker"),t=Object(o.a)(e,2);t[0],t[1];return r.a.createElement(O,null,r.a.createElement(j,{header:"expence tracker"}),r.a.createElement("div",{className:"container"},r.a.createElement(T,null),r.a.createElement(y,null),r.a.createElement(A,null),r.a.createElement(x,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4bbc1a5c.chunk.js.map