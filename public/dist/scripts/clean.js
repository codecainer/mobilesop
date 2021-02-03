
    (function(d, t) {
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = "https://cdn.pushalert.co/integrate_aaa44e0079d65a1881cab20b4cb67e33.js";
      s.parentNode.insertBefore(g, s);
    }(document, "script"));
  
!function(e,t){"use strict";"object"==typeof module
:t(e)}("undefined"!=typeof window?window
,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},v=function(e){return null!=e&&e===e.window},y={type:!0,src:!0,nonce:!0,noModule:!0};
function x(e){return null==e
:"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.4.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}w.fn=w.prototype={jquery:b,constructor:w,length:0,toArray:
,get:function(e){return null==e?o.call(this):e<0
:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:
,slice:
,first:
,last:
,eq:
,end:
,push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]
,s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]
,s++),"object"==typeof a||g(a)
,s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i
:i||w.isPlainObject(n)?n
,i=!1,a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:!0,error:
,noop:
,isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e)||(t=i(e))&&("function"!=typeof(n=f.call(t,"constructor")&&t.constructor)||p.call(n)!==d))},isEmptyObject:
,globalEval:
,each:function(e,t){var n,r=0;if(C(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))
return e},trim:
,makeArray:function(e,t){var n=t
;return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e
:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t
:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:
,map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)
return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,v,y,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ue(),S=ue(),k=ue(),N=ue(),A=function(e,t){return e===t&&(f=!0),0},D={}.hasOwnProperty,j=[],q=j.pop,L=j.push,H=j.push,O=j.slice,P=
,R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=
,re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=
,oe=
,ae=be(
,{dir:"parentNode",next:"legend"});try{H.apply(j=O.call(w.childNodes),w.childNodes),j[w.childNodes.length].nodeType}
function se(e,t,r,i){var o,s,l,c,f,h,y,m=t&&t.ownerDocument,T=t?t.nodeType
;if(r=r
,"string"!=typeof e||!e||1!==T&&9!==T
if(!i&&((t?t.ownerDocument||t
)!==d
,t=t
,g)){if(11!==T&&(f=Z.exec(e)))if(o=f[1])
else{if(f[2])return H.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return H.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!N[e+" "]&&(!v
)&&(1!==T||"object"!==t.nodeName.toLowerCase())){if(y=e,m=t,1===T&&U.test(e)){for((c=t.getAttribute("id"))?c=c.replace(re,ie)
,s=(h=a(e)).length;s--;)h[s]="#"+c+" "+xe(h[s]);y=h.join(","),m=ee.test(e)
||t}try{return H.apply(r,m.querySelectorAll(y)),r}
finally{c===b
}}}
}function ue(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength
,t[n+" "]=i}}function le(e){return e[b]=!0,e}function ce(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}
function de(e){return 
}function he(e){return 
}function ge(e){return 
}function ve(e){return le(
)}
for(t in n=se.support={},o=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName
)},p=se.setDocument=function(e){var t,i,a=e
:w;return a!==d&&9===a.nodeType&&a.documentElement&&(h=(d=a).documentElement,g=!o(d),w!==d
,n.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ce(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=K.test(d.getElementsByClassName),n.getById=ce(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=
,r.find.ID=
,r.find.TAG=n.getElementsByTagName?
,r.find.CLASS=n.getElementsByClassName&&
,y=[],v=[],(n.qsa=K.test(d.querySelectorAll))&&(ce(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length
,e.querySelectorAll("[selected]").length
,e.querySelectorAll("[id~="+b+"-]").length
,e.querySelectorAll(":checked").length
,e.querySelectorAll("a#"+b+"+*").length
}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length
,2!==e.querySelectorAll(":enabled").length
,h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length
,e.querySelectorAll("*,:x"),v.push(",.*:")})),(n.matchesSelector=K.test(m=h.matches
))&&ce(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),y.push("!=",$)}),v=v.length
,y=y.length
,t=K.test(h.compareDocumentPosition),x=t
?function(e,t){var n=9===e.nodeType?e.documentElement
,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType
)}
,A=t?
),d},se.matches=
,se.matchesSelector=function(e,t){if((e.ownerDocument
)!==d
,n.matchesSelector&&g&&!N[t+" "]&&(!y
)&&(!v
))try{var r=m.call(e,t);if(r||n.disconnectedMatch
)return r}
},se.contains=function(e,t){return(e.ownerDocument||e)!==d
,x(e,t)},se.attr=
,se.escape=
,se.error=
,se.uniqueSort=
,i=se.getText=
,(r=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:
,CHILD:
,PSEUDO:
},filter:{TAG:
,CLASS:
,ATTR:
,CHILD:
,PSEUDO:
},pseudos:{not:le(
),has:le(
),contains:le(
),lang:le(
),target:
,root:
,focus:
,enabled:ge(!1),disabled:ge(!0),checked:
,selected:
,empty:
,parent:
,header:
,input:
,button:
,text:
,first:ve(
),last:ve(
),eq:ve(
),even:ve(
),odd:ve(
),lt:ve(
),gt:ve(
)}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=de(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=he(t);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(e,t,n){var r=t.dir,i=t.next,o=i
,a=n
,s=C++;return t.first
return me.prototype=r.filters=r.pseudos,r.setFilters=new me,a=se.tokenize=function(e,t){var n,i,o,a,s,u,l,c=S[e+" "];if(c)
for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(i=_.exec(s))||(i&&(s=s.slice(i[0].length)
),u.push(o=[])),n=!1,(i=z.exec(s))
,r.filter)!(i=G[a].exec(s))||l[a]
||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)
}return t
:s
:S(e,u).slice(0)},s=se.compile=
,u=se.select=
,n.sortStable=b.split("").sort(A).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})
,n.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})
,ce(function(e){return null==e.getAttribute("disabled")})
,se}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var S=
,k=
,N=w.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
w.filter=
,w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)
for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return 1<r
:n},filter:
,not:
,is:
});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!i[1]&&t)return!t
?(t||n).find(e)
;if(i[1]){if(t=t instanceof w
:t,w.merge(this,w.parseHTML(i[1],t
:r,!0)),D.test(i[1])&&w.isPlainObject(t))
return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e)
:w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};
w.fn.extend({has:
,closest:
,index:
,add:
,addBack:
}),w.each({parent:
,parents:
,parentsUntil:
,next:
,prev:
,nextAll:
,prevAll:
,nextUntil:
,prevUntil:
,siblings:
,children:
,contents:
},function(e,t){w.fn[e]=
});var R=/[^\x20\t\r\n\f]+/g;
w.Callbacks=function(e){var t,n;e="string"==typeof e?(t=e,n={},w.each(t.match(R)
,function(e,t){n[t]=!0}),n)
;var r,i,o,a,s=[],u=[],l=-1,c=function(){for(a=a||e.once,o=r=!0;u.length;l=-1)for(i=u.shift();++l<s.length;)!1===s[l].apply(i[0],i[1])
;e.memory
,r=!1,a&&(s=i?[]
)},f={add:function(){return s&&(i&&!r&&(l=s.length-1,u.push(i)),function t(n){w.each(n,function(n,r){g(r)?e.unique
||s.push(r)
})}(arguments),i&&!r&&c()),this},remove:
,has:
,empty:
,disable:function(){return a=u=[],s=i="",this},disabled:
,lock:function(){return a=u=[],i||r||(s=i=""),this},locked:
,fireWith:function(e,t){return a||(t=[e,(t=t
).slice?t.slice():t],u.push(t),r||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:
};return f},w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:
,always:
,catch:function(e){return i.then(null,e)},pipe:
,then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())
l=e
,g(l)
:(r!==M&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i
:function(){try{l()}
};t
:(w.Deferred.getStackHook
,e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)
:M,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:M)),n[2][3].add(a(0,e,g(r)?r:I))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=
,o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:
});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=
,w.readyException=
;var F=w.Deferred();function B(){r.removeEventListener("DOMContentLoaded",B),e.removeEventListener("load",B),w.ready()}w.fn.ready=function(e){return F.then(e).catch(
),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e
:w.isReady)||(w.isReady=!0)!==e&&0<--w.readyWait||F.resolveWith(r,[w])}}),w.ready.then=F.then,"complete"===r.readyState||"loading"!==r.readyState
:(r.addEventListener("DOMContentLoaded",B),e.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))
else if(void 0!==r&&(i=!0,g(r)||(a=!0),l
,t))for(;s<u;s++)t(e[s],n,a?r
);return i?e:l
:u?t(e[0],n)
},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=w.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:
,remove:
,hasData:
};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;
w.extend({hasData:
,data:
,removeData:
,_data:
,_removeData:
}),w.fn.extend({data:
,removeData:
}),w.extend({queue:
,dequeue:
,_queueHooks:
}),w.fn.extend({queue:
,dequeue:
,clearQueue:
,promise:
});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=r.documentElement,oe=
,ae={composed:!0};ie.getRootNode&&(oe=function(e){return w.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=
,ue=
var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t
:"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}w.fn.extend({show:
,hide:function(){return fe(this)},toggle:
});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t
):void 0!==e.querySelectorAll?e.querySelectorAll(t
,void 0===t||t&&A(e,t)
:n}
ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])
)if("object"===x(o))w.merge(p,o.nodeType
:o);else if(be.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)
)[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];c--;)
w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}
for(f.textContent="",d=0;o=p[d++];)if(r&&-1<w.inArray(o,r))
else if(l=oe(o),a=ve(f.appendChild(o),"script"),l
,n)
return f}me=r.createDocumentFragment().appendChild(r.createElement("div")),(xe=r.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),h.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;
function ke(){return!1}
function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t)
if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)
else if(!i)
return 1===o
,e.each(function(){w.event.add(this,t,i,r,n)})}
w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(e);if(v)for(n.handler
,i&&w.find.matchesSelector(ie,i),n.guid||(n.guid=w.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(t){return void 0!==w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments)
}),l=(t=(t
).match(R)
).length;l--;)d=g=(s=Ee.exec(t[l])
)[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add
,i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)},remove:
,dispatch:function(e){var t,n,r,i,o,a,s=w.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")
)[s.type]
,c=w.event.special[s.type]
;for(u[0]=s,t=1;t<arguments.length;t++)
if(s.delegateTarget=this,!c.preDispatch
){for(a=w.event.handlers.call(this,s,l),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace
||(s.handleObj=o,s.data=o.data,void 0!==(r=((w.event.special[o.origType]
).handle||o.handler).apply(i.elem,u))
);return c.postDispatch
,s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u
return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?
,set:
})},fix:function(e){return e[w.expando]
:new w.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this
;return pe.test(t.type)
,!1},trigger:
,_default:
},beforeunload:{postDispatch:
}}},w.removeEvent=
,w.Event=function(e,t){if(!(this instanceof w.Event))
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented
:ke,this.target=e.target&&3===e.target.nodeType
:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget)
,t
,this.timeStamp=e&&e.timeStamp
,this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:
,stopPropagation:
,stopImmediatePropagation:
},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:
},w.event.addProp),w.each({focus:"focusin",blur:"focusout"},function(e,t){w.event.special[e]={setup:
,trigger:
,delegateType:t}}),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:
}}),w.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:
,off:
});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")
||e}
function Ie(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,v=t[0],y=g(v);if(y||1<p
if(p&&(o=(i=we(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length
,o
)){for(u=(s=w.map(ve(i,"script"),Pe)).length;f<p;f++)l=i,f!==d
,n.call(e[f],l,f);if(u)
}return e}
w.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:
,cleanData:
}),w.fn.extend({detach:
,remove:
,text:
,append:function(){return Ie(this,arguments,function(e){1!==this.nodeType
||Oe(this,e).appendChild(e)})},prepend:
,before:
,after:
,empty:
,clone:
,html:
,replaceWith:
}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this
,w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])
,!h.pixelBoxStyles()
),void 0!==a?a+""
}function ze(e,t){return{get:
}}!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=12===n(c.offsetWidth/3),ie.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:
,pixelBoxStyles:function(){return t(),s},pixelPosition:
,reliableMarginLeft:
,scrollboxSize:
}))}();var Ue=["Webkit","Moz","ms"],Xe=r.createElement("div").style,Ve={};function Ge(e){return w.cssProps[e]||Ve[e]||(e in Xe?e
)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};
w.extend({cssHooks:{opacity:{get:
}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)
"string"==(o=typeof n)
,null!=n&&n==n&&("number"!==o||u||(n+=i
||(w.cssNumber[s]
:"px")),h.clearCloneStyle
,a
||(u
:l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=w.cssHooks[t]||w.cssHooks[s])
,void 0===i&&(i=_e(e,t,r)),"normal"===i
,""===n||n
:i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:
,set:
}}),w.cssHooks.marginLeft=ze(h.reliableMarginLeft,
),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:
},"margin"!==e&&(w.cssHooks[e+t].set=Ze)}),w.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t))
return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,1<arguments.length)}}),((w.Tween=nt).prototype={constructor:nt,init:
,cur:
,run:
}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:
,set:
}}).scrollTop=nt.propHooks.scrollLeft={set:
},w.easing={linear:
,swing:
,_default:"swing"},w.fx=nt.prototype.init,w.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;
function ft(e,t){var n,r=0,i={height:e};for(t=t
:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t
,i}
w.Animation=w.extend(dt,{tweeners:{"*":[
]},tweener:
,prefilters:[
],prefilter:
}),w.speed=
,w.fn.extend({fadeTo:
,animate:
,stop:
,finish:
}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e
?n.apply(this,arguments)
}}),w.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=
}),w.timers=[],w.fx.tick=
,w.fx.timer=
,w.fx.interval=13,w.fx.start=
,w.fx.stop=
,w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=
,ot=r.createElement("input"),at=r.createElement("select").appendChild(r.createElement("option")),ot.type="checkbox",h.checkOn=""!==ot.value,h.optSelected=at.selected,(ot=r.createElement("input")).value="t",ot.type="radio",h.radioValue="t"===ot.value;var ht,gt=w.expr.attrHandle;w.fn.extend({attr:
,removeAttr:
}),w.extend({attr:
,attrHooks:{type:{set:
}},removeAttr:
}),ht={set:
},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=gt[t]||w.find.attr;gt[t]=
});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)
).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")
}function bt(e){return Array.isArray(e)
:"string"==typeof e&&e.match(R)
}w.fn.extend({prop:
,removeProp:
}),w.extend({prop:
,propHooks:{tabIndex:{get:
}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected
,w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this}),w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))
if((t=bt(e)).length)for(;n=this[u++];)if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:
,toggleClass:
,hasClass:
});var wt=/\r/g;w.fn.extend({val:
}),w.extend({valHooks:{option:{get:
},select:{get:
,set:
}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:
},h.checkOn
}),h.focusin="onfocusin"in e;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=
;w.extend(w.event,{trigger:
,simulate:
}),w.fn.extend({trigger:
,triggerHandler:
}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=
;w.event.special[t]={setup:
,teardown:
}});var Et=e.location,St=Date.now(),kt=/\?/;w.parseXML=
;var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;
w.param=
,w.fn.extend({serialize:
,serializeArray:
});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=r.createElement("a");function Bt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(R)
;if(g(n))for(;r=o[i++];)"+"===r[0]
:(e[r]=e[r]||[]).push(n)}}
function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions
;for(n in t)void 0!==t[n]&&((i[n]
:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}Ft.href=Et.href,w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t
:zt(w.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:
,getJSON:
,getScript:
}),w.each(["get","post"],function(e,t){w[t]=
}),w._evalUrl=
,w.fn.extend({wrapAll:
,wrapInner:
,wrap:
,unwrap:
}),w.expr.pseudos.hidden=
,w.expr.pseudos.visible=
,w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}
};var Ut={0:200,1223:204},Xt=w.ajaxSettings.xhr();h.cors=!!Xt&&"withCredentials"in Xt,h.ajax=Xt=!!Xt,w.ajaxTransport(
),w.ajaxPrefilter(
),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":
}}),w.ajaxPrefilter("script",
),w.ajaxTransport("script",
);var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:
}),w.ajaxPrefilter("json jsonp",
),h.createHTMLDocument=((Vt=r.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),w.parseHTML=function(e,t,n){return"string"!=typeof e
:("boolean"==typeof t
,t
,a=!n
,(o=D.exec(e))?[t.createElement(o[1])]:(o=we([e],t,a),a
,w.merge([],o.childNodes)));
},w.fn.load=
,w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=
}),w.expr.pseudos.animated=
,w.offset={setOffset:
},w.fn.extend({offset:
,position:
,offsetParent:
}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=
}),w.each(["top","left"],function(e,t){w.cssHooks[t]=ze(h.pixelPosition,
)}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=
})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n)
}}),w.fn.extend({hover:
}),w.fn.extend({bind:
,unbind:
,delegate:
,undelegate:
}),w.proxy=
,w.holdReady=
,w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=A,w.isFunction=g,w.isWindow=v,w.camelCase=V,w.type=x,w.now=Date.now,w.isNumeric=
,"function"==typeof define
;var Qt=e.jQuery,Jt=e.$;return w.noConflict=
,t||(e.jQuery=e.$=w),w});
jQuery,function(){"use strict";
var e=navigator.userAgent.indexOf("Windows Phone")>=0,i=navigator.userAgent.indexOf("Android")>0
,n=/iP(ad|hone|od)/.test(navigator.userAgent)
,s=n
,o=n
,r=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=
,t.prototype.needsFocus=
,t.prototype.sendClick=
,t.prototype.determineEventType=
,t.prototype.focus=
,t.prototype.updateScrollParent=
,t.prototype.getTargetElementFromEventTarget=
,t.prototype.onTouchStart=
,t.prototype.touchHasMoved=
,t.prototype.onTouchMove=
,t.prototype.findControl=
,t.prototype.onTouchEnd=
,t.prototype.onTouchCancel=
,t.prototype.onMouse=
,t.prototype.onClick=
,t.prototype.destroy=
,t.notNeeded=
,t.attach=
,"function"==typeof define
:"undefined"!=typeof module
:window.FastClick=t}(),function(t){var e,i,n;!function(t,e,i,n){
s.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},s.Width={Default:"default",Inner:"inner",Outer:"outer"},s.Type={Event:"event",State:"state"},s.Plugins={},s.Workers=[{filter:["width","settings"],run:
},{filter:["width","items","settings"],run:
},{filter:["items","settings"],run:
},{filter:["width","items","settings"],run:
},{filter:["width","items","settings"],run:
},{filter:["items","settings"],run:
},{filter:["width","items","settings"],run:
},{filter:["width","items","settings"],run:
},{filter:["width","items","settings"],run:
},{filter:["items"],run:
},{filter:["width","items","settings"],run:
},{filter:["position"],run:
},{filter:["width","position","items","settings"],run:
}],s.prototype.initialize=
,s.prototype.setup=
,s.prototype.optionsLogic=
,s.prototype.prepare=
,s.prototype.update=
,s.prototype.width=
,s.prototype.refresh=
,s.prototype.onThrottledResize=
,s.prototype.onResize=
,s.prototype.registerEventHandlers=
,s.prototype.onDragStart=
,s.prototype.onDragMove=
,s.prototype.onDragEnd=
,s.prototype.closest=
,s.prototype.animate=
,s.prototype.is=
,s.prototype.current=
,s.prototype.invalidate=
,s.prototype.reset=
,s.prototype.normalize=
,s.prototype.relative=
,s.prototype.maximum=
,s.prototype.minimum=
,s.prototype.items=
,s.prototype.mergers=
,s.prototype.clones=
,s.prototype.speed=
,s.prototype.coordinates=
,s.prototype.duration=
,s.prototype.to=
,s.prototype.next=
,s.prototype.prev=
,s.prototype.onTransitionEnd=
,s.prototype.viewport=
,s.prototype.replace=
,s.prototype.add=
,s.prototype.remove=
,s.prototype.preloadAutoWidthImages=
,s.prototype.destroy=
,s.prototype.op=
,s.prototype.on=
,s.prototype.off=
,s.prototype.trigger=
,s.prototype.enter=
,s.prototype.leave=
,s.prototype.register=
,s.prototype.suppress=
,s.prototype.release=
,s.prototype.pointer=
,s.prototype.isNumeric=
,s.prototype.difference=
,t.fn.owlCarousel=
,t.fn.owlCarousel.Constructor=s}(window.Zepto||window.jQuery,window,document),e=window.Zepto||window.jQuery,i=window,document,(n=
).Defaults={autoRefresh:!0,autoRefreshInterval:500},n.prototype.watch=
,n.prototype.refresh=
,n.prototype.destroy=
,e.fn.owlCarousel.Constructor.Plugins.AutoRefresh=n,function(t,e,i,n){var s=
;s.Defaults={lazyLoad:!1},s.prototype.load=
,s.prototype.destroy=
,t.fn.owlCarousel.Constructor.Plugins.Lazy=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){var s=
;s.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},s.prototype.update=
,s.prototype.destroy=
,t.fn.owlCarousel.Constructor.Plugins.AutoHeight=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){var s=
;s.Defaults={video:!1,videoHeight:!1,videoWidth:!1},s.prototype.fetch=
,s.prototype.thumbnail=
,s.prototype.stop=
,s.prototype.play=
,s.prototype.isInFullScreen=
,s.prototype.destroy=
,t.fn.owlCarousel.Constructor.Plugins.Video=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){var s=
;s.Defaults={animateOut:!1,animateIn:!1},s.prototype.swap=
,s.prototype.clear=
,s.prototype.destroy=
,t.fn.owlCarousel.Constructor.Plugins.Animate=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){var s=
;s.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},s.prototype.play=
,s.prototype._getNextTimeout=
,s.prototype._setAutoPlayInterval=
,s.prototype.stop=
,s.prototype.pause=
,s.prototype.destroy=
,t.fn.owlCarousel.Constructor.Plugins.autoplay=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){"use strict";var s=
;s.Defaults={nav:!1,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},s.prototype.initialize=
,s.prototype.destroy=
,s.prototype.update=
,s.prototype.draw=
,s.prototype.onTrigger=
,s.prototype.current=
,s.prototype.getPosition=
,s.prototype.next=
,s.prototype.prev=
,s.prototype.to=
,t.fn.owlCarousel.Constructor.Plugins.Navigation=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){"use strict";var s=
;s.Defaults={URLhashListener:!1},s.prototype.destroy=
,t.fn.owlCarousel.Constructor.Plugins.Hash=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){function s(e,i){var s=!1,o=e.charAt(0).toUpperCase()+e.slice(1);return t.each((e+" "+a.join(o+" ")+o).split(" "),function(t,e){if(r[e]!==n)return s=!i||e,!1}),s}function o(t){return s(t,!0)}var r=t("<support>").get(0).style,a="Webkit Moz O ms".split(" "),h={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},l=function(){return!!s("transform")},c=function(){return!!s("perspective")},u=function(){return!!s("animation")};(function(){return!!s("transition")})()&&(t.support.transition=new String(o("transition")),t.support.transition.end=h.transition.end[t.support.transition]),u()&&(t.support.animation=new String(o("animation")),t.support.animation.end=h.animation.end[t.support.animation]),l()&&(t.support.transform=new String(o("transform")),t.support.transform3d=c())}(window.Zepto||window.jQuery,window,document)}(jQuery),function(t){var e,i,n;e=window.Zepto||window.jQuery,i=window,document,(n=
).Defaults={lazyLoad:!1,lazyPrefetch:"page"},n.prototype.positions=
,n.prototype.load=
,n.prototype.destroy=
,e.fn.owlCarousel.Constructor.Plugins.Lazy=n}(jQuery),function(t){!function(t,e){"use strict";if(!e)
var i=
;i.prototype={init:
,fit:
,findNode:
,splitNode:
,growDown:
},e.fn.filterizr=
,e.fn.filterizr.prototype={init:
,filter:
,toggleFilter:
,search:
,shuffle:
,sort:
,setOptions:
,_getFiltrItems:
,_makeSubarrays:
,_makeMultifilterArray:
,_setupControls:
,_setupEvents:
,_calcItemPositions:
,_handleFiltering:
,_multifilterModeOn:
,_isSearchActivated:
,_placeItems:
,_getCollectionByFilter:
,_makeDeepCopy:
,_comparator:
,_getArrayOfUniqueItems:
,_delayEvent:function(){var t={};return 
}(),_fisherYatesShuffle:
};var n={_init:
,_updateDimensions:
,_calcDelay:
,_getCategory:
,_onTransitionEnd:
,_filterOut:
,_filterIn:
}}(this,jQuery)}(jQuery),function(t){var e,i;e="undefined"!=typeof global
:this.window
,i=function(t){"use strict";
const i={src:"data-src",srcset:"data-srcset",selector:".lazyload"},n=
;if(e.prototype={init:
,loadAndDestroy:
,loadImages:
,destroy:
},t.lazyload=
,t.jQuery){const i=t.jQuery;i.fn.lazyload=
}return e},"object"==typeof exports
:"function"==typeof define
:e.LazyLoad=i(e)}(jQuery),jQuery,function(t){"use strict";"object"==typeof module
:t(jQuery,window,document)}(function(t,e,i,n){"use strict";if(!e.history.pushState)
if(!t.fn.smoothState){var s=t("html, body"),o=e.console,r={isExternal:
,stripHash:
,isHash:
,translate:
,shouldLoadAnchor:
,clearIfOverCapacity:
,storePageIn:
,triggerAllAnimationEndEvent:
,redraw:
},a=
;e.onpopstate=
,t.smoothStateUtility=r,t.fn.smoothState=
,t.fn.smoothState.options={debug:!1,anchors:"a",hrefRegex:"",forms:"form",allowFormCaching:!1,repeatDelay:500,blacklist:".no-smoothState",prefetch:!1,prefetchOn:"mouseover touchstart",prefetchBlacklist:".no-prefetch",locationHeader:"X-SmoothState-Location",cacheLength:0,loadingClass:"is-loading",scroll:!1,alterRequest:
,alterChangeState:
,onBefore:
,onStart:{duration:0,render:
},onProgress:{duration:0,render:
},onReady:{duration:0,render:
},onAfter:
}}}),jQuery,function(t,e,i,n){"use strict";
function a(e,i,n){var s="DEPRECATED METHOD: "+i+"\n"+n+" AT \n";return 
}function h(t,e,i){var n,s=e.prototype;(n=t.prototype=Object.create(s)).constructor=t,n._super=s,i&&J(n,i)}
function w(t,e){for(var i,s,o=e[0].toUpperCase()+e.slice(1),r=0;r<tt.length;){if((s=(i=tt[r])
:e)in t)return s;
var J,tt=["","webkit","Moz","MS","ms","o"],et=e.createElement("div"),it="function",nt=Math.round,st=Math.abs,ot=Date.now;J="function"!=typeof Object.assign
:Object.assign;var rt=a(
,"extend","Use `assign`."),at=a(
,"merge","Use `assign`."),ht=1,lt="ontouchstart"in t,ct=w(t,"PointerEvent")!==n,ut=lt
,dt="touch",pt="mouse",ft=25,gt=1,mt=2,vt=4,yt=8,_t=1,wt=2,bt=4,xt=8,Ct=16,Tt=wt|bt,Et=xt|Ct,St=Tt|Et,It=["x","y"],kt=["clientX","clientY"];x.prototype={handler:
,init:
,destroy:
};var At={mousedown:gt,mousemove:mt,mouseup:vt},$t="mousedown",zt="mousemove mouseup";h(z,x,{handler:
});var Ot={pointerdown:gt,pointermove:mt,pointerup:vt,pointercancel:yt,pointerout:yt},Dt={2:dt,3:"pen",4:pt,5:"kinect"},Pt="pointerdown",Mt="pointermove pointerup pointercancel";t.MSPointerEvent
,h(O,x,{handler:
});var jt={touchstart:gt,touchmove:mt,touchend:vt,touchcancel:yt},Lt="touchstart",Nt="touchstart touchmove touchend touchcancel";h(D,x,{handler:
});var Ft={touchstart:gt,touchmove:mt,touchend:vt,touchcancel:yt},Rt="touchstart touchmove touchend touchcancel";h(P,x,{handler:
});var Wt=2500,Ht=25;h(M,x,{handler:
,destroy:
});var qt=w(et.style,"touchAction"),Bt=qt!==n,Xt="compute",Yt="auto",Qt="manipulation",Ut="none",Vt="pan-x",Zt="pan-y",Gt=function(){if(!Bt)
var e={},i=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){e[n]=!i||t.CSS.supports("touch-action",n)}),e}();L.prototype={set:
,update:
,compute:
,preventDefaults:
,preventSrc:
};var Kt=1,Jt=2,te=4,ee=8,ie=ee,ne=16;N.prototype={defaults:{},set:
,recognizeWith:
,dropRecognizeWith:
,requireFailure:
,dropRequireFailure:
,hasRequireFailures:
,canRecognizeWith:
,emit:
,tryEmit:
,canEmit:
,recognize:
,process:
,getTouchAction:
,reset:
},h(H,N,{defaults:{pointers:1},attrTest:
,process:
}),h(q,H,{defaults:{event:"pan",threshold:10,pointers:1,direction:St},getTouchAction:
,directionTest:
,attrTest:
,emit:
}),h(B,H,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:
,attrTest:
,emit:
}),h(X,N,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:
,process:
,reset:
,emit:
}),h(Y,H,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:
,attrTest:
}),h(Q,H,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Tt|Et,pointers:1},getTouchAction:
,attrTest:
,emit:
}),h(U,N,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:
,process:
,failTimeout:
,reset:
,emit:
}),V.VERSION="2.0.8",V.defaults={domEvents:!1,touchAction:Xt,enable:!0,inputTarget:null,inputClass:null,preset:[[Y,{enable:!1}],[B,{enable:!1},["rotate"]],[Q,{direction:Tt}],[q,{direction:Tt},["swipe"]],[U],[U,{event:"doubletap",taps:2},["tap"]],[X]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Z.prototype={set:
,stop:
,recognize:
,get:
,add:
,remove:
,on:
,off:
,emit:
,destroy:
},J(V,{INPUT_START:gt,INPUT_MOVE:mt,INPUT_END:vt,INPUT_CANCEL:yt,STATE_POSSIBLE:Kt,STATE_BEGAN:Jt,STATE_CHANGED:te,STATE_ENDED:ee,STATE_RECOGNIZED:ie,STATE_CANCELLED:ne,STATE_FAILED:32,DIRECTION_NONE:_t,DIRECTION_LEFT:wt,DIRECTION_RIGHT:bt,DIRECTION_UP:xt,DIRECTION_DOWN:Ct,DIRECTION_HORIZONTAL:Tt,DIRECTION_VERTICAL:Et,DIRECTION_ALL:St,Manager:Z,Input:x,TouchAction:L,TouchInput:P,MouseInput:z,PointerEventInput:O,TouchMouseInput:M,SingleTouchInput:D,Recognizer:N,AttrRecognizer:H,Tap:U,Pan:q,Swipe:Q,Pinch:B,Rotate:Y,Press:X,on:d,off:p,each:r,merge:at,extend:rt,assign:J,inherit:h,bindFn:l,prefixed:w}),(void 0!==t?t
).Hammer=V,"function"==typeof define
:"undefined"!=typeof module
:t.Hammer=V}(window,document),function(t){var e;e=function(t,e){var i;t.fn.hammer=
,e.Manager.prototype.emit=(i=e.Manager.prototype.emit,
)},"function"==typeof define
:"object"==typeof exports
:e(jQuery,Hammer)}(jQuery),function(t){var e,i;e=this,i=function(t){function e(e){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=t.extend({},this.constructor.defaults),this.option(e)}return e.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:300,fitImagesInViewport:!0,imageFadeDuration:0,positionFromTop:50,resizeDuration:0,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},e.prototype.option=function(e){t.extend(this.options,e)},e.prototype.imageCountLabel=
,e.prototype.init=function(){var e=this;t(document).ready(function(){e.enable(),e.build()})},e.prototype.enable=function(){var e=this;t("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",
)},e.prototype.build=function(){if(!(t("#lightbox").length>0)){var e=this;t('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(t("body")),this.$lightbox=t("#lightbox"),this.$overlay=t("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",
),this.$lightbox.hide().on("click",
),this.$outerContainer.on("click",
),this.$lightbox.find(".lb-prev").on("click",
),this.$lightbox.find(".lb-next").on("click",
),this.$nav.on("mousedown",
),this.$lightbox.find(".lb-loader, .lb-close").on("click",
)}},e.prototype.start=
,e.prototype.changeImage=
,e.prototype.sizeOverlay=
,e.prototype.sizeContainer=
,e.prototype.showImage=
,e.prototype.updateNav=
,e.prototype.updateDetails=
,e.prototype.preloadNeighboringImages=
,e.prototype.enableKeyboardNav=
,e.prototype.disableKeyboardNav=
,e.prototype.keyboardAction=
,e.prototype.end=
,new e},"function"==typeof define
:"object"==typeof exports
:e.lightbox=i(e.jQuery)}(jQuery);
$(window).on("load", function() {
    $(".loader-main").addClass("loader-inactive")
}), $(document).ready(function() {
    "use strict";
    var t, e, a, s;

    

    setTimeout(i, 0), $(
);
    t = "scripts/pwa.js", e = 
, a = document.body, (s = document.createElement("script")).src = t, s.onload = e, s.onreadystatechange = e, a.appendChild(s)
});
//Extending Card Features
function card_extender() {
    /*Set Page Content to Min 100vh*/
    if ($('.is-on-homescreen').length) 

    if (!$('.is-on-homescreen').length) {
        var windowHeight = window.innerHeight
        $('.page-content, #page').css('min-height', windowHeight);
    }

    $('[data-card-height]').each(
);
}
card_extender();

