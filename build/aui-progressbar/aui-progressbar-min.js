AUI.add("aui-progressbar",function(N){var H=N.Lang,q=H.isNumber,K=H.isString,O="",T=".",B=" ",Y="auto",l="boundingBox",P="complete",V="contentBox",a="height",M="horizontal",n="label",h="lineHeight",o="max",R="min",c="offsetHeight",J="orientation",W="progress-bar",r="px",g="ratio",I="status",p="statusNode",s="step",k="text",b="textNode",i="value",Q="vertical",C="width",f=function(A){return parseFloat(A)||0;},D=N.ClassNameManager.getClassName,X=D(W,M),F=D(W,I),E=D(W,k),U=D(W,Q),m='<div class="'+F+'"></div>',j='<div class="'+E+'"></div>',d=N.Widget.prototype,G=[n,J,i],S=d._BIND_UI_ATTRS.concat(G),e=d._SYNC_UI_ATTRS.concat(G);function Z(){Z.superclass.constructor.apply(this,arguments);}N.mix(Z,{NAME:W,ATTRS:{height:{valueFn:function(){return this.get(l).get(c)||25;}},label:{value:O},max:{validator:q,value:100},min:{validator:q,value:0},orientation:{value:M,validator:function(A){return K(A)&&(A===M||A===Q);}},ratio:{getter:"_getRatio",readOnly:true},step:{getter:"_getStep",readOnly:true},statusNode:{valueFn:function(){return N.Node.create(m);}},textNode:{valueFn:function(){return N.Node.create(j);}},value:{setter:f,validator:function(A){return q(f(A))&&((A>=this.get(R))&&(A<=this.get(o)));},value:0}},HTML_PARSER:{label:function(A){var L=A.one(T+E);if(L){return L.html();}},statusNode:T+F,textNode:T+E}});N.extend(Z,N.Widget,{_BIND_UI_ATTRS:S,_SYNC_UI_ATTRS:e,renderUI:function(){var A=this;A._renderStatusNode();A._renderTextNode();},bindUI:function(){var A=this;A.after("valueChange",N.bind(A._afterValueChange,A));},_afterValueChange:function(L){var A=this;if(A.get(s)>=100){A.fire(P);}},_getContentBoxSize:function(){var A=this;var L=A.get(V);return f(L.getStyle(this.get(J)===M?C:a));},_getPixelStep:function(){var A=this;return A._getContentBoxSize()*A.get(g);},_getRatio:function(){var A=this;var L=A.get(R);var t=(A.get(i)-L)/(A.get(o)-L);return Math.max(t,0);},_getStep:function(){return this.get(g)*100;},_renderStatusNode:function(){var A=this;A.get(V).append(A.get(p));},_renderTextNode:function(){var A=this;A.get(V).append(A.get(b));},_uiSetLabel:function(A){this.get(b).html(A);},_uiSetOrientation:function(u){var A=this;var t=A.get(l);var L=(u===M);t.toggleClass(X,L);t.toggleClass(U,!L);A._uiSizeTextNode();},_uiSetValue:function(v){var A=this;var t=A.get(p);var L=A._getPixelStep();var u={};if(A.get(J)===M){u={height:"100%",top:Y,width:L+r};}else{u={height:L+r,top:f(A._getContentBoxSize()-L)+r,width:"100%"};}t.setStyles(u);},_uiSizeTextNode:function(){var A=this;var L=A.get(V);var t=A.get(b);t.setStyle(h,L.getStyle(a));}});N.ProgressBar=Z;},"@VERSION@",{requires:["aui-base"],skinnable:true});