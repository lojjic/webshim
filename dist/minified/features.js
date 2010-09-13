(function(a){a.support.geolocation="geolocation"in navigator;a.htmlExt.addModule("geolocation",{test:function(){return a.support.geolocation},options:{destroyWrite:true},combination:["combined-all","combined-x"]});a.support.canvas="getContext"in a("<canvas />")[0];a.htmlExt.addModule("canvas",{test:function(){return a.support.canvas},methodNames:[{name:"getContext",elementNames:["canvas"]}],combination:["combined-all","combined-x"]});a.support.placeholder="placeholder"in a('<input type="text" />')[0];
a.htmlExt.addModule("placeholder",{test:function(){return a.support.placeholder},css:"shim.css",combination:["combined-all","combined-x","combined-forms"]});a.support.validity="checkValidity"in a('<form action="#" />')[0];a.htmlExt.addModule("validity",{test:function(){return a.support.validity},css:"shim.css",methodNames:[{name:"setCustomValidity",elementNames:["input","select","textarea"]},{name:"checkValidity",elementNames:["form","fieldset","input","select","textarea"]}],options:{stepArrows:{number:true,
time:true,"datetime-local":true},recalcWidth:false},combination:["combined-all","combined-x","combined-forms"]});a.support.validity===true&&a.htmlExt.capturingEvents(["invalid","input"]);a.extend(a.expr.filters,{valid:function(b){return(a.attr(b,"validity")||{valid:true}).valid},invalid:function(b){return!a.expr.filters.valid(b)},willValidate:function(b){return a.attr(b,"willValidate")}});a.htmlExt.createBooleanAttrs("novalidate","form");(function(){var b=a('<form action="#"><fieldset><input name="a" required /></fieldset></form>');
a.support.validationMessage=!!b.find("input").attr("validationMessage");a.support.fieldsetValidation=!!(a("fieldset",b)[0].elements&&a("fieldset",b).checkValidity()===false);a.htmlExt.addModule("validation-message",{test:function(){return a.support.validationMessage&&a.support.fieldsetValidation},combination:["combined-all","combined-x","combined-forms"]})})();a.support.inputUI=a('<input type="range" />')[0].type=="range"&&a('<input type="date" />')[0].type=="date";a.htmlExt.addModule("input-ui",
{test:function(){return a.support.inputUI},combination:["combined-all","combined-x","combined-forms"],options:{slider:{},date:{},juiSrc:"http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.4/jquery-ui.min.js",langSrc:"http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.4/i18n/jquery.ui.datepicker-",recalcWidth:true,nativeIsReplaced:false,replaceNative:function(b){this.nativeIsReplaced=b;a.htmlExt.loader.modules["input-ui"].test=b?function(){return false}:function(){return a.support.inputUI}}}});(function(){var b,
d,c;a(document).bind("invalid",function(e){if(!b){c=e.target.form;if(a.support.validity===true&&c&&!window.noHTMLExtFixes){var f=a(c).bind("submit.preventInvalidSubmit",function(){if(!a.attr(c,"novalidate")){e.stopImmediatePropagation();return false}}).data("events").submit;f&&f.length>1&&f.unshift(f.pop())}b=a.Event("firstinvalid");a(e.target).trigger(b)}b&&b.isDefaultPrevented()&&e.preventDefault();clearTimeout(d);d=setTimeout(function(){b=false;a(c).unbind("submit.preventInvalidSubmit")},9)})})();
var g=function(){this._create()};g.prototype={_create:function(){this.alert=a('<div class="validity-alert"><div class="va-box" /></div>').css({position:"absolute",display:"none"});this.hideTimer=false;this.hideDelay=5E3;this.boundHide=a.proxy(this,"hide")},createAlert:function(){if(!this.created){this.created=true;var b=this;a(function(){b.alert.appendTo("body")})}},showFor:function(b,d){b=a(b);var c=b.data("inputUIReplace");if(c)b=c.visual;this.createAlert();this.clear();this.getMessage(b);this.position(b);
this.show();d||b.focus();this.hideTimer=setTimeout(this.boundHide,this.hideDelay);a(document).bind("focusout.validityalert",this.boundHide)},getMessage:function(b){a("> div",this.alert).html(b.attr("validationMessage"))},position:function(b){var d=b.offset();d.top+=b.outerHeight();this.alert.css(d)},clear:function(){clearTimeout(this.hideTimer);a(document).unbind("focusout.validityalert");this.alert.stop().css({opacity:""})},show:function(){this.alert.fadeIn()},hide:function(){this.clear();this.alert.fadeOut()}};
a.htmlExt.validityAlert=new g;a.support.jsonStorage="JSON"in window&&"localStorage"in window&&"sessionStorage"in window;a.htmlExt.addModule("json-storage",{test:function(){return a.support.jsonStorage},combination:["combined-all"]})})(jQuery);