$(window).resize(
);

    ! function(n, e) {
      var t, o, i, c = [],
        f = {
          passive: !0,
          capture: !0
        },
        r = new Date,
        a = "pointerup",
        u = "pointercancel";

      


      


      


      function w(n) {
        ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
          n(e, l, f)
        })
      }
      w(n), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = 

    }(addEventListener, removeEventListener);
  
var PushAlertCo=new function(){this.pa_id=25589;this.domain="MobileSOP-guide.web.app";this.pa_subdomain="https://MobileSOP-guide88.pushalert.co";this.pa_domain_id=5;this.seg_id=0;this.subs_id="";this.script_id="26794_5";this.local_str={"lt-subscribe-box-1":"Thanks for Subscribing!","lt-subscribe-box-2":"Press close to continue.","lt-popup-title":"Click on Allow to get notifications.","lt-popup-subtitle":"Get real-time updates through Push Notifications.","lt-close":"Close","lt-side-widget-title":"Notifications","lt-widget-title":"Website Notifications","lt-widget-text":"Get notifications in real-time for staying up to date with content that matters to you.","lt-widget-more-options-desktop":"Mouseover for more options","lt-widget-more-options-mobile":"Tap for more options","lt-subscribe":"Subscribe","lt-unsubscribe":"Unsubscribe","lt-not-now":"Not Now","lt-unsubscribe-box-1":"Are you sure you want to unsubscribe?","lt-yes":"Yes","lt-no":"No","lt-unblock-box-1":"Please unblock notification in order to subscribe.","lt-unblock":"Unblock","lt-cancel":"Cancel","lt-notf-pref-title":"Notification Preferences","lt-notf-pref-info-text":"You are currently subscribed to receive notifications.","lt-notf-pref-stop-usage":"Stop Usage Tracking","lt-notf-pref-stop-usage-confirm":"Usage tracking has been stopped.","lt-notf-pref-view-data":"View My Data","lt-notf-pref-view-data-confirm":"Please wait, getting your data...","lt-notf-pref-unsubscribe":"Unsubscribe &amp; Delete All Data","lt-notf-pref-unsubscribe-confirm":"Unsubscribed and all data deleted.","lt-unblock-mobile":"You've blocked notifications. Please click on the lock pad icon in the address bar, go to Site Settings and enable \"Notifications\" under \"Permission\". Refresh the page.","lt-unblock-chrome":"You've blocked notifications. Please click on the lock pad icon in the address bar, then set \"Notifications\" permission to \"Ask(default)\". Refresh the page.","lt-unblock-firefox":"You've blocked notifications. Please click on the lock pad icon in the address bar, then click on the \"x\" next to \"Blocked\/Blocked Temporarily\". Refresh the page."};this.local_multi_str=[];this.cookie_id="25589_5_";this.safariEnabled=!1;this.safari_web_push_id="";this.safariReqInitiated=!1;this.safari_icon="https://pushalert.co/safari-icon/default.png";this.safari_web_name="";this.ringingAnimation=!1;this.frameRateMS=400;this.ringCount=0;this.enableSubdomainIntegration=!1;this.byPassSubdomainCheck=!1;this.enableWidget=0;this.widgetTheme='round';this.widgetColor='#337ab7';this.widgetIcon='https://cdn.pushalert.co/widget-icons/widget_default.png';this.widgetText='Get notifications in real-time for staying up to date with content that matters to you.';this.widgetPosition={"pa-ticker-position":"left","pa-ticker-left":10,"pa-ticker-right":10,"pa-ticker-bottom":10,"pa-notification-left":50,"pa-notification-right":50,"pa-notification-bottom":70};this.isCSSEmbeded=!1;this.enableAutoSubs=!0;this.enableUnsubs=!0;this.enableContentRecommendation=!1;this.PARecContentHide=!1;this.PAContentRecScrollPosition=0.5;this.PARecTheme="pa-rec-light";this.PARecShowOnHomepage=!0;this.PARecHideOn=[];this.subscriptionStyle={"subscriptionTheme":1,"subscriptionThemePos":1,"subscriptionOverlayOpacity":0,"subscriptionBoxColor":"#fff","subscriptionBtnAllowTxt":"Allow","subscriptionBtnAllowColor":"#0e82e5","subscriptionBtnAllowTxtColor":"#fff","subscriptionBtnDenyTxt":"Later","subscriptionBtnDenyColor":"#d3d3d3","subscriptionBtnDenyTxtColor":"#888","subscriptionTitle":"GET THE LATEST UPDATES FROM US","subscriptionTitleTxtColor":"#333","subscriptionMessage":"Click on Allow to get notifications","subscriptionMessageTxtColor":"#777","subscriptionBoxDelay":3000};this.subscriptionStyleMobileSeparate=!1;this.subscriptionStyleMobile={"subscriptionTheme":1,"subscriptionThemePos":1,"subscriptionOverlayOpacity":0,"subscriptionBoxColor":"#fff","subscriptionBtnAllowTxt":"Allow","subscriptionBtnAllowColor":"#0e82e5","subscriptionBtnAllowTxtColor":"#fff","subscriptionBtnDenyTxt":"Later","subscriptionBtnDenyColor":"#d3d3d3","subscriptionBtnDenyTxtColor":"#888","subscriptionTitle":"GET THE LATEST UPDATES FROM US","subscriptionTitleTxtColor":"#333","subscriptionMessage":"Click on Allow to get notifications","subscriptionMessageTxtColor":"#777","subscriptionBoxDelay":3000};this.subscriptionStyleSafari={"subscriptionTheme":1,"subscriptionThemePos":1,"subscriptionOverlayOpacity":0,"subscriptionBoxColor":"#fff","subscriptionBtnAllowTxt":"Allow","subscriptionBtnAllowColor":"#0e82e5","subscriptionBtnAllowTxtColor":"#fff","subscriptionBtnDenyTxt":"Later","subscriptionBtnDenyColor":"#d3d3d3","subscriptionBtnDenyTxtColor":"#888","subscriptionTitle":"GET THE LATEST UPDATES FROM US","subscriptionTitleTxtColor":"#333","subscriptionMessage":"Click on Allow to get notifications","subscriptionMessageTxtColor":"#777","subscriptionBoxDelay":3000};this.subscriptionStyleSafariMobileSeparate=!1;this.subscriptionStyleSafariMobile={"subscriptionTheme":1,"subscriptionThemePos":1,"subscriptionOverlayOpacity":0,"subscriptionBoxColor":"#fff","subscriptionBtnAllowTxt":"Allow","subscriptionBtnAllowColor":"#0e82e5","subscriptionBtnAllowTxtColor":"#fff","subscriptionBtnDenyTxt":"Later","subscriptionBtnDenyColor":"#d3d3d3","subscriptionBtnDenyTxtColor":"#888","subscriptionTitle":"GET THE LATEST UPDATES FROM US","subscriptionTitleTxtColor":"#333","subscriptionMessage":"Click on Allow to get notifications","subscriptionMessageTxtColor":"#777","subscriptionBoxDelay":3000};this.shopifyCustomization={"backInStockEnable":!1,"backInStockTitle":"Back In-stock Alert","backInStockBarColor":"#0e82e5","backInStockBarTextColor":"#ffffff","backInStockBarPosition":"Right","backInStockBarPositionMargin":"10","backInStockSecondLine":"Get an update when its back in stock.","backInStockButtonTitle":"Notify Me","backInStockSuccess":"We'll notify you.","backInStockNotificationTitle":"Back in Stock","backInStockNotificationMessage":"Good news! {{product_name}} is back in stock and available for order.","backInStockNotificationAddtoCart":"Add to Cart","priceDropEnable":!0,"priceDropTitle":"Price Drop Alert","priceDropBarColor":"#1083e6","priceDropBarTextColor":"#ffffff","priceDropBarPosition":"Right","priceDropBarPositionMargin":"10","priceDropSecondLine":"Let me know when price drops.","priceDropButtonTitle":"Notify Me","priceDropSuccess":"We'll notify you.","priceDropNotificationTitle":"Price Drop Alert","priceDropNotificationMessage":"{{product_name}} price just dropped to {{product_price}}, grab now before it goes out of stock.","priceDropNotificationAddtoCart":"Add to Cart","priceDropCurrentPrice":"Current Price","currency":null,"subs_assoc_message":"Do you want to receive important notifications?","subs_assoc_yes":"Yes","subs_assoc_no":"No"};this.priceDropAlertAlt=!1;this.priceDropAlertAltMobileOnly=!0;this.activateProductAlert=!1;this.shopifyProductInfo=null;this.paProductInfo=null;this.forceTrigger=!1;this.isRTL=!1;this.reSubscribe=!1;this.checkVA=0;this.init=function(){var hostname=location.hostname.replace(/^www\./,'');this.seg_id=this.checkSegmentIDValue();if(hostname.indexOf(this.domain)==(hostname.length-this.domain.length))
}
this.initSW=

this.checkShopify=function(){return(typeof Shopify!=="undefined"
)}
this.checkWooCommerce=

this.checkPrestaShop=

this.checkMagento=

this.checkCustomShop=

this.eCommerceAssociate=

this.eCommerceUnAssociate=

this.shopifyAssociate=

this.shopifyUnAssociate=

this.shopifyCartAssoc=

this.priceDropAlert=

this.priceDropAlertNative=

this.outOfStockAlert=

this.outOfStockAlertNative=

this.productInfoShopifyInit=

this.productInfoWooCommerceInit=

this.productInfoPrestaShopInit=

this.productInfoMagentoInit=

this.pa_eq=
;this.pa_isEqual=
;this.productInfoCustomInit=

this.getProductInfoShopifyParamas=

this.formatMoneyShopify=

this.sendProductAlerts=

this.appendPACSS=

this.initSubscriptionBox=

this.createSubscriptionBox=
;this.showSubscriptionBox=

this.hideSubscriptionBox=

this.showSubscribeWidget=

this.confirmSafariUnblock=

this.hidePushAlertConfirm=

this.addPANotificationInfo=

this.paToggleClassName=

this.PA_NOTIFICATION_INFO_TOGGLE=

this.PA_NOTIFICATION_SUBS_INFO_TOGGLE=

this.clearPAFirstTime=

this.removeSubscribeWidget=
;this.startRingingAnimation=

this.setCookie=

this.setSessionCookie=

this.getCookie=

this.checkCookie=

this.getCurrentActualUrl=

this.requestAnalyticsNoAutoInit=

this.requestAnalytics=

this.PAGenerateContentRec=

this.PARequestContentRec=

this.PushAlertAddLoadEvent=

this.checkSubscription=

this.PAShowFirstTime=

this.PAAddUnsubscribeClass=

this.PARemoveUnsubscribeClass=

this.PAcheckBrowser=

this.checkIncognito=

this.checkSafariPermission=
;this.sendSubSafari=
;this.checkSubSafari=
;this.unsubscribeSafari=
;this.getBrowserInfo=

this.listener=

this.checkSegmentID=

this.addSegmentID=

this.removeSegmentID=

this.initArrayPush=function(){pushalertbyiw.push=
}
this.checkJSAPIFunction=

this.checkAddAttributes=

this.addToSegment=

this.removeFromSegment=

this.checkSegment=

this.addAttributes=

this.trackEvent=

this.abandonedCart=

this.subInit=function(){(pushalertbyiw=window.pushalertbyiw||[]).push();if(!this.isIframe()){var manifest=document.createElement('link');manifest.rel='manifest';if(this.checkShopify())
else if(typeof pushalert_manifest_file!=="undefined")
else{manifest.href="/manifest.json"}
document.head.appendChild(manifest);this.checkCustomLocalizeStrings();if(!this.checkDisableAutoInit()){this.init()}

this.initArrayPush();if(this.enableContentRecommendation)
}}
this.checkCustomLocalizeStrings=function(){if(typeof pa_localized_str!=="undefined")
}
this.isIframe=function(){try{return window.self!==window.top}
}
this.checkDisableAutoInit=function(){(pushalertbyiw=window.pushalertbyiw
).push();for(var i=0;i<pushalertbyiw.length;i++)
}
this.checkSegmentIDValue=function(){(pushalertbyiw=window.pushalertbyiw
).push();for(var i=0;i<pushalertbyiw.length;i++)

return 0}
this.callbackOnSuccess=

this.callbackOnFailure=

this.onScriptLoad=

this.callbackOnCustomOptInAllow=

this.callbackOnCustomOptInDeny=

this.forceSubscribe=

this.$=

this.initSubscriptionFirefox=
;this.initSubscription=
;this.subscribePush=
;this.urlBase64ToUint8Array=

this.subscribePushEdge=
;this.subscribePushVapid=
;this.unsubscribe=
;this.unsubscribeThenSubscribe=
;this.sendSub=
;this.checkSub=
;this.optinCount=
;this.getParameterByName=
;this.attachUnsubscribeEvent=
;this.openNotificationPreferences=
;this.requestSubscriberData=

this.showPASnackBar=
;this.attachNotificationPreferencesEvent=
;this.getSubsInfo=

this.triggerMe=

this.getLanguage=

this.loadLanguage=

this.md5=
};!function(a){"use strict";
if(!a.fetch)
}("undefined"!=typeof self?self
);PushAlertCo.subInit()
//This is a paediatric dosing calculator, written by Dr. Jeremy Steinberg
//Contact me for any queries, http://www.jackofallorgans.com/contact/
//I am happy to allow re-use of the code for non-commercial organisations, but please contact me first.

