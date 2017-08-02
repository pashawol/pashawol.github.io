
; /* Start:"a:4:{s:4:"full";s:93:"/local/components/evrysoft/external.catalog.search/templates/.default/script.js?1493298351327";s:6:"source";s:79:"/local/components/evrysoft/external.catalog.search/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function catalogSearch(){
    document.location.href = window.location.origin + '/catalog/?catalog_search=' + document.getElementById('catalogSearchRequest').value;
}

function catalogSearchRequestOnKeyPress(e){
    if(e.keyCode === 13 && document.getElementById('catalogSearchRequest').value){
        catalogSearch();
    }
}
/* End */
;; /* /local/components/evrysoft/external.catalog.search/templates/.default/script.js?1493298351327*/
