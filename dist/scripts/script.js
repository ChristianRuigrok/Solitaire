"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $(t){return void 0===document.querySelectorAll(t)[1]?document.querySelector(t):document.querySelectorAll(t)}function shuffle(t){for(var e=t.length;e;e--){var r=Math.floor(Math.random()*e),a=[t[r],t[e-1]];t[e-1]=a[0],t[r]=a[1]}}function createCards(){for(var t=0;t<=3;t++)for(var e=1;e<=13;e++)allCards.push(new Card(e,t));shuffle(allCards)}function initStacks(){for(var t=1;t<8;t++){var e=document.createElement("div");e.classList.add("stack"),e.classList.add("stack_"+t),e.setAttribute("data-max",t),$(".stacks").appendChild(e)}var r=!0,a=!1,n=void 0;try{for(var l,o=$(".stack")[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){for(var i=l.value,s=i.getAttribute("data-max"),d=0;d<s;d++){var u=allCards[0];allCards.splice(0,1);var c=u.element;d==s-1&&c.classList.add("open"),i.appendChild(c)}i.addEventListener("mouseup",function(){"undefined"!=typeof selected[0]&&onDrop(this)})}}catch(t){a=!0,n=t}finally{try{!r&&o.return&&o.return()}finally{if(a)throw n}}var f=!0,y=!1,v=void 0;try{for(var h,m=allCards[Symbol.iterator]();!(f=(h=m.next()).done);f=!0){var p=h.value;$(".full").appendChild(p.element)}}catch(t){y=!0,v=t}finally{try{!f&&m.return&&m.return()}finally{if(y)throw v}}}function _setSelected(t){t.classList.add("selected"),selected.push(t)}function _rmSelected(){if(void 0!==_typeof(selected[0])){var t=!0,e=!1,r=void 0;try{for(var a,n=selected[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var l=a.value;l.classList.remove("selected")}}catch(t){e=!0,r=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw r}}selected=[]}}function _moveElement(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=t;t.parentNode.removeChild(t),r?e.insertBefore(a,e.firstChild):e.appendChild(a)}function initDragAndDrop(){var t=!0,e=!1,r=void 0;try{for(var a,n=$(".card")[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var l=a.value;l.addEventListener("mousedown",function(t){if(offsetX=t.offsetX,offsetY=t.offsetY,this.parentNode.lastChild==this&&this.classList.add("open"),this.classList.contains("open"))for(var e=this;e;)_setSelected(e),e=e.nextElementSibling;var r=!0,a=!1,n=void 0;try{for(var l,o=selected[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var i=l.value;i.style.top=event.clientY-offsetY+"px",i.style.left=event.clientX-offsetX+"px"}}catch(t){a=!0,n=t}finally{try{!r&&o.return&&o.return()}finally{if(a)throw n}}})}}catch(t){e=!0,r=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw r}}document.addEventListener("dblclick",autoMove),document.addEventListener("mouseup",function(){if(void 0!==_typeof(selected[0])){var t=!0,e=!1,r=void 0;try{for(var a,n=selected[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var l=a.value;l.style.top="auto",l.style.left="auto"}}catch(t){e=!0,r=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw r}}}_rmSelected()}),document.addEventListener("mousemove",function(){if(void 0!==_typeof(selected[0])){var t=!0,e=!1,r=void 0;try{for(var a,n=selected[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var l=a.value;l.style.top=event.clientY-offsetY+"px",l.style.left=event.clientX-offsetX+"px"}}catch(t){e=!0,r=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw r}}}});var o=!0,i=!1,s=void 0;try{for(var d,u=$(".foundations")[Symbol.iterator]();!(o=(d=u.next()).done);o=!0){var c=d.value;c.addEventListener("mouseup",function(){onDrop(this)})}}catch(t){i=!0,s=t}finally{try{!o&&u.return&&u.return()}finally{if(i)throw s}}$(".full").addEventListener("click",function(){if(this.childNodes.length>0)this.lastChild.classList.add("open"),_moveElement(this.lastChild,$(".view"));else{var t=!0,e=!1,r=void 0;try{for(var a,n=$(".view .card")[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var l=a.value;l.classList.remove("open"),_moveElement(l,$(".full"),!0)}}catch(t){e=!0,r=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw r}}}})}function onDrop(t){void 0!==_typeof(selected[0])&&selected.length+t.childNodes.length<=13&&(t.classList.contains("foundations")&&foundationCanStack(t)&&allowDrop(t),t.classList.contains("stack")&&stacksCanStack(t)&&allowDrop(t))}function allowDrop(t){var e=!0,r=!1,a=void 0;try{for(var n,l=selected[Symbol.iterator]();!(e=(n=l.next()).done);e=!0){var o=n.value,i=o;o.parentNode.removeChild(o),t.appendChild(i),i.style.top="auto",i.style.left="auto"}}catch(t){r=!0,a=t}finally{try{!e&&l.return&&l.return()}finally{if(r)throw a}}_rmSelected()}function foundationCanStack(t){if(0===t.childNodes.length)return 1===parseInt(selected[0].getAttribute("data-num"));if(selected.length>1)return!1;if(parseInt(t.lastChild.getAttribute("data-type"))===parseInt(selected[0].getAttribute("data-type"))){var e=parseInt(t.lastChild.getAttribute("data-num")),r=parseInt(selected[0].getAttribute("data-num"));return e+1===r}}function stacksCanStack(t){if(0===t.childNodes.length)return 13===parseInt(selected[0].getAttribute("data-num"));if(parseInt(t.lastChild.getAttribute("data-num"))-1===parseInt(selected[0].getAttribute("data-num"))){var e=parseInt(t.lastChild.getAttribute("data-type"))%2,r=parseInt(selected[0].getAttribute("data-type"))%2;return e!==r}}function autoMove(){var t=!0,e=!1,r=void 0;try{for(var a,n=$(".stack")[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var l=a.value,o=!0,i=!1,s=void 0;try{for(var d,u=$(".foundations")[Symbol.iterator]();!(o=(d=u.next()).done);o=!0){var c=d.value;l.childNodes.length>0&&(c.childNodes.length>0?l.lastChild.getAttribute("data-type")===c.lastChild.getAttribute("data-type")&&parseInt(l.lastChild.getAttribute("data-num"))===parseInt(c.lastChild.getAttribute("data-num"))+1&&_moveElement(l.lastChild,c):1==l.lastChild.getAttribute("data-num")&&_moveElement(l.lastChild,c))}}catch(t){i=!0,s=t}finally{try{!o&&u.return&&u.return()}finally{if(i)throw s}}}}catch(t){e=!0,r=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw r}}}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),allCards=[],Card=function(){function t(e,r){_classCallCheck(this,t),this.num=e,this.type=r}return _createClass(t,[{key:"_numToName",value:function(t){if(!(t>=1&&t<=13))throw new Error("Num '"+this.num+"' does not exist");switch(t){case 1:return"A";case 11:return"J";case 12:return"Q";case 13:return"K";default:return t}}},{key:"_typeToName",value:function(t){switch(t){case 0:return["Hearts","♥","red"];case 1:return["Clubs","♣","black"];case 2:return["Diamonds","♦","red"];case 3:return["Spades","♠","black"];default:throw new Error("Card type '"+t+"' does not exist")}}},{key:"numName",get:function(){return this._numToName(this.num)}},{key:"typeName",get:function(){return this._typeToName(this.type)}},{key:"element",get:function(){var t=document.createElement("div");t.classList.add("card"),t.classList.add(this.typeName[2]),t.setAttribute("data-num",this.num),t.setAttribute("data-type",this.type);var e="<span>"+this.numName+" "+this.typeName[1]+"</span>";return t.innerHTML=e+'<div class="type">'+this.typeName[1]+"</div>"+e,t}}]),t}(),selected=[],offsetX=0,offsetY=0;createCards(),initStacks(),initDragAndDrop();