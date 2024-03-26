(()=>{"use strict";var e=function(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))},t=function(e){return e.target.classList.contains("popup_is-opened")?r(e.target):e.target.closest(".popup__close")?r(e.target.closest(".popup")):void 0},n=function(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",e)},r=function(t){document.removeEventListener("keydown",e),t.classList.remove("popup_is-opened")},o=function(e,t,n,r,o){var a=e.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__image");return i.addEventListener("click",o),i.src=t.link,i.alt=t.name,a.querySelector(".card__title").textContent=t.name,a.querySelector(".card__delete-button").addEventListener("click",n),a.querySelector(".card__like-button").addEventListener("click",r),a},a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-9",headers:{authorization:"71a19c91-b633-4842-bfb4-68e9613dbe77","Content-Type":"application/json"}},i=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},c=function(e){return fetch(e,{method:"HEAD"}).then((function(e){var t=e.ok,n=e.headers,r=e.status;return t?n.get("Content-Type").includes("image")?Promise.resolve():Promise.reject("Ошибка: URL ссылается на не изображение"):Promise.reject("Ошибка: ".concat(r))}))};function u(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=function(e){var t=e.formElement,n=e.inputElement,r=e.inputErrorClass,o=e.errorClass,a=t.querySelector(".".concat(n.id,"-error"));a.classList.remove(o),a.textContent="",n.classList.remove(r)},d=function(e){var t=e.inputList,n=e.submitButtonElement,r=e.inactiveButtonClass;!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?(n.disabled=!1,n.classList.remove(r)):(n.disabled=!0,n.classList.add(r))},m=function(e,t){var n=t.submitButtonSelector,r=t.inactiveButtonClass,o=t.inputSelector,a=t.inputErrorClass,i=t.errorClass,c=u(e.querySelectorAll(o)),s=e.querySelector(n);c.forEach((function(t){l({formElement:e,inputElement:t,inputErrorClass:a,errorClass:i})})),d({inputList:c,submitButtonElement:s,inactiveButtonClass:r})};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f,v,b,y,h,_,E,S={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},C=document.querySelector(".popup_type_image"),L=C.querySelector(".popup__caption"),g=C.querySelector(".popup__image"),k=document.querySelector(".places__list"),q=document.querySelector("#card-template").content,A=document.forms["new-place"],B=A.querySelector(".popup__button"),j=A.elements["place-name"],U=A.elements.link,x=document.querySelector(".popup_type_new-card"),w=document.querySelector(".profile__add-button"),I=document.forms["edit-avatar"],P=I.elements.avatar,O=I.querySelector(".popup__button"),T=document.querySelector(".popup_type_edit-avatar"),D=document.querySelector(".profile__image"),M=document.querySelector(".profile__title"),N=document.querySelector(".profile__description"),H=document.forms["edit-profile"],J=H.querySelector(".popup__button"),V=H.elements.name,$=H.elements.description,z=document.querySelector(".popup_type_edit"),R=document.querySelector(".profile__edit-button"),F=document.querySelector(".popup_type_confirm"),G=F.querySelector(".popup__button_confirm"),K=function(e){var t=e.name,n=e.description,r=e.avatar;M.textContent=t,N.textContent=n,D.style.backgroundImage="url(".concat(r,")")},Q=function(e){var t=e.buttonElement;e.isSubmitting?(t.disabled=!0,t.textContent="Сохранение..."):(t.disabled=!1,t.textContent="Сохранить")},W=function(e){var t=e.cardId,n=e.buttonElement,r=e.counterElement;n.disabled=!0,n.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e),{headers:a.headers,method:"DELETE"}).then(i)}(t).then((function(e){var t=e.likes;n.classList.remove("card__like-button_is-active"),t.length?(r.classList.add("card__like-counter_is-active"),r.textContent=t.length):(r.classList.remove("card__like-counter_is-active"),r.textContent="")})).catch((function(e){return console.error(e)})).finally((function(){n.disabled=!1})):function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e),{headers:a.headers,method:"PUT"}).then(i)}(t).then((function(e){var t=e.likes;n.classList.add("card__like-button_is-active"),r.classList.add("card__like-counter_is-active"),r.textContent=t.length})).catch((function(e){return console.error(e)})).finally((function(){n.disabled=!1}))},X=function(e){var t=e.cardId,o=e.buttonElement;n(F),G.onclick=function(){o.disabled=!0,function(e){return fetch("".concat(a.baseUrl,"/cards/").concat(e),{headers:a.headers,method:"DELETE"}).then(i)}(t).then((function(){o.closest(".card").remove()})).catch((function(e){o.disabled=!1,console.error(e)})).finally((function(){r(F)}))}},Y=function(e){var t=e.cardName,r=e.cardLink;g.src=r,g.alt=t,L.textContent=t,n(C)};A.addEventListener("submit",(function(e){var t,n,u;e.preventDefault(),Q({buttonElement:B,isSubmitting:!0}),(t={name:j.value,link:U.value},n=t.name,u=t.link,c(u).then((function(){return fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers,method:"POST",body:JSON.stringify({name:n,link:u})}).then(i)})).catch((function(e){return Promise.reject(e)}))).then((function(e){k.prepend(o({currentUserId:e.owner._id,template:q,data:e,onDelete:X,onLike:W,onImageClick:Y})),A.reset(),r(x)})).catch((function(e){console.error(e)})).finally((function(){Q({buttonElement:B,isSubmitting:!1})}))})),H.addEventListener("submit",(function(e){var t,n,o;e.preventDefault(),Q({buttonElement:J,isSubmitting:!0}),(t={name:V.value,description:$.value},n=t.name,o=t.description,fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers,method:"PATCH",body:JSON.stringify({name:n,about:o})}).then(i)).then((function(e){var t=e.name,n=e.about,o=e.avatar;K({name:t,description:n,avatar:o}),r(z)})).catch((function(e){console.error(e)})).finally((function(){Q({buttonElement:J,isSubmitting:!1})}))})),I.addEventListener("submit",(function(e){var t;e.preventDefault(),Q({buttonElement:O,isSubmitting:!0}),(t=P.value,c(t).then((function(){return fetch("".concat(a.baseUrl,"/users/me/avatar"),{headers:a.headers,method:"PATCH",body:JSON.stringify({avatar:t})}).then(i)})).catch((function(e){return Promise.reject(e)}))).then((function(e){var t=e.name,n=e.about,o=e.avatar;K({name:t,description:n,avatar:o}),r(T)})).catch((function(e){console.error(e)})).finally((function(){Q({buttonElement:O,isSubmitting:!1})}))})),C.addEventListener("click",t),T.addEventListener("click",t),D.addEventListener("click",(function(){I.reset(),m(I,S),n(T)})),x.addEventListener("click",t),w.addEventListener("click",(function(){A.reset(),m(A,S),n(x)})),z.addEventListener("click",t),R.addEventListener("click",(function(){V.value=M.textContent,$.value=N.textContent,m(H,S),n(z)})),F.addEventListener("click",t),v=(f=S).formSelector,b=f.inputSelector,y=f.submitButtonSelector,h=f.inactiveButtonClass,_=f.inputErrorClass,E=f.errorClass,document.querySelectorAll(v).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=e.formElement,n=e.inputSelector,r=e.inputErrorClass,o=e.submitButtonSelector,a=e.inactiveButtonClass,i=e.errorClass,c=u(t.querySelectorAll(n)),s=t.querySelector(o);d({inputList:c,submitButtonElement:s,inactiveButtonClass:a}),c.forEach((function(e){e.addEventListener("input",(function(){!function(e){var t=e.formElement,n=e.inputElement,r=e.inputErrorClass,o=e.errorClass;n.validity.patternMismatch?n.setCustomValidity(n.dataset.errorMessage):n.setCustomValidity(""),n.validity.valid?l({formElement:t,inputElement:n,errorClass:o,inputErrorClass:r}):function(e){var t=e.inputElement,n=e.inputErrorClass,r=e.errorClass,o=e.errorMessage,a=e.formElement.querySelector(".".concat(t.id,"-error"));a.classList.add(r),a.textContent=o,t.classList.add(n)}({formElement:t,inputElement:n,errorMessage:n.validationMessage,errorClass:o,inputErrorClass:r})}({formElement:t,inputElement:e,inputErrorClass:r,errorClass:i}),d({inputList:c,submitButtonElement:s,inactiveButtonClass:a})}))}))}({formElement:e,inputSelector:b,submitButtonSelector:y,inactiveButtonClass:h,inputErrorClass:_,errorClass:E})})),Promise.all([fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}).then(i),fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then(i)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],i=a.name,c=a.about,u=a.avatar,s=a._id,l=r[1];K({name:i,description:c,avatar:u}),l.forEach((function(e){k.append(o({currentUserId:s,template:q,data:e,onDelete:X,onLike:W,onImageClick:Y}))}))})).catch((function(e){console.error(e)}))})();