Array.prototype.every=function(t){if(this===undefined||null===this)throw new TypeError(this+" is not an object");if("function"!=typeof t)throw new TypeError(t+" is not a function");for(var n=Object(this),r=arguments[1],e=n instanceof String?n.split(""):n,i=Number(e.length)||0,o=-1;++o<i;)if(o in e&&!t.call(r,e[o],o,n))return!1;return!0};