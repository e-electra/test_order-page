(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();document.addEventListener("click",function(e){if(e.target&&e.target.closest(".navigation__burger-button")){let t=e.target.closest(".navigation__burger-button"),l=document.querySelector(".navigation__list");t.classList.toggle("active"),t.classList.contains("active")?l.classList.add("active"):l.classList.remove("active")}if(e.target&&e.target.closest(".navigation__link")){let t=document.querySelector(".navigation__list"),l=document.querySelector(".navigation__burger-button");t.classList.remove("active"),l.classList.remove("active")}});function n(e){const{elements:t}=e,l=Array.from(t).filter(r=>!!r.name).map(r=>{const{name:s,value:i}=r;return{name:s,value:i}});console.log(l)}function o(e){if(e.querySelectorAll(".order-form__validation-field").forEach(l=>{l.classList.remove("error")}),e.systemtype.value=="")return e.systemtype.focus(),e.systemtype.closest(".order-form__validation-field").classList.add("error"),!1;if(e.email.validity.valid!==!0){let l=e.email.closest(".order-form__validation-field");return e.email.focus(),l.classList.add("error"),!1}if(e.name.validity.valid!==!0)return e.name.focus(),e.name.closest(".order-form__validation-field").classList.add("error"),!1;console.log("отправка формы"),n(e)}document.addEventListener("click",function(e){if(e.target&&e.target.closest(".order-form__submit")){e.preventDefault();let t=e.target.closest("form");o(t)}});document.addEventListener("input",function(e){if(e.target&&e.target.classList.contains("range-bar__input")){let t=e.target,r=t.closest(".range-bar").querySelector(".range-bar__value-data");r.textContent=`${t.value}`}});document.addEventListener("DOMContentLoaded",function(e){document.querySelectorAll(".range-bar__input").forEach(l=>{let r=l.closest(".range-bar");r.querySelector(".range-bar__value-data").textContent=l.value})});document.addEventListener("click",function(e){if(e.target&&e.target.closest(".select__input")){let l=e.target.closest(".select");l.classList.toggle("select-active"),l.classList.remove("error")}if(e.target&&e.target.closest(".select__option-item")){let t=e.target.closest(".select__option-item"),l=t.querySelector(".select__option-label"),r=t.closest(".select"),s=r.querySelector(".select__input");r.querySelectorAll(".select__option-item").forEach(a=>{a.classList.remove("selected")}),t.classList.add("selected"),s.value=l.textContent}e.target&&!e.target.closest(".select__input")&&document.querySelectorAll(".select").forEach(l=>{l.classList.remove("select-active")})});function c(e,t){let l=e.querySelector(".file-input__file-list");l.innerHTML="",t.length>0?(t.forEach(r=>{let s=document.createElement("div");s.classList.add("file-input__file"),s.innerHTML=`
                <span class="file-input__file-name">${r.name}</span>
                <span class="file-input__delete-file">
                    <svg class="file-input__delete-icon">
                        <use xlink:href="/test_order-page/assets/spritemap.svg.svg#sprite-delete"></use>
                    </svg>
                </span>
            `,l.append(s)}),e.classList.add("uploaded")):e.classList.remove("uploaded")}document.addEventListener("change",function(e){if(e.target&&e.target.classList.contains("file-input__input")){let t=e.target.closest(".file-input"),l=Array.from(e.target.files);c(t,l)}});document.addEventListener("click",function(e){if(e.target&&e.target.closest(".file-input__delete-file")){e.preventDefault();let t=e.target.closest(".file-input"),l=t.querySelector(".file-input__input"),r=t.querySelector(".file-input__file-list");r.innerHTML="",l.value="",t.classList.remove("uploaded")}});
