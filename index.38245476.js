!function(){var e={clockItem:document.querySelector(".js-clock-items"),buttons:document.querySelector(".js-buttons__wrapper"),clock:document.querySelector(".js-clock")},t=(new Date).getTimezoneOffset()/60*-1;function s(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}function o(e){return String(e).padStart(2,0)}var c=!1,n=!1,r=null;function u(e){r=setInterval((function(){var r,u=Date.now(),i=(r=u,{hours:Math.floor(r/1e3/60/60%24)+t,minutes:Math.floor(r/1e3/60)%60,seconds:Math.floor(r/1e3)%60}),l=i.hours,a=i.minutes,d=i.seconds,h=l>=12?"PM":"AM";l=c?l%12:l%24,e.querySelector(".js-clock__hours").textContent=o(l),e.querySelector(".js-clock__minutes").textContent=o(a),e.querySelector(".js-clock__seconds").textContent=o(d),e.querySelector(".js-clock__timezone").textContent=n?h:"",e.querySelector(".js-clock__hours").dataset.title=s(l,["година","години","годин"]),e.querySelector(".js-clock__minutes").dataset.title=s(a,["хвилина","хвилини","хвилин"]),e.querySelector(".js-clock__seconds").dataset.title=s(d,["секунда","секунди","секунд"])}),1e3)}function i(){e.clock.classList.add("is-hidden"),e.buttons.querySelector(".js-show").classList.remove("is-hidden"),e.buttons.querySelector(".js-hide").classList.add("is-hidden"),e.buttons.querySelector(".js-change").classList.add("is-hidden"),clearInterval(r)}e.buttons.addEventListener("click",(function(t){if(t.target.matches(".js-change"))return void("AM/PM"===e.buttons.querySelector(".js-change").textContent.trim()?(e.buttons.querySelector(".js-change").textContent="24 hours",c=!0,n=!0):(e.buttons.querySelector(".js-change").textContent="AM/PM",c=!1,n=!1));if(t.target.matches(".js-hide"))return void i();u(e.clockItem),setTimeout((function(){e.clock.classList.remove("is-hidden"),e.buttons.querySelector(".js-show").classList.add("is-hidden"),e.buttons.querySelector(".js-hide").classList.remove("is-hidden"),e.buttons.querySelector(".js-change").classList.remove("is-hidden")}),1e3)}))}();
//# sourceMappingURL=index.38245476.js.map