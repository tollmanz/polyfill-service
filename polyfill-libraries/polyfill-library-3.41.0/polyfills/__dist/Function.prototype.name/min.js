!function(){var n=/^\s*function\s+([^\(\s]*)\s*/,t=Function,e=t.prototype,r=e.constructor,o=function(o){var c,u;return o===t||o===r?u="Function":o!==e&&(c=(""+o).match(n),u=c&&c[1]),u||""};Object.defineProperty(e,"name",{get:function c(){var n=this,t=o(n);return n!==e&&Object.defineProperty(n,"name",{value:t,configurable:!0}),t},configurable:!0})}();