!function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var u="function"==typeof require&&require;if(!s&&u)return u(o,!0);if(a)return a(o,!0);throw new Error("Cannot find module '"+o+"'")}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t){self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content)):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var a=i[e],o={};for(var s in a)if(a.hasOwnProperty(s)){if(s==n)for(var u in r)r.hasOwnProperty(u)&&(o[u]=r[u]);o[s]=a[s]}return i[e]=o},DFS:function(e,n){for(var r in e)n.call(e,r,e[r]),"Object"===t.util.type(e)&&t.languages.DFS(e[r],n)}},highlightAll:function(e,n){for(var r,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),a=0;r=i[a++];)t.highlightElement(r,e===!0,n)},highlightElement:function(r,i,a){for(var o,s,u=r;u&&!e.test(u.className);)u=u.parentNode;if(u&&(o=(u.className.match(e)||[,""])[1],s=t.languages[o]),s){r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,u=r.parentNode,/pre/i.test(u.nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=r.textContent;if(c){var l={element:r,language:o,grammar:s,code:c};if(t.hooks.run("before-highlight",l),i&&self.Worker){var f=new Worker(t.filename);f.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data),o),t.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a&&a.call(l.element),t.hooks.run("after-highlight",l)},f.postMessage(JSON.stringify({language:l.language,code:l.code}))}else l.highlightedCode=t.highlight(l.code,l.grammar,l.language),t.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a&&a.call(r),t.hooks.run("after-highlight",l)}}},highlight:function(e,r,i){var a=t.tokenize(e,r);return n.stringify(t.util.encode(a),i)},tokenize:function(e,n){var r=t.Token,i=[e],a=n.rest;if(a){for(var o in a)n[o]=a[o];delete n.rest}e:for(var o in n)if(n.hasOwnProperty(o)&&n[o]){var s=n[o];s="Array"===t.util.type(s)?s:[s];for(var u=0;u<s.length;++u){var c=s[u],l=c.inside,f=!!c.lookbehind,p=0;c=c.pattern||c;for(var d=0;d<i.length;d++){var g=i[d];if(i.length>e.length)break e;if(!(g instanceof r)){c.lastIndex=0;var h=c.exec(g);if(h){f&&(p=h[1].length);var m=h.index-1+p,h=h[0].slice(p),v=h.length,b=m+v,k=g.slice(0,m+1),y=g.slice(b+1),w=[d,1];k&&w.push(k);var x=new r(o,l?t.tokenize(h,l):h);w.push(x),y&&w.push(y),Array.prototype.splice.apply(i,w)}}}}}return i},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[],r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(r&&r.length)for(var i,a=0;i=r[a++];)i(n)}}},n=t.Token=function(e,t){this.type=e,this.content=t};if(n.stringify=function(e,r,i){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return n.stringify(t,r,e)}).join("");var a={type:e.type,content:n.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};"comment"==a.type&&(a.attributes.spellcheck="true"),t.hooks.run("wrap",a);var o="";for(var s in a.attributes)o+=s+'="'+(a.attributes[s]||"")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'" '+o+">"+a.content+"</"+a.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(i,t.languages[r])))),self.close()},!1),self.Prism):self.Prism;var r=document.getElementsByTagName("script");return r=r[r.length-1],r&&(t.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=n),n.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/\&#?[\da-z]{1,8};/gi},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,punctuation:/[\{\};:]/g,"function":/[-a-z0-9]+(?=\()/gi},n.languages.markup&&n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/gi,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/gi,inside:n.languages.markup.tag.inside},rest:n.languages.css}}}),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//g,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*?(\r?\n|$)/g,lookbehind:!0}],string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/gi,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/gi,inside:n.languages.markup.tag.inside},rest:n.languages.javascript}}}),function(){if(self.Prism&&self.document&&document.querySelector){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var r=t.getAttribute("data-src"),i=(r.match(/\.(\w+)$/)||[,""])[1],a=e[i]||i,o=document.createElement("code");o.className="language-"+a,t.textContent="",o.textContent="Loading…",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",r,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,n.highlightElement(o)):o.textContent=s.status>=400?"✖ Error "+s.status+" while fetching file: "+s.statusText:"✖ Error: File does not exist or is empty")},s.send(null)})}}()},{}],2:[function(e,t){t.exports=function(e){return function(t){var n,r,i=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),a=function(){var e=n+1;return u(1)?(s(n,r+1),!1):void(i[e]&&s(e,0))},o=function(){var e=n-1;return u(-1)?(s(n,r-1),!1):void(i[e]&&s(e,i[e].length-1))},s=function(e,t){n=e,r=t,i.forEach(function(n,r){n.forEach(function(n,i){n.classList.add("bespoke-bullet"),e>r||r===e&&t>=i?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),r===e&&i===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},u=function(e){return void 0!==i[n][r+e]};t.on("next",a),t.on("prev",o),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}],3:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},r=function(r,i){var a=e.slides[e.slide()],o=i-e.slide(),s=o>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,r)),r!==a&&["inactive",s,s+"-"+Math.abs(o)].map(t.bind(null,r))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(i){e.slides.map(r),t(i.slide,"active"),n(i.slide,"inactive")})}}},{}],4:[function(e,t){t.exports=function(){return function(e){var t,n=function(){var t=window.location.hash.slice(1),n=parseInt(t,10);t&&(n?r(n-1):e.slides.forEach(function(e,t){e.getAttribute("data-bespoke-hash")&&r(t)}))},r=function(n){n!==t&&e.slide(n)};setTimeout(function(){n(),e.on("activate",function(e){var n=e.slide.getAttribute("data-bespoke-hash");window.location.hash=n||e.index+1,t=e.index}),window.addEventListener("hashchange",n)},0)}}},{}],5:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],6:[function(e,t){t.exports=function(e){return function(t){var n=document.createElement("div"),r=document.createElement("div"),i="vertical"===e?"height":"width";n.className="bespoke-progress-parent",r.className="bespoke-progress-bar",n.appendChild(r),t.parent.appendChild(n),t.on("activate",function(e){r.style[i]=100*e.index/(t.slides.length-1)+"%"})}}},{}],7:[function(e,t,n){(function(r){!function(e){if("object"==typeof n&&"undefined"!=typeof t)t.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i;"undefined"!=typeof window?i=window:"undefined"!=typeof r?i=r:"undefined"!=typeof self&&(i=self);var a=i;a=a.bespoke||(a.bespoke={}),a=a.plugins||(a.plugins={}),a.run=e()}}(function(){return function t(n,r,i){function a(s,u){if(!r[s]){if(!n[s]){var c="function"==typeof e&&e;if(!u&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=r[s]={exports:{}};n[s][0].call(l.exports,function(e){var t=n[s][1][e];return a(t?t:e)},l,l.exports,t,n,r,i)}return r[s].exports}for(var o="function"==typeof e&&e,s=0;s<i.length;s++)a(i[s]);return a}({1:[function(e,t){t.exports=function(){return function(e){var t=-1;[].forEach.call(document.querySelectorAll("[data-bespoke-run]"),function(t){t.setAttribute("href","#"),t.addEventListener("click",function(t){e.fire("runCurrentCode"),t.preventDefault()})}),e.on("runCurrentCode",function(){var e=document.querySelector(".bespoke-active code");if(!e)throw"No code element on this slide, or no bespoke-classes plugin";new Function(e.innerText)()}),e.on("prev",function(){t=e.slide()}),e.on("next",function(n){var r=n.slide,i=r.querySelector("code[data-bespoke-autorun]"),a=t!==e.slide();return t=e.slide(),i&&a?(e.fire("runCurrentCode"),!1):!0})}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,r=t.slides[0],i=r.offsetHeight,a=r.offsetWidth,o="zoom"===e||"zoom"in n.style&&"transform"!==e,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",n.insertBefore(t,e),t.appendChild(e),t},u=o?t.slides:t.slides.map(s),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,r){return r+e in n.style?r+e:t},e.toLowerCase())}("Transform"),l=o?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},f=function(){var e=n.offsetWidth/a,t=n.offsetHeight/i;u.forEach(l.bind(null,Math.min(e,t)))};window.addEventListener("resize",f),f()}}},{}],9:[function(e,t){t.exports=function(){return function(e){var t=function(t,n){var r=n.slide.getAttribute("data-bespoke-state");r&&r.split(" ").forEach(function(n){e.parent.classList[t](n)})};e.on("activate",t.bind(null,"add")),e.on("deactivate",t.bind(null,"remove"))}}},{}],10:[function(e,t){t.exports=function(e){return function(t){var n,r,i="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+i],r=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),r=e.touches[0]["page"+i]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(r)>50&&t[r>0?"prev":"next"]()})}}},{}],11:[function(e,t){var n=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),r=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),i=r[0],a={},o=function(e,t){r[e]&&(l("deactivate",f(i,t)),i=r[e],l("activate",f(i,t)))},s=function(e,t){return arguments.length?void(l("slide",f(r[e],t))&&o(e,t)):r.indexOf(i)},u=function(e,t){var n=r.indexOf(i)+e;l(e>0?"next":"prev",f(i,t))&&o(n,t)},c=function(e,t){return(a[e]||(a[e]=[])).push(t),function(){a[e]=a[e].filter(function(e){return e!==t})}},l=function(e,t){return(a[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},f=function(e,t){return t=t||{},t.index=r.indexOf(e),t.slide=e,t},p={on:c,fire:l,slide:s,next:u.bind(null,1),prev:u.bind(null,-1),parent:n,slides:r};return(t||[]).forEach(function(e){e(p)}),o(0),p};t.exports={from:n}},{}],12:[function(e){var t=e("bespoke"),n=e("bespoke-classes"),r=e("bespoke-keys"),i=e("bespoke-touch"),a=e("bespoke-bullets"),o=e("bespoke-scale"),s=e("bespoke-hash"),u=e("bespoke-run"),c=e("bespoke-progress"),l=e("bespoke-state");t.from("article",[n(),r(),i(),u(),a("ul, li, .bullet"),o(),s(),c(),l()]),e("./../../bower_components/prism/prism.js")},{"./../../bower_components/prism/prism.js":1,bespoke:11,"bespoke-bullets":2,"bespoke-classes":3,"bespoke-hash":4,"bespoke-keys":5,"bespoke-progress":6,"bespoke-run":7,"bespoke-scale":8,"bespoke-state":9,"bespoke-touch":10}]},{},[12]);