!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=null;function n(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){r=setInterval(n,1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled","true")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled","true"),t.removeAttribute("disabled","true")}))}();
//# sourceMappingURL=01-color-switcher.c70ddeab.js.map