!function t(e,n,r){function o(c,i){if(!n[c]){if(!e[c]){var a="function"==typeof require&&require;if(!i&&a)return a(c,!0);if(s)return s(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var m=n[c]={exports:{}};e[c][0].call(m.exports,(function(t){return o(e[c][1][t]||t)}),m,m.exports,t,e,n,r)}return n[c].exports}for(var s="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(t,e,n){"use strict";let r=!1;const{chrome:o}=globalThis,s=[];function c(...t){try{const e=(new Date).getTime();importScripts(...t);const n=(new Date).getTime();return s.push({name:t[0],value:n-e,children:[],startTime:e,endTime:n}),!0}catch(t){console.error(t)}return!1}function i(){if(r)return;r=!0;const t=[],e=e=>{t.push(e)},n=Date.now();e("../scripts/sentry-install.js");!self.document||e("../scripts/snow.js"),e("../scripts/use-snow.js");e("../scripts/runtime-lavamoat.js"),e("../scripts/lockdown-more.js"),e("../scripts/policy-load.js");"../common-0.js,../common-1.js,../common-2.js,../common-3.js,../common-4.js,../common-5.js,../common-6.js,../common-7.js,../common-8.js,../common-9.js,../background-0.js,../background-1.js,../background-2.js,../background-3.js,../background-4.js,../background-5.js,../background-6.js".split(",").forEach((t=>e(t))),c(...t);Date.now();console.log("SCRIPTS IMPORT COMPLETE in Seconds: "+(Date.now()-n)/1e3)}self.addEventListener("install",i),o.runtime.onMessage.addListener((()=>(i(),!1))),"activated"===self.serviceWorker.state&&i();(async()=>{try{await o.scripting.registerContentScripts([{id:"inpage",matches:["file://*/*","http://*/*","https://*/*"],js:["scripts/inpage.js"],runAt:"document_start",world:"MAIN",allFrames:!0}])}catch(t){console.warn(`Dropped attempt to register inpage content script. ${t}`)}})()},{}]},{},[1]);