//Set up the drug object with all their values
let drug_options = {
	"Adenosine1": {
		"mlsvar": 0.05,
		"mgsvar": 0.1,
		"numberOfTimesADay": " IV Push"
	},
	"Adenosine2": {
		"mlsvar": 0.1,
		"mgsvar": 0.2,
		"numberOfTimesADay": " IV Push",
		"mlsmax": 20,
		"mgsmax": 1000
	},
	"Amiodarone": {
		"mlsvar": 0.05,
		"mgsvar": 5,
		"numberOfTimesADay": " IV Push"
	},
	"Atropine": {
		"mlsvar": 0.2,
		"mgsvar": 0.02,
		"numberOfTimesADay": " IV Push"
  },
	"Dextrose10": {
		"mlsvar": 1,
		"mgsvar": 0.25,
    "numberOfTimesADay": " IV Push"
	},
	"Dextrose25": {
		"mlsvar": 1,
		"mgsvar": 1,
		"numberOfTimesADay": " IV Push"
  },
	"Diphenhydramine-anaphylaxis": {
		"mlsvar": 0.02,
		"mgsvar": 1,
		"numberOfTimesADay": " IV Push"
	},
	"Diphenhydramine-dystonia": {
		"mlsvar": 0.01,
		"mgsvar": 0.5,
		"numberOfTimesADay": " IV Push"
	},
	"Epinephrine1000": {
		"mlsvar": 0.01,
		"mgsvar": 0.01,
		"numberOfTimesADay": " IV Push"
	},
	"Epinephrine10000": {
		"mlsvar": 0.1,
		"mgsvar": 0.01,
		"numberOfTimesADay": " IV Push"
	},
	"Fentanyl": {
		"mlsvar": 0.02,
		"mgsvar": 1,
		"numberOfTimesADay": "",
    "messageshow": true,
    "messageMls": " IV Push",
    "messageMgs": " Dose is in Micrograms"
	},
	"Lidocaine": {
		"mlsvar": 0.05,
		"mgsvar": 1,
		"numberOfTimesADay": " IV Push"
	},
	"Magnesium": {
		"mlsvar": 0.08,
		"mgsvar": 40,
		"numberOfTimesADay": " IV Push"
	},
	"Methylprednisolone": {
		"mlsvar": 0.016,
		"mgsvar": 1,
		"numberOfTimesADay": " IV Push"
	},
	"Midazolam": {
		"mlsvar": 0.04,
		"mgsvar": 0.2,
		"numberOfTimesADay": " IV Push"
	},
	"Morphine": {
		"mlsvar": 0.1,
		"mgsvar": 0.1,
		"numberOfTimesADay": " IV Push"
	},
	"Naloxone": {
		"mlsvar": 0.1,
		"mgsvar": 0.1,
    "numberOfTimesADay": " IV Push"
	},
	"Ondansetron": {
		"mlsvar": 0.2,
		"mgsvar": 0.1,
		"numberOfTimesADay": " IV Push"
	},
	"Adult": {
		"mlsvar": 0.2,
		"mgsvar": 0.1,
		"numberOfTimesADay": " IV Push"
	},
}
 
