(()=>{"use strict";class e{constructor(e){if(this.modal=null,this.imageURL=e?.imageURL||"",this.heading=e?.heading||[""],this.headingStyle=e?.headingStyle||"",this.content=e?.content||[""],this.contentStyle=e?.contentStyle||"",this.buttonList=e?.buttonList||[],null==document.getElementById("instantgram-modal")){var t=document.createElement("style");t.id="instantgram-modal",t.innerHTML='.instantgram-modal-overlay{display:none!important;opacity:0!important;transition:all ease .1s!important;position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1000!important;background:rgba(0,0,0,.65)!important;justify-content:center!important;align-items:center!important}.instantgram-modal{transition:width ease-in-out .1s!important;display:inline-block!important;width:400px!important;padding:1.6px!important;z-index:1001!important}.instantgram-modal select{margin-left:.8px!important;border:solid 1px #dbdbdb!important;border-radius:3px!important;color:#262626!important;outline:0!important;padding:3px!important;text-align:center!important}@media (min-width:736px){.instantgram-modal{width:500px!important}}.instantgram-modal-content{position:relative;display:flex;flex-direction:column;width:100%!important;pointer-events:auto!important;background-clip:padding-box!important;outline:0!important}.instantgram-modal-header{color:#fff!important;background-color:#fd1d1d!important;background-image:linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)!important;border-top-left-radius:12px!important;border-top-right-radius:12px!important;padding:0 16px 0 16px!important}.instantgram-modal-header h5{color:#fff!important;font-family:"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif!important;font-size:16px!important;margin:revert!important}.instantgram-modal-header h5:nth-child(2){margin-top:-15px!important;margin-bottom:20px!important}.instantgram-modal-body{background:#fff!important;position:relative!important;-webkit-box-flex:1!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important;padding:16px!important}.instantgram-modal-body p{display:block!important;margin:revert!important;margin-block-start:1em!important;font-family:"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif!important;font-size:16px!important}.instantgram-modal-footer{background-color:#fff!important;border-top:1px solid #dbdbdb!important;border-left:0!important;border-right:0!important;border-bottom-left-radius:12px!important;border-bottom-right-radius:12px!important;line-height:1.5!important;min-height:48px!important;padding:4px 8px!important;user-select:none!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:center!important}.instantgram-modal-footer button{width:100%!important;min-height:39px!important;background-color:transparent!important;border:0!important;outline:0!important;cursor:pointer!important;font-family:"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif!important;font-size:16px!important}.instantgram-modal-footer button.active{color:#0095e2!important}.instantgram-modal-show{opacity:1!important}.instantgram-modal-visible{display:flex!important}#instantgram-bulk-download-indicator{text-align:center!important}',document.head.appendChild(t)}}get element(){return this.modal}createModal(){const e=document.createElement("div");e.classList.add("instantgram-modal-overlay");const t=document.createElement("div");t.classList.add("instantgram-modal"),e.appendChild(t);const o=document.createElement("div");o.classList.add("instantgram-modal-content"),t.appendChild(o);const a=document.createElement("div");a.classList.add("instantgram-modal-header"),this.headingStyle.length>0&&a.setAttribute("style",this.headingStyle),o.appendChild(a),this.heading.forEach((e=>{if("string"!=typeof e||/<\/?[a-z][\s\S]*>/i.test(e))if(/<\/?[a-z][\s\S]*>/i.test(e)){let t,o=document.createElement("div"),n=document.createDocumentFragment();for(o.innerHTML=e;t=o.firstChild;)n.appendChild(t);a.appendChild(n)}else a.appendChild(e);else{const t=document.createElement("h5");t.innerHTML=e,a.appendChild(t)}}));const n=document.createElement("div");if(n.classList.add("instantgram-modal-body"),this.contentStyle.length>0&&n.setAttribute("style",this.contentStyle),o.appendChild(n),this.imageURL.length>0){const e=document.createElement("div");o.appendChild(e);const t=document.createElement("img");t.setAttribute("height","76px"),t.setAttribute("width","76px"),t.style.margin="auto",t.style.paddingBottom="20px",t.setAttribute("src",this.imageURL),e.appendChild(t)}if(this.content.forEach((e=>{if("string"!=typeof e||/<\/?[a-z][\s\S]*>/i.test(e))if(/<\/?[a-z][\s\S]*>/i.test(e)){let t,o=document.createElement("div"),a=document.createDocumentFragment();for(o.innerHTML=e;t=o.firstChild;)a.appendChild(t);n.appendChild(a)}else n.appendChild(e);else{const t=document.createElement("p");t.innerText=e,n.appendChild(t)}})),this.buttonList.length>0){const e=document.createElement("div");e.classList.add("instantgram-modal-footer"),o.appendChild(e),this.buttonList.forEach((t=>{const o=document.createElement("button");o.classList.add("instantgram-modal-button"),o.innerText=t.text,t.active&&o.classList.add("active"),o.onclick=t?.callback?t.callback:this.close.bind(this),e.appendChild(o)}))}else o.style.paddingBottom="4px;";return e}async open(){this.modal&&await this.close(),this.modal=this.createModal(),document.body.appendChild(this.modal),this.modal.classList.add("instantgram-modal-visible"),setTimeout((()=>{this.modal.classList.add("instantgram-modal-show")}))}async close(){var e;this.modal&&(this.modal.classList.remove("instantgram-modal-show"),await(e=100,new Promise((function(t){setTimeout(t,e)}))),this.modal.classList.remove("instantgram-modal-visible"),this.modal.parentNode.removeChild(this.modal),this.modal=null)}}async function t(e){let t=await fetch(e);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.text()}const o=async function(e,o,a,n){let i=null!=a;if(!i){let t=/poster\=\"([\s\S]*)\" preload/gm.exec(e.outerHTML.replace(/(\r\n|\n|\r)/gm,"")),o=null;if(t){let e=document.createElement("textarea");e.innerHTML=t[1],o=e.firstChild.nodeValue}var r=o.split("/").pop().split("#")[0].split("?")[0];0}if(null!==o){let e=null,l="";l=void 0!==o&&o.length>0?o[0].querySelectorAll("header > div > div > div > div > span > a")[0].href:o.querySelectorAll("header > div > div > div > div > span > a")[0].href;let d=await t(l);if(d){let t;d=d.replace(/(\r\n|\n|\r)/gm,"");let o=/profilePage_([0-9]+)/gm;for(;null!==(t=o.exec(d));)t.index===o.lastIndex&&o.lastIndex++,t.forEach((t=>{e=t}))}0;let s=null;if(e){let o=await t(`https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables={"id":${e},"first":100}`);if(o){let e=JSON.parse(o);for(let t=0;t<e.data.user.edge_owner_to_timeline_media.edges.length;t++)if(i){if("GraphSidecar"==e.data.user.edge_owner_to_timeline_media.edges[t].node.__typename&&e.data.user.edge_owner_to_timeline_media.edges[t].node.hasOwnProperty("edge_sidecar_to_children")){s=e.data.user.edge_owner_to_timeline_media.edges[t].node.edge_sidecar_to_children.edges[a].node.video_url;break}}else if("GraphVideo"==e.data.user.edge_owner_to_timeline_media.edges[t].node.__typename){let o=e.data.user.edge_owner_to_timeline_media.edges[t].node;if(console.log(o.display_url.split("/").pop().split("#")[0].split("?")[0]),r==o.display_url.split("/").pop().split("#")[0].split("?")[0]){s=o.video_url;break}}}}n(s||null)}else n(null)};function a(e){let t;t=null!==window&&void 0!==window?{top:window.pageYOffset,bottom:window.pageYOffset+window.innerHeight}:document.documentElement;const o=e.getBoundingClientRect(),a=o.y+window.pageYOffset,n=o.y+o.height+window.pageYOffset;if(t.top>n||t.bottom<a)return 0;if(t.top<a&&t.bottom>n)return 100;if(a<t.top&&n>t.bottom)return 100;const i=o.height;let r=i;a<t.top&&(r=i-(window.pageYOffset-a)),n>t.bottom&&(r-=n-t.bottom);const l=r/window.innerHeight*100;return Math.round(l)}const n=e=>new Promise(((t,o)=>{const a=new Image;a.onload=()=>{const{naturalWidth:e,naturalHeight:o}=a;t({width:e,height:o})},a.onerror=()=>{o("There was some problem with the image.")},a.src=e}));function i(e,t){return(e.match(/(?:\w+:)?\/\/[^\/]+([^?#]+)/)||[e,t]).pop()+e.match(/(?:\w+:)?\/\/[^\/]+([^?#]+)([^\?]+)(\?.*)?/).pop()}const r={langs:{"en-US":{"helpers.localize_defaultlang":"[instantgram] set language: ${LANG_DEFAULT} \n For more information about available languages please check http://thinkbig-company.github.io/instantgram","index@alert_onlyWorks":"Works only on instagram.com","index#program@alert_dontFound":'Did you open any Instagram post? Like for example<br/><div style="text-align:center"><a href="https://www.instagram.com/p/CIGrv1VMBkS/" target="_blank" onMouseOver="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'initial\'">https://www.instagram.com/p/CIGrv1VMBkS/</a></div>',"index#program#blob@alert_cannotDownload":"An error has occurred!<br/><br/>Unfortunately we could not download the video try another one.","index#program#profilePageDownload@str_analyzed_from_to":"Analyzed ${data.size} Posts.","index#program#profilePageDownload@is_private_modal_title":"Profile private","index#program#profilePageDownload@is_private_modal_content":"Sorry but this profile is private and can not be downloaded. <br>Try another profile.","index#program#profilePageDownload@is_private_modal_btn":"Close","index#program#profilePageDownload@stop_collecting_modal_title":"Download started","index#program#profilePageDownload@stop_collecting_modal_content_1":"You can stop the download by clicking the stop button. If you stop the download, all the images already captured will be downloaded.","index#program#profilePageDownload@stop_collecting_modal_content_2":"If you try to download a lot of pictures at once Instagram may block your IP or your account temporarily.","index#program#profilePageDownload@stop_collecting_modal_btn":"Stop Download","index#program#profilePageDownload@collect_media_modal_title":"Please Wait","index#program#profilePageDownload@collect_media_modal_content":"Now images/videos will being collected","index#program#profilePageDownload@collect_media_modal_content_download_indicator":"Collected ${this.resolvedContent} of ${postLinks.size} Posts.","index#program#profilePageDownload@collect_media_modal_btn":"Stop collecting and start the download","index#program#profilePageDownload@collection_complete_modal_title":"Media collection complete","index#program#profilePageDownload@collection_complete_modal_content_1":"Please wait.","index#program#profilePageDownload@collection_complete_modal_content_2":"The download will be now generated.","index#program#profilePageDownload@collection_complete_modal_btn":"Close","index#program#profilePageDownload@cannot_download":"Profile could not be downloaded.","index#program#profilePageDownload@download_progress_at":"Download progress at","index#program#profilePageDownload@compression_progress_at":"Compression progress at","index#program#profilePageDownload@download_failed":"Download failed","modules.modal@isLoading":"Trying to load","modules.update@consoleWarnOutdatedInfo":"[instantgram] is outdated. Please check http://thinkbig-company.github.io/instantgram for available updates.","modules.update@consoleWarnOutdatedInfoVersions":"[instantgram] Installed version: ${data.version} | New update: ${data.onlineVersion}","modules.update@determineIfGetUpdateIsNecessary_contacting":"[instantgram] is looking for available updates...","modules.update@determineIfGetUpdateIsNecessary_updated":"[instantgram] updated your current version.","modules.update@determineIfGetUpdateIsNecessary_@update_available":"There is a new update available","modules.update@determineIfGetUpdateIsNecessary_@load_update":"Get update"},"es-AR":{"helpers.localize_defaultlang":"[instantgram] establecer idioma: ${LANG_DEFAULT} \n Para más información sobre los idiomas disponibles, consulte http://thinkbig-company.github.io/instantgram","index@alert_onlyWorks":"Sólo funciona en instagram.com","index#program@alert_dontFound":'¿Has abierto algún post de Instagram? Como por ejemplo<br/><div style="text-align:center"><a href="https://www.instagram.com/p/CIGrv1VMBkS/" target="_blank" onMouseOver="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'initial\'">https://www.instagram.com/p/CIGrv1VMBkS/</a></div>',"index#program#blob@alert_cannotDownload":"Se ha producido un error.<br/><br/>Desgraciadamente no hemos podido descargar el vídeo, inténtalo con otro.","index#program#profilePageDownload@str_analyzed_from_to":"Había ${data.size} se analizaron los puestos.","index#program#profilePageDownload@is_private_modal_title":"Profile private","index#program#profilePageDownload@is_private_modal_content":"Sorry but this profile is private and can not be downloaded. <br>Try another profile.","index#program#profilePageDownload@is_private_modal_btn":"Close","index#program#profilePageDownload@stop_collecting_modal_title":"Descarga iniciada","index#program#profilePageDownload@stop_collecting_modal_content_1":'Puede detener la descarga haciendo clic en el botón "Detener la descarga". Cuando se detenga la descarga, se descargarán todas las imágenes que ya se hayan capturado.',"index#program#profilePageDownload@stop_collecting_modal_content_2":"Si intentas descargar muchas imágenes a la vez, Instagram puede bloquear temporalmente tu IP o tu cuenta.","index#program#profilePageDownload@stop_collecting_modal_btn":"Detener la descarga","index#program#profilePageDownload@collect_media_modal_title":"Espere, por favor","index#program#profilePageDownload@collect_media_modal_content":"Ahora se recogen las imágenes/vídeos","index#program#profilePageDownload@collect_media_modal_content_download_indicator":"Un total de ${this.resolvedContent} de ${postLinks.size} Puestos recogidos.","index#program#profilePageDownload@collect_media_modal_btn":"Deja de coleccionar y empieza a descargar","index#program#profilePageDownload@collection_complete_modal_title":"Colección de fotos/vídeos completa","index#program#profilePageDownload@collection_complete_modal_content_1":"Por favor, espere.","index#program#profilePageDownload@collection_complete_modal_content_2":"La descarga se genera ahora.","index#program#profilePageDownload@collection_complete_modal_btn":"Cerrar","index#program#profilePageDownload@cannot_download":"No se ha podido descargar el perfil.","modules.modal@isLoading":"Intentando cargar","modules.update@consoleWarnOutdatedInfo":"[instantgram] es obsoleto. Consulte en http://thinkbig-company.github.io/instantgram las actualizaciones disponibles.","modules.update@consoleWarnOutdatedInfoVersions":"[instantgram] Versión instalada: ${data.version} | Nueva actualización: ${data.onlineVersion}","modules.update@determineIfGetUpdateIsNecessary_contacting":"[instantgram] está buscando actualizaciones disponibles...","modules.update@determineIfGetUpdateIsNecessary_updated":"[instantgram] ha actualizado su versión actual.","modules.update@determineIfGetUpdateIsNecessary_@update_available":"Hay una nueva actualización disponible","modules.update@determineIfGetUpdateIsNecessary_@load_update":"Obtener información"},"de-DE":{"helpers.localize_defaultlang":"Ausgewählte Sprache: ${LANG_DEFAULT} \n Weitere Informationen zu den unterstützten Sprachen findest du auf http://thinkbig-company.github.io/instantgram","index@alert_onlyWorks":"Funktioniert nur auf instagram.com","index#program@alert_dontFound":'Hast du einen Instagram Post geöffnet? Zum Beispiel<br/><div style="text-align:center"><a href="https://www.instagram.com/p/CIGrv1VMBkS/" target="_blank" onMouseOver="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'initial\'">https://www.instagram.com/p/CIGrv1VMBkS/</a></div>',"index#program#blob@alert_cannotDownload":"Es ist ein fehler aufgetreten!<br/><br/>Wir konnten das Video leider nicht Downloaden versuchen Sie ein anderes.","index#program#profilePageDownload@str_analyzed_from_to":"Es wurden ${data.size} Beiträge analysiert.","index#program#profilePageDownload@is_private_modal_title":"Profil ist Privat","index#program#profilePageDownload@is_private_modal_content":"Sorry, aber dieses Profil ist privat und kann nicht heruntergeladen werden. <br>Versuchen Sie ein anderes Profil.","index#program#profilePageDownload@is_private_modal_btn":"Schließen","index#program#profilePageDownload@stop_collecting_modal_title":"Download gestarted","index#program#profilePageDownload@stop_collecting_modal_content_1":'Sie können den Download stoppen, indem Sie auf die Schaltfläche "Download stoppen" klicken. Wenn Sie das Herunterladen anhalten, werden alle bereits aufgenommenen Bilder heruntergeladen.',"index#program#profilePageDownload@stop_collecting_modal_content_2":"Wenn Sie versuchen, viele Bilder auf einmal herunterzuladen, kann Instagram Ihre IP oder Ihr Konto vorübergehend sperren.","index#program#profilePageDownload@stop_collecting_modal_btn":"Download stoppen","index#program#profilePageDownload@collect_media_modal_title":"Bitte warten","index#program#profilePageDownload@collect_media_modal_content":"Bilder/Videos werden jetzt gesammelt","index#program#profilePageDownload@collect_media_modal_content_download_indicator":"Insgesamt ${this.resolvedContent} von ${postLinks.size} Beiträgen gesammelt.","index#program#profilePageDownload@collect_media_modal_btn":"Stoppen Sie das Sammeln und starten Sie den Download","index#program#profilePageDownload@collection_complete_modal_title":"Bilder/Video-Sammlung komplett","index#program#profilePageDownload@collection_complete_modal_content_1":"Bitte warten.","index#program#profilePageDownload@collection_complete_modal_content_2":"Der Download wird nun erzeugt.","index#program#profilePageDownload@collection_complete_modal_btn":"Schließen","index#program#profilePageDownload@cannot_download":"Profil konnte nicht runtergeladen werden.","index#program#profilePageDownload@download_progress_at":"Download-Fortschritt bei","index#program#profilePageDownload@compression_progress_at":"Komprimierungs-Fortschritt bei","index#program#profilePageDownload@download_failed":"Download fehlgeschlagen","modules.modal@isLoading":"Wird versucht zu laden","modules.update@consoleWarnOutdatedInfo":"[instantgram] ist veraltet. Bitte besuche die Seite http://thinkbig-company.github.io/instantgram für ein Update.","modules.update@consoleWarnOutdatedInfoVersions":"[instantgram] Installierte Version: ${data.version} | Neue Version: ${data.onlineVersion}","modules.update@determineIfGetUpdateIsNecessary_contacting":"[instantgram] sucht nach neuen verfügbaren Updates...","modules.update@determineIfGetUpdateIsNecessary_updated":"[instantgram] wurde aktualisiert.","modules.update@determineIfGetUpdateIsNecessary_@update_available":"Es ist ein neues Update verfügbar","modules.update@determineIfGetUpdateIsNecessary_@load_update":"Update laden"},"pt-BR":{"helpers.localize_defaultlang":"[instantgram] idioma configurado: ${LANG_DEFAULT} \npara mais informações sobre os idiomas suportados, acesse http://thinkbig-company.github.io/instantgram","index@alert_onlyWorks":"[instantgram] somente funciona no instagram.com","index#program@alert_dontFound":'ops, você está em algum post do instagram? ex:<br/><div style="text-align:center"><a href="https://www.instagram.com/p/CIGrv1VMBkS/" target="_blank" onMouseOver="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'initial\'">https://www.instagram.com/p/CIGrv1VMBkS/</a></div>',"index#program#blob@alert_cannotDownload":"Ocorreu um erro!<br/><br/>Não pudemos baixar o vídeo infelizmente tentar outro.","index#program#profilePageDownload@str_analyzed_from_to":"Analyzed ${data.size} Posts.","index#program#profilePageDownload@is_private_modal_title":"Profile private","index#program#profilePageDownload@is_private_modal_content":"Sorry but this profile is private and can not be downloaded. <br>Try another profile.","index#program#profilePageDownload@is_private_modal_btn":"Close","index#program#profilePageDownload@stop_collecting_modal_title":"Início do download","index#program#profilePageDownload@stop_collecting_modal_content_1":"Você pode interromper o download clicando no botão de parada. Se você interromper o download, todas as imagens já capturadas serão baixadas.","index#program#profilePageDownload@stop_collecting_modal_content_2":"Se você tentar baixar muitas imagens de uma vez, a Instagram poderá bloquear temporariamente seu IP ou sua conta.","index#program#profilePageDownload@stop_collecting_modal_btn":"Parar Download","index#program#profilePageDownload@collect_media_modal_title":"Por favor, aguarde","index#program#profilePageDownload@collect_media_modal_content":"Agora imagens/videos serão coletados","index#program#profilePageDownload@collect_media_modal_content_download_indicator":"Recolhido ${este.resolvedContent} de ${postLinks.size} Correios.","index#program#profilePageDownload@collect_media_modal_btn":"Pare de coletar e inicie o download","index#program#profilePageDownload@collection_complete_modal_title":"Coleção de mídia completa","index#program#profilePageDownload@collection_complete_modal_content_1":"Por favor, aguarde.","index#program#profilePageDownload@collection_complete_modal_content_2":"O download será agora gerado.","index#program#profilePageDownload@collection_complete_modal_btn":"Fechar","index#program#profilePageDownload@cannot_download":"O perfil não pôde ser baixado.","modules.modal@isLoading":"Tentando carregar","modules.update@consoleWarnOutdatedInfo":"[instantgram] está desatualizado. Acesse http://thinkbig-company.github.io/instantgram para atualizar","modules.update@consoleWarnOutdatedInfoVersions":"[instantgram] versão local: ${data.version} | nova versão: ${data.onlineVersion}","modules.update@determineIfGetUpdateIsNecessary_contacting":"[instantgram] está procurando atualizações...","modules.update@determineIfGetUpdateIsNecessary_updated":"[instantgram] informações locais atualizadas","modules.update@determineIfGetUpdateIsNecessary_@update_available":"Há uma nova atualização disponível","modules.update@determineIfGetUpdateIsNecessary_@load_update":"Carga de actualização"}}};let l=navigator.language;-1!==l.indexOf("-")&&(l=l.split("-")[0]),-1!==l.indexOf("_")&&(l=l.split("_")[0]);const d={de:"de-DE",en:"en-US",es:"es-AR",pt:"pt-BR"}[l];function s(e,t=d){try{return r.langs.hasOwnProperty(t)||(t="en-US"),r.langs[t][e]?r.langs[t][e]:""}catch(o){return console.error("[instantgram]LOC error:",o),`ops, an error ocurred in localization system. Enter in https://github.com/ThinkBIG-Company/instantgram/issues/new and open an issue with this code: 'LOC_dont_found_str_neither_default:[${t}->${e}]'\n    for more information open the console`}}console.info(s("helpers.localize_defaultlang").replace("${LANG_DEFAULT}",d));const m=s;var c;!function(e){e.Image="IMAGE",e.Video="VIDEO",e[void 0]="UNDEFINED"}(c||(c={}));class p{constructor(){this.modal=new e}getName(){return"MediaScanner"}async execute(e,t){let r=!1;try{let d,s,p=!1,g=!1,u=null,f=c.undefined,h=null,_=null,w=0,b=!1,y=document.querySelector("main"),v="._aagv",x="._aahh",S="._aahi",D="._aahh",P="._aahi",I="._aahh",k="._aahi";if(e.regexProfilePath.test(e.path))return r=!1,e.foundImage=!1,e.foundVideo=!1,e.foundByModule=void 0,void t(r,e);if(e.regexStoriesURI.test(e.path)){y=document.querySelector("body > div");let e=y.querySelectorAll("section > div > div > div");for(let t=0;t<e.length;t++){if(Number((Math.round(e[t].getBoundingClientRect().width/e[t].offsetWidth*100)/100).toFixed(2))>=1&&e[t].classList.length>1){let o=null!==e[t].querySelector("video"),a=null!==e[t].querySelector("div > div img[src]")||null!==e[t].querySelector("div > div img[srcset]");0,o&&a?(f=c.Video,u=e[t].querySelector("video")):a&&(f=c.Image,null!==e[t].querySelectorAll("img")[0]&&(u=e[t].querySelectorAll("img")[0]));break}}}if(null==u){if(p=document.querySelectorAll('[role="dialog"]').length>0,p){if(_=document.getElementsByTagName("article"),null!=_)for(w=0;w<_.length&&!(_[w].classList.length>=4);w++);g=null!==document.querySelector(D)||null!==document.querySelector(P)}else if(e.regexRootPath.test(e.path)){y=document.querySelector("main > section"),s=y.querySelectorAll("div > div > div > div > article");for(let e=0;e<s.length;e++)if(a(s[e])>50){w=e,g=null!==s[e].querySelector(I)||null!==s[e].querySelector(k);break}}else g=null!==document.querySelector(x)||null!==document.querySelector(S);if(g){let t;s=document.getElementsByTagName("article")[w];let o=0;if(e.regexRootPath.test(e.path)){for(y=document.querySelector("main > section"),s=y.querySelectorAll("div > div > div > article"),o=0;o<s.length&&!(a(s[o])>50);o++);t=Array.from(s[o].querySelectorAll("div > div > div > div > div > div > div > ul:first-child > li")).filter((e=>null!=e.firstChild&&e.classList.length>0))}else t=Array.from(s.querySelectorAll("div > div > div > div > div > div > div > ul:first-child > li")).filter((e=>null!=e.firstChild&&e.classList.length>0));if(null!=t&&t.length>0){let a;u=null,h=null,a=e.regexRootPath.test(e.path)?Array.from(s[o].children[0].children[1].children[0].children[1].children):Array.from(s.children[0].children[0].children[0].children[1].children);for(let e=0;e<a.length;e++)if(a[e].classList.length>1&&(d=e),d==a.length-1){b=!0;break}for(let e=0;e<t.length;e++)if(2==t.length?u=b?t[1]:t[0]:3==t.length?u=b?t[2]:t[1]:4==t.length&&(b?u=t[2]:4==a.length?2==d&&(u=t[1]):6==a.length?1==d?u=t[1]:2==d?u=t[2]:3==d?u=t[1]:4==d&&(u=t[2]):7==a.length?1==d?u=t[1]:2==d||3==d?u=t[2]:4==d&&(u=t[1]):8==a.length?(1==d||2==d||3==d||4==d||5==d)&&(u=t[1]):10==a.length&&(1==d||2==d?u=t[1]:3==d||4==d?u=t[2]:5==d||6==d||7==d?u=t[1]:8==d&&(u=t[2]))),null!=u){let e=null!==u.querySelector("video"),t=null!==u.querySelector("img[src]")||null!==u.querySelector("img[srcset]");if(e){f=c.Video,u=u.querySelector("video");break}if(t){f=c.Image,u=null!==u.querySelector("img[srcset]")?u.querySelector("img[srcset]"):u.querySelector("img[src]");break}}}}else if(p){s=document.getElementsByTagName("article")[w];let e=null!==s.querySelector("video"),t=null!==s.querySelector(`${v} > img[src]`)||null!==s.querySelector(`${v} > img[srcset]`);e?(f=c.Video,u=s.querySelector("video")):t&&(f=c.Image,u=null!==s.querySelector(`${v} > img[srcset]`)?s.querySelector(`${v} > img[srcset]`):s.querySelector(`${v} > img[src]`))}else if(e.regexRootPath.test(e.path)?(y=document.querySelector("main > section"),s=y.querySelectorAll("div > div > div > article")):y&&(s=y.querySelectorAll("div > div > article")),s)for(var l=0;l<s.length;l++)if(a(s[l])>50){let e=null!==s[l].querySelector("video"),t=null!==s[l].querySelector(`${v} > img[src]`)||null!==s[l].querySelector(`${v} > img[srcset]`);e?(f=c.Video,u=s[l].querySelector("video")):t&&(f=c.Image,u=null!==s[l].querySelector(`${v} > img[srcset]`)?s[l].querySelector(`${v} > img[srcset]`):s[l].querySelector(`${v} > img[src]`)),s=s[l]}}switch(f){case c.Image:let a=await async function(e){if(e.getAttribute("srcset")){let t=[];if(e.getAttribute("srcset").split(",").forEach((e=>{t.push(e.trim().split(" "))})),e.hasAttribute("src")&&e.getAttribute("src").length>0){let o={};o[0]=e.getAttribute("src"),o[1]="undefined",t.unshift(o)}let o,a=0,i="";for(let e=0;e<t.length;e++){let r=await n(t[e][0]);o=r.width*r.height,o>a&&(a=o,i=t[e][0])}return i.length>0&&i}return!!(e.hasAttribute("src")&&e.getAttribute("src").length>0)&&e.getAttribute("src")}(u);"string"==typeof a&&(h=a),null!=h&&h.length>10?(r=!0,e.foundImage=!0,e.foundVideo=!1,e.foundByModule=this.getName(),window.open(h),t(r,e)):(r=!1,e.foundImage=!1,e.foundVideo=!1,e.foundByModule=void 0,t(r,e));break;case c.Video:if(void 0===u.src||0==u.src.length?(u=u.querySelectorAll("source"),h=u[0].src):h=u.src,null!=h&&h.length>10)if(-1!==h.indexOf("blob:")){const a=this;r=!0,e.foundImage=!1,e.foundVideo=!0,e.foundByModule=a.getName(),this.modal.heading=[`<h5>[instantgram] <span style="float:right">v${e.VERSION}</span></h5>`],this.modal.content=['<p style=\'margin:0;text-align:center\'><img src="https://i.giphy.com/SolJ197tbbfTqcdbzq.gif" alt="Loading" /></p>',"<h4 style='font-weight:bold;text-align:center'>"+m("modules.modal@isLoading")+"<span id='loading_dot' style='position:fixed;'></span></h4>"],this.modal.open(),setTimeout((function(){o(u,s,d,(function(o){if(o){a.modal.close();let n="https://scontent.cdninstagram.com"+i(o,"unknown");window.open(n),t(r,e)}else a.modal.heading=[`<h5>[instantgram] <span style="float:right">v${e.VERSION}</span></h5>`],a.modal.content=[m("index#program#blob@alert_cannotDownload")],a.modal.contentStyle="text-align:center",a.modal.buttonList=[{active:!0,text:"Ok"}],a.modal.open(),t(r,e)}))}),500)}else{h=h.replace("amp;","&"),r=!0,e.foundImage=!1,e.foundVideo=!0,e.foundByModule=this.getName();let o="https://scontent.cdninstagram.com"+i(h,"unknown");window.open(o),t(r,e)}else r=!1,e.foundImage=!1,e.foundVideo=!1,e.foundByModule=void 0,t(r,e);break;default:r=!1,e.foundImage=!1,e.foundVideo=!1,e.foundByModule=void 0,t(r,e)}}catch(o){console.error(this.getName()+"()",`[instantgram] ${e.VERSION}`,o),t(!1,e)}}}const g=function(){const e=/^(<|>|[=!<>]=)?\s*(\d+(?:\.\d+){0,2})([a-z][a-z0-9\-]*)?$/i;function t(t,o){let a=(t+"").match(e);return a?(o?a[1]||"==":"")+'"'+(a[2]+".0.0").match(/\d+(?:\.\d+){0,2}/)[0].replace(/(?:^|\.)(\d+)/g,(function(e,t){return Array(9-t.length).join("0")+t}))+(a[3]||"~")+'"':o?"==0":1}return function(e,...o){e=t(e,null);for(var a,n=1;a=arguments[n++];)if(!new Function("return "+e+t(a,1))())return!1;return!0}}();function u(e){console.warn(m("modules.update@consoleWarnOutdatedInfo")),console.warn(m("modules.update@consoleWarnOutdatedInfoVersions").replace("${data.version}",e.version).replace("${data.onlineVersion}",e.onlineVersion))}const f=async function(t){(function(e){var t=window.localStorage.getItem("instantgram");if("string"==typeof t){let o=JSON.parse(t);return window.localStorage.setItem("instantgram",JSON.stringify({version:e,onlineVersion:o.onlineVersion,lastVerification:o.lastVerification,dateExpiration:o.dateExpiration})),g(o.onlineVersion,"> "+o.version)&&u(o),Date.now()>o.dateExpiration}return!0})(t)&&(console.info(m("modules.update@determineIfGetUpdateIsNecessary_contacting")),await fetch("https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables={%22id%22:45423705413,%22first%22:100}").then((function(e){return e.json()})).then((function(o){let a=o.data.user.edge_owner_to_timeline_media.edges[0].node.edge_media_to_caption.edges[0].node.text,n=a.match(/(\*|\d+(\.\d+){0,2}(\.\*)?)+/gm)[0],i=new Date;if(i.setDate(i.getDate()+2),window.localStorage.setItem("instantgram",JSON.stringify({version:t,onlineVersion:n,lastVerification:Date.now(),dateExpiration:i.valueOf()})),console.info(m("modules.update@determineIfGetUpdateIsNecessary_updated")),g(n,"> "+t)){new e({heading:[`<h5>[instantgram] <span style="float:right">v${t}</span></h5>`],content:[`<div style='display: block;border: 2px solid rgb(0 0 0 / 70%);border-left: none;border-right: none;border-top: none;padding: 5px;font-variant: small-caps;font-weight: 900;font-size: 16px;'>Es ist ein neues Update verfügbar <span style='float:right'>v${n}</span></div>`,"<br/>","<br/>","<div style='text-align:left'><h2 style='font-weight: bold;'>Changelog</h2>"+a.split("Changelog ")[1]+"</div>","<br/>","<a href='http://thinkbig-company.github.io/instantgram' target='_blank' onmouseover='this.style.textDecoration='underline'' onmouseout='this.style.textDecoration='initial'' style='text-decoration: initial; margin: 0px auto; padding: 5px; color: black; border-style: solid; border-image-slice: 1; border-width: 3px; border-image-source: linear-gradient(to left, rgb(213, 58, 157), rgb(116, 58, 213));'>"+m("modules.update@determineIfGetUpdateIsNecessary_@load_update")+"</a>","</div>"],buttonList:[{active:!0,text:"Ok"}]}).open(),u(JSON.parse(window.localStorage.getItem("instantgram")))}else console.info(window.localStorage.getItem("instantgram"))})).catch((e=>{console.error("Error:",e)})))};console.clear();const h={VERSION:"11.0.0",hostname:window.location.hostname,path:window.location.pathname,regexHostname:/instagram\.com/,regexRootPath:/^\/+$/,regexProfilePath:/^\/([A-Za-z0-9._]{2,3})+\/$/,regexPostPath:/^\/p\//,regexStoriesURI:/stories\/(.*)+/,foundByModule:null,foundVideo:!1,foundImage:!1,foundProfile:!1};h.regexHostname.test(h.hostname)?((new p).execute(h,(function(t,o){h.foundVideo=o.foundVideo,h.foundImage=o.foundImage,h.foundByModule=o.foundByModule,null==h.foundByModule&&0==h.foundVideo&&0==h.foundImage&&new e({heading:[`<h5>[instantgram] <span style="float:right">v${h.VERSION}</span></h5>`],content:[m("index#program@alert_dontFound")],contentStyle:"text-align:center",buttonList:[{active:!0,text:"Ok"}]}).open()})),f(h.VERSION)):new e({heading:[`<h5>[instantgram] <span style="float:right">v${h.VERSION}</span></h5>`],content:[m("index@alert_onlyWorks")],contentStyle:"text-align:center",buttonList:[{active:!0,text:"Ok"}]}).open()})();