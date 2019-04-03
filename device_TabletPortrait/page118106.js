if (window.VarCurrentView) VarCurrentView.set('TabletPortrait');
function init_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
text117880.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 270px; height: 26px; background-color: rgb(238, 238, 238);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 260px; height: 26px;\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:10pt;\">&lt;Breadcrumb Auto Text&gt;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 9px; top: 77px; width: 270px; height: 34px; z-index: 15;",
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
	objData:	{"a":[0,64,0,[9,77,270,26]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":11,"y":77,"width":347,"height":25},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
og2596.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2596",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape164.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 786 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(393 28)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(393 28)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.816305412076433\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: -0.49999999999817746px; width: 786px; height: 56px; z-index: 26; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj164",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header_Background"
	},
	objData:	{"a":[0,1048800,0,[-0.5,-0.49999999999817746,786,56]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.300000","depth":0,"color":"#000000","blurradius":6,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":56},"btnState":"disabled","altValue":"Header_Background","titleValue":"Header_Background","fallbackImg":"<img src=\"images/desktop_shape164.png\" alt=\"Header_Background\" title=\"Header_Background\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton116700.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 132 32\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(66 16)\" style=\"\">\n	<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(66 16)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 15.5px; top: 9.500000000000304px; width: 132px; height: 32px; z-index: 27; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,1081440,0,[15.5,9.500000000000304,132,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":10,"width":170,"height":41},"imgDataNormal":"images/desktop_shape116700.png","imgDataOver":"images/desktop_shape116700.png","imgDataDown":"images/desktop_shape116700.png","imgDataDisabled":"images/desktop_shape116700_disabled.png","svgDataNormal":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(66 16)\" style=\"\">\n\t<path d=\"M 7.75 0 L 123.25 0 A 7.75 7.75 0 0 1 131 7.75 L 131 23.25 A 7.75 7.75 0 0 1 123.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-65.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(66 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.897709601221374\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-55.98\" y=\"4.06\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"GÅ TIL FORSIDEN","titleValue":"GÅ TIL FORSIDEN","fallbackImg":"<img alt=\"Hovedmeny knapp\" title=\"Hovedmeny knapp\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1733.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_118106_104266_13598\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13598&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 553.9999999999999px; top: 8.000000000000068px; width: 40px; height: 40px; z-index: 28; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,1083840,0,[553.9999999999999,8.000000000000068,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape1733.png","imgDataOver":"images/desktop_shape1733_over.png","imgDataDown":"images/desktop_shape1733.png","imgDataDisabled":"images/desktop_shape1733_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13598\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13598&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13600\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13600&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13602\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13602&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13604\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13604&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_SoundOn","titleValue":"Button_SoundOn","fallbackImg":"<img alt=\"Button_SoundOn\" title=\"Button_SoundOn\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2012.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_118106_104266_13606\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13606&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 553.9999999999999px; top: 8.000000000000068px; width: 40px; height: 40px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,1083840,0,[553.9999999999999,8.000000000000068,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape2012.png","imgDataOver":"images/desktop_shape2012_over.png","imgDataDown":"images/desktop_shape2012.png","imgDataDisabled":"images/desktop_shape2012_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13606\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13606&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13608\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13608&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13610\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13610&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13612\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13612&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_SoundOff","titleValue":"Button_SoundOff","fallbackImg":"<img alt=\"Button_SoundOff\" title=\"Button_SoundOff\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image387.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj387Img\" src=\"images/icn_devider.png\" alt=\"icn_devider\" title=\"icn_devider\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 38px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 617px; top: 10px; width: 30px; height: 38px; z-index: 30;",
	cssClasses:	"",
	htmlId:		"tobj387",
	bInsAnc:	0,
	cwObj:		{
		"name":	"icn_devider"
	},
	objData:	{"a":[0,1051104,0,[617,10,30,38]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":9,"width":30,"height":38}}
};
textbutton563.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_118106_104266_13614\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13614&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 661.9999999999999px; top: 8.000000000000068px; width: 40px; height: 40px; z-index: 31; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj563",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Back",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowSetState_disable',actItem:function(){ if(VarPageInTitle.equals('1'))textbutton563.setState('disabled');else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_previous_page',actItem:function(){ trivExitPage('page118388.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083872,0,[661.9999999999999,8.000000000000068,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":131,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape563.png","imgDataOver":"images/desktop_shape563_over.png","imgDataDown":"images/desktop_shape563.png","imgDataDisabled":"images/desktop_shape563_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13614\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13614&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13616\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13616&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13618\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13618&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13620\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13620&quot;); fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.2;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_Back","titleValue":"Button_Back","fallbackImg":"<img alt=\"Button_Back\" title=\"Button_Back\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1166.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_118106_104266_13622\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13622&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 715.9999999999999px; top: 8.000000000000068px; width: 40px; height: 40px; z-index: 32; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1166",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Next",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowSetState_disable',actItem:function(){ if(VarPageInTitle.equals(VarPagesInTitle.getValue()))textbutton1166.setState('disabled');else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_next_page',actItem:function(){ trivExitPage('page118166.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083872,0,[715.9999999999999,8.000000000000068,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape1166.png","imgDataOver":"images/desktop_shape1166_over.png","imgDataDown":"images/desktop_shape1166.png","imgDataDisabled":"images/desktop_shape1166_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13622\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13622&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13624\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13624&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13626\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13626&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_118106_104266_13628\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_118106_104266_13628&quot;); fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.2;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_Next","titleValue":"Button_Next","fallbackImg":"<img alt=\"Button_Next\" title=\"Button_Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text118448.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 67px; min-height: 21px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 67px; min-height: 21px;\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:10pt;\">Side</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 635px; width: 67px; height: 21px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj118448",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Page Count",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'Set Page in Title',actItem:function(){ text118448.changeContents( "Side " +  VarPageInTitle.getValueForDisplay() + " " ); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:11,delay:0,name:'Show Text',actItem:function(){ text118448.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[0,635,67,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":635,"width":86,"height":27},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og118447.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og118447",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image118119.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj118119Img\" src=\"images/Skjermbilde%202019-03-20%2013.33.24.png\" alt=\"Skjermbilde 2019-03-20 13.33.24\" title=\"Skjermbilde 2019-03-20 13.33.24\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 322px; height: 187px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 359px; top: 102px; width: 322px; height: 187px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj118119",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Skjermbilde 2019-03-20 13.33.24"
	},
	objData:	{"a":[0,288,0,[359,102,322,187]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":461,"y":102,"width":414,"height":240}}
};
text118435.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(255, 153, 0); width: 91px; height: 97px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 83px; height: 97px;\"><p style=\"text-align:left\"><span style=\"font-size:10pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">Her ser du atomet du bygger sin plassering i periodesystemet​</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 685px; top: 103px; width: 93px; height: 105px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj118435",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[0,32,0,[685,103,93,97]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#ff9900","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":880,"y":103,"width":119,"height":75},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text118434.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 120, 228); width: 91px; height: 82px;\"><div id=\"dCon3\" style=\"position: absolute; background-clip: content-box; left: 0px; top: 0px; height: 78px; width: 89px; border: 1px solid rgb(0, 120, 228);\"></div><div name=\"dCon2\" class=\"ttxt\" style=\"left: 6px; top: 6px; width: 81px; height: 82px;\"><p style=\"text-align:left\"><span style=\"font-size:10pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">Her ser du nukleontallet til atomet du bygger​</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 480px; top: 151px; width: 93px; height: 90px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj118434",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 6"
	},
	objData:	{"a":[0,32,0,[480,151,93,82]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#0078e4","borderWeight":1,"lineStyle":0,"borderColor":"#0078e4"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":617,"y":151,"width":119,"height":57},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
shape118433.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 31.5 15.5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(16 8)\" style=\"\">\n	<path d=\"M 30.5 4.28 L 7 4.28 L 7 0.5 L 0.5 7.5 L 7 14.5 L 7 10.72 L 30.5 10.72 L 30.5 4.28 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 120, 228); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(16 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.006451287741937\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.1\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 555.8295322079808px; top: 184.09449184009742px; width: 31.5px; height: 15.5px; z-index: 4; transform: rotate(212deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(212deg) ; -webkit-transform:rotate(212deg) ; -o-transform:rotate(212deg) ; -ms-transform:rotate(212deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-0.8480480961564261, M12=0.5299192642332048, M21=-0.5299192642332048, M22=-0.8480480961564261) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-0.8480480961564261, M12=0.5299192642332048, M21=-0.5299192642332048, M22=-0.8480480961564261) ",
	cssClasses:	"",
	htmlId:		"tobj118433",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow Left"
	},
	objData:	{"a":[0,32,0,[555.8295322079808,184.09449184009742,31.5,15.5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":212,"anchorX":50,"anchorY":50},"desktopRect":{"x":715,"y":184,"width":41,"height":20},"btnState":"disabled","altValue":"Arrow Left","titleValue":"Arrow Left","fallbackImg":"<img src=\"images/desktop_shape118455.png\" alt=\"Arrow Left\" title=\"Arrow Left\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text118432.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 158, 15); width: 91px; height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 83px; height: 80px;\"><p style=\"text-align:left\"><span style=\"font-size:10pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">Her ser du ladningen til atomet du bygger​</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 663px; top: 183px; width: 93px; height: 88px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj118432",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 5"
	},
	objData:	{"a":[0,32,0,[663,183,93,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#009e0f","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":852,"y":183,"width":119,"height":56},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text118443.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(255, 0, 255); width: 91px; height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 83px; height: 80px;\"><p style=\"text-align:left\"><span style=\"font-size:10pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">Her ser du atomnummeret&nbsp;til atomet du bygger​</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 625px; top: 252px; width: 93px; height: 88px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj118443",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 5"
	},
	objData:	{"a":[0,32,0,[625,252,93,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#ff00ff","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":803,"y":252,"width":119,"height":56},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
shape118431.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 33.5 15.5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(16.5 7.5)\" style=\"\">\n	<path d=\"M 32.5 4.28 L 7 4.28 L 7 0.5 L 0.5 7.5 L 7 14.5 L 7 10.72 L 32.5 10.72 L 32.5 4.28 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 158, 15); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-16.5, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(16.5 7.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.99393906909091\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.09\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 629px; top: 198px; width: 33.5px; height: 15.5px; z-index: 7; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj118431",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow Left"
	},
	objData:	{"a":[0,32,0,[629,198,33.5,15.5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":808,"y":198,"width":43,"height":20},"btnState":"disabled","altValue":"Arrow Left","titleValue":"Arrow Left","fallbackImg":"<img src=\"images/desktop_shape118458.png\" alt=\"Arrow Left\" title=\"Arrow Left\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape118439.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 33.5 17.5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(16.5 9)\" style=\"\">\n	<path d=\"M 32.5 5.49 L 8 5.49 L 8 0.5 L 0.5 8.5 L 8 16.5 L 8 11.51 L 32.5 11.51 L 32.5 5.49 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 0, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-16.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(16.5 9)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.99393906909091\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.09\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 599.0881047889112px; top: 252.64663099248173px; width: 33.5px; height: 17.5px; z-index: 8; transform: rotate(28deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(28deg) ; -webkit-transform:rotate(28deg) ; -o-transform:rotate(28deg) ; -ms-transform:rotate(28deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ",
	cssClasses:	"",
	htmlId:		"tobj118439",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow Left"
	},
	objData:	{"a":[0,32,0,[599.0881047889112,252.64663099248173,33.5,17.5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":28,"anchorX":50,"anchorY":50},"desktopRect":{"x":770,"y":253,"width":43,"height":23},"btnState":"disabled","altValue":"Arrow Left","titleValue":"Arrow Left","fallbackImg":"<img src=\"images/desktop_shape118459.png\" alt=\"Arrow Left\" title=\"Arrow Left\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape118430.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 31.5 15.5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(16 8)\" style=\"\">\n	<path d=\"M 30.5 4.28 L 7 4.28 L 7 0.5 L 0.5 7.5 L 7 14.5 L 7 10.72 L 30.5 10.72 L 30.5 4.28 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 153, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(16 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.006451287741937\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.1\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 650.5px; top: 128.5px; width: 31.5px; height: 15.5px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj118430",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow Left"
	},
	objData:	{"a":[0,32,0,[650.5,128.5,31.5,15.5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":837,"y":129,"width":41,"height":20},"btnState":"disabled","altValue":"Arrow Left","titleValue":"Arrow Left","fallbackImg":"<img src=\"images/desktop_shape118460.png\" alt=\"Arrow Left\" title=\"Arrow Left\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text118426.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 0, 0); width: 188px; height: 64px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 180px; height: 64px;\"><p style=\"text-align:left\"><span style=\"font-size:10pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">Her velger du mellom</span></p>\n\n<p style=\"text-align:left\"><span style=\"font-size:10pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">\"<strong>Bygg</strong> <strong>atom</strong>\", \"<strong>Symbol</strong>\" og \"<strong>Spill</strong>\"​</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 387px; top: 362px; width: 190px; height: 72px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj118426",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 3"
	},
	objData:	{"a":[0,32,0,[387,362,190,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":497,"y":362,"width":244,"height":52},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
shape118425.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 30.5 27.5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(15.5 14)\" style=\"\">\n	<path d=\"M 0.5 21 L 20 3 L 16.67 0.5 L 29.5 0.5 L 29.5 12 L 26.67 9 L 6.67 26.5 L 0.5 21 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 153, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15, -13.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(15.5 14)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.013333008\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.1\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 491.5px; top: 346.5px; width: 30.5px; height: 27.5px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj118425",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow Bottom Left to Top Right"
	},
	objData:	{"a":[0,32,0,[491.5,346.5,30.5,27.5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":633,"y":347,"width":39,"height":36},"btnState":"disabled","altValue":"Arrow Bottom Left to Top Right","titleValue":"Arrow Bottom Left to Top Right","fallbackImg":"<img src=\"images/desktop_shape118462.png\" alt=\"Arrow Bottom Left to Top Right\" title=\"Arrow Bottom Left to Top Right\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text118424.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(255, 153, 0); width: 91px; height: 36px;\"><div id=\"dCon3\" style=\"position: absolute; background-clip: content-box; left: 0px; top: 0px; height: 28px; width: 85px; border: 3px solid rgb(255, 153, 0);\"></div><div name=\"dCon2\" class=\"ttxt\" style=\"left: 8px; top: 8px; width: 77px; height: 36px;\"><p style=\"text-align:left\"><span style=\"font-family:Arial,sans-serif;font-size:12pt;color:#000000\">​<br></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 475px; top: 311px; width: 93px; height: 44px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj118424",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[475,311,93,36]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#ff9900","borderWeight":3,"lineStyle":0,"borderColor":"#ff9900"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":610,"y":311,"width":119,"height":34},"dwTextFlags":16,"marginSize":5,"textPublishLang":"Inherit"}
};
qu118525.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu118525",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"undefined",
				"questType":	4,
				"dwQuestFlags":	0,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	[],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_118525
	},
	objData:	{"a":[0,32,0,[]]}
};
text118530.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 477px; min-height: 260px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 477px; min-height: 260px;\"><label for=\"frmobj118531\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">Bruk oppgaven \"symbol\"</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">​</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">1) Fyll inn 6 protoner</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">​</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">2) Hvilket grunnstoff er dette?</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">​</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">​3) Fyll deretter inn inn ett og ett nøytron.</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">​</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">4) Beskriv hvordan plasseringen i periodesystemet forandrer seg.</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">​</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">5) Beskriv hvordan atomnummeret forandrer seg</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">​</span></p><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">6) Beskriv hvordan nukleontallet forandrer seg</span></p></label></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 100px; width: 477px; height: 260px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj118530",
	bInsAnc:	0,
	fieldsetId:	'fset118525',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[50,100,477,260]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":372,"width":373,"height":260},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
entry118531.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<textarea maxlength=\"1024\" name=\"Entry field\" id=\"frmobj118531\" title=\"Entry field\" onpropertychange=\"if( !VarQuestion_118525.equals(this.value) ) {qu118525.hasBeenProcessed=false;VarQuestion_118525.set(this.value);}\" onchange=\"if( !VarQuestion_118525.equals(this.value) ) {qu118525.hasBeenProcessed=false;VarQuestion_118525.set(this.value);}\" onkeyup=\"if( !VarQuestion_118525.equals(this.value) ) {qu118525.hasBeenProcessed=false;VarQuestion_118525.set(this.value);}\" onblur=\"if (!qu118525.hasBeenProcessed) qu118525.questionUpdated()\" style=\"font-size: 12pt; font-family: Arial, sans-serif; margin: 0px; padding: 0px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); position: absolute; left: 0px; top: 0px; width: 420px; height: 200px;\"></textarea>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 370px; width: 424px; height: 204px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj118531",
	bInsAnc:	0,
	fieldsetId:	'fset118525',
	cwObj:		{
		"name":	"Entry field"
	},
	objData:	{"a":[0,32,0,[50,370,420,200]],"rcdOvr":{"res":0},"desktopRect":{"x":494,"y":427,"width":420,"height":200},"formType":2,"dwFormFlags":4,"iNumChars":1024}
};
rcdObj.rcdData.att_TabletPortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	28
};
rcdObj.pgWidth_TabletPortrait = pgWidth_tabletPort;
rcdObj.preload_TabletPortrait = ["images/icn_devider.png","images/btn_back_normal.png","images/btn_back_hover.png","images/btn_next_normal.png","images/btn_next_hover.png","images/btn_mute_normal.png","images/btn_mute_hover.png","images/btn_sound_normal.png","images/btn_sound_hover.png","images/Skjermbilde%202019-03-20%2013.33.24.png"];
rcdObj.pgStyle_TabletPortrait = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 664px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletPortrait = ["#FFFFFF","",0,0,1];
