(()=>{"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function i(e,i){for(var n=0;n<i.length;n++){var o=i[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,a=function(e,i){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(a)?a:String(a)),o)}var a}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var n=i.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderLayout(),this.monitorButton=document.querySelector(".monitor__button-wrapper"),this.monitorLight=document.querySelector(".monitor__light"),this.monitorOff=document.querySelector(".monitor_off"),this.monitorOn=document.querySelector(".monitor_on"),this.mouse=document.querySelector(".mouse__left"),this.isScreen=!1,this.toggleMonitor=this.toggleMonitor.bind(this),this.toggleMonitor(),document.addEventListener("contextmenu",(function(e){e.preventDefault()})),this.monitorButton.addEventListener("click",this.toggleMonitor)}var t,n;return t=e,(n=[{key:"renderLayout",value:function(){document.body.innerHTML='<section class="section-up">\n    <div class="speakers">\n      <div class="speakers__panel">\n      </div>\n      <div class="speakers__footer"></div>\n    </div>\n    <div class="monitor">\n      <div class="monitor__wrapper">\n        <div class="monitor__container">\n          <textarea class="textarea" cols="15" rows="10"></textarea>\n          <div class="monitor_off"></div>\n          <div class="monitor_on"></div>\n          <div class="os-info">\n            Windows OS\n          </div>\n          <div class="monitor__light monitor__light_active"></div>\n          <div class="monitor__button-wrapper">\n            <div class="monitor__button"></div>\n          </div>\n        </div>\n      </div>\n      <div class="monitor__footer"></div>\n    </div>\n    <div class="speakers">\n      <div class="speakers__panel">\n        <div class="speakers__light speakers__light_inactive"></div>\n        <div class="speakers__power speakers__power_inactive"></div>\n      </div>\n      <div class="speakers__footer"></div>\n    </div>\n    </section>\n    <section class="section-down">\n      <div class="keyboard">\n        <div class="keyboard__wrapper"></div>\n      </div>\n      <div class="mouse">\n        <div class="mouse__buttons">\n        <div class="mouse__left"></div>\n        <div class="mouse__middle"></div>\n        <div class="mouse__right"></div>\n      </div>\n      </div>\n    </section>'}},{key:"toggleMonitor",value:function(){var e=this;this.isMonitor?(this.isMonitor=!1,this.monitorLight.classList.replace("monitor__light_active","monitor__light_inactive"),this.monitorOff.style.display="block"):(this.monitorButton.removeEventListener("click",this.toggleMonitor),this.isMonitor=!0,this.monitorLight.classList.replace("monitor__light_inactive","monitor__light_active"),this.monitorOn.style.display="block",this.monitorOn.addEventListener("animationend",(function(){e.monitorButton.addEventListener("click",e.toggleMonitor),e.monitorOff.style.display="none",e.monitorOn.style.display="none"})))}},{key:"toggleMouse",value:function(){this.mouse.classList.toggle("mouse__left_active")}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const o=[{code:"Backquote",type:"mixLetter",name:{en:{1:"~",2:"`"},ru:{1:"ё",2:""}}},{code:"Digit1",type:"symbol",name:{1:"!",2:"1"}},{code:"Digit2",type:"mixSymbol",name:{en:{1:"@",2:"2"},ru:{1:'"',2:"2"}}},{code:"Digit3",type:"mixSymbol",name:{en:{1:"#",2:"3"},ru:{1:"№",2:"3"}}},{code:"Digit4",type:"mixSymbol",name:{en:{1:"$",2:"4"},ru:{1:";",2:"4"}}},{code:"Digit5",type:"symbol",name:{1:"%",2:"5"}},{code:"Digit6",type:"mixSymbol",name:{en:{1:"^",2:"6"},ru:{1:":",2:"6"}}},{code:"Digit7",type:"mixSymbol",name:{en:{1:"&",2:"7"},ru:{1:"?",2:"7"}}},{code:"Digit8",type:"symbol",name:{1:"*",2:"8"}},{code:"Digit9",type:"symbol",name:{1:"(",2:"9"}},{code:"Digit0",type:"symbol",name:{1:")",2:"0"}},{code:"Minus",type:"symbol",name:{1:"_",2:"-"}},{code:"Equal",type:"symbol",name:{1:"+",2:"="}},{code:"Backspace",type:"backspace",name:"Backspace"},{code:"Tab",type:"tab",name:"Tab"},{code:"KeyQ",type:"simpleLetter",name:{en:"q",ru:"й"}},{code:"KeyW",type:"simpleLetter",name:{en:"w",ru:"ц"}},{code:"KeyE",type:"simpleLetter",name:{en:"e",ru:"у"}},{code:"KeyR",type:"simpleLetter",name:{en:"r",ru:"к"}},{code:"KeyT",type:"simpleLetter",name:{en:"t",ru:"е"}},{code:"KeyY",type:"simpleLetter",name:{en:"y",ru:"н"}},{code:"KeyU",type:"simpleLetter",name:{en:"u",ru:"г"}},{code:"KeyI",type:"simpleLetter",name:{en:"i",ru:"ш"}},{code:"KeyO",type:"simpleLetter",name:{en:"o",ru:"щ"}},{code:"KeyP",type:"simpleLetter",name:{en:"p",ru:"з"}},{code:"BracketLeft",type:"mixLetter",name:{en:{1:"{",2:"["},ru:{1:"х",2:""}}},{code:"BracketRight",type:"mixLetter",name:{en:{1:"}",2:"]"},ru:{1:"ъ",2:""}}},{code:"Backslash",type:"mixSymbol",name:{en:{1:"|",2:"\\"},ru:{1:"/",2:"\\"}}},{code:"Delete",type:"del",name:"Del"},{code:"CapsLock",type:"caps",name:"CapsLock"},{code:"KeyA",type:"simpleLetter",name:{en:"a",ru:"ф"}},{code:"KeyS",type:"simpleLetter",name:{en:"s",ru:"ы"}},{code:"KeyD",type:"simpleLetter",name:{en:"d",ru:"в"}},{code:"KeyF",type:"simpleLetter",name:{en:"f",ru:"а"}},{code:"KeyG",type:"simpleLetter",name:{en:"g",ru:"п"}},{code:"KeyH",type:"simpleLetter",name:{en:"h",ru:"р"}},{code:"KeyJ",type:"simpleLetter",name:{en:"j",ru:"о"}},{code:"KeyK",type:"simpleLetter",name:{en:"k",ru:"л"}},{code:"KeyL",type:"simpleLetter",name:{en:"l",ru:"д"}},{code:"Semicolon",type:"mixLetter",name:{en:{1:":",2:";"},ru:{1:"ж",2:""}}},{code:"Quote",type:"mixLetter",name:{en:{1:'"',2:"'"},ru:{1:"э",2:""}}},{code:"Enter",type:"enter",name:"Enter"},{code:"ShiftLeft",type:"shift-left",name:"Shift"},{code:"KeyZ",type:"simpleLetter",name:{en:"z",ru:"я"}},{code:"KeyX",type:"simpleLetter",name:{en:"x",ru:"ч"}},{code:"KeyC",type:"simpleLetter",name:{en:"c",ru:"с"}},{code:"KeyV",type:"simpleLetter",name:{en:"v",ru:"м"}},{code:"KeyB",type:"simpleLetter",name:{en:"b",ru:"и"}},{code:"KeyN",type:"simpleLetter",name:{en:"n",ru:"т"}},{code:"KeyM",type:"simpleLetter",name:{en:"m",ru:"ь"}},{code:"Comma",type:"mixLetter",name:{en:{1:"<",2:","},ru:{1:"б",2:""}}},{code:"Period",type:"mixLetter",name:{en:{1:">",2:"."},ru:{1:"ю",2:""}}},{code:"Slash",type:"mixSymbol",name:{en:{1:"?",2:"/"},ru:{1:",",2:"."}}},{code:"ArrowUp",type:"up",name:""},{code:"ShiftRight",type:"shift-right",name:"Shift"},{code:"ControlLeft",type:"ctrl-left",name:"Ctrl"},{code:"MetaLeft",type:"win",name:""},{code:"AltLeft",type:"alt-left",name:"Alt"},{code:"Space",type:"space",name:""},{code:"AltRight",type:"alt-right",name:"Alt"},{code:"ArrowLeft",type:"left",name:""},{code:"ArrowDown",type:"down",name:""},{code:"ArrowRight",type:"right",name:""},{code:"ControlRight",type:"ctrl-right",name:"Ctrl"}];function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.typeKeys=t,this.keyboard=document.querySelector(".keyboard__wrapper")}var t,i;return t=e,(i=[{key:"renderKeys",value:function(){var e=this;this.typeKeys.forEach((function(t){e.keyboard.insertAdjacentHTML("beforeend",e.createKey(t))})),this.keys=document.querySelectorAll(".key"),this.simpleLetter=document.querySelectorAll('[data-type="simpleLetter"]'),this.mixLetter=document.querySelectorAll('[data-type="mixLetter"]'),this.mixSymbol=document.querySelectorAll('[data-type="mixSymbol"]')}},{key:"createKey",value:function(e){return"ru"===localStorage.getItem("lang")?"mixSymbol"===e.type?'<div class="key" id="'.concat(e.code,'" data-type="').concat(e.type,'"><span class="key__name1">').concat(e.name.ru[1],'</span><span class="key__name2">').concat(e.name.ru[2],"</span></div>"):"mixLetter"===e.type?'<div class="key" id="'.concat(e.code,'" data-type="').concat(e.type,'"><span class="key__letter">').concat(e.name.ru[1],"</span></div>"):"symbol"===e.type?' <div class="key" id="'.concat(e.code,'" data-type="').concat(e.type,'"><span class="key__name1">').concat(e.name[1],'</span><span class="key__name2">').concat(e.name[2],"</span></div>"):"simpleLetter"===e.type?' <div class="key" id="'.concat(e.code,'" data-type="').concat(e.type,'"><span class="key__letter">').concat(e.name.ru,"</span></div>"):'<div class="key '.concat(e.type,'" id="').concat(e.code,'"><span class="key__action">').concat(e.name,"</span></div>"):"mixSymbol"===e.type||"mixLetter"===e.type?'<div class="key" id="'.concat(e.code,'" data-type="').concat(e.type,'"><span class="key__name1">').concat(e.name.en[1],'</span><span class="key__name2">').concat(e.name.en[2],"</span></div>"):"symbol"===e.type?' <div class="key" id="'.concat(e.code,'" data-type="').concat(e.type,'"><span class="key__name1">').concat(e.name[1],'</span><span class="key__name2">').concat(e.name[2],"</span></div>"):"simpleLetter"===e.type?' <div class="key" id="'.concat(e.code,'" data-type="').concat(e.type,'"><span class="key__letter">').concat(e.name.en,"</span></div>"):'<div class="key '.concat(e.type,'" id="').concat(e.code,'"><span class="key__action">').concat(e.name,"</span></div>")}},{key:"activeKey",value:function(e){for(var t=0;t<this.keys.length;t++)if(e===this.keys[t].id){this.keys[t].classList.add("key_up");break}}},{key:"inactiveKeys",value:function(e){for(var t=0;t<this.keys.length;t++){var i=this.keys[t];e.isCaps&&e.isShift?"ShiftLeft"!==i.id&&"ShiftRight"!==i.id&&"CapsLock"!==i.id&&i.classList.remove("key_up"):e.isCaps?"CapsLock"!==i.id&&i.classList.remove("key_up"):e.isShift?"ShiftLeft"!==i.id&&"ShiftRight"!==i.id&&i.classList.remove("key_up"):i.classList.remove("key_up")}}},{key:"inactiveKey",value:function(e,t){for(var i=0;i<this.typeKeys.length;i++)e===this.typeKeys[i].code&&(t.isCaps&&t.isShift?"ShiftLeft"!==e&&"ShiftRight"!==e&&"CapsLock"!==e&&document.getElementById("".concat(e)).classList.remove("key_up"):t.isCaps?"CapsLock"!==e&&(document.getElementById("".concat(e)).classList.remove("key_up"),document.getElementById("ShiftRight").classList.remove("key_up"),document.getElementById("ShiftLeft").classList.remove("key_up")):t.isShift?"ShiftLeft"!==e&&"ShiftRight"!==e&&document.getElementById("".concat(e)).classList.remove("key_up"):(document.getElementById("".concat(e)).classList.remove("key_up"),document.getElementById("ShiftRight").classList.remove("key_up"),document.getElementById("ShiftLeft").classList.remove("key_up")))}},{key:"changeCase",value:function(e,t){var i=document.querySelectorAll(".key__letter");e&&!t?i.forEach((function(e){e.innerText=e.innerText.toUpperCase()})):e&&t?i.forEach((function(e){e.innerText=e.innerText.toLowerCase()})):!e&&t?i.forEach((function(e){e.innerText=e.innerText.toUpperCase()})):i.forEach((function(e){e.innerText=e.innerText.toLowerCase()}))}},{key:"changeLanguage",value:function(e){var t=this;this.simpleLetter.forEach((function(i){t.typeKeys.forEach((function(t){i.id===t.code&&(i.firstElementChild.textContent="".concat("en"===e?t.name.en:t.name.ru))}))})),this.mixSymbol.forEach((function(i){t.typeKeys.forEach((function(t){i.id===t.code&&("en"===e?(i.firstElementChild.textContent="".concat(t.name.en[1]),i.lastElementChild.textContent="".concat(t.name.en[2])):(i.firstElementChild.textContent="".concat(t.name.ru[1]),i.lastElementChild.textContent="".concat(t.name.ru[2])))}))})),this.mixLetter.forEach((function(i){t.typeKeys.forEach((function(t){i.id===t.code&&(i.innerHTML="en"===e?'<span class="key__name1">'.concat(t.name.en[1],'</span><span class="key__name2">').concat(t.name.en[2],"</span>"):'<span class="key__letter">'.concat(t.name.ru[1],"</span>"))}))}))}}])&&r(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();const c=e.p+"assets/ac0264e77611dfab5cf9.mp3";function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.audio=new Audio,this.audio.src=c,this.audio.muted=!0,this.speakerButton=document.querySelector(".speakers__power"),this.speakerLight=document.querySelector(".speakers__light")}var t,i;return t=e,(i=[{key:"play",value:function(){this.audio.play()}},{key:"toggleSound",value:function(){this.audio.muted?(this.audio.muted=!1,this.speakerButton.classList.replace("speakers__power_inactive","speakers__power_active"),this.speakerLight.classList.replace("speakers__light_inactive","speakers__light_active")):(this.audio.muted=!0,this.speakerButton.classList.replace("speakers__power_active","speakers__power_inactive"),this.speakerLight.classList.replace("speakers__light_active","speakers__light_inactive"))}}])&&u(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.textarea=document.querySelector(".textarea"),this.selection=window.getSelection()}var t,i;return t=e,(i=[{key:"showValue",value:function(e){this.textarea.focus(),this.textarea.setRangeText(e,this.start,this.end),this.toRight()}},{key:"inputValue",value:function(e,t){var i=this;this.value=this.textarea.value,this.start=this.textarea.selectionStart,this.end=this.textarea.selectionEnd;var n=document.querySelectorAll('[data-type="simpleLetter"], [data-type="mixLetter"], [data-type="symbol"], [data-type="mixSymbol"]');"Backspace"===e?this.start!==this.end?this.deleteSelect():this.backspace():"Delete"===e?this.start!==this.end?this.deleteSelect():this.textarea.setRangeText("",this.start,this.end+1):"ArrowUp"===e?this.toUp():"ArrowLeft"===e?this.toLeft():"ArrowRight"===e?this.toRight():"ArrowDown"===e?this.toDown():"Tab"===e?this.showValue("\t"):"Space"===e?this.showValue(" "):"Enter"===e?this.showValue("\n"):n.forEach((function(n){e===n.id&&(t.isShift?i.showValue(n.firstElementChild.innerText):i.showValue(n.lastElementChild.innerText))}))}},{key:"deleteSelect",value:function(){this.textarea.setRangeText("",this.start,this.end)}},{key:"backspace",value:function(){0!==this.start&&(this.textarea.setRangeText("",this.start-1,this.start),this.toLeft())}},{key:"toLeft",value:function(){0!==this.start&&(this.textarea.selectionEnd=this.start-1,this.textarea.selectionStart=this.textarea.selectionEnd)}},{key:"toRight",value:function(){this.textarea.selectionEnd=this.start+1,this.textarea.selectionStart=this.textarea.selectionEnd}},{key:"toDown",value:function(){this.selection.modify("move","forward","line")}},{key:"toUp",value:function(){this.selection.modify("move","backward","line")}}])&&m(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function f(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var v=function(){function e(t,i,n,o){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.layoutView=t,this.keyboardView=i,this.soundView=n,this.screenView=o,this.speakerButton=document.querySelector(".speakers__power"),this.keyboard=document.querySelector(".keyboard__wrapper"),this.state={isCaps:!1,isShift:!1},this.shortcutKeys={ControlLeft:".ctrl-left",ControlRight:".ctrl-right",AltLeft:".alt-left",AltRight:".alt-right"},this.shortcut=new Set,this.keyboard.addEventListener("mousedown",(function(e){2!==e.button&&a.mouseDown(e)})),document.addEventListener("keydown",(function(e){a.keyDown(e)})),document.addEventListener("keyup",(function(e){a.keyUp(e)})),this.speakerButton.addEventListener("click",(function(){a.soundView.toggleSound()})),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&a.keyboardView.inactiveKeys(a.state)}))}var t,i;return t=e,(i=[{key:"mouseDown",value:function(e){var t=this;e.preventDefault(),this.layoutView.toggleMouse();var i=null,n=function e(n){n.relatedTarget.closest(".key")&&(i=n.relatedTarget,"MetaLeft"===n.relatedTarget.id&&t.toggleLanguage()),n.target!==i&&(t.soundView.play(),"ShiftRight"!==n.target.id&&"ShiftLeft"!==n.target.id||t.toggleShift(),"CapsLock"===n.target.id&&t.toggleCaps(),n.target.closest(".key")&&(t.keyboardView.activeKey(n.target.id),t.screenView.inputValue(n.target.id,t.state),t.keyboardView.inactiveKey(i.id,t.state))),n.target.closest(".keyboard__wrapper")||(document.removeEventListener("mouseover",e),t.keyboardView.inactiveKey(i.id,t.state))};e.target.closest(".key")&&(this.keyboardView.activeKey(e.target.id),this.screenView.inputValue(e.target.id,this.state),document.addEventListener("mouseover",n),"ShiftRight"!==e.target.id&&"ShiftLeft"!==e.target.id||this.toggleShift(),"CapsLock"===e.target.id&&this.toggleCaps()),document.addEventListener("mouseup",(function e(i){i.target.closest(".key")&&(i.preventDefault(),t.soundView.play(),t.keyboardView.inactiveKey(i.target.id,t.state),"MetaLeft"===i.target.id&&t.toggleLanguage()),t.layoutView.toggleMouse(),document.removeEventListener("mouseover",n),document.removeEventListener("mouseup",e)}))}},{key:"keyDown",value:function(e){for(var t in e.preventDefault(),this.keyboardView.activeKey(e.code),this.screenView.inputValue(e.code,this.state),"CapsLock"===e.code&&(e.repeat||this.toggleCaps()),"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||e.repeat||this.toggleShift(),this.shortcutKeys)e.code==="".concat(t)&&this.shortcut.add(t)}},{key:"keyUp",value:function(e){this.checkShortcut(),e.preventDefault(),this.state.isShift&&("ShiftLeft"!==e.code&&"ShiftRight"!==e.code||this.toggleShift()),this.state.isCaps||this.soundView.play(),this.keyboardView.inactiveKey(e.code,this.state),this.clearShortcut()}},{key:"toggleShift",value:function(){this.state.isShift?this.state.isShift=!1:this.state.isShift=!0,this.keyboardView.changeCase(this.state.isShift,this.state.isCaps)}},{key:"toggleCaps",value:function(){this.state.isCaps?this.state.isCaps=!1:this.state.isCaps=!0,this.keyboardView.changeCase(this.state.isShift,this.state.isCaps)}},{key:"toggleLanguage",value:function(){var e=localStorage.getItem("lang");null===e||"en"===e?(localStorage.setItem("lang","ru"),this.keyboardView.changeLanguage("ru")):(localStorage.setItem("lang","en"),this.keyboardView.changeLanguage("en"))}},{key:"checkShortcut",value:function(){(this.shortcut.has("ControlLeft")||this.shortcut.has("ControlRight"))&&(this.shortcut.has("AltLeft")||this.shortcut.has("AltRight"))&&this.toggleLanguage()}},{key:"clearShortcut",value:function(){for(var e in this.shortcutKeys)document.querySelector("".concat(this.shortcutKeys[e])).classList.contains("key_up")||this.shortcut.delete(e)}}])&&f(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function b(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.layoutView=new n,this.keyboardView=new s(o),this.soundView=new y,this.ScreenView=new d,this.controller=new v(this.layoutView,this.keyboardView,this.soundView,this.ScreenView)}var t,i;return t=e,(i=[{key:"start",value:function(){this.keyboardView.renderKeys()}}])&&b(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}())).start()})();
//# sourceMappingURL=index.6b1df298de62a8319053.js.map