(function(){if(window.BX.adminLogin)return;BX.adminLogin=function(t){BX.adminLogin=this;this.current_form=null;this.start_form=t.start_form;this.post_data=t.post_data;this.url=t.url||window.location.href;this.arForms={};this.error_block=null;this.animation_duration=t.animation_duration||500;this.form=t.form;this.login_wrapper=t.login_wrapper;this.window_wrapper=t.window_wrapper;this.popup_alignment=t.popup_alignment;this.auth_form_wrapper=t.auth_form_wrapper;this.login_variants=t.login_variants;BX.AUTHAGENT=this;BX.ready(BX.proxy(this.Init,this))};BX.adminLogin.prototype.registerForm=function(t){this.arForms[t.name]=t};BX.adminLogin.prototype.Init=function(){this.form=document.forms[this.form];this.login_wrapper=BX(this.login_wrapper);this.window_wrapper=BX(this.window_wrapper);this.popup_alignment=BX(this.popup_alignment);this.auth_form_wrapper=BX(this.auth_form_wrapper);this.login_variants=BX(this.login_variants);for(var t in this.arForms){if(this.arForms.hasOwnProperty(t)){this.arForms[t].Init(this.form)}}var o=window.location.hash;if(o.substring(0,1)=="#")o=o.substring(1,o.length);o=o.replace(/_message/g,"");if(!this.arForms[o])o=this.start_form;if(o!=this.start_form){this.login_variants.appendChild(this.arForms[this.start_form].container);this.auth_form_wrapper.appendChild(this.arForms[o].container)}BX.bindDelegate(this.form,"keydown",{tagName:"INPUT"},BX.proxy(this.hideError,this));BX.bind(this.form,"submit",BX.proxy(this.hideError,this));this.toggleAuthForm(this.arForms[o]);this._listenerTimeout=setTimeout(BX.delegate(this._checkHash,this),1e3)};BX.adminLogin.prototype._checkHash=function(){return;if(BX.browser.IsOpera())return;var t=window.location.hash.replace("#","");t=t.replace(/_message/g,"");if(this.current_form&&t!=this.current_form.name){this.toggleAuthForm(t)}this._listenerTimeout=setTimeout(BX.delegate(this._checkHash,this),1e3)};BX.adminLogin.prototype.toggleAuthForm=function(t){if(BX.type.isString(t))t=this.arForms[t];if(!t||t==this.current_form)return;this.hideError();if(!!this.current_form){this.removeAuthForm(this.current_form,BX.delegate(function(){this.addAuthForm(t)},this))}else{this.current_form=t;this.addAuthForm(t)}};BX.adminLogin.prototype.showAuthForm=function(t){this.current_form=t;BX.removeClass(document.body,"login-animate-popup2");BX.addClass(document.body,"login-animate-popup");BX.defer(t.onshow,t)();BX.bind(this.form,"submit",BX.proxy(t.validate,t));this._listenerTimeout=setTimeout(BX.delegate(this._checkHash,this),1e3)};BX.adminLogin.prototype.addAuthForm=function(t){if(this._listenerTimeout)clearInterval(this._listenerTimeout);window.location.hash=t.name;if(t.container!=this.auth_form_wrapper)this.auth_form_wrapper.appendChild(t.container);BX.defer(this.showAuthForm,this)(t)};BX.adminLogin.prototype.removeAuthForm=function(t,o){BX.unbind(this.form,"submit",BX.proxy(t.validate,t));this.popup_alignment.style.display="table-cell";this.popup_alignment.style.textAlign="center";BX.removeClass(document.body,"login-animate-popup");BX.addClass(document.body,"login-animate-popup2");BX.defer(function(){this.login_variants.appendChild(t.container);if(o)o();BX.defer(function(){BX.defer(t.onclose,t)()})()},this)()};BX.adminLogin.prototype._loadAdmin=function(t){if(BX.util.trim(t).length>0){var o=BX.GetWindowSize();if(o.scrollHeight<=o.innerHeight){document.body.style.overflow="hidden"}var e=this.window_wrapper;e.style.height=o.innerHeight+"px";BX.bind(window,"resize",function(){var t=BX.GetWindowSize();e.style.height=t.innerHeight+"px"});e.innerHTML=t;e.style.display="block";setTimeout(BX.delegate(function(){BX.removeClass(document.body,"login-animate");BX.addClass(document.body,"login-last-animate");BX.defer(BX.delegate(function(){var t=function(){if(o.scrollHeight<=o.innerHeight){document.body.style.overflow="auto"}if(this.parentNode)this.parentNode.removeChild(this);BX.removeClass(document.body,"login-animate-popup2");BX.removeClass(document.body,"login-animate-popup");BX.removeClass(document.body,"login-last-animate");if(BX.adminLogin)BX.adminLogin.Destroy()};BX.bind(document.body,"transitionend",BX.proxy(t,this.login_wrapper));setTimeout(BX.delegate(t,this.login_wrapper),700)},this))()},this),30)}};BX.adminLogin.prototype.setAuthResult=function(t){if(this.form.USER_PASSWORD)this.form.USER_PASSWORD.disabled=false;if(this.form.USER_CONFIRM_PASSWORD)this.form.USER_CONFIRM_PASSWORD.disabled=false;if(!!t){this.current_form.onerror(t)}else{BX.ajax({url:this.url,method:!!this.post_data?"POST":"GET",data:this.post_data,onsuccess:BX.delegate(this._loadAdmin,this),onfailure:function(){BX.debug(arguments);BX.reload()}})}};BX.adminLogin.prototype.showError=function(t,o,e,r){this.hideError();BX.addClass(this.current_form.container,"login-popup-error");t=this.form[t];var i=BX.pos(t);this.error_block=this.login_wrapper.appendChild(BX.create("DIV",{props:{className:"login-error-message-block"},style:{top:i.top+"px",left:i.right+"px"},html:'<div class="login-error-message" id="error-message">'+(o.TITLE||BX.message("admin_authorize_error"))+'<span class="login-error-red">'+o.MESSAGE+"</span></div>"}));this.error_block.style.display="block";this.error_block.style.opacity="1";BX.defer(function(){this.style.width=BX.firstChild(this).offsetWidth+"px"},this.error_block)();this.error_block._bxresizehandler=BX.defer(function(){var o=BX.pos(t);this.style.top=o.top+"px";this.style.left=o.right+"px"},this.error_block);BX.bind(window,"resize",this.error_block._bxresizehandler)};BX.adminLogin.prototype.hideError=function(){if(!!this.current_form)BX.removeClass(this.current_form.container,"login-popup-error");if(this.error_block&&!!this.error_block.parentNode){this.error_block.parentNode.removeChild(this.error_block);BX.unbind(window,"resize",this.error_block._bxresizehandler);this.error_block._bxresizehandler=null}BX.defer(this.enableFields,this)()};BX.adminLogin.prototype.enableFields=function(){for(var t=0;t<this.form.elements.length;t++){if(this.form.elements[t].disabled)this.form.elements[t].disabled=false}};BX.adminLogin.prototype.Destroy=function(){this.arForms=null;BX.adminLogin=null};BX.IAdminAuthForm=function(t,o){this.container=t;this.params=o;this.form=null};BX.IAdminAuthForm.prototype.Init=function(t){this.form=t;this.container=BX(this.container)};BX.IAdminAuthForm.prototype.validate=function(t){};BX.IAdminAuthForm.prototype.onshow=function(){this.form.action=this.params.url};BX.IAdminAuthForm.prototype.onclose=function(){};BX.IAdminAuthForm.prototype.onerror=function(t){alert(t.MESSAGE||t)};BX.IAdminAuthForm.prototype.fix=function(){var t=BX.pos(this.container);this.form.style.marginTop=t.top-60+"px";this.form.style.marginLeft=t.left+"px";BX("popup_alignment",true).style.textAlign="left";BX("popup_alignment",true).style.verticalAlign="top";BX.bind(window,"resize",BX.delegate(function(){var t=BX.GetWindowSize(),o=(t.innerHeight-this.offsetHeight)/2-60,e=(t.innerWidth-this.offsetWidth)/2;if(o>=54&&t.innerHeight>=768)this.style.marginTop=o+"px";else this.style.marginTop=54+"px";if(e>=115&&t.innerWidth>=716)this.style.marginLeft=e+"px";else this.style.marginLeft=115+"px"},this.form))};BX.IAdminAuthForm.prototype.showCaptcha=function(t){if(!!t.CAPTCHA){this.fix();this.form.captcha_sid.value=t.CAPTCHA_CODE;this.form.captcha_word.disabled=false;BX("captcha_image").innerHTML='<img src="/bitrix/tools/captcha.php?captcha_sid='+t.CAPTCHA_CODE+'" width="180" height="40" alt="CAPTCHA" />';BX.addClass(this.container,"login-captcha-popup-wrap");this._setTabIndex()}};BX.authFormAuthorize=function(t,o){this.name="authorize";BX.authFormAuthorize.superclass.constructor.apply(this,arguments)};BX.extend(BX.authFormAuthorize,BX.IAdminAuthForm);BX.authFormAuthorize.prototype.validate=function(t){if(BX.util.trim(this.form.USER_LOGIN.value=="")){BX.defer(BX.focus)(this.form.USER_LOGIN);return BX.PreventDefault(t)}if(BX.util.trim(this.form.USER_PASSWORD.value=="")){BX.defer(BX.focus)(this.form.USER_PASSWORD);return BX.PreventDefault(t)}if(BX.hasClass(this.container,"login-captcha-popup-wrap")&&BX.util.trim(this.form.captcha_word.value=="")){BX.defer(BX.focus)(this.form.captcha_word);return BX.PreventDefault(t)}BX.addClass(this.container,"login-loading-active");return true};BX.authFormAuthorize.prototype._setTabIndex=function(){var t=["USER_LOGIN","USER_PASSWORD"];if(!!this.form.USER_REMEMBER)t.push("USER_REMEMBER");if(!!this.form.captcha_sid.value)t.push("captcha_word");else this.form.captcha_word.disabled=true;t.push("Login");for(var o=0;o<t.length;o++)this.form[t[o]].tabIndex=o+1};BX.authFormAuthorize.prototype.onshow=function(){BX.authFormAuthorize.superclass.onshow.apply(this,arguments);if(this.form.USER_LOGIN.value.length<=0)BX.defer(BX.focus)(this.form.USER_LOGIN);else BX.defer(BX.focus)(this.form.USER_PASSWORD);this._setTabIndex()};BX.authFormAuthorize.prototype.onerror=function(t){if(t.MESSAGE===false){BX.adminLogin._lastError=t;BX.adminLogin.toggleAuthForm("otp")}else{BX.addClass(this.container,"login-popup-error-shake");setTimeout(BX.delegate(function(){BX.removeClass(this.container,"login-loading-active");BX.removeClass(this.container,"login-popup-error-shake");t.TITLE=BX.message("admin_authorize_error");BX.adminLogin.showError("USER_PASSWORD",t);this.showCaptcha(t)},this),400)}};BX.authFormOtp=function(t,o){this.name="otp";BX.authFormOtp.superclass.constructor.apply(this,arguments)};BX.extend(BX.authFormOtp,BX.IAdminAuthForm);BX.authFormOtp.prototype.onshow=function(){BX.authFormOtp.superclass.onshow.apply(this,arguments);if(!!BX.adminLogin._lastError){this.showCaptcha(BX.adminLogin._lastError);BX.adminLogin._lastError=null}BX.defer(BX.focus)(this.form.USER_OTP)};BX.authFormOtp.prototype.validate=function(t){if(BX.util.trim(this.form.USER_OTP.value=="")){BX.defer(BX.focus)(this.form.USER_OTP);return BX.PreventDefault(t)}if(BX.hasClass(this.container,"login-captcha-popup-wrap")&&BX.util.trim(this.form.captcha_word.value=="")){BX.defer(BX.focus)(this.form.captcha_word);return BX.PreventDefault(t)}BX.addClass(this.container,"login-loading-active");return true};BX.authFormOtp.prototype.onerror=function(t){BX.addClass(this.container,"login-popup-error-shake");setTimeout(BX.delegate(function(){BX.removeClass(this.container,"login-loading-active");BX.removeClass(this.container,"login-popup-error-shake");t.TITLE=BX.message("admin_authorize_error");BX.adminLogin.showError("USER_OTP",t);this.showCaptcha(t)},this),400)};BX.authFormForgotPassword=function(t,o){this.name="forgot_password";this.needCaptcha=o.needCaptcha;this.message=o.message;BX.authFormForgotPassword.superclass.constructor.apply(this,arguments)};BX.extend(BX.authFormForgotPassword,BX.IAdminAuthForm);BX.authFormForgotPassword.prototype.validate=function(t){if(BX.util.trim(this.form.USER_LOGIN.value=="")&&BX.util.trim(this.form.USER_EMAIL.value=="")){BX.defer(BX.focus)(this.form.USER_LOGIN);return BX.PreventDefault(t)}return true};BX.authFormForgotPassword.prototype.onshow=function(){BX.authFormForgotPassword.superclass.onshow.apply(this,arguments);BX.defer(BX.focus)(document.form_auth.USER_LOGIN)};BX.authFormForgotPassword.prototype.onerror=function(t){if(t.TYPE=="OK"){this.message.setContent(t.MESSAGE);BX.adminLogin.toggleAuthForm("forgot_password_message")}else{var o=this.needCaptcha&&!BX.hasClass(this.container,"login-captcha-popup-wrap");if(!o){BX.addClass(this.container,"login-popup-error-shake");setTimeout(BX.delegate(function(){BX.removeClass(this.container,"login-loading-active");BX.removeClass(this.container,"login-popup-error-shake");t.TITLE=BX.message("admin_forgot_password_error");BX.adminLogin.showError("USER_LOGIN",t);this.showCaptcha(t)},this),400)}else{this.showCaptcha(t)}}};BX.authFormForgotPasswordMessage=function(t,o){this.name="forgot_password_message";BX.authFormForgotPasswordMessage.superclass.constructor.apply(this,arguments)};BX.extend(BX.authFormForgotPasswordMessage,BX.IAdminAuthForm);BX.authFormForgotPasswordMessage.prototype.setContent=function(t){BX("forgot_password_message_inner",true).innerHTML='<div class="adm-info-message-title">'+BX.message("admin_authorize_info")+"</div>"+t+'<div class="adm-info-message-icon"></div>'};BX.authFormChangePassword=function(t,o){this.name="change_password";this.needCaptcha=o.needCaptcha;this.message=o.message;BX.authFormChangePassword.superclass.constructor.apply(this,arguments)};BX.extend(BX.authFormChangePassword,BX.IAdminAuthForm);BX.authFormChangePassword.prototype.validate=function(t){if(BX.util.trim(this.form.USER_LOGIN.value=="")){BX.defer(BX.focus)(this.form.USER_LOGIN);return BX.PreventDefault(t)}if(BX.util.trim(this.form.USER_CHECKWORD.value=="")){BX.defer(BX.focus)(this.form.USER_CHECKWORD);return BX.PreventDefault(t)}if(BX.util.trim(this.form.USER_PASSWORD.value=="")){BX.defer(BX.focus)(this.form.USER_PASSWORD);return BX.PreventDefault(t)}if(BX.util.trim(this.form.USER_CONFIRM_PASSWORD.value=="")){BX.defer(BX.focus)(this.form.USER_CONFIRM_PASSWORD);return BX.PreventDefault(t)}if(this.form.USER_PASSWORD.value!=this.form.USER_CONFIRM_PASSWORD.value){BX.adminLogin.showError("USER_CONFIRM_PASSWORD",{TITLE:BX.message("admin_change_password_error"),MESSAGE:BX.message("AUTH_NEW_PASSWORD_CONFIRM_WRONG")});BX.defer(BX.focus)(this.form.USER_PASSWORD);return BX.PreventDefault(t)}return true};BX.authFormChangePassword.prototype.onshow=function(){BX.authFormChangePassword.superclass.onshow.apply(this,arguments);if(this.form.USER_LOGIN.value!=""){if(this.form.USER_CHECKWORD!=""){BX.defer(BX.focus)(this.form.USER_CHECKWORD)}else{BX.defer(BX.focus)(this.form.USER_PASSWORD)}}else{BX.defer(BX.focus)(this.form.USER_LOGIN)}};BX.authFormChangePassword.prototype.onerror=function(t){if(t.TYPE=="OK"){this.message.setContent(t.MESSAGE);BX.adminLogin.toggleAuthForm("change_password_message")}else{var o=this.needCaptcha&&!BX.hasClass(this.container,"login-captcha-popup-wrap");if(!o){BX.addClass(this.container,"login-popup-error-shake");setTimeout(BX.delegate(function(){t.TITLE=BX.message("admin_change_password_error");BX.removeClass(this.container,"login-loading-active");BX.removeClass(this.container,"login-popup-error-shake");switch(t.FIELD){case"LOGIN":BX.adminLogin.showError("USER_LOGIN",t);break;case"CHECKWORD":BX.adminLogin.showError("USER_CHECKWORD",t);break;case"CHECKWORD_EXPIRE":this.fix();BX("change_password_forgot_link").style.display="inline-block";BX.adminLogin.showError("USER_CHECKWORD",t);break;default:BX.adminLogin.showError("USER_CONFIRM_PASSWORD",t)}this.showCaptcha(t)},this),400)}else{this.showCaptcha(t)}}};BX.authFormChangePasswordMessage=function(t,o){this.name="change_password_message";BX.authFormForgotPasswordMessage.superclass.constructor.apply(this,arguments)};BX.extend(BX.authFormChangePasswordMessage,BX.IAdminAuthForm);BX.authFormChangePasswordMessage.prototype.setContent=function(t){BX("change_password_message_inner",true).innerHTML='<div class="adm-info-message-title">'+BX.message("admin_authorize_info")+"</div>"+t+'<div class="adm-info-message-icon"></div>'}})();
//# sourceMappingURL=core_admin_login.map.js