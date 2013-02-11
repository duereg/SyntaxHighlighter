;(function()
{
	// CommonJS
  if (typeof require !== 'undefined') {
    this.SyntaxHighlighter = require('shCore').SyntaxHighlighter;
  }
  if (!this.SyntaxHighlighter) {
    return;
  }

	function Brush()
	{
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['text', 'plain'];

	SyntaxHighlighter.brushes.Plain = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
