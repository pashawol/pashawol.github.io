; /* /bitrix/js/tcsbank.kupivkredit/user_scripts.js?1493026291595*/

; /* Start:"a:4:{s:4:"full";s:60:"/bitrix/js/tcsbank.kupivkredit/user_scripts.js?1493026291595";s:6:"source";s:46:"/bitrix/js/tcsbank.kupivkredit/user_scripts.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function TCSSetCookie()
{
    TCSExtSetCookie("kupivkredit",1,false,"/");
}
function TCSClearCookie()
{
    TCSExtSetCookie("kupivkredit",0,false,"/");
}

function TCSBuyClick(sID)
{
    if(obj = BX(sID))
    {
        TCSSetCookie();
        obj.click();
    }
}

function TCSExtSetCookie (name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}
/* End */
;