// for creating a new drug if required: e.g. var Prednislone = new Drug (....), then drug_options.Prednisolone = Prednisolone; 






//get the frequency from the drug object in the drug_options object



// getWeight() finds the weight from the form



// getMlsValue() finds the Mls value from the drug_options object



//find the MgsValue



//find the McgsValue




//rounding function



// calculateTotalMls() calculate the dose and set the maximums



//error display







//display the result for Mls



//hide the mls result
//function hideTotal() {
// let totalEl = document.getElementById("Result");
// totalEl.style.display = "none";
//}

//calculate Milligram total




//show the mgs result





//hide the mgs result
//function hideTotalMgs() {
 // let totalElMgs = document.getElementById("ResultMgs");
 //totalElMgs.style.display = "none";
//}

!function(e,t){"object"==typeof exports
:"function"==typeof define
:(e="undefined"!=typeof globalThis?globalThis
).firebase=t()}(this,function(){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf
)(e,t)};var o=function(){return(o=Object.assign
).apply(this,arguments)};
function h(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);
)}
function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){
case Object:void 0===e&&(e={});break;
default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=d(e[r],t[r]));return e}var i=(t.prototype.wrapCallback=
,t);
var a,s,l,c="FirebaseError",p=(a=Error,r(s=v,l=a),s.prototype=null===l
:(f.prototype=l.prototype,new f),v);function f(){this.constructor=s}
var y=(m.prototype.create=
,m);function m(e,t,r){this.service=e,this.serviceName=t,this.errors=r}var g=/\{\$([^}]+)}/g;function b(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
var E=(O.prototype.next=
,O.prototype.error=
,O.prototype.complete=
,O.prototype.subscribe=
,O.prototype.unsubscribeOne=
,O.prototype.forEachObserver=
,O.prototype.sendOne=
,O.prototype.close=
,O);
var I=(N.prototype.setInstantiationMode=
,N.prototype.setMultipleInstances=
,N.prototype.setServiceProps=
,N);function N(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}var L="[DEFAULT]",S=(R.prototype.get=
,R.prototype.getImmediate=
,R.prototype.getComponent=
,R.prototype.setComponent=function(e){var t,r;if(e.name!==this.name)
if(this.component)
if("EAGER"===(this.component=e).instantiationMode)
try{for(var n=h(this.instancesDeferred.entries()),i=n.next();!i.done;i=n.next())
finally{try{i&&!i.done
}finally{if(t)
}}},R.prototype.clearInstance=
,R.prototype.delete=
,R.prototype.isComponentSet=function(){return null!=this.component},R.prototype.getOrInitializeService=
,R.prototype.normalizeInstanceIdentifier=
,R);function R(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}var P=(A.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())
t.setComponent(e)},A.prototype.addOrOverwriteComponent=
,A.prototype.getProvider=function(e){if(this.providers.has(e))
var t=new S(e,this);return this.providers.set(e,t),t},A.prototype.getProviders=
,A);function A(e){this.name=e,this.providers=new Map}function j(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n}var C,D=[];(H=C=C||{})[H.DEBUG=0]="DEBUG",H[H.VERBOSE=1]="VERBOSE",H[H.INFO=2]="INFO",H[H.WARN=3]="WARN",H[H.ERROR=4]="ERROR",H[H.SILENT=5]="SILENT";function F(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!(t<e.logLevel))
}var k={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},T=C.INFO,x=((V={})[C.DEBUG]="log",V[C.VERBOSE]="log",V[C.INFO]="info",V[C.WARN]="warn",V[C.ERROR]="error",V),H=(Object.defineProperty(z.prototype,"logLevel",{get:function(){return this._logLevel},set:
,enumerable:!1,configurable:!0}),z.prototype.setLogLevel=
,Object.defineProperty(z.prototype,"logHandler",{get:
,set:
,enumerable:!1,configurable:!0}),Object.defineProperty(z.prototype,"userLogHandler",{get:
,set:
,enumerable:!1,configurable:!0}),z.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler
,this._logHandler.apply(this,j([this,C.DEBUG],e))},z.prototype.log=
,z.prototype.info=
,z.prototype.warn=
,z.prototype.error=
,z);function z(e){this.name=e,this._logLevel=T,this._logHandler=F,this._userLogHandler=null,D.push(this)}
var V=((V={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",V["bad-app-name"]="Illegal App name: '{$appName}",V["duplicate-app"]="Firebase App named '{$appName}' already exists",V["app-deleted"]="Firebase App named '{$appName}' already deleted",V["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",V["invalid-log-argument"]="First argument to `onLog` must be null or a function.",V),U=new y("app","Firebase",V),M="@firebase/app",W="[DEFAULT]",G=((V={})[M]="fire-core",V["@firebase/analytics"]="fire-analytics",V["@firebase/auth"]="fire-auth",V["@firebase/database"]="fire-rtdb",V["@firebase/functions"]="fire-fn",V["@firebase/installations"]="fire-iid",V["@firebase/messaging"]="fire-fcm",V["@firebase/performance"]="fire-perf",V["@firebase/remote-config"]="fire-rc",V["@firebase/storage"]="fire-gcs",V["@firebase/firestore"]="fire-fst",V["fire-js"]="fire-js",V["firebase-wrapper"]="fire-js-all",V),$=new H("@firebase/app"),Y=(Object.defineProperty(K.prototype,"automaticDataCollectionEnabled",{get:
,set:
,enumerable:!1,configurable:!0}),Object.defineProperty(K.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(K.prototype,"options",{get:
,enumerable:!1,configurable:!0}),K.prototype.delete=
,K.prototype._getService=
,K.prototype._removeServiceInstance=
,K.prototype._addComponent=function(t){try{this.container.addComponent(t)}
},K.prototype._addOrOverwriteComponent=
,K.prototype.checkDestroyed_=function(){if(this.isDeleted_)
},K);function K(e,t,r){var n,i,o=this;this.firebase_=r,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=d(void 0,e),this.container=new P(t.name),this._addComponent(new I("app",
,"PUBLIC"));try{for(var a=h(this.firebase_.INTERNAL.components.values()),s=a.next();!s.done;s=a.next()){var l=s.value;this._addComponent(l)}}
finally{try{s&&!s.done
}finally{if(n)
}}}Y.prototype.name
||Y.prototype.delete
;var J="7.24.0";function Z(l){var c={},u=new Map,p={__esModule:!0,initializeApp:function(e,t){void 0===t&&(t={});{"object"==typeof t&&null!==t
}var r=t;void 0===r.name&&(r.name=W);t=r.name;if("string"!=typeof t||!t)
if(b(c,t))
r=new l(e,r,p);return c[t]=r},app:f,registerVersion:function(e,t,r){var n=null!==(i=G[e])&&void 0!==i?i:e;r&&(n+="-"+r);var i=n.match(/\s|\//),e=t.match(/\s|\//);if(i||e)
o(new I(n+"-version",
,"VERSION"))},setLogLevel:B,onLog:
,apps:null,SDK_VERSION:J,INTERNAL:{registerComponent:o,removeApp:
,components:u,useAsService:
}};
function o(r){var t,e,n,i=r.name;if(u.has(i))return $.debug("There were multiple attempts to register component "+i+"."),"PUBLIC"===r.type?p[i]:null;u.set(i,r),"PUBLIC"===r.type&&(n=
,void 0!==r.serviceProps&&d(n,r.serviceProps),p[i]=n,l.prototype[i]=
);try{for(var o=h(Object.keys(c)),a=o.next();!a.done;a=o.next())
finally{try{a&&!a.done
}finally{if(t)
}}return"PUBLIC"===r.type?p[i]:null}return p.default=p,Object.defineProperty(p,"apps",{get:
}),f.App=l,p}var V=function e(){var t=Z(Y);return t.INTERNAL=o(o({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:
,createSubscribe:w,ErrorFactory:y,deepExtend:d}),t}(),q=(Q.prototype.getPlatformInfoString=
,Q);
"object"==typeof self&&self.self===self&&void 0!==self.firebase
;var X=V.initializeApp;V.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return}}()
,X.apply(void 0,e)};var ee,te,re=V;(ee=re).INTERNAL.registerComponent(new I("platform-logger",
,"PRIVATE")),ee.registerVersion(M,"0.6.11",te),ee.registerVersion("fire-js","");return re.registerVersion("firebase","7.24.0","app"),re});
//# sourceMappingURL=firebase-app.js.map

