AUI.add("aui-swf",function(K){var C=K.Lang,I=K.UA,G=K.ClassNameManager.getClassName,E="swf",O="10.22",J="http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?"+(+new Date),F="application/x-shockwave-flash",N="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",R="AUI._SWF.eventHandler",P="ShockwaveFlash",Q=0,V=AUI.namespace("_SWF.instances"),M=G(E);AUI._SWF.eventHandler=function(W,A){V[W]._eventHandler(A);};if(I.gecko||I.webkit||I.opera){var D=navigator.mimeTypes[F];if(D){var L=D.enabledPlugin;var H=[];H=L.description.replace(/\s[rd]/g,".");H=H.replace(/[A-Za-z\s]+/g,"");H=H.split(".");Q=H[0]+".";switch((H[2].toString()).length){case 1:Q+="00";break;case 2:Q+="0";break;}Q+=H[2];Q=parseFloat(Q);}}else{if(I.ie){try{var T=new ActiveXObject(P+"."+"6");T.AllowScriptAccess="always";}catch(U){if(T!=null){Q=6;}}if(Q==0){try{var S=new ActiveXObject(P+"."+P);var H=[];H=S.GetVariable("$version");H=H.replace(/[A-Za-z\s]+/g,"");H=H.split(",");Q=H[0]+".";switch((H[2].toString()).length){case 1:Q+="00";break;case 2:Q+="0";break;}}catch(U){}}}}I.flash=Q;var B=function(){B.superclass.constructor.apply(this,arguments);};B.NAME=E;B.ATTRS={url:{value:""},version:{value:O},useExpressInstall:{value:false},fixedAttributes:{value:{}},flashVars:{value:{}},render:{value:true}};K.mix(B,{getFlashVersion:function(){return Q;},isFlashVersionAtLeast:function(A){return Q>=A;}});K.extend(B,K.Widget,{CONTENT_TEMPLATE:null,renderUI:function(){var g=this;var Y=B.isFlashVersionAtLeast(g.get("version"));var e=(I.flash>=8);var X=e&&!Y&&g.get("useExpressInstall");var c=g.get("url");if(X){c=J;}var Z=K.guid();V[Z]=this;g._swfId=Z;var a=g.get("boundingBox");var d=g.get("flashVars");K.mix(d,{YUISwfId:Z,YUIBridgeCallback:R});var A=K.QueryString.stringify(d);var W="<object ";if((Y||X)&&c){W+='id="'+Z+'" ';if(I.ie){W+='classid="'+N+'" ';}else{W+='type="'+F+'" data="'+c+'" ';}W+='height="100%" width="100%">';if(I.ie){W+='<param name="movie" value="'+c+'"/>';}var f=g.get("fixedAttributes");for(var b in f){W+='<param name="'+b+'" value="'+f[b]+'" />';}if(A){W+='<param name="flashVars" value="'+A+'" />';}W+="</object>";a.set("innerHTML",W);}g._swf=K.one("#"+Z);},bindUI:function(){var A=this;A.publish("swfReady",{fireOnce:true});},callSWF:function(Y,W){var A=this;W=W||[];var X=A._swf.getDOM();if(X[Y]){return X[Y].apply(X,W);}return null;},toString:function(){var A=this;return"SWF"+A._swfId;},_eventHandler:function(X){var A=this;var W=X.type;if(W!="log"){A.fire(W,X);}}});K.SWF=B;},"@VERSION@",{skinnable:false,requires:["aui-base","querystring-stringify-simple"]});