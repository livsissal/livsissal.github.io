if (window.VarCurrentView) VarCurrentView.set('PhoneLandscape');
function init_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og2596.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2596",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape164.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 786 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(393 28)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(393 28)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.816305412076433\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: -0.49999999999904077px; width: 786px; height: 56px; z-index: 28; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj164",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header_Background"
	},
	objData:	{"a":[0,1048800,0,[-0.5,-0.49999999999904077,786,56]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.300000","depth":0,"color":"#000000","blurradius":6,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":56},"btnState":"disabled","altValue":"Header_Background","titleValue":"Header_Background","fallbackImg":"<img src=\"images/desktop_shape164.png\" alt=\"Header_Background\" title=\"Header_Background\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton116700.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 132 32\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(66 16)\" style=\"\">\n	<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(66 16)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 8.5px; top: 6.50000000000016px; width: 132px; height: 32px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj116700",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hovedmeny knapp",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_intro_innhold.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1081440,0,[8.5,6.50000000000016,132,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":9,"width":170,"height":41},"imgDataNormal":"images/desktop_shape116700.png","imgDataOver":"images/desktop_shape116700.png","imgDataDown":"images/desktop_shape116700.png","imgDataDisabled":"images/desktop_shape116700_disabled.png","svgDataNormal":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"GÅ TIL FORSIDEN","titleValue":"GÅ TIL FORSIDEN","fallbackImg":"<img alt=\"Hovedmeny knapp\" title=\"Hovedmeny knapp\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1733.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_110700_104266_122\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_122); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 555px; top: 8.000000000000036px; width: 40px; height: 40px; z-index: 30; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,1083840,0,[555,8.000000000000036,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape1733.png","imgDataOver":"images/desktop_shape1733_over.png","imgDataDown":"images/desktop_shape1733.png","imgDataDisabled":"images/desktop_shape1733_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_122\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_122); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_124\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_124); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_126\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_126); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_128\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_128); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_SoundOn","titleValue":"Button_SoundOn","fallbackImg":"<img alt=\"Button_SoundOn\" title=\"Button_SoundOn\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2012.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_110700_104266_130\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_130); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 555px; top: 8.000000000000036px; width: 40px; height: 40px; z-index: 31; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,1083840,0,[555,8.000000000000036,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape2012.png","imgDataOver":"images/desktop_shape2012_over.png","imgDataDown":"images/desktop_shape2012.png","imgDataDisabled":"images/desktop_shape2012_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_130\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_130); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_132\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_132); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_134\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_134); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_136\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_136); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_SoundOff","titleValue":"Button_SoundOff","fallbackImg":"<img alt=\"Button_SoundOff\" title=\"Button_SoundOff\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image387.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj387Img\" src=\"images/icn_devider.png\" alt=\"icn_devider\" title=\"icn_devider\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 38px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 618px; top: 10px; width: 30px; height: 38px; z-index: 32;",
	cssClasses:	"",
	htmlId:		"tobj387",
	bInsAnc:	0,
	cwObj:		{
		"name":	"icn_devider"
	},
	objData:	{"a":[0,1051104,0,[618,10,30,38]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":9,"width":30,"height":38}}
};
textbutton563.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_110700_104266_138\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_138); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 663px; top: 8.000000000000036px; width: 40px; height: 40px; z-index: 33; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj563",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Back",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowSetState_disable',actItem:function(){ if(VarPageInTitle.equals('1'))textbutton563.setState('disabled');else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_previous_page',actItem:function(){ trivExitPage('a001_kap_2_atomer_i_ulike_former_page_7.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083872,0,[663,8.000000000000036,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":131,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape563.png","imgDataOver":"images/desktop_shape563_over.png","imgDataDown":"images/desktop_shape563.png","imgDataDisabled":"images/desktop_shape563_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_138\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_138); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_140\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_140); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_142\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_142); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_144\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_144); fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.2;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_Back","titleValue":"Button_Back","fallbackImg":"<img alt=\"Button_Back\" title=\"Button_Back\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1166.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_110700_104266_146\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_146); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 717px; top: 8.000000000000036px; width: 40px; height: 40px; z-index: 34; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1166",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Next",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowSetState_disable',actItem:function(){ if(VarPageInTitle.equals(VarPagesInTitle.getValue()))textbutton1166.setState('disabled');else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_next_page',actItem:function(){ trivExitPage('a001_kap_2_atomer_i_ulike_former_page_8.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083872,0,[717,8.000000000000036,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape1166.png","imgDataOver":"images/desktop_shape1166_over.png","imgDataDown":"images/desktop_shape1166.png","imgDataDisabled":"images/desktop_shape1166_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_146\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_146); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_148\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_148); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_150\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_150); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_110700_104266_152\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_110700_104266_152); fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.2;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_Next","titleValue":"Button_Next","fallbackImg":"<img alt=\"Button_Next\" title=\"Button_Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
audio110701.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"sndtobj110701\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 24px;\"></div>",
	cssText:	"position: absolute; left: 0px; top: -39px; width: 300px; height: 24px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj110701",
	bInsAnc:	0,
	stdHtml:	'<audio id="swftobj110701" name="swftobj110701" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/silence.mp3" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/silence.mp3',
	cwObj:		{
		"name":	"silence"
	},
	objData:	{"a":[0,131104,0,[0,-39,300,24,0]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":0,"y":-50,"width":300,"height":24},"iDisplay":2,"sndFile":"","hasEvents":0,"supportsEvents":true,"linkName":"media/silence.mp3","initHidden":false,"hasCaptions":false,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":1,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":24}
};
shape110703.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 71 1\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(35.5 0.5)\" style=\"\">\n	<path d=\"M 0 0 L 70 0\" style=\"stroke: rgb(88, 89, 91); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(88, 89, 91); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-35, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(35.5 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.982856818285715\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.09\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 302.5px; top: 245.5px; width: 71px; height: 1px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj110703",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Seperator_line"
	},
	objData:	{"a":[0,32,0,[302.5,245.5,71,1]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":520,"y":275,"width":358,"height":1},"btnState":"disabled","altValue":"Seperator_line","titleValue":"Seperator_line","fallbackImg":"<img src=\"images/desktop_shape110703.png\" alt=\"Seperator_line\" title=\"Seperator_line\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image116894.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj116894Img\" src=\"images/Skjermbilde%202019-02-26%2023.30.26.png\" alt=\"Skjermbilde 2019-02-26 23.30.26\" title=\"Skjermbilde 2019-02-26 23.30.26\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 128px; height: 153px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 220px; top: 110px; width: 128px; height: 153px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj116894",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Skjermbilde 2019-02-26 23.30.26"
	},
	objData:	{"a":[0,288,0,[220,110,128,153]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":283,"y":141,"width":164,"height":197}}
};
text110704.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 442px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 442px; min-height: 27px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#fbb040; \">Atomer i ulike former</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 303px; top: 85px; width: 442px; height: 27px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj110704",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Chapter_title"
	},
	objData:	{"a":[0,32,0,[303,85,442,27]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":520,"y":102,"width":357,"height":26},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110705.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 482px; min-height: 44px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 482px; min-height: 44px;\"><p align=\"left\" leglh=\"1.437\" style=\"margin-left:0px;text-indent:0px;line-height:1.437;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:19pt; font-family:\'Arial Black\', sans-serif; color:#414042;\">Atomers skrivemåte</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 303px; top: 113px; width: 482px; height: 44px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj110705",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Page_title"
	},
	objData:	{"a":[0,32,0,[303,113,482,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":505,"y":132,"width":480,"height":43},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
qu110706.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu110706",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	2,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0036\\u0020"],
				"correctFeedbackFunc":	"action110706_1",
				"incorrectFeedbackFunc":	"action110706_2",
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_110706
	},
	objData:	{"a":[0,32,0,[]]}
};
text110707.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 442px; min-height: 69px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 442px; min-height: 69px;\"><p align=\"left\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\"font-family: &quot;Arial Black&quot;, sans-serif; font-size:12pt; color: rgb(65, 64, 66);\">Hvor mange protoner </span></p>\n\n<p align=\"left\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\"font-family: &quot;Arial Black&quot;, sans-serif; font-size:12pt; color: rgb(65, 64, 66);\">har dette grunnstoffet?</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 303px; top: 162px; width: 442px; height: 69px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj110707",
	bInsAnc:	0,
	fieldsetId:	'fset110706',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[303,162,442,69]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":514,"y":202,"width":357,"height":78},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110708.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 389px; min-height: 31px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 389px; min-height: 31px;\"><label for=\"rad110709\" style=\"cursor:\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#58595b;\">6 </span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 356px; top: 293px; width: 389px; height: 31px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj110708",
	bInsAnc:	0,
	fieldsetId:	'fset110706',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[356,293,389,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":575,"y":334,"width":294,"height":18},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio110709.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 40px; height: 40px;\"><input type=\"radio\" id=\"rad110709\" name=\"rad110706\" value=\"6 \" onclick=\"VarQuestion_110706.set(this.value);qu110706.questionUpdated();\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(https://eu.lectoraonline.com/app/BN00182/images/trivantis-blank.gif);\"><label for=\"rad110709\" style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-image: url(images/btn_radio_normal.png); cursor: pointer; position: absolute; padding-left: 40px; text-align: left; height: 100%; line-height: 40px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 303px; top: 280px; width: 40px; height: 40px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj110709",
	bInsAnc:	0,
	fieldsetId:	'fset110706',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[303,280,40,40]],"rcdOvr":{"res":0},"desktopRect":{"x":503,"y":320,"width":40,"height":40},"formType":1,"dwFormFlags":0}
};
text110710.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 389px; min-height: 30px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 389px; min-height: 30px;\"><label for=\"rad110711\" style=\"cursor:\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#58595b;\">14</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 356px; top: 341px; width: 389px; height: 30px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj110710",
	bInsAnc:	0,
	fieldsetId:	'fset110706',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[356,341,389,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":577,"y":384,"width":294,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio110711.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 40px; height: 40px;\"><input type=\"radio\" id=\"rad110711\" name=\"rad110706\" value=\"14\" onclick=\"VarQuestion_110706.set(this.value);qu110706.questionUpdated();\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(https://eu.lectoraonline.com/app/BN00182/images/trivantis-blank.gif);\"><label for=\"rad110711\" style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-image: url(images/btn_radio_normal.png); cursor: pointer; position: absolute; padding-left: 40px; text-align: left; height: 100%; line-height: 40px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 303px; top: 328px; width: 40px; height: 40px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj110711",
	bInsAnc:	0,
	fieldsetId:	'fset110706',
	cwObj:		{
		"name":	"Choice 2 button"
	},
	objData:	{"a":[0,32,0,[303,328,40,40]],"rcdOvr":{"res":0},"desktopRect":{"x":503,"y":370,"width":40,"height":40},"formType":1,"dwFormFlags":0}
};
text110712.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 389px; min-height: 30px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 389px; min-height: 30px;\"><label for=\"rad110713\" style=\"cursor:\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#58595b;\">8 </span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 356px; top: 392px; width: 389px; height: 30px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj110712",
	bInsAnc:	0,
	fieldsetId:	'fset110706',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,32,0,[356,392,389,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":577,"y":434,"width":294,"height":16},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio110713.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 40px; height: 40px;\"><input type=\"radio\" id=\"rad110713\" name=\"rad110706\" value=\"8 \" onclick=\"VarQuestion_110706.set(this.value);qu110706.questionUpdated();\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(https://eu.lectoraonline.com/app/BN00182/images/trivantis-blank.gif);\"><label for=\"rad110713\" style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-image: url(images/btn_radio_normal.png); cursor: pointer; position: absolute; padding-left: 40px; text-align: left; height: 100%; line-height: 40px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 303px; top: 379px; width: 40px; height: 40px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj110713",
	bInsAnc:	0,
	fieldsetId:	'fset110706',
	cwObj:		{
		"name":	"Choice 3 button"
	},
	objData:	{"a":[0,32,0,[303,379,40,40]],"rcdOvr":{"res":0},"desktopRect":{"x":503,"y":420,"width":40,"height":40},"formType":1,"dwFormFlags":0}
};
textbutton110714.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 138 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(69 19.5)\" style=\"\">\n	<path d=\"M 19 0 L 118 0 A 19 19 0 0 1 137 19 L 137 19 A 19 19 0 0 1 118 38 L 19 38 A 19 19 0 0 1 0 19 L 0 19 A 19 19 0 0 1 19 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-68.5, -19) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(69 19.5)\">\n		<text font-family=\"Arial\" font-size=\"13.430656598540146\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(88,89,91); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-20.23\" y=\"4.23\" fill=\"#58595B\">Submit</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 302.5px; top: 452.5px; width: 138px; height: 39px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj110714",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Submit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkProcQuestion',actItem:function(){ if(!VarQuestion_110706.equals('~~~null~~~'))	qu110706.processQuestion();
else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[302.5,452.5,138,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":517,"y":480,"width":138,"height":39},"imgDataNormal":"images/desktop_shape110714.png","imgDataOver":"images/desktop_shape110714.png","imgDataDown":"images/desktop_shape110714_down.png","imgDataDisabled":"images/desktop_shape110714_disabled.png","svgDataNormal":"<g transform=\"translate(69 19.5)\" style=\"\">\n\t<path d=\"M 19 0 L 118 0 A 19 19 0 0 1 137 19 L 137 19 A 19 19 0 0 1 118 38 L 19 38 A 19 19 0 0 1 0 19 L 0 19 A 19 19 0 0 1 19 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-68.5, -19) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(69 19.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"13.430656598540146\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(88,89,91); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-20.23\" y=\"4.23\" fill=\"#58595B\">Submit</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(69 19.5)\" style=\"\">\n\t<path d=\"M 19 0 L 118 0 A 19 19 0 0 1 137 19 L 137 19 A 19 19 0 0 1 118 38 L 19 38 A 19 19 0 0 1 0 19 L 0 19 A 19 19 0 0 1 19 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-68.5, -19) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(69 19.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"13.430656598540146\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(88,89,91); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-20.23\" y=\"4.23\" fill=\"#58595B\">Submit</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(69 19.5)\" style=\"\">\n\t<path d=\"M 19 0 L 118 0 A 19 19 0 0 1 137 19 L 137 19 A 19 19 0 0 1 118 38 L 19 38 A 19 19 0 0 1 0 19 L 0 19 A 19 19 0 0 1 19 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-68.5, -19) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(69 19.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"13.430656598540146\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(88,89,91); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-20.23\" y=\"4.23\" fill=\"#58595B\">Submit</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(69 19.5)\" style=\"\">\n\t<path d=\"M 19 0 L 118 0 A 19 19 0 0 1 137 19 L 137 19 A 19 19 0 0 1 118 38 L 19 38 A 19 19 0 0 1 0 19 L 0 19 A 19 19 0 0 1 19 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-68.5, -19) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(69 19.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"13.430656598540146\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(88,89,91); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-20.23\" y=\"4.23\" fill=\"#58595B\">Submit</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Submit","titleValue":"Submit","fallbackImg":"<img alt=\"Button_Submit\" title=\"Button_Submit\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og110716.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og110716",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape110717.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 785 528\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 264)\" style=\"\">\n	<path d=\"M 0 0 L 784 0 L 784 527 L 0 527 L 0 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(65, 64, 66); fill-rule: nonzero; opacity:0.8;filter:alpha(opacity=80); pointer-events: auto;\" transform=\"translate(0 0) translate(-392, -263.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 264)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.816326210204082\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0.8;filter:alpha(opacity=80);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5000000000000568px; top: -0.4999999999998863px; width: 785px; height: 528px; z-index: 13; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj110717",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Popup_Mask"
	},
	objData:	{"a":[0,0,0,[-0.5000000000000568,-0.4999999999998863,785,528]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":663},"btnState":"disabled","altValue":"Popup_Mask","titleValue":"Popup_Mask","fallbackImg":"<img src=\"images/desktop_shape104272.png\" alt=\"Popup_Mask\" title=\"Popup_Mask\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.8;\">"}
};
text111185.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 420px; height: 197px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 40px; top: 40px; width: 340px; height: 197px;\"><p align=\"left\" leglh=\"1.437\" style=\"margin-left:0px;text-indent:0px;line-height:1.437;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:19pt; font-family:\'Arial Black\', sans-serif; color:#fbb040; background-color:#fefefe;\">&nbsp;✔ </span><span style=\" font-size:19pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">&nbsp;Riktig!</span></p>\n\n<p align=\"left\" leglh=\"1.367\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:8pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.094\" style=\"margin-left:0px;text-indent:0px;line-height:0.750;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:8pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.127\" style=\"margin-left:0px;text-indent:0px;line-height:1.080;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">​</span></p>\n\n<p align=\"left\" leglh=\"1.127\" style=\"margin-left:0px;text-indent:0px;line-height:1.080;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">&nbsp; </span></p>\n\n<p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><em><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#ffffff; \">(Klikk for å fortsette)</span></em><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#ffffff;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 183px; top: 160px; width: 420px; height: 205px; z-index: 14; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111185",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Popup_content",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo_next_page',actItem:function(){ if( text111185.eatOnUp==true ){
        text111185.eatOnUp=false;
        return;
    }
    trivExitPage('a001_kap_2_atomer_i_ulike_former_page_8.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[183,160,420,197]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":235,"y":206,"width":540,"height":250},"dwTextFlags":0,"marginSize":40,"textPublishLang":"Inherit"}
};
og110720.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og110720",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape110721.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 785 528\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 264)\" style=\"\">\n	<path d=\"M 0 0 L 784 0 L 784 527 L 0 527 L 0 0 Z\" style=\"stroke: rgb(65, 64, 66); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(65, 64, 66); fill-rule: nonzero; opacity:0.8;filter:alpha(opacity=80); pointer-events: auto;\" transform=\"translate(0 0) translate(-392, -263.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 264)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.816326210204082\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0.8;filter:alpha(opacity=80);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5000000000000568px; top: -0.4999999999998863px; width: 785px; height: 528px; z-index: 15; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj110721",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Popup_Mask"
	},
	objData:	{"a":[0,0,0,[-0.5000000000000568,-0.4999999999998863,785,528]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":663},"btnState":"disabled","altValue":"Popup_Mask","titleValue":"Popup_Mask","fallbackImg":"<img src=\"images/desktop_shape104272.png\" alt=\"Popup_Mask\" title=\"Popup_Mask\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.8;\">"}
};
text111191.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 420px; height: 197px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 40px; top: 40px; width: 340px; height: 197px;\"><p align=\"left\" leglh=\"1.437\" style=\"margin-left:0px;text-indent:0px;line-height:1.437;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:19pt; font-family:\'Arial Black\', sans-serif; color:#fbb040; background-color:#fefefe;\">&nbsp;X </span><span style=\" font-size:19pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">&nbsp;OBS! Feil svar</span></p>\n\n<p align=\"left\" leglh=\"1.367\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:8pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.094\" style=\"margin-left:0px;text-indent:0px;line-height:0.750;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:8pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.127\" style=\"margin-left:0px;text-indent:0px;line-height:1.080;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">Her må du tenke deg om og prøve igjen</span></p>\n\n<p align=\"left\" leglh=\"1.127\" style=\"margin-left:0px;text-indent:0px;line-height:1.080;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">&nbsp; </span></p>\n\n<p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><em><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#ffffff; \">(klikk for å fortsette)</span></em><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#ffffff;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 183px; top: 160px; width: 420px; height: 205px; z-index: 16; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111191",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Popup_content",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo_next_page',actItem:function(){ if( text111191.eatOnUp==true ){
        text111191.eatOnUp=false;
        return;
    }
    trivExitPage('a001_kap_2_atomer_i_ulike_former_page_8.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[183,160,420,197]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":235,"y":206,"width":540,"height":250},"dwTextFlags":0,"marginSize":40,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_PhoneLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	25
};
rcdObj.pgWidth_PhoneLandscape = pgWidth_phoneLand;
rcdObj.preload_PhoneLandscape = ["images/icn_devider.png","images/btn_back_normal.png","images/btn_back_hover.png","images/btn_next_normal.png","images/btn_next_hover.png","images/btn_mute_normal.png","images/btn_mute_hover.png","images/btn_sound_normal.png","images/btn_sound_hover.png","images/Skjermbilde%202019-02-26%2023.30.26.png"];
rcdObj.pgStyle_PhoneLandscape = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 527px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhoneLandscape = ["#FFFFFF","",0,0,1];
