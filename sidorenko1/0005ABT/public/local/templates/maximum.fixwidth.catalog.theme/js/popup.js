/**
 * jquery.popup v. 0.09
 * author: Roman Maslennikov
 * used default: $('#elem').popup();
 * used options default:
 * background: '#000' // bg overlay
 * position: 'absolute' // position absolute or fixed
 * opacity: 0.5 // opacity overlay
 * zIndex: 123456788 // z-index overlay
 * transform: "scale" //"scale", "translateY", "translateX"
 * time: 400 // time init
 * onPopupClose: function e(){} // popup close after function
 * onPopupInit: function e(){} // popup init after function
 **/
!function(t){t.fn.popup=function(o){function e(t){if("scale"==o.transform)r="scale(0)",d="scale(1)";else if("translateY"==o.transform){var e=p.height()/2-f/2+f;r="translateY(-"+e+"px)",d="translateY(0)"}else{var n=p.width()/2-a/2+a;r="translateX(-"+n+"px)",d="translateX(0)"}u.css({position:o.position,zIndex:o.zIndex+1,transform:r,transition:"transform "+o.time/1e3+"s ease-out"}).fadeIn(o.time).css({transform:d}),t()}function n(t){l.fadeOut(o.time),u.fadeOut(o.time).css({transform:r}),t()}function i(){u.css({top:p.height()/2-u.outerHeight()/2,left:p.width()/2-u.outerWidth()/2})}function s(){var t=u.offsetParent();f>p.height()?u.css({top:-t.offset().top+p.scrollTop()+5}):u.css({top:-t.offset().top+p.scrollTop()+p.height()/2-u.outerHeight()/2}),u.outerWidth()>p.width()?u.css({left:-t.offset().left+p.scrollLeft()+5}):u.css({left:-t.offset().left+p.scrollLeft()+p.width()/2-u.outerWidth()/2})}function c(){l.height(t(document).height()),l.width(t(document).width())}o=t.extend({background:"#000",position:"absolute",opacity:.5,zIndex:123456788,transform:"scale",time:400,onPopupClose:function(){},onPopupInit:function(){}},o);var p=t(window),u=t(this),f=u.outerHeight(),a=u.outerWidth(),r=null,d=null;null!=document.getElementById("popup-bg")&&t("#popup-bg").remove(),t("<div/>",{id:"popup-bg",css:{position:"fixed",top:0,height:t(document).height(),width:t(document).width(),left:0,display:"none",background:o.background,opacity:o.opacity,filter:"alpha(opacity="+100*o.opacity+")",zIndex:o.zIndex,cursor:"pointer"}}).appendTo("body");var l=t("#popup-bg");l.fadeIn(o.time),c(),p.scroll(function(){l.height(t(document).height()),l.width(t(document).width())}),e(o.onPopupInit),"fixed"==o.position?(i(),p.resize(function(){u.css({transition:"all "+o.time/1e3+"s ease-out"}),i(),c()})):"absolute"==o.position&&(s(),p.resize(function(){u.css({transition:"all "+o.time/1e3+"s ease-out"}),s(),c()})),t("#popup-bg,.js-popup-close").off("click").on({click:function(){n(o.onPopupClose),t(document).off("keydown")}}),t(document).off("keydown").one("keydown",function(t){27==t.keyCode&&n(o.onPopupClose)})}}(jQuery);
