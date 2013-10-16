/*jslint unparam: true, browser: true, indent: 2 */(function(e,t,n,r){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"4.3.2",settings:{activeClass:"open",is_hover:!1,opened:function(){},closed:function(){}},init:function(t,n,r){this.scope=t||this.scope;Foundation.inherit(this,"throttle scrollLeft data_options");typeof n=="object"&&e.extend(!0,this.settings,n);if(typeof n!="string"){this.settings.init||this.events();return this.settings.init}return this[n].call(this,r)},events:function(){var r=this;e(this.scope).on("click.fndtn.dropdown","[data-dropdown]",function(t){var n=e.extend({},r.settings,r.data_options(e(this)));t.preventDefault();n.is_hover||r.toggle(e(this))}).on("mouseenter","[data-dropdown]",function(t){var n=e.extend({},r.settings,r.data_options(e(this)));n.is_hover&&r.toggle(e(this))}).on("mouseleave","[data-dropdown-content]",function(t){var n=e('[data-dropdown="'+e(this).attr("id")+'"]'),i=e.extend({},r.settings,r.data_options(n));i.is_hover&&r.close.call(r,e(this))}).on("opened.fndtn.dropdown","[data-dropdown-content]",this.settings.opened).on("closed.fndtn.dropdown","[data-dropdown-content]",this.settings.closed);e(n).on("click.fndtn.dropdown",function(t){var n=e(t.target).closest("[data-dropdown-content]");if(e(t.target).data("dropdown")||e(t.target).parent().data("dropdown"))return;if(!e(t.target).data("revealId")&&n.length>0&&(e(t.target).is("[data-dropdown-content]")||e.contains(n.first()[0],t.target))){t.stopPropagation();return}r.close.call(r,e("[data-dropdown-content]"))});e(t).on("resize.fndtn.dropdown",r.throttle(function(){r.resize.call(r)},50)).trigger("resize");this.settings.init=!0},close:function(t){var n=this;t.each(function(){if(e(this).hasClass(n.settings.activeClass)){e(this).css(Foundation.rtl?"right":"left","-99999px").removeClass(n.settings.activeClass);e(this).trigger("closed")}})},open:function(e,t){this.css(e.addClass(this.settings.activeClass),t);e.trigger("opened")},toggle:function(t){var n=e("#"+t.data("dropdown"));if(n.length===0)return;this.close.call(this,e("[data-dropdown-content]").not(n));if(n.hasClass(this.settings.activeClass))this.close.call(this,n);else{this.close.call(this,e("[data-dropdown-content]"));this.open.call(this,n,t)}},resize:function(){var t=e("[data-dropdown-content].open"),n=e("[data-dropdown='"+t.attr("id")+"']");t.length&&n.length&&this.css(t,n)},css:function(n,r){var i=n.offsetParent(),s=r.offset();s.top-=i.offset().top;s.left-=i.offset().left;if(this.small()){n.css({position:"absolute",width:"95%","max-width":"none",top:s.top+this.outerHeight(r)});n.css(Foundation.rtl?"right":"left","2.5%")}else{if(!Foundation.rtl&&e(t).width()>this.outerWidth(n)+r.offset().left&&!this.data_options(r).align_right){var o=s.left;n.hasClass("right")&&n.removeClass("right")}else{n.hasClass("right")||n.addClass("right");var o=s.left-(this.outerWidth(n)-this.outerWidth(r))}n.attr("style","").css({position:"absolute",top:s.top+this.outerHeight(r),left:o})}return n},small:function(){return e(t).width()<768||e("html").hasClass("lt-ie9")},off:function(){e(this.scope).off(".fndtn.dropdown");e("html, body").off(".fndtn.dropdown");e(t).off(".fndtn.dropdown");e("[data-dropdown-content]").off(".fndtn.dropdown");this.settings.init=!1},reflow:function(){}}})(Foundation.zj,this,this.document);