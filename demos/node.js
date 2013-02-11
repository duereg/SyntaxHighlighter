//This version of the node.js demo requires that the NODE_PATH variable be set to the /scripts/ folder

var sys = require('sys'),
	//shSyntaxHighlighter = require('shCore').SyntaxHighlighter,
	shJScript = require('shBrushJScript').Brush,
	
	code = '\
		function helloWorld()\
		{\
			// this is great!\
			for(var i = 0; i <= 1; i++)\
				alert("yay");\
		}\
		',
	brush = new shJScript()
	;

brush.init({ toolbar: false });
sys.puts(brush.getHtml(code));
