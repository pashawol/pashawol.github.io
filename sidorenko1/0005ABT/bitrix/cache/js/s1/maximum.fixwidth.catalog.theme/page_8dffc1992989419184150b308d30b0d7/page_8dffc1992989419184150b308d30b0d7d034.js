
; /* Start:"a:4:{s:4:"full";s:149:"/local/templates/maximum.fixwidth.catalog.theme/components/bitrix/catalog/catalog_inner/bitrix/catalog.section/.default/script.min.js?149302637626867";s:6:"source";s:129:"/local/templates/maximum.fixwidth.catalog.theme/components/bitrix/catalog/catalog_inner/bitrix/catalog.section/.default/script.js";s:3:"min";s:133:"/local/templates/maximum.fixwidth.catalog.theme/components/bitrix/catalog/catalog_inner/bitrix/catalog.section/.default/script.min.js";s:3:"map";s:133:"/local/templates/maximum.fixwidth.catalog.theme/components/bitrix/catalog/catalog_inner/bitrix/catalog.section/.default/script.map.js";}"*/
(function(t){if(!!t.JCCatalogSection){return}var e=function(t){e.superclass.constructor.apply(this,arguments);this.nameNode=BX.create("span",{props:{className:"bx_medium bx_bt_button",id:this.id},style:typeof t.style==="object"?t.style:{},text:t.text});this.buttonNode=BX.create("span",{attrs:{className:t.ownerClass},style:{marginBottom:"0",borderBottom:"0 none transparent"},children:[this.nameNode],events:this.contextEvents});if(BX.browser.IsIE()){this.buttonNode.setAttribute("hideFocus","hidefocus")}};BX.extend(e,BX.PopupWindowButton);t.JCCatalogSection=function(t){this.productType=0;this.showQuantity=true;this.showAbsent=true;this.secondPict=false;this.showOldPrice=false;this.showPercent=false;this.showSkuProps=false;this.basketAction="ADD";this.showClosePopup=false;this.useCompare=false;this.visual={ID:"",PICT_ID:"",SECOND_PICT_ID:"",QUANTITY_ID:"",QUANTITY_UP_ID:"",QUANTITY_DOWN_ID:"",PRICE_ID:"",DSC_PERC:"",SECOND_DSC_PERC:"",DISPLAY_PROP_DIV:"",BASKET_PROP_DIV:""};this.product={checkQuantity:false,maxQuantity:0,stepQuantity:1,isDblQuantity:false,canBuy:true,canSubscription:true,name:"",pict:{},id:0,addUrl:"",buyUrl:""};this.basketMode="";this.basketData={useProps:false,emptyProps:false,quantity:"quantity",props:"prop",basketUrl:"",sku_props:"",sku_props_var:"basket_props",add_url:"",buy_url:""};this.compareData={compareUrl:"",comparePath:""};this.defaultPict={pict:null,secondPict:null};this.checkQuantity=false;this.maxQuantity=0;this.stepQuantity=1;this.isDblQuantity=false;this.canBuy=true;this.currentBasisPrice={};this.canSubscription=true;this.precision=6;this.precisionFactor=Math.pow(10,this.precision);this.offers=[];this.offerNum=0;this.treeProps=[];this.obTreeRows=[];this.showCount=[];this.showStart=[];this.selectedValues={};this.obProduct=null;this.obQuantity=null;this.obQuantityUp=null;this.obQuantityDown=null;this.obPict=null;this.obSecondPict=null;this.obPrice=null;this.obTree=null;this.obBuyBtn=null;this.obBasketActions=null;this.obNotAvail=null;this.obDscPerc=null;this.obSecondDscPerc=null;this.obSkuProps=null;this.obMeasure=null;this.obCompare=null;this.obPopupWin=null;this.basketUrl="";this.basketParams={};this.treeRowShowSize=5;this.treeEnableArrow={display:"",cursor:"pointer",opacity:1};this.treeDisableArrow={display:"",cursor:"default",opacity:.2};this.lastElement=false;this.containerHeight=0;this.errorCode=0;if("object"===typeof t){this.productType=parseInt(t.PRODUCT_TYPE,10);this.showQuantity=t.SHOW_QUANTITY;this.showAbsent=t.SHOW_ABSENT;this.secondPict=!!t.SECOND_PICT;this.showOldPrice=!!t.SHOW_OLD_PRICE;this.showPercent=!!t.SHOW_DISCOUNT_PERCENT;this.showSkuProps=!!t.SHOW_SKU_PROPS;if(!!t.ADD_TO_BASKET_ACTION){this.basketAction=t.ADD_TO_BASKET_ACTION}this.showClosePopup=!!t.SHOW_CLOSE_POPUP;this.useCompare=!!t.DISPLAY_COMPARE;this.visual=t.VISUAL;switch(this.productType){case 0:case 1:case 2:if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){if(this.showQuantity){this.product.checkQuantity=t.PRODUCT.CHECK_QUANTITY;this.product.isDblQuantity=t.PRODUCT.QUANTITY_FLOAT;if(this.product.checkQuantity){this.product.maxQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.MAX_QUANTITY):parseInt(t.PRODUCT.MAX_QUANTITY,10)}this.product.stepQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.STEP_QUANTITY):parseInt(t.PRODUCT.STEP_QUANTITY,10);this.checkQuantity=this.product.checkQuantity;this.isDblQuantity=this.product.isDblQuantity;this.maxQuantity=this.product.maxQuantity;this.stepQuantity=this.product.stepQuantity;if(this.isDblQuantity){this.stepQuantity=Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor}}this.product.canBuy=t.PRODUCT.CAN_BUY;this.product.canSubscription=t.PRODUCT.SUBSCRIPTION;if(!!t.PRODUCT.BASIS_PRICE){this.currentBasisPrice=t.PRODUCT.BASIS_PRICE}this.canBuy=this.product.canBuy;this.canSubscription=this.product.canSubscription;this.product.name=t.PRODUCT.NAME;this.product.pict=t.PRODUCT.PICT;this.product.id=t.PRODUCT.ID;if(!!t.PRODUCT.ADD_URL){this.product.addUrl=t.PRODUCT.ADD_URL}if(!!t.PRODUCT.BUY_URL){this.product.buyUrl=t.PRODUCT.BUY_URL}if(!!t.BASKET&&"object"===typeof t.BASKET){this.basketData.useProps=!!t.BASKET.ADD_PROPS;this.basketData.emptyProps=!!t.BASKET.EMPTY_PROPS}}else{this.errorCode=-1}break;case 3:if(!!t.OFFERS&&BX.type.isArray(t.OFFERS)){if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){this.product.name=t.PRODUCT.NAME;this.product.id=t.PRODUCT.ID}this.offers=t.OFFERS;this.offerNum=0;if(!!t.OFFER_SELECTED){this.offerNum=parseInt(t.OFFER_SELECTED,10)}if(isNaN(this.offerNum)){this.offerNum=0}if(!!t.TREE_PROPS){this.treeProps=t.TREE_PROPS}if(!!t.DEFAULT_PICTURE){this.defaultPict.pict=t.DEFAULT_PICTURE.PICTURE;this.defaultPict.secondPict=t.DEFAULT_PICTURE.PICTURE_SECOND}}break;default:this.errorCode=-1}if(!!t.BASKET&&"object"===typeof t.BASKET){if(!!t.BASKET.QUANTITY){this.basketData.quantity=t.BASKET.QUANTITY}if(!!t.BASKET.PROPS){this.basketData.props=t.BASKET.PROPS}if(!!t.BASKET.BASKET_URL){this.basketData.basketUrl=t.BASKET.BASKET_URL}if(3===this.productType){if(!!t.BASKET.SKU_PROPS){this.basketData.sku_props=t.BASKET.SKU_PROPS}}if(!!t.BASKET.ADD_URL_TEMPLATE){this.basketData.add_url=t.BASKET.ADD_URL_TEMPLATE}if(!!t.BASKET.BUY_URL_TEMPLATE){this.basketData.buy_url=t.BASKET.BUY_URL_TEMPLATE}if(this.basketData.add_url===""&&this.basketData.buy_url===""){this.errorCode=-1024}}if(this.useCompare){if(!!t.COMPARE&&typeof t.COMPARE==="object"){if(!!t.COMPARE.COMPARE_PATH){this.compareData.comparePath=t.COMPARE.COMPARE_PATH}if(!!t.COMPARE.COMPARE_URL_TEMPLATE){this.compareData.compareUrl=t.COMPARE.COMPARE_URL_TEMPLATE}else{this.useCompare=false}}else{this.useCompare=false}}this.lastElement=!!t.LAST_ELEMENT&&"Y"===t.LAST_ELEMENT}if(0===this.errorCode){BX.ready(BX.delegate(this.Init,this))}};t.JCCatalogSection.prototype.Init=function(){var e=0,s="",i=null;this.obProduct=BX(this.visual.ID);if(!this.obProduct){this.errorCode=-1}this.obPict=BX(this.visual.PICT_ID);if(!this.obPict){this.errorCode=-2}if(this.secondPict&&!!this.visual.SECOND_PICT_ID){this.obSecondPict=BX(this.visual.SECOND_PICT_ID)}this.obPrice=BX(this.visual.PRICE_ID);if(!this.obPrice){this.errorCode=-16}if(this.showQuantity&&!!this.visual.QUANTITY_ID){this.obQuantity=BX(this.visual.QUANTITY_ID);if(!!this.visual.QUANTITY_UP_ID){this.obQuantityUp=BX(this.visual.QUANTITY_UP_ID)}if(!!this.visual.QUANTITY_DOWN_ID){this.obQuantityDown=BX(this.visual.QUANTITY_DOWN_ID)}}if(3===this.productType&&this.offers.length>0){if(!!this.visual.TREE_ID){this.obTree=BX(this.visual.TREE_ID);if(!this.obTree){this.errorCode=-256}s=this.visual.TREE_ITEM_ID;for(e=0;e<this.treeProps.length;e++){this.obTreeRows[e]={LEFT:BX(s+this.treeProps[e].ID+"_left"),RIGHT:BX(s+this.treeProps[e].ID+"_right"),LIST:BX(s+this.treeProps[e].ID+"_list"),CONT:BX(s+this.treeProps[e].ID+"_cont")};if(!this.obTreeRows[e].LEFT||!this.obTreeRows[e].RIGHT||!this.obTreeRows[e].LIST||!this.obTreeRows[e].CONT){this.errorCode=-512;break}}}if(!!this.visual.QUANTITY_MEASURE){this.obMeasure=BX(this.visual.QUANTITY_MEASURE)}}this.obBasketActions=BX(this.visual.BASKET_ACTIONS_ID);if(!!this.obBasketActions){if(!!this.visual.BUY_ID){this.obBuyBtn=BX(this.visual.BUY_ID)}}this.obNotAvail=BX(this.visual.NOT_AVAILABLE_MESS);if(this.showPercent){if(!!this.visual.DSC_PERC){this.obDscPerc=BX(this.visual.DSC_PERC)}if(this.secondPict&&!!this.visual.SECOND_DSC_PERC){this.obSecondDscPerc=BX(this.visual.SECOND_DSC_PERC)}}if(this.showSkuProps){if(!!this.visual.DISPLAY_PROP_DIV){this.obSkuProps=BX(this.visual.DISPLAY_PROP_DIV)}}if(0===this.errorCode){if(this.showQuantity){if(!!this.obQuantityUp){BX.bind(this.obQuantityUp,"click",BX.delegate(this.QuantityUp,this))}if(!!this.obQuantityDown){BX.bind(this.obQuantityDown,"click",BX.delegate(this.QuantityDown,this))}if(!!this.obQuantity){BX.bind(this.obQuantity,"change",BX.delegate(this.QuantityChange,this))}}switch(this.productType){case 1:break;case 3:if(this.offers.length>0){i=BX.findChildren(this.obTree,{tagName:"li"},true);if(!!i&&0<i.length){for(e=0;e<i.length;e++){BX.bind(i[e],"click",BX.delegate(this.SelectOfferProp,this))}}for(e=0;e<this.obTreeRows.length;e++){BX.bind(this.obTreeRows[e].LEFT,"click",BX.delegate(this.RowLeft,this));BX.bind(this.obTreeRows[e].RIGHT,"click",BX.delegate(this.RowRight,this))}this.SetCurrent()}break}if(!!this.obBuyBtn){if(this.basketAction==="ADD")BX.bind(this.obBuyBtn,"click",BX.delegate(this.Add2Basket,this));else BX.bind(this.obBuyBtn,"click",BX.delegate(this.BuyBasket,this))}if(this.lastElement){this.checkHeight();this.setHeight();BX.bind(t,"resize",BX.delegate(this.checkHeight,this));BX.bind(this.obProduct.parentNode,"mouseenter",BX.delegate(this.setHeight,this))}if(this.useCompare){this.obCompare=BX(this.visual.COMPARE_LINK_ID);if(!!this.obCompare)BX.bind(this.obCompare,"click",BX.proxy(this.Compare,this))}}};t.JCCatalogSection.prototype.checkHeight=function(){BX.adjust(this.obProduct.parentNode,{style:{height:"auto"}});this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight))this.containerHeight=0};t.JCCatalogSection.prototype.setHeight=function(){if(0<this.containerHeight)BX.adjust(this.obProduct.parentNode,{style:{height:this.containerHeight+"px"}})};t.JCCatalogSection.prototype.QuantityUp=function(){var t=0,e=true,s;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t+=this.stepQuantity;if(this.checkQuantity){if(t>this.maxQuantity){e=false}}if(e){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t;s={DISCOUNT_VALUE:this.currentBasisPrice.DISCOUNT_VALUE*t,VALUE:this.currentBasisPrice.VALUE*t,DISCOUNT_DIFF:this.currentBasisPrice.DISCOUNT_DIFF*t,DISCOUNT_DIFF_PERCENT:this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,CURRENCY:this.currentBasisPrice.CURRENCY};this.setPrice(s)}}}};t.JCCatalogSection.prototype.QuantityDown=function(){var t=0,e=true,s;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t-=this.stepQuantity;if(t<this.stepQuantity){e=false}if(e){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t;s={DISCOUNT_VALUE:this.currentBasisPrice.DISCOUNT_VALUE*t,VALUE:this.currentBasisPrice.VALUE*t,DISCOUNT_DIFF:this.currentBasisPrice.DISCOUNT_DIFF*t,DISCOUNT_DIFF_PERCENT:this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,CURRENCY:this.currentBasisPrice.CURRENCY};this.setPrice(s)}}}};t.JCCatalogSection.prototype.QuantityChange=function(){var t=0,e,s,i;if(0===this.errorCode&&this.showQuantity){if(this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){if(this.checkQuantity){if(t>this.maxQuantity){t=this.maxQuantity}}if(t<this.stepQuantity){t=this.stepQuantity}else{i=Math.round(t*this.precisionFactor/this.stepQuantity)/this.precisionFactor;s=parseInt(i,10);if(isNaN(s)){s=1;i=1.1}if(i>s){t=s<=1?this.stepQuantity:s*this.stepQuantity;t=Math.round(t*this.precisionFactor)/this.precisionFactor}}this.obQuantity.value=t}else{this.obQuantity.value=this.stepQuantity}}else{this.obQuantity.value=this.stepQuantity}e={DISCOUNT_VALUE:this.currentBasisPrice.DISCOUNT_VALUE*this.obQuantity.value,VALUE:this.currentBasisPrice.VALUE*this.obQuantity.value,DISCOUNT_DIFF:this.currentBasisPrice.DISCOUNT_DIFF*this.obQuantity.value,DISCOUNT_DIFF_PERCENT:this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,CURRENCY:this.currentBasisPrice.CURRENCY};this.setPrice(e)}};t.JCCatalogSection.prototype.QuantitySet=function(t){if(0===this.errorCode){this.canBuy=this.offers[t].CAN_BUY;if(this.canBuy){if(!!this.obBasketActions){BX.style(this.obBasketActions,"display","")}if(!!this.obNotAvail){BX.style(this.obNotAvail,"display","none")}}else{if(!!this.obBasketActions){BX.style(this.obBasketActions,"display","none")}if(!!this.obNotAvail){BX.style(this.obNotAvail,"display","")}}if(this.showQuantity){this.isDblQuantity=this.offers[t].QUANTITY_FLOAT;this.checkQuantity=this.offers[t].CHECK_QUANTITY;if(this.isDblQuantity){this.maxQuantity=parseFloat(this.offers[t].MAX_QUANTITY);this.stepQuantity=Math.round(parseFloat(this.offers[t].STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor}else{this.maxQuantity=parseInt(this.offers[t].MAX_QUANTITY,10);this.stepQuantity=parseInt(this.offers[t].STEP_QUANTITY,10)}this.obQuantity.value=this.stepQuantity;this.obQuantity.disabled=!this.canBuy;if(!!this.obMeasure){if(!!this.offers[t].MEASURE){BX.adjust(this.obMeasure,{html:this.offers[t].MEASURE})}else{BX.adjust(this.obMeasure,{html:""})}}}this.currentBasisPrice=this.offers[t].BASIS_PRICE}};t.JCCatalogSection.prototype.SelectOfferProp=function(){var t=0,e="",s="",i=[],a=null,o=BX.proxy_context;if(!!o&&o.hasAttribute("data-treevalue")){s=o.getAttribute("data-treevalue");i=s.split("_");if(this.SearchOfferPropIndex(i[0],i[1])){a=BX.findChildren(o.parentNode,{tagName:"li"},false);if(!!a&&0<a.length){for(t=0;t<a.length;t++){e=a[t].getAttribute("data-onevalue");if(e===i[1]){BX.addClass(a[t],"bx_active")}else{BX.removeClass(a[t],"bx_active")}}}}}};t.JCCatalogSection.prototype.SearchOfferPropIndex=function(t,e){var s="",i=false,a,o,r=[],h=[],n=-1,u={},l=[];for(a=0;a<this.treeProps.length;a++){if(this.treeProps[a].ID===t){n=a;break}}if(-1<n){for(a=0;a<n;a++){s="PROP_"+this.treeProps[a].ID;u[s]=this.selectedValues[s]}s="PROP_"+this.treeProps[n].ID;i=this.GetRowValues(u,s);if(!i){return false}if(!BX.util.in_array(e,i)){return false}u[s]=e;for(a=n+1;a<this.treeProps.length;a++){s="PROP_"+this.treeProps[a].ID;i=this.GetRowValues(u,s);if(!i){return false}h=[];if(this.showAbsent){r=[];l=[];l=BX.clone(u,true);for(o=0;o<i.length;o++){l[s]=i[o];h[h.length]=i[o];if(this.GetCanBuy(l))r[r.length]=i[o]}}else{r=i}if(!!this.selectedValues[s]&&BX.util.in_array(this.selectedValues[s],r)){u[s]=this.selectedValues[s]}else{if(this.showAbsent)u[s]=r.length>0?r[0]:h[0];else u[s]=r[0]}this.UpdateRow(a,u[s],i,r)}this.selectedValues=u;this.ChangeInfo()}return true};t.JCCatalogSection.prototype.RowLeft=function(){var t=0,e="",s=-1,i=BX.proxy_context;if(!!i&&i.hasAttribute("data-treevalue")){e=i.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===e){s=t;break}}if(-1<s&&this.treeRowShowSize<this.showCount[s]){if(0>this.showStart[s]){this.showStart[s]++;BX.adjust(this.obTreeRows[s].LIST,{style:{marginLeft:this.showStart[s]*20+"%"}});BX.adjust(this.obTreeRows[s].RIGHT,{style:this.treeEnableArrow})}if(0<=this.showStart[s]){BX.adjust(this.obTreeRows[s].LEFT,{style:this.treeDisableArrow})}}}};t.JCCatalogSection.prototype.RowRight=function(){var t=0,e="",s=-1,i=BX.proxy_context;if(!!i&&i.hasAttribute("data-treevalue")){e=i.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===e){s=t;break}}if(-1<s&&this.treeRowShowSize<this.showCount[s]){if(this.treeRowShowSize-this.showStart[s]<this.showCount[s]){this.showStart[s]--;BX.adjust(this.obTreeRows[s].LIST,{style:{marginLeft:this.showStart[s]*20+"%"}});BX.adjust(this.obTreeRows[s].LEFT,{style:this.treeEnableArrow})}if(this.treeRowShowSize-this.showStart[s]>=this.showCount[s]){BX.adjust(this.obTreeRows[s].RIGHT,{style:this.treeDisableArrow})}}}};t.JCCatalogSection.prototype.UpdateRow=function(t,e,s,i){var a=0,o=0,r="",h=0,n="",u={},l=false,c=false,p=false,f=0,P=this.treeEnableArrow,b=this.treeEnableArrow,d=0,C=null;if(-1<t&&t<this.obTreeRows.length){C=BX.findChildren(this.obTreeRows[t].LIST,{tagName:"li"},false);if(!!C&&0<C.length){l="PICT"===this.treeProps[t].SHOW_MODE;h=s.length;c=this.treeRowShowSize<h;n=c?100/h+"%":"20%";u={props:{className:""},style:{width:n}};if(l){u.style.paddingTop=n}for(a=0;a<C.length;a++){r=C[a].getAttribute("data-onevalue");p=r===e;if(BX.util.in_array(r,i)){u.props.className=p?"bx_active":""}else{u.props.className=p?"bx_active bx_missing":"bx_missing"}u.style.display="none";if(BX.util.in_array(r,s)){u.style.display="";if(p){f=o}o++}BX.adjust(C[a],u)}u={style:{width:(c?20*h:100)+"%",marginLeft:"0%"}};if(l){BX.adjust(this.obTreeRows[t].CONT,{props:{className:c?"bx_item_detail_scu full":"bx_item_detail_scu"}})}else{BX.adjust(this.obTreeRows[t].CONT,{props:{className:c?"bx_item_detail_size full":"bx_item_detail_size"}})}if(c){if(f+1===h){b=this.treeDisableArrow}if(this.treeRowShowSize<=f){d=this.treeRowShowSize-f-1;u.style.marginLeft=d*20+"%"}if(0===d){P=this.treeDisableArrow}BX.adjust(this.obTreeRows[t].LEFT,{style:P});BX.adjust(this.obTreeRows[t].RIGHT,{style:b})}else{BX.adjust(this.obTreeRows[t].LEFT,{style:{display:"none"}});BX.adjust(this.obTreeRows[t].RIGHT,{style:{display:"none"}})}BX.adjust(this.obTreeRows[t].LIST,u);this.showCount[t]=h;this.showStart[t]=d}}};t.JCCatalogSection.prototype.GetRowValues=function(t,e){var s=0,i,a=[],o=false,r=true;if(0===t.length){for(s=0;s<this.offers.length;s++){if(!BX.util.in_array(this.offers[s].TREE[e],a)){a[a.length]=this.offers[s].TREE[e]}}o=true}else{for(s=0;s<this.offers.length;s++){r=true;for(i in t){if(t[i]!==this.offers[s].TREE[i]){r=false;break}}if(r){if(!BX.util.in_array(this.offers[s].TREE[e],a)){a[a.length]=this.offers[s].TREE[e]}o=true}}}return o?a:false};t.JCCatalogSection.prototype.GetCanBuy=function(t){var e=0,s,i=false,a=true;for(e=0;e<this.offers.length;e++){a=true;for(s in t){if(t[s]!==this.offers[e].TREE[s]){a=false;break}}if(a){if(this.offers[e].CAN_BUY){i=true;break}}}return i};t.JCCatalogSection.prototype.SetCurrent=function(){var t=0,e=0,s=[],i="",a=false,o={},r=[],h=this.offers[this.offerNum].TREE;for(t=0;t<this.treeProps.length;t++){i="PROP_"+this.treeProps[t].ID;a=this.GetRowValues(o,i);if(!a){break}if(BX.util.in_array(h[i],a)){o[i]=h[i]}else{o[i]=a[0];this.offerNum=0}if(this.showAbsent){s=[];r=[];r=BX.clone(o,true);for(e=0;e<a.length;e++){r[i]=a[e];if(this.GetCanBuy(r)){s[s.length]=a[e]}}}else{s=a}this.UpdateRow(t,o[i],a,s)}this.selectedValues=o;this.ChangeInfo()};t.JCCatalogSection.prototype.ChangeInfo=function(){var t=0,e,s=-1,i=true;for(t=0;t<this.offers.length;t++){i=true;for(e in this.selectedValues){if(this.selectedValues[e]!==this.offers[t].TREE[e]){i=false;break}}if(i){s=t;break}}if(-1<s){if(!!this.obPict){if(!!this.offers[s].PREVIEW_PICTURE){BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.offers[s].PREVIEW_PICTURE.SRC+")"}})}else{BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.secondPict&&!!this.obSecondPict){if(!!this.offers[s].PREVIEW_PICTURE_SECOND){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[s].PREVIEW_PICTURE_SECOND.SRC+")"}})}else if(!!this.offers[s].PREVIEW_PICTURE.SRC){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[s].PREVIEW_PICTURE.SRC+")"}})}else if(!!this.defaultPict.secondPict){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.secondPict.SRC+")"}})}else{BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.showSkuProps&&!!this.obSkuProps){if(0===this.offers[s].DISPLAY_PROPERTIES.length){BX.adjust(this.obSkuProps,{style:{display:"none"},html:""})}else{BX.adjust(this.obSkuProps,{style:{display:""},html:this.offers[s].DISPLAY_PROPERTIES})}}this.setPrice(this.offers[s].PRICE);this.offerNum=s;this.QuantitySet(this.offerNum)}};t.JCCatalogSection.prototype.setPrice=function(t){var e,s;if(!!this.obPrice){e=BX.Currency.currencyFormat(t.DISCOUNT_VALUE,t.CURRENCY,true);if(this.showOldPrice&&t.DISCOUNT_VALUE!==t.VALUE){e+=" <span>"+BX.Currency.currencyFormat(t.VALUE,t.CURRENCY,true)+"</span>"}BX.adjust(this.obPrice,{html:e});if(this.showPercent){if(t.DISCOUNT_VALUE!==t.VALUE){s={style:{display:""},html:t.DISCOUNT_DIFF_PERCENT}}else{s={style:{display:"none"},html:""}}if(!!this.obDscPerc){BX.adjust(this.obDscPerc,s)}if(!!this.obSecondDscPerc){BX.adjust(this.obSecondDscPerc,s)}}}};t.JCCatalogSection.prototype.Compare=function(){var t,e;if(!!this.compareData.compareUrl){switch(this.productType){case 0:case 1:case 2:e=this.compareData.compareUrl.replace("#ID#",this.product.id.toString());break;case 3:e=this.compareData.compareUrl.replace("#ID#",this.offers[this.offerNum].ID);break}t={ajax_action:"Y"};BX.ajax.loadJSON(e,t,BX.proxy(this.CompareResult,this))}};t.JCCatalogSection.prototype.CompareResult=function(t){var s,i,a;if(!!this.obPopupWin){this.obPopupWin.close()}if(typeof t!=="object"){return false}this.InitPopupWindow();a={content:BX.create("div",{style:{marginRight:"30px",whiteSpace:"nowrap"},text:BX.message("COMPARE_TITLE")})};if(t.STATUS==="OK"){BX.onCustomEvent("OnCompareChange");s='<div style="width: 96%; margin: 10px 2%; text-align: center;"><p>'+BX.message("COMPARE_MESSAGE_OK")+"</p></div>";if(this.showClosePopup){i=[new e({ownerClass:this.obProduct.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_COMPARE_REDIRECT"),events:{click:BX.delegate(this.CompareRedirect,this)},style:{marginRight:"10px"}}),new e({ownerClass:this.obProduct.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_CLOSE_POPUP"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}else{i=[new e({ownerClass:this.obProduct.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_COMPARE_REDIRECT"),events:{click:BX.delegate(this.CompareRedirect,this)}})]}}else{s='<div style="width: 96%; margin: 10px 2%; text-align: center;"><p>'+(!!t.MESSAGE?t.MESSAGE:BX.message("COMPARE_UNKNOWN_ERROR"))+"</p></div>";i=[new e({ownerClass:this.obProduct.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.obPopupWin.setTitleBar(a);this.obPopupWin.setContent(s);this.obPopupWin.setButtons(i);this.obPopupWin.show();return false};t.JCCatalogSection.prototype.CompareRedirect=function(){if(!!this.compareData.comparePath){location.href=this.compareData.comparePath}else{this.obPopupWin.close()}};t.JCCatalogSection.prototype.InitBasketUrl=function(){this.basketUrl=this.basketMode==="ADD"?this.basketData.add_url:this.basketData.buy_url;switch(this.productType){case 1:case 2:this.basketUrl=this.basketUrl.replace("#ID#",this.product.id.toString());break;case 3:this.basketUrl=this.basketUrl.replace("#ID#",this.offers[this.offerNum].ID);break}this.basketParams={ajax_basket:"Y"};if(this.showQuantity){this.basketParams[this.basketData.quantity]=this.obQuantity.value}if(!!this.basketData.sku_props){this.basketParams[this.basketData.sku_props_var]=this.basketData.sku_props}};t.JCCatalogSection.prototype.FillBasketProps=function(){if(!this.visual.BASKET_PROP_DIV){return}var t=0,e=null,s=false,i=null;if(this.basketData.useProps&&!this.basketData.emptyProps){if(!!this.obPopupWin&&!!this.obPopupWin.contentContainer){i=this.obPopupWin.contentContainer}}else{i=BX(this.visual.BASKET_PROP_DIV)}if(!!i){e=i.getElementsByTagName("select");if(!!e&&!!e.length){for(t=0;t<e.length;t++){if(!e[t].disabled){switch(e[t].type.toLowerCase()){case"select-one":this.basketParams[e[t].name]=e[t].value;s=true;break;default:break}}}}e=i.getElementsByTagName("input");if(!!e&&!!e.length){for(t=0;t<e.length;t++){if(!e[t].disabled){switch(e[t].type.toLowerCase()){case"hidden":this.basketParams[e[t].name]=e[t].value;s=true;break;case"radio":if(e[t].checked){this.basketParams[e[t].name]=e[t].value;s=true}break;default:break}}}}}if(!s){this.basketParams[this.basketData.props]=[];this.basketParams[this.basketData.props][0]=0}};t.JCCatalogSection.prototype.Add2Basket=function(){this.basketMode="ADD";this.Basket()};t.JCCatalogSection.prototype.BuyBasket=function(){this.basketMode="BUY";this.Basket()};t.JCCatalogSection.prototype.SendToBasket=function(){if(!this.canBuy){return}this.InitBasketUrl();this.FillBasketProps();BX.ajax.loadJSON(this.basketUrl,this.basketParams,BX.delegate(this.BasketResult,this))};t.JCCatalogSection.prototype.Basket=function(){var t="";if(!this.canBuy){return}switch(this.productType){case 1:case 2:if(this.basketData.useProps&&!this.basketData.emptyProps){this.InitPopupWindow();this.obPopupWin.setTitleBar({content:BX.create("div",{style:{marginRight:"30px",whiteSpace:"nowrap"},text:BX.message("TITLE_BASKET_PROPS")})});if(BX(this.visual.BASKET_PROP_DIV)){t=BX(this.visual.BASKET_PROP_DIV).innerHTML}this.obPopupWin.setContent(t);this.obPopupWin.setButtons([new e({ownerClass:this.obProduct.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_SEND_PROPS"),events:{click:BX.delegate(this.SendToBasket,this)}})]);this.obPopupWin.show()}else{this.SendToBasket()}break;case 3:this.SendToBasket();break}};t.JCCatalogSection.prototype.BasketResult=function(t){var s="",i="",a,o=[];if(!!this.obPopupWin){this.obPopupWin.close()}if("object"!==typeof t){return false}a=t.STATUS==="OK";if(a&&this.basketAction==="BUY"){this.BasketRedirect()}else{this.InitPopupWindow();if(a){BX.onCustomEvent("OnBasketChange");switch(this.productType){case 1:case 2:i=this.product.pict.SRC;break;case 3:i=!!this.offers[this.offerNum].PREVIEW_PICTURE?this.offers[this.offerNum].PREVIEW_PICTURE.SRC:this.defaultPict.pict.SRC;break}s='<div style="width: 96%; margin: 10px 2%; text-align: center;"><img src="'+i+'" height="130" style="max-height:130px"><p>'+this.product.name+"</p></div>";if(this.showClosePopup){o=[new e({ownerClass:this.obProduct.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(this.BasketRedirect,this)},style:{marginRight:"10px"}}),new e({ownerClass:this.obProduct.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_CLOSE_POPUP"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}else{o=[new e({ownerClass:this.obProduct.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(this.BasketRedirect,this)}})]}}else{s='<div style="width: 96%; margin: 10px 2%; text-align: center;"><p>'+(!!t.MESSAGE?t.MESSAGE:BX.message("BASKET_UNKNOWN_ERROR"))+"</p></div>";o=[new e({ownerClass:this.obProduct.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.obPopupWin.setTitleBar({content:BX.create("div",{style:{marginRight:"30px",whiteSpace:"nowrap"},text:a?BX.message("TITLE_SUCCESSFUL"):BX.message("TITLE_ERROR")})});this.obPopupWin.setContent(s);this.obPopupWin.setButtons(o);this.obPopupWin.show()}};t.JCCatalogSection.prototype.BasketRedirect=function(){location.href=!!this.basketData.basketUrl?this.basketData.basketUrl:BX.message("BASKET_URL")};t.JCCatalogSection.prototype.InitPopupWindow=function(){if(!!this.obPopupWin){return}this.obPopupWin=BX.PopupWindowManager.create("CatalogSectionBasket_"+this.visual.ID,null,{autoHide:false,offsetLeft:0,offsetTop:0,overlay:true,closeByEsc:true,titleBar:true,closeIcon:{top:"10px",right:"10px"}})}})(window);
/* End */
;; /* /local/templates/maximum.fixwidth.catalog.theme/components/bitrix/catalog/catalog_inner/bitrix/catalog.section/.default/script.min.js?149302637626867*/

//# sourceMappingURL=page_8dffc1992989419184150b308d30b0d7.map.js