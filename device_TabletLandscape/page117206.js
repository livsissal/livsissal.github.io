if (window.VarCurrentView) VarCurrentView.set('TabletLandscape');
function init_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og2596.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2596",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape164.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 1010 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505 28)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505 28)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"16.015856884043608\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: -0.4999999999972644px; width: 1010px; height: 56px; z-index: 22; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj164",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header_Background"
	},
	objData:	{"a":[0,1048800,0,[-0.5,-0.4999999999972644,1010,56]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.300000","depth":0,"color":"#000000","blurradius":6,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":56},"btnState":"disabled","altValue":"Header_Background","titleValue":"Header_Background","fallbackImg":"<img src=\"images/desktop_shape164.png\" alt=\"Header_Background\" title=\"Header_Background\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton116700.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 170 41\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(85 20.5)\" style=\"\">\n	<path d=\"M 10 0 L 159 0 A 10 10 0 0 1 169 10 L 169 30 A 10 10 0 0 1 159 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-84.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(85 20.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.094674153846157\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-68.9\" y=\"5.07\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 11.5px; top: 8.500000000000469px; width: 170px; height: 41px; z-index: 23; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj116700",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hovedmeny knapp",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page104266.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1081440,0,[11.5,8.500000000000469,170,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":9,"width":170,"height":41},"imgDataNormal":"images/desktop_shape116700.png","imgDataOver":"images/desktop_shape116700.png","imgDataDown":"images/desktop_shape116700.png","imgDataDisabled":"images/desktop_shape116700_disabled.png","svgDataNormal":"<g transform=\"translate(85 20.5)\" style=\"\">\n\t<path d=\"M 10 0 L 159 0 A 10 10 0 0 1 169 10 L 169 30 A 10 10 0 0 1 159 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-84.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(85 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.094674153846157\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-68.9\" y=\"5.07\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(85 20.5)\" style=\"\">\n\t<path d=\"M 10 0 L 159 0 A 10 10 0 0 1 169 10 L 169 30 A 10 10 0 0 1 159 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-84.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(85 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.094674153846157\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-68.9\" y=\"5.07\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(85 20.5)\" style=\"\">\n\t<path d=\"M 10 0 L 159 0 A 10 10 0 0 1 169 10 L 169 30 A 10 10 0 0 1 159 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-84.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(85 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.094674153846157\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-68.9\" y=\"5.07\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(85 20.5)\" style=\"\">\n\t<path d=\"M 10 0 L 159 0 A 10 10 0 0 1 169 10 L 169 30 A 10 10 0 0 1 159 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-84.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(85 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.094674153846157\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-68.9\" y=\"5.07\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"GÅ TIL FORSIDEN","titleValue":"GÅ TIL FORSIDEN","fallbackImg":"<img alt=\"Hovedmeny knapp\" title=\"Hovedmeny knapp\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1733.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_117206_104266_4940\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4940&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 771.9999999999999px; top: 8.000000000000078px; width: 40px; height: 40px; z-index: 24; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1733",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_SoundOn",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar_sound_enabled_1',actItem:function(){ Varsound_enabled.set('1'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkUnmuteMed',actItem:function(){ {trivPage.actionMute(0);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide_this',actItem:function(){ textbutton1733.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_sound_off',actItem:function(){ textbutton2012.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083840,0,[771.9999999999999,8.000000000000078,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape1733.png","imgDataOver":"images/desktop_shape1733_over.png","imgDataDown":"images/desktop_shape1733.png","imgDataDisabled":"images/desktop_shape1733_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4940\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4940&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4942\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4942&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4944\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4944&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4946\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4946&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_SoundOn","titleValue":"Button_SoundOn","fallbackImg":"<img alt=\"Button_SoundOn\" title=\"Button_SoundOn\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2012.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_117206_104266_4948\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4948&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 771.9999999999999px; top: 8.000000000000078px; width: 40px; height: 40px; z-index: 25; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2012",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_SoundOff",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar_sound_enabled_0',actItem:function(){ Varsound_enabled.set('0'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkMuteMed',actItem:function(){ {trivPage.actionMute(1);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide_this',actItem:function(){ textbutton2012.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_sound_on',actItem:function(){ textbutton1733.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083840,0,[771.9999999999999,8.000000000000078,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape2012.png","imgDataOver":"images/desktop_shape2012_over.png","imgDataDown":"images/desktop_shape2012.png","imgDataDisabled":"images/desktop_shape2012_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4948\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4948&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4950\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4950&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4952\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4952&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4954\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4954&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_SoundOff","titleValue":"Button_SoundOff","fallbackImg":"<img alt=\"Button_SoundOff\" title=\"Button_SoundOff\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image387.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj387Img\" src=\"images/icn_devider.png\" alt=\"icn_devider\" title=\"icn_devider\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 38px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 833px; top: 9px; width: 30px; height: 38px; z-index: 26;",
	cssClasses:	"",
	htmlId:		"tobj387",
	bInsAnc:	0,
	cwObj:		{
		"name":	"icn_devider"
	},
	objData:	{"a":[0,1051104,0,[833,9,30,38]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":9,"width":30,"height":38}}
};
textbutton563.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_117206_104266_4956\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4956&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 877.9999999999999px; top: 8.000000000000078px; width: 40px; height: 40px; z-index: 27; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj563",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Back",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowSetState_disable',actItem:function(){ if(VarPageInTitle.equals('1'))textbutton563.setState('disabled');else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_previous_page',actItem:function(){ trivExitPage('page117311.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083872,0,[877.9999999999999,8.000000000000078,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":131,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape563.png","imgDataOver":"images/desktop_shape563_over.png","imgDataDown":"images/desktop_shape563.png","imgDataDisabled":"images/desktop_shape563_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4956\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4956&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4958\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4958&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4960\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4960&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4962\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4962&quot;); fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.2;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_Back","titleValue":"Button_Back","fallbackImg":"<img alt=\"Button_Back\" title=\"Button_Back\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1166.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_117206_104266_4964\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4964&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 931.9999999999999px; top: 8.000000000000078px; width: 40px; height: 40px; z-index: 28; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1166",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Next",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowSetState_disable',actItem:function(){ if(VarPageInTitle.equals(VarPagesInTitle.getValue()))textbutton1166.setState('disabled');else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_next_page',actItem:function(){ trivExitPage('page117227.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083872,0,[931.9999999999999,8.000000000000078,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape1166.png","imgDataOver":"images/desktop_shape1166_over.png","imgDataDown":"images/desktop_shape1166.png","imgDataDisabled":"images/desktop_shape1166_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4964\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4964&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4966\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4966&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4968\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4968&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_117206_104266_4970\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_117206_104266_4970&quot;); fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.2;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_Next","titleValue":"Button_Next","fallbackImg":"<img alt=\"Button_Next\" title=\"Button_Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
audio117207.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"sndtobj117207\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 24px;\"></div>",
	cssText:	"position: absolute; left: 0px; top: -50px; width: 300px; height: 24px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj117207",
	bInsAnc:	0,
	stdHtml:	'<audio id="swftobj117207" name="swftobj117207" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/silence.mp3" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/silence.mp3',
	cwObj:		{
		"name":	"silence"
	},
	objData:	{"a":[0,131104,0,[0,-50,300,24,0]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":0,"y":-50,"width":300,"height":24},"iDisplay":2,"sndFile":"","hasEvents":0,"supportsEvents":true,"linkName":"media/silence.mp3","initHidden":false,"hasCaptions":false,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":1,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":24}
};
shape117209.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 358 1\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(179 0.5)\" style=\"\">\n	<path d=\"M 0 0 L 357 0\" style=\"stroke: rgb(88, 89, 91); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(88, 89, 91); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-178.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(179 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"16.04481752605042\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.05\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 519.5px; top: 274.50000000000006px; width: 358px; height: 1px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj117209",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Seperator_line"
	},
	objData:	{"a":[0,32,0,[519.5,274.50000000000006,358,1]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":520,"y":275,"width":358,"height":1},"btnState":"disabled","altValue":"Seperator_line","titleValue":"Seperator_line","fallbackImg":"<img src=\"images/desktop_shape111281.png\" alt=\"Seperator_line\" title=\"Seperator_line\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image117644.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj117644Img\" src=\"images/Skjermbilde%202019-03-17%2016.50.33.png\" alt=\"Skjermbilde 2019-03-17 16.50.33\" title=\"Skjermbilde 2019-03-17 16.50.33\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 259px; height: 321px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 101px; top: 138px; width: 259px; height: 321px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj117644",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Skjermbilde 2019-03-17 16.50.33"
	},
	objData:	{"a":[0,288,0,[101,138,259,321]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":101,"y":138,"width":259,"height":321}}
};
text117210.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 357px; min-height: 26px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 357px; min-height: 26px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#fbb040; \">Notasjon</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 520px; top: 102px; width: 357px; height: 26px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj117210",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Chapter_title"
	},
	objData:	{"a":[0,32,0,[520,102,357,26]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":520,"y":102,"width":357,"height":26},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text117211.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 480px; min-height: 46px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 480px; min-height: 46px;\"><p style=\"text-align:left\"><span style=\"font-family:\'Arial Black\',sans-serif;font-size:12pt;color:0\">Spørsmål 5</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 520px; top: 130px; width: 480px; height: 46px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj117211",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Page_title"
	},
	objData:	{"a":[0,32,0,[520,130,480,46]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":520,"y":130,"width":480,"height":43},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
qu117212.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu117212",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	0,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0044\\u0065\\u006E\\u0020\\u0068\\u0061\\u0072\\u0020\\u0031\\u0034\\u0020\\u006B\\u006A\\u0065\\u0072\\u006E\\u0065\\u0070\\u0061\\u0072\\u0074\\u0069\\u006B\\u006C\\u0065\\u0072\\u0020\\u0028\\u006E\\u0075\\u006B\\u006C\\u0065\\u006F\\u006E\\u0065\\u0072\\u0029"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_117212
	},
	objData:	{"a":[0,32,0,[]]}
};
text117213.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 357px; min-height: 78px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 357px; min-height: 78px;\"><p align=\"left\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\"font-family: &quot;Arial Black&quot;, sans-serif; font-size:12pt; color: rgb(65, 64, 66);\">Hva er sant</span></p>\n\n<p align=\"left\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\"font-family: &quot;Arial Black&quot;, sans-serif; font-size:12pt; color: rgb(65, 64, 66);\">om denne</span></p>\n\n<p align=\"left\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\"font-family: &quot;Arial Black&quot;, sans-serif; font-size:12pt; color: rgb(65, 64, 66);\">karbon-isotopen?</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 520px; top: 191px; width: 357px; height: 78px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj117213",
	bInsAnc:	0,
	fieldsetId:	'fset117212',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[520,191,357,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":520,"y":191,"width":357,"height":78},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text117214.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 294px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 294px; min-height: 20px;\"><label for=\"rad117215\" style=\"cursor:\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#58595b;\">Den har 14&nbsp;</span><span style=\"font-size:10pt; color: rgb(88, 89, 91); font-family: Arial, sans-serif;\">kjernepartikler (nukleoner)</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 581px; top: 323px; width: 294px; height: 20px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj117214",
	bInsAnc:	0,
	fieldsetId:	'fset117212',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,160,0,[581,323,294,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":581,"y":323,"width":294,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio117215.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 40px; height: 40px;\"><input type=\"radio\" id=\"rad117215\" name=\"rad117212\" value=\"Den har 14 kjernepartikler (nukleoner)\" onclick=\"VarQuestion_117212.set(this.value);qu117212.questionUpdated();\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00191/images/trivantis-blank.gif&quot;);\"><label for=\"rad117215\" style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-image: url(&quot;images/btn_radio_normal.png&quot;); cursor: pointer; position: absolute; padding-left: 40px; text-align: left; height: 100%; line-height: 40px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 509px; top: 309px; width: 40px; height: 40px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj117215",
	bInsAnc:	0,
	fieldsetId:	'fset117212',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[509,309,40,40]],"rcdOvr":{"res":0},"desktopRect":{"x":509,"y":309,"width":40,"height":40},"formType":1,"dwFormFlags":0}
};
text117216.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 294px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 294px; min-height: 20px;\"><label for=\"rad117217\" style=\"cursor:\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#58595b;\">Den har atomnummer 14</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 373px; width: 294px; height: 20px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj117216",
	bInsAnc:	0,
	fieldsetId:	'fset117212',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[583,373,294,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":373,"width":294,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio117217.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 40px; height: 40px;\"><input type=\"radio\" id=\"rad117217\" name=\"rad117212\" value=\"Den har atomnummer 14\" onclick=\"VarQuestion_117212.set(this.value);qu117212.questionUpdated();\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00191/images/trivantis-blank.gif&quot;);\"><label for=\"rad117217\" style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-image: url(&quot;images/btn_radio_normal.png&quot;); cursor: pointer; position: absolute; padding-left: 40px; text-align: left; height: 100%; line-height: 40px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 509px; top: 359px; width: 40px; height: 40px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj117217",
	bInsAnc:	0,
	fieldsetId:	'fset117212',
	cwObj:		{
		"name":	"Choice 2 button"
	},
	objData:	{"a":[0,32,0,[509,359,40,40]],"rcdOvr":{"res":0},"desktopRect":{"x":509,"y":359,"width":40,"height":40},"formType":1,"dwFormFlags":0}
};
text117218.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 294px; min-height: 16px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 294px; min-height: 16px;\"><label for=\"rad117219\" style=\"cursor:\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#58595b;\">Den heter karbon-6</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 423px; width: 294px; height: 16px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj117218",
	bInsAnc:	0,
	fieldsetId:	'fset117212',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,32,0,[583,423,294,16]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":423,"width":294,"height":16},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio117219.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 40px; height: 40px;\"><input type=\"radio\" id=\"rad117219\" name=\"rad117212\" value=\"Den heter karbon-6\" onclick=\"VarQuestion_117212.set(this.value);qu117212.questionUpdated();\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00191/images/trivantis-blank.gif&quot;);\"><label for=\"rad117219\" style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-image: url(&quot;images/btn_radio_normal.png&quot;); cursor: pointer; position: absolute; padding-left: 40px; text-align: left; height: 100%; line-height: 40px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 509px; top: 409px; width: 40px; height: 40px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj117219",
	bInsAnc:	0,
	fieldsetId:	'fset117212',
	cwObj:		{
		"name":	"Choice 3 button"
	},
	objData:	{"a":[0,32,0,[509,409,40,40]],"rcdOvr":{"res":0},"desktopRect":{"x":509,"y":409,"width":40,"height":40},"formType":1,"dwFormFlags":0}
};
textbutton117220.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 138 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(69 19.5)\" style=\"\">\n	<path d=\"M 19 0 L 118 0 A 19 19 0 0 1 137 19 L 137 19 A 19 19 0 0 1 118 38 L 19 38 A 19 19 0 0 1 0 19 L 0 19 A 19 19 0 0 1 19 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-68.5, -19) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(69 19.5)\">\n		<text font-family=\"Arial\" font-size=\"13.430656598540146\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(88,89,91); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-13.36\" y=\"4.23\" fill=\"#58595B\">Svar</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 516.5px; top: 479.5px; width: 138px; height: 39px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj117220",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Submit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkProcQuestion',actItem:function(){ if(!VarQuestion_117212.equals('~~~null~~~'))	qu117212.processQuestion();
else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_next_page',actItem:function(){ trivExitPage('page117227.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[516.5,479.5,138,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":517,"y":480,"width":138,"height":39},"imgDataNormal":"images/desktop_shape111292.png","imgDataOver":"images/desktop_shape111292.png","imgDataDown":"images/desktop_shape111292_down.png","imgDataDisabled":"images/desktop_shape111292_disabled.png","svgDataNormal":"<g transform=\"translate(69 19.5)\" style=\"\">\n\t<path d=\"M 19 0 L 118 0 A 19 19 0 0 1 137 19 L 137 19 A 19 19 0 0 1 118 38 L 19 38 A 19 19 0 0 1 0 19 L 0 19 A 19 19 0 0 1 19 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-68.5, -19) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(69 19.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"13.430656598540146\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(88,89,91); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-13.36\" y=\"4.23\" fill=\"#58595B\">Svar</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(69 19.5)\" style=\"\">\n\t<path d=\"M 19 0 L 118 0 A 19 19 0 0 1 137 19 L 137 19 A 19 19 0 0 1 118 38 L 19 38 A 19 19 0 0 1 0 19 L 0 19 A 19 19 0 0 1 19 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-68.5, -19) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(69 19.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"13.430656598540146\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(88,89,91); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-13.36\" y=\"4.23\" fill=\"#58595B\">Svar</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(69 19.5)\" style=\"\">\n\t<path d=\"M 19 0 L 118 0 A 19 19 0 0 1 137 19 L 137 19 A 19 19 0 0 1 118 38 L 19 38 A 19 19 0 0 1 0 19 L 0 19 A 19 19 0 0 1 19 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-68.5, -19) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(69 19.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"13.430656598540146\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(88,89,91); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-13.36\" y=\"4.23\" fill=\"#58595B\">Svar</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(69 19.5)\" style=\"\">\n\t<path d=\"M 19 0 L 118 0 A 19 19 0 0 1 137 19 L 137 19 A 19 19 0 0 1 118 38 L 19 38 A 19 19 0 0 1 0 19 L 0 19 A 19 19 0 0 1 19 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-68.5, -19) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(69 19.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"13.430656598540146\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(88,89,91); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-13.36\" y=\"4.23\" fill=\"#58595B\">Svar</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Svar","titleValue":"Svar","fallbackImg":"<img alt=\"Button_Submit\" title=\"Button_Submit\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	33
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/icn_devider.png","images/btn_back_normal.png","images/btn_back_hover.png","images/btn_next_normal.png","images/btn_next_hover.png","images/btn_mute_normal.png","images/btn_mute_hover.png","images/btn_sound_normal.png","images/btn_sound_hover.png","images/Skjermbilde%202019-03-17%2016.50.33.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","",0,0,1];