!function(e,t){"object"==typeof exports
:"function"==typeof define
:t((e="undefined"!=typeof globalThis?globalThis
).firebase)}(this,function(Rt){"use strict";try{(function(){function e(e){return e&&"object"==typeof e&&"default"in e?e
}var s=e(Rt),r=function(e,t){return(r=Object.setPrototypeOf
)(e,t)};
var n,o,a,u="FirebaseError",l=(n=Error,r(o=h,a=n),o.prototype=null===a
:(c.prototype=a.prototype,new c),h);function c(){this.constructor=o}
var p=(f.prototype.create=
,f);
var d=/\{\$([^}]+)}/g,_=(g.prototype.setInstantiationMode=
,g.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},g.prototype.setServiceProps=function(e){return this.serviceProps=e,this},g);function g(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}var b="firebasestorage.googleapis.com",m=12e4,y=6e5,w=(R.prototype.codeProp=
,R.prototype.codeEquals=
,R.prototype.serverResponseProp=
,R.prototype.setServerResponseProp=
,Object.defineProperty(R.prototype,"name",{get:
,enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"code",{get:
,enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"message",{get:
,enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"serverResponse",{get:
,enumerable:!1,configurable:!0}),R);
var E={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};
var C={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};
var I=
var B=
;var j,q,F={STATE_CHANGED:"state_changed"},H="running",z="pausing",G="paused",X="success",V="canceling",W="canceled",K="error",Z={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};
(q=j=j||{})[q.NO_ERROR=0]="NO_ERROR",q[q.NETWORK_ERROR=1]="NETWORK_ERROR",q[q.ABORT=2]="ABORT";var ie=(ae.prototype.send=
,ae.prototype.getErrorCode=
,ae.prototype.getStatus=
,ae.prototype.getResponseText=
,ae.prototype.abort=
,ae.prototype.getResponseHeader=
,ae.prototype.addUploadProgressListener=
,ae.prototype.removeUploadProgressListener=
,ae);
var se=(ue.prototype.createXhrIo=
,ue);
var le=(he.prototype.size=
,he.prototype.type=
,he.prototype.slice=
,he.getBlob=
,he.prototype.uploadData=
,he);
var pe=(Object.defineProperty(fe.prototype,"path",{get:
,enumerable:!1,configurable:!0}),Object.defineProperty(fe.prototype,"isRoot",{get:
,enumerable:!1,configurable:!0}),fe.prototype.fullServerUrl=
,fe.prototype.bucketOnlyServerUrl=
,fe.makeFromBucketSpec=
,fe.makeFromUrl=
,fe);
var me=
,ye=null;
var ke="maxResults",Ae=1e3,Ue="pageToken",xe="prefixes",Pe="items";
var Ne=
var ze=
var Ke=
,Ze=
var $e=
var it=(at.prototype.makeProgressCallback_=
,at.prototype.shouldDoResumable_=
,at.prototype.start_=
,at.prototype.resolveToken_=
,at.prototype.createResumable_=
,at.prototype.fetchStatus_=
,at.prototype.continueUpload_=
,at.prototype.increaseMultiplier_=
,at.prototype.fetchMetadata_=
,at.prototype.oneShotUpload_=
,at.prototype.updateProgress_=
,at.prototype.transition_=
,at.prototype.completeTransitions_=
,Object.defineProperty(at.prototype,"snapshot",{get:
,enumerable:!1,configurable:!0}),at.prototype.on=
,at.prototype.then=
,at.prototype.catch=
,at.prototype.addObserver_=
,at.prototype.removeObserver_=
,at.prototype.notifyObservers_=
,at.prototype.finishPromise_=
,at.prototype.notifyObserver_=
,at.prototype.resume=
,at.prototype.pause=
,at.prototype.cancel=
,at);
var st=(ut.prototype.toString=
,ut.prototype.newRef=
,ut.prototype.mappings=we,ut.prototype.child=
,Object.defineProperty(ut.prototype,"parent",{get:
,enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"root",{get:
,enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"bucket",{get:
,enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"fullPath",{get:
,enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"name",{get:
,enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"storage",{get:
,enumerable:!1,configurable:!0}),ut.prototype.put=
,ut.prototype.putString=
,ut.prototype.delete=
,ut.prototype.listAll=
,ut.prototype.listAllHelper=
,ut.prototype.list=
,ut.prototype.getMetadata=
,ut.prototype.updateMetadata=
,ut.prototype.getDownloadURL=
,ut.prototype.throwIfRoot_=
,ut);
var ct=(lt.prototype.getPromise=
,lt.prototype.cancel=
,lt);
var ht=(pt.prototype.start_=
,pt.prototype.getPromise=
,pt.prototype.cancel=
,pt.prototype.isRetryStatusCode_=
,pt);
var ft=
var _t=(vt.extractBucket_=
,vt.prototype.getAuthToken=
,vt.prototype.deleteApp=
,vt.prototype.makeStorageReference=
,vt.prototype.makeRequest=
,vt.prototype.ref=
,vt.prototype.refFromURL=
,Object.defineProperty(vt.prototype,"maxUploadRetryTime",{get:
,enumerable:!1,configurable:!0}),vt.prototype.setMaxUploadRetryTime=
,Object.defineProperty(vt.prototype,"maxOperationRetryTime",{get:
,enumerable:!1,configurable:!0}),vt.prototype.setMaxOperationRetryTime=
,Object.defineProperty(vt.prototype,"app",{get:
,enumerable:!1,configurable:!0}),Object.defineProperty(vt.prototype,"INTERNAL",{get:
,enumerable:!1,configurable:!0}),vt);
var gt=(bt.prototype.delete=
,bt);
var mt,yt;
mt=s.default,yt={TaskState:Z,TaskEvent:F,StringFormat:C,Storage:_t,Reference:st},mt.INTERNAL.registerComponent(new _("storage",wt,"PUBLIC").setServiceProps(yt).setMultipleInstances(!0)),mt.registerVersion("@firebase/storage","0.3.43")}).apply(this,arguments)}
});
//# sourceMappingURL=firebase-storage.js.map

!function(e,t){"object"==typeof exports
:"function"==typeof define
:t((e="undefined"!=typeof globalThis?globalThis
).firebase)}(this,function(at){"use strict";try{(function(){function e(e){return e&&"object"==typeof e&&"default"in e?e
}var t=e(at),n=function(e,t){return(n=Object.setPrototypeOf
)(e,t)};var p=
var i,o,s,a="FirebaseError",l=(i=Error,n(o=f,s=i),o.prototype=null===s
:(u.prototype=s.prototype,new u),f);function u(){this.constructor=o}
var v=(g.prototype.create=
,g);function g(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var b=/\{\$([^}]+)}/g,y=(w.prototype.setInstantiationMode=
,w.prototype.setMultipleInstances=
,w.prototype.setServiceProps=function(e){return this.serviceProps=e,this},w);function w(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}
function S(e,n,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:
,set:
})})}function I(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=
)})}function T(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=
)})}function C(e,r,t,n){n.forEach(function(n){n in t.prototype&&(e.prototype[n]=
)})}
S(_,"_index",["name","keyPath","multiEntry","unique"]),I(_,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),C(_,"_index",IDBIndex,["openCursor","openKeyCursor"]),S(P,"_cursor",["direction","key","primaryKey","value"]),I(P,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(P.prototype[n]=
)}),j.prototype.createIndex=
,j.prototype.index=
,S(j,"_store",["name","keyPath","indexNames","autoIncrement"]),I(j,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),C(j,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),T(j,"_store",IDBObjectStore,["deleteIndex"]),O.prototype.objectStore=
,S(O,"_tx",["objectStoreNames","mode"]),T(O,"_tx",IDBTransaction,["abort"]),D.prototype.createObjectStore=
,S(D,"_db",["name","version","objectStoreNames"]),T(D,"_db",IDBDatabase,["deleteObjectStore","close"]),E.prototype.transaction=
,S(E,"_db",["name","version","objectStoreNames"]),T(E,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[j,_].forEach(function(e){i in e.prototype&&(e.prototype[i.replace("open","iterate")]=
)})}),[_,j].forEach(function(e){e.prototype.getAll
});var x="0.4.17",N=1e4,A="w:"+x,q="FIS_v2",R="https://firebaseinstallations.googleapis.com/v1",B=36e5,L=((L={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',L["not-registered"]="Firebase Installation is not registered.",L["installation-not-found"]="Firebase Installation not found.",L["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',L["app-offline"]="Could not process request. Application offline.",L["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",L),V=new v("installations","Installations",L);
var Y=/^[cdef][\w-]{21}$/,Z="";
var ee=new Map;
var re=null;
var se,ae="firebase-installations-database",ue=1,ce="firebase-installations-store",le=null;
(se=t.default).INTERNAL.registerComponent(new y("installations",
,"PUBLIC")),se.registerVersion("@firebase/installations",x);var _e,L=((L={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',L["only-available-in-window"]="This method is available in a Window context.",L["only-available-in-sw"]="This method is available in a service worker context.",L["permission-default"]="The notification permission was not granted and dismissed instead.",L["permission-blocked"]="The notification permission was not granted and blocked instead.",L["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",L["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",L["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",L["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",L["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",L["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",L["token-update-no-token"]="FCM returned no token when updating the user to push.",L["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",L["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",L["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",L["invalid-vapid-key"]="The public VAPID key must be a string.",L["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",L),Pe=new v("messaging","Messaging",L),je="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Oe="https://fcmregistrations.googleapis.com/v1",De="FCM_MSG",Ee="google.c.a.c_id";
(L=_e=_e||{}).PUSH_RECEIVED="push-received",L.NOTIFICATION_CLICKED="notification-clicked";var Ke="fcm_token_details_db",xe=5,Ne="fcm_token_object_Store";
var qe="firebase-messaging-database",Re=1,Be="firebase-messaging-store",Le=null;
var et=(Object.defineProperty(tt.prototype,"app",{get:
,enumerable:!1,configurable:!0}),tt.prototype.setBackgroundMessageHandler=
,tt.prototype.onBackgroundMessage=
,tt.prototype.getToken=
,tt.prototype.deleteToken=
,tt.prototype.requestPermission=
,tt.prototype.usePublicVapidKey=
,tt.prototype.useServiceWorker=
,tt.prototype.onMessage=
,tt.prototype.onTokenRefresh=
,tt.prototype.onPush=
,tt.prototype.onSubChange=
,tt.prototype.onNotificationClick=
,tt);
var rt=(Object.defineProperty(it.prototype,"app",{get:
,enumerable:!1,configurable:!0}),it.prototype.messageEventListener=
,it.prototype.getVapidKey=
,it.prototype.getSwReg=
,it.prototype.getToken=
,it.prototype.updateVapidKey=
,it.prototype.updateSwReg=
,it.prototype.registerDefaultSw=
,it.prototype.deleteToken=
,it.prototype.requestPermission=
,it.prototype.usePublicVapidKey=
,it.prototype.useServiceWorker=
,it.prototype.onMessage=
,it.prototype.setBackgroundMessageHandler=
,it.prototype.onBackgroundMessage=
,it.prototype.onTokenRefresh=
,it.prototype.logEvent=
,it);
L={isSupported:st};
t.default.INTERNAL.registerComponent(new y("messaging",
,"PUBLIC").setServiceProps(L))}).apply(this,arguments)}
});
//# sourceMappingURL=firebase-messaging.js.map

!function(t,e){"object"==typeof exports
:"function"==typeof define
:e((t="undefined"!=typeof globalThis?globalThis
).firebase)}(this,function(Be){"use strict";try{(function(){function t(t){return t&&"object"==typeof t&&"default"in t?t
}var e=t(Be),n=function(t,e){return(n=Object.setPrototypeOf
)(t,e)};var a=
var o,u,l,p="FirebaseError",h=(o=Error,n(u=g,l=o),u.prototype=null===l
:(d.prototype=l.prototype,new d),g);function d(){this.constructor=u}
var v=(m.prototype.create=
,m);function m(t,e,n){this.service=t,this.serviceName=e,this.errors=n}var y=/\{\$([^}]+)}/g,b=(_.prototype.setInstantiationMode=
,_.prototype.setMultipleInstances=
,_.prototype.setServiceProps=
,_);function _(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}
function S(t,n,e){e.forEach(function(e){Object.defineProperty(t.prototype,e,{get:
,set:
})})}function T(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=
)})}function E(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=
)})}function A(t,r,e,n){n.forEach(function(n){n in e.prototype&&(t.prototype[n]=
)})}
S(N,"_index",["name","keyPath","multiEntry","unique"]),T(N,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),A(N,"_index",IDBIndex,["openCursor","openKeyCursor"]),S(k,"_cursor",["direction","key","primaryKey","value"]),T(k,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(k.prototype[n]=
)}),O.prototype.createIndex=
,O.prototype.index=
,S(O,"_store",["name","keyPath","indexNames","autoIncrement"]),T(O,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),A(O,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),E(O,"_store",IDBObjectStore,["deleteIndex"]),P.prototype.objectStore=
,S(P,"_tx",["objectStoreNames","mode"]),E(P,"_tx",IDBTransaction,["abort"]),R.prototype.createObjectStore=
,S(R,"_db",["name","version","objectStoreNames"]),E(R,"_db",IDBDatabase,["deleteObjectStore","close"]),M.prototype.transaction=
,S(M,"_db",["name","version","objectStoreNames"]),E(M,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[O,N].forEach(function(t){i in t.prototype&&(t.prototype[i.replace("open","iterate")]=
)})}),[N,O].forEach(function(t){t.prototype.getAll
});var C="0.4.17",j=1e4,B="w:"+C,D="FIS_v2",L="https://firebaseinstallations.googleapis.com/v1",x=36e5,U=((Ut={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',Ut["not-registered"]="Firebase Installation is not registered.",Ut["installation-not-found"]="Firebase Installation not found.",Ut["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',Ut["app-offline"]="Could not process request. Application offline.",Ut["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",Ut),q=new v("installations","Installations",U);
var z=/^[cdef][\w-]{21}$/,Y="";
var X=new Map;
var nt=null;
var ot,at,st="firebase-installations-database",ut=1,ct="firebase-installations-store",ft=null;
(ot=e.default).INTERNAL.registerComponent(new b("installations",
,"PUBLIC")),ot.registerVersion("@firebase/installations",C),(xt=at=at||{})[xt.DEBUG=0]="DEBUG",xt[xt.VERBOSE=1]="VERBOSE",xt[xt.INFO=2]="INFO",xt[xt.WARN=3]="WARN",xt[xt.ERROR=4]="ERROR",xt[xt.SILENT=5]="SILENT";
var kt={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},Ot=at.INFO,Pt=((Ut={})[at.DEBUG]="log",Ut[at.VERBOSE]="log",Ut[at.INFO]="info",Ut[at.WARN]="warn",Ut[at.ERROR]="error",Ut),U=(Object.defineProperty(Rt.prototype,"logLevel",{get:
,set:function(t){if(!(t in at))
this._logLevel=t},enumerable:!1,configurable:!0}),Rt.prototype.setLogLevel=
,Object.defineProperty(Rt.prototype,"logHandler",{get:
,set:
,enumerable:!1,configurable:!0}),Object.defineProperty(Rt.prototype,"userLogHandler",{get:
,set:
,enumerable:!1,configurable:!0}),Rt.prototype.debug=
,Rt.prototype.log=
,Rt.prototype.info=
,Rt.prototype.warn=
,Rt.prototype.error=
,Rt);function Rt(t){this.name=t,this._logLevel=Ot,this._logHandler=Nt,this._userLogHandler=null}var Mt,Ct,jt="0.4.2",Bt="FB-PERF-TRACE-MEASURE",Dt="@firebase/performance/config",Lt="@firebase/performance/configexpire",xt="Performance",Ut=((Ut={})["trace started"]="Trace {$traceName} was started before.",Ut["trace stopped"]="Trace {$traceName} is not running.",Ut["nonpositive trace startTime"]="Trace {$traceName} startTime should be positive.",Ut["nonpositive trace duration"]="Trace {$traceName} duration should be positive.",Ut["no window"]="Window is not available.",Ut["no app id"]="App id is not available.",Ut["no project id"]="Project id is not available.",Ut["no api key"]="Api key is not available.",Ut["invalid cc log"]="Attempted to queue invalid cc event",Ut["FB not default"]="Performance can only start when Firebase app instance is the default one.",Ut["RC response not ok"]="RC response is not ok",Ut["invalid attribute name"]="Attribute name {$attributeName} is invalid.",Ut["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",Ut["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",Ut["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",Ut),qt=new v("performance",xt,Ut),Ft=new U(xt);Ft.logLevel=at.INFO;var Ht,Vt=(Kt.prototype.getUrl=
,Kt.prototype.mark=
,Kt.prototype.measure=
,Kt.prototype.getEntriesByType=
,Kt.prototype.getEntriesByName=
,Kt.prototype.getTimeOrigin=
,Kt.prototype.requiredApisAvailable=
,Kt.prototype.setupObserver=
,Kt.getInstance=
,Kt);
var $t,Gt,Jt=(zt.prototype.getAppId=
,zt.prototype.getProjectId=
,zt.prototype.getApiKey=
,zt.prototype.getFlTransportFullUrl=
,zt.getInstance=
,zt);
(xt=Gt=Gt||{})[xt.UNKNOWN=0]="UNKNOWN",xt[xt.VISIBLE=1]="VISIBLE",xt[xt.HIDDEN=2]="HIDDEN";var Yt=["firebase_","google_","ga_"],Zt=new RegExp("^[a-zA-Z]\\w*$");
var Xt="0.0.1",te={loggingEnabled:!0},ee="FIREBASE_INSTALLATIONS_AUTH";
var re="Could not fetch config, will use default configs";
var ae,se=1;
var fe,le=1e4,pe=5500,he=3,de=he,ge=[],ve=!1;
var Te=["_fp","_fcp","_fid"];var Ee=(Ae.prototype.start=
,Ae.prototype.stop=
,Ae.prototype.record=
,Ae.prototype.incrementMetric=
,Ae.prototype.putMetric=
,Ae.prototype.getMetric=
,Ae.prototype.putAttribute=
,Ae.prototype.getAttribute=
,Ae.prototype.removeAttribute=
,Ae.prototype.getAttributes=
,Ae.prototype.setStartTime=
,Ae.prototype.setDuration=
,Ae.prototype.calculateTraceMetrics=
,Ae.createOobTrace=
,Ae.createUserTimingTrace=
,Ae);
var ke=5e3;
var Re=(Me.prototype.trace=
,Object.defineProperty(Me.prototype,"instrumentationEnabled",{get:
,set:
,enumerable:!1,configurable:!0}),Object.defineProperty(Me.prototype,"dataCollectionEnabled",{get:
,set:
,enumerable:!1,configurable:!0}),Me);
var Ce;
(Ce=e.default).INTERNAL.registerComponent(new b("performance",
,"PUBLIC")),Ce.registerVersion("@firebase/performance","0.4.2")}).apply(this,arguments)}
});
//# sourceMappingURL=firebase-performance.js.map

if (typeof firebase === 'undefined') 

var firebaseConfig = {
  "projectId": "MobileSOP-guide",
  "appId": "1:77881030995:web:2fb706ab0ae5fafac889a6",
  "databaseURL": "https://MobileSOP-guide.firebaseio.com",
  "storageBucket": "MobileSOP-guide.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyB1QQEPJCsLkTRkYG-et5nq4m6Z-1ZSqNA",
  "authDomain": "MobileSOP-guide.firebaseapp.com",
  "messagingSenderId": "77881030995",
  "measurementId": "G-611H8SYE47"
};
if (firebaseConfig) {
  firebase.initializeApp(firebaseConfig);
}

