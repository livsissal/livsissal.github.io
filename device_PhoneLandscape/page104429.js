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
text117880.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 270px; height: 26px; background-color: rgb(238, 238, 238);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 260px; height: 26px;\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:10pt;\">&lt;Breadcrumb Auto Text&gt;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 9px; top: 60px; width: 270px; height: 34px; z-index: 23;",
	cssClasses:	"",
	htmlId:		"tobj117880",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Breadcrumb",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'Set Chapter Section & Page',actItem:function(){ if(!VarCurrentChapterName.equals('~~~null~~~')&&!VarCurrentSectionName.equals('~~~null~~~'))text117880.changeContents( "" +  VarCurrentChapterName.getValueForDisplay() + " > " +  VarCurrentSectionName.getValueForDisplay() + " > " +  VarCurrentPageName.getValueForDisplay() + "" ); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:11,delay:0,name:'Set Chapter & Page',actItem:function(){ if(!VarCurrentChapterName.equals('~~~null~~~')&&VarCurrentSectionName.equals('~~~null~~~'))text117880.changeContents( "" +  VarCurrentChapterName.getValueForDisplay() + " > " +  VarCurrentPageName.getValueForDisplay() + "" ); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:11,delay:0,name:'Set Page',actItem:function(){ if(VarCurrentChapterName.equals('~~~null~~~')&&VarCurrentSectionName.equals('~~~null~~~'))text117880.changeContents(VarCurrentPageName.getValue()); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:11,delay:0,name:'Show Text',actItem:function(){ text117880.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,64,0,[9,60,270,26]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":11,"y":77,"width":347,"height":25},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
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
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: -0.49999999999980815px; width: 786px; height: 56px; z-index: 34; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj164",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header_Background"
	},
	objData:	{"a":[0,1048800,0,[-0.5,-0.49999999999980815,786,56]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.300000","depth":0,"color":"#000000","blurradius":6,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":56},"btnState":"disabled","altValue":"Header_Background","titleValue":"Header_Background","fallbackImg":"<img src=\"images/desktop_shape164.png\" alt=\"Header_Background\" title=\"Header_Background\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton116700.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 132 32\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(66 16)\" style=\"\">\n	<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(66 16)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 15.5px; top: 7.500000000000032px; width: 132px; height: 32px; z-index: 35; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,1081440,0,[15.5,7.500000000000032,132,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":10,"width":170,"height":41},"imgDataNormal":"images/desktop_shape116700.png","imgDataOver":"images/desktop_shape116700.png","imgDataDown":"images/desktop_shape116700.png","imgDataDisabled":"images/desktop_shape116700_disabled.png","svgDataNormal":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"GÅ TIL FORSIDEN","titleValue":"GÅ TIL FORSIDEN","fallbackImg":"<img alt=\"Hovedmeny knapp\" title=\"Hovedmeny knapp\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1733.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_104429_104266_13538\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13538&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 555px; top: 8.000000000000007px; width: 40px; height: 40px; z-index: 36; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,1083840,0,[555,8.000000000000007,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape1733.png","imgDataOver":"images/desktop_shape1733_over.png","imgDataDown":"images/desktop_shape1733.png","imgDataDisabled":"images/desktop_shape1733_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13538\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13538&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13540\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13540&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13542\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13542&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13544\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13544&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_SoundOn","titleValue":"Button_SoundOn","fallbackImg":"<img alt=\"Button_SoundOn\" title=\"Button_SoundOn\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2012.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_104429_104266_13546\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13546&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 555px; top: 8.000000000000007px; width: 40px; height: 40px; z-index: 37; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,1083840,0,[555,8.000000000000007,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape2012.png","imgDataOver":"images/desktop_shape2012_over.png","imgDataDown":"images/desktop_shape2012.png","imgDataDisabled":"images/desktop_shape2012_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13546\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13546&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13548\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13548&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13550\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13550&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13552\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13552&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_SoundOff","titleValue":"Button_SoundOff","fallbackImg":"<img alt=\"Button_SoundOff\" title=\"Button_SoundOff\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image387.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj387Img\" src=\"images/icn_devider.png\" alt=\"icn_devider\" title=\"icn_devider\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 38px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 618px; top: 10px; width: 30px; height: 38px; z-index: 38;",
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
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_104429_104266_13554\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13554&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 663px; top: 8.000000000000007px; width: 40px; height: 40px; z-index: 39; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj563",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Back",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowSetState_disable',actItem:function(){ if(VarPageInTitle.equals('1'))textbutton563.setState('disabled');else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_previous_page',actItem:function(){ trivExitPage('page104266.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083872,0,[663,8.000000000000007,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":131,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape563.png","imgDataOver":"images/desktop_shape563_over.png","imgDataDown":"images/desktop_shape563.png","imgDataDisabled":"images/desktop_shape563_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13554\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13554&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13556\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13556&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13558\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13558&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13560\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13560&quot;); fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.2;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_Back","titleValue":"Button_Back","fallbackImg":"<img alt=\"Button_Back\" title=\"Button_Back\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1166.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_104429_104266_13562\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13562&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 717px; top: 8.000000000000007px; width: 40px; height: 40px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1166",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Next",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowSetState_disable',actItem:function(){ if(VarPageInTitle.equals(VarPagesInTitle.getValue()))textbutton1166.setState('disabled');else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_next_page',actItem:function(){ trivExitPage('page111227.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083872,0,[717,8.000000000000007,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape1166.png","imgDataOver":"images/desktop_shape1166_over.png","imgDataDown":"images/desktop_shape1166.png","imgDataDisabled":"images/desktop_shape1166_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13562\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13562&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13564\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13564&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13566\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13566&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_13568\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_104429_104266_13568&quot;); fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.2;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_Next","titleValue":"Button_Next","fallbackImg":"<img alt=\"Button_Next\" title=\"Button_Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text118043.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 67px; min-height: 21px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 67px; min-height: 21px;\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:10pt;\">Side</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 494px; width: 67px; height: 21px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj118043",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Page Count",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'Set Page in Title',actItem:function(){ text118043.changeContents( "Side " +  VarPageInTitle.getValueForDisplay() + " " ); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:11,delay:0,name:'Show Text',actItem:function(){ text118043.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,96,0,[0,494,67,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":635,"width":86,"height":27},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image116799.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj116799Img\" src=\"images/battery-22119_1920.jpg\" alt=\"battery-22119_1920\" title=\"battery-22119_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 254px; height: 167px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 242px; width: 254px; height: 167px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj116799",
	bInsAnc:	0,
	cwObj:		{
		"name":	"battery-22119_1920"
	},
	objData:	{"a":[0,288,0,[0,242,254,167]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":311,"width":327,"height":215}}
};
image116778.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj116778Img\" src=\"images/apple-1122537_1920.jpg\" alt=\"apple-1122537_1920\" title=\"apple-1122537_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 248px; height: 158px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 86px; width: 248px; height: 158px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj116778",
	bInsAnc:	0,
	cwObj:		{
		"name":	"apple-1122537_1920"
	},
	objData:	{"a":[0,288,0,[0,86,248,158]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":110,"width":319,"height":203}}
};
image116792.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj116792Img\" src=\"images/chemistry-1027781_1920.jpg\" alt=\"chemistry-1027781_1920\" title=\"chemistry-1027781_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 115px; height: 115px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 411px; width: 115px; height: 115px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj116792",
	bInsAnc:	0,
	cwObj:		{
		"name":	"chemistry-1027781_1920"
	},
	objData:	{"a":[0,288,0,[0,411,115,115]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":528,"width":148,"height":148}}
};
image116780.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj116780Img\" src=\"images/gummibarchen-318362_1920.jpg\" alt=\"gummibarchen-318362_1920\" title=\"gummibarchen-318362_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 285px; height: 189px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 500px; top: 326px; width: 285px; height: 189px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj116780",
	bInsAnc:	0,
	cwObj:		{
		"name":	"gummibarchen-318362_1920"
	},
	objData:	{"a":[0,288,0,[500,326,285,189]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":643,"y":419,"width":366,"height":243}}
};
image116782.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj116782Img\" src=\"images/road-1072823_1920.jpg\" alt=\"road-1072823_1920\" title=\"road-1072823_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 359px; height: 209px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 426px; top: 57px; width: 359px; height: 209px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj116782",
	bInsAnc:	0,
	cwObj:		{
		"name":	"road-1072823_1920"
	},
	objData:	{"a":[0,288,0,[426,57,359,209]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":547,"y":73,"width":462,"height":268}}
};
image116784.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj116784Img\" src=\"images/pills-3673645_1920.jpg\" alt=\"pills-3673645_1920\" title=\"pills-3673645_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 316px; height: 188px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 211px; top: 155px; width: 316px; height: 188px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj116784",
	bInsAnc:	0,
	cwObj:		{
		"name":	"pills-3673645_1920"
	},
	objData:	{"a":[0,288,0,[211,155,316,188]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":271,"y":199,"width":406,"height":242}}
};
image116786.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj116786Img\" src=\"images/lithium-2784853_1920.png\" alt=\"lithium-2784853_1920\" title=\"lithium-2784853_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 101px; height: 67px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 684px; top: 263px; width: 101px; height: 67px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj116786",
	bInsAnc:	0,
	cwObj:		{
		"name":	"lithium-2784853_1920"
	},
	objData:	{"a":[0,288,0,[684,263,101,67]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":879,"y":338,"width":130,"height":86}}
};
image116788.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj116788Img\" src=\"images/laboratory-1009190_1920.jpg\" alt=\"laboratory-1009190_1920\" title=\"laboratory-1009190_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 304px; height: 201px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 199px; top: 314px; width: 304px; height: 201px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj116788",
	bInsAnc:	0,
	cwObj:		{
		"name":	"laboratory-1009190_1920"
	},
	objData:	{"a":[0,288,0,[199,314,304,201]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":256,"y":404,"width":391,"height":258}}
};
image116790.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj116790Img\" src=\"images/dna-3539309_1920.jpg\" alt=\"dna-3539309_1920\" title=\"dna-3539309_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 233px; height: 115px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 440px; top: 244px; width: 233px; height: 115px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj116790",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dna-3539309_1920"
	},
	objData:	{"a":[0,288,0,[440,244,233,115]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":313,"width":299,"height":148}}
};
audio104431.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"sndtobj104431\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 24px;\"></div>",
	cssText:	"position: absolute; left: 0px; top: -39px; width: 300px; height: 24px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj104431",
	bInsAnc:	0,
	stdHtml:	'<audio id="swftobj104431" name="swftobj104431" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/silence.mp3" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/silence.mp3',
	cwObj:		{
		"name":	"silence"
	},
	objData:	{"a":[0,131104,0,[0,-39,300,24,0]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":0,"y":-50,"width":300,"height":24},"iDisplay":2,"sndFile":"","hasEvents":0,"supportsEvents":true,"linkName":"media/silence.mp3","initHidden":false,"hasCaptions":false,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":1,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":24}
};
og104432.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og104432",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton111115.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 89px; top: 250px; width: 50px; height: 64px; z-index: 10; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj111115",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton111115.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text111121.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[89,250,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":214,"y":150,"width":50,"height":51},"imgDataNormal":"images/desktop_shape111115.png","imgDataOver":"images/desktop_shape111115_over.png","imgDataDown":"images/desktop_shape111115_down.png","imgDataDisabled":"images/desktop_shape111115_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_1\" title=\"Hotspot_1\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton117856.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 89px; top: 250px; width: 50px; height: 64px; z-index: 11; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj117856",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_6",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton117856.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text117863.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[89,250,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":148,"y":323,"width":50,"height":51},"imgDataNormal":"images/desktop_shape111115.png","imgDataOver":"images/desktop_shape111115_over.png","imgDataDown":"images/desktop_shape111115_down.png","imgDataDisabled":"images/desktop_shape111115_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_6\" title=\"Hotspot_6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton111130.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 394px; top: 195px; width: 50px; height: 64px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj111130",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton111130.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text111134.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[394,195,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":424,"y":269,"width":50,"height":50},"imgDataNormal":"images/desktop_shape111130.png","imgDataOver":"images/desktop_shape111130_over.png","imgDataDown":"images/desktop_shape111130_down.png","imgDataDisabled":"images/desktop_shape111130_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_2\" title=\"Hotspot_2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton111139.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 604px; top: 196px; width: 50px; height: 64px; z-index: 13; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj111139",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton111139.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text111143.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[604,196,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":821,"y":155,"width":50,"height":50},"imgDataNormal":"images/desktop_shape111130.png","imgDataOver":"images/desktop_shape111130_over.png","imgDataDown":"images/desktop_shape111130_down.png","imgDataDisabled":"images/desktop_shape111130_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_3\" title=\"Hotspot_3\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton111148.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 162px; top: 363px; width: 50px; height: 64px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj111148",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton111148.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text111152.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[162,363,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":365,"y":408,"width":50,"height":50},"imgDataNormal":"images/desktop_shape111130.png","imgDataOver":"images/desktop_shape111130_over.png","imgDataDown":"images/desktop_shape111130_down.png","imgDataDisabled":"images/desktop_shape111130_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_4\" title=\"Hotspot_4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton111157.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 548px; top: 343px; width: 50px; height: 64px; z-index: 15; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj111157",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_5",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton111157.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text111161.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[548,343,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":953,"y":319,"width":50,"height":50},"imgDataNormal":"images/desktop_shape111130.png","imgDataOver":"images/desktop_shape111130_over.png","imgDataDown":"images/desktop_shape111130_down.png","imgDataDisabled":"images/desktop_shape111130_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_5\" title=\"Hotspot_5\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text111121.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 360px; height: 180px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 300px; height: 120px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">X</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\"> </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(65, 64, 66); font-family: Arial, sans-serif;\">Eple, frukt -&nbsp;mat direkte fra naturen</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">Eple&nbsp;består av kjemiske stoffer laget av naturen selv. Eple inneholder bl.a karbohydrater og vitaminer</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 153px; top: 185px; width: 360px; height: 180px; z-index: 16; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111121",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text111121.eatOnUp==true ){
        text111121.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[153,185,360,180]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":244,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
text111134.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 360px; height: 207px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 300px; height: 207px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt;\"><span style=\"font-family: &quot;Arial Black&quot;, sans-serif; color: rgb(255, 255, 255);\">X</span><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255);\"> </span></span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(65, 64, 66); font-family: Arial, sans-serif;\">Medisiner</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">Alle medisiner er laget ved hjelp av kjemiske prosesser. Ca halvparten av medisinene er laget fra naturlige råvarer, mens den andre halvparten er laget fra bunnen av fra syntetiske stoffer.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 131px; width: 360px; height: 215px; z-index: 17; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111134",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text111134.eatOnUp==true ){
        text111134.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[19,131,360,207]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":402,"y":377,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
text111143.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 360px; height: 180px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 300px; height: 120px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">X</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\"> </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#414042;\">Naturen</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-family: Arial, sans-serif; font-size:12pt; color: rgb(255, 255, 255);\">......er full av kjemiske stoffer! Trær og blomster bruker kjemiske stoffer for å kommunisere</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 229px; top: 131px; width: 360px; height: 180px; z-index: 18; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111143",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text111143.eatOnUp==true ){
        text111143.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[229,131,360,180]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":328,"y":198,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
text111152.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 360px; height: 207px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 300px; height: 207px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt;\"><span style=\"font-family: &quot;Arial Black&quot;, sans-serif; color: rgb(255, 255, 255);\">X</span><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255);\"> </span></span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; background-color: transparent; color: rgb(65, 64, 66); font-family: Arial, sans-serif;\">Kjemi på laboratoriet</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; background-color: transparent; color: rgb(255, 255, 255);\">______________________________________________________________________________________</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">Det er nesten bare kreativiteten som setter grenser for hvilke stoffer som kan lages i et kjemisk laboratorium. Kanskje det blir du som&nbsp;en dag syntetiserer enda et nytt stoff?&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 226px; top: 298px; width: 360px; height: 215px; z-index: 19; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111152",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text111152.eatOnUp==true ){
        text111152.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[226,298,360,207]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":65,"y":482,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
text111161.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 360px; height: 192px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 300px; height: 192px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt;\"><span style=\"font-family: &quot;Arial Black&quot;, sans-serif; color: rgb(255, 255, 255);\">X</span><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255);\"> </span></span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(65, 64, 66); font-family: Arial, sans-serif;\">Atomer&nbsp;</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">Atom betyr \"udelelig\" og lenge trodde man at atomene var de minste delene som alt besto av. I dag vet vi at atomene består av protoner, nøytroner og elektroner.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 173px; top: 278px; width: 360px; height: 200px; z-index: 20; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111161",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_5",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text111161.eatOnUp==true ){
        text111161.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[173,278,360,192]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":659,"y":424,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
text117863.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 360px; height: 223px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 300px; height: 223px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt;\"><span style=\"font-family: &quot;Arial Black&quot;, sans-serif; color: rgb(255, 255, 255);\">X</span><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255);\"> </span></span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(65, 64, 66); font-family: Arial, sans-serif;\">Batterier&nbsp;</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">...er fulle av kjemi!</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">​</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">Kjemiske reaksjoner i batteriet&nbsp;frigjør elektroner, som brukes som elektrisk energi (=\"strøm\") i alle de elektriske dippeduttene våre.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 173px; top: 278px; width: 360px; height: 231px; z-index: 21; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj117863",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_6",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text117863.eatOnUp==true ){
        text117863.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[173,278,360,223]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":265,"y":232,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
text104449.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 215px; height: 265px; background-color: rgb(255, 217, 102);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 13px; top: 13px; width: 189px; height: 265px;\"><p align=\"center\" leglh=\"1.384\" style=\"margin-left:0px;text-indent:0px;line-height:1.384;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Arial Black\', sans-serif; color:#414042;\">Alt er kjemiske stoffer</span></p>\n\n<p align=\"center\" leglh=\"1.384\" style=\"margin-left:0px;text-indent:0px;line-height:1.384;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; color: rgb(88, 89, 91); font-family: Arial, sans-serif;\">Vi omgir oss med kjemiske stoffer hele tida. Noen er farlige for oss, men de fleste er helt nødvendige for at vi skal kunne leve. Det finnes ikke noe liv uten kjemiske stoffer.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 223px; top: 81px; width: 215px; height: 273px; z-index: 22;",
	cssClasses:	"",
	htmlId:		"tobj104449",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Page_title"
	},
	objData:	{"a":[0,32,0,[223,81,215,265]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":287,"y":104,"width":276,"height":158},"dwTextFlags":0,"marginSize":13,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_PhoneLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	28
};
rcdObj.pgWidth_PhoneLandscape = pgWidth_phoneLand;
rcdObj.preload_PhoneLandscape = ["images/icn_devider.png","images/btn_back_normal.png","images/btn_back_hover.png","images/btn_next_normal.png","images/btn_next_hover.png","images/btn_mute_normal.png","images/btn_mute_hover.png","images/btn_sound_normal.png","images/btn_sound_hover.png","images/apple-1122537_1920.jpg","images/gummibarchen-318362_1920.jpg","images/road-1072823_1920.jpg","images/pills-3673645_1920.jpg","images/lithium-2784853_1920.png","images/laboratory-1009190_1920.jpg","images/dna-3539309_1920.jpg","images/chemistry-1027781_1920.jpg","images/battery-22119_1920.jpg"];
rcdObj.pgStyle_PhoneLandscape = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 527px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhoneLandscape = ["#FFFFFF","",0,0,1];
