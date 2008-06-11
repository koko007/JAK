/**
 * @overview Prace s SVG
 * @version 2.0
 * @author Wendigo, Zara
 */ 
 
/**
 * @class konstruktor
 * @see SZN.Vector#$constructor
 */ 
SZN.SVG = SZN.ClassMaker.makeClass({
	NAME: "SVG",
	VERSION: "2.0",
	CLASS: "class",
	IMPLEMENT: SZN.Vector.Canvas
})

SZN.SVG.prototype.ns = "http://www.w3.org/2000/svg";
SZN.SVG.prototype.xlinkns = "http://www.w3.org/1999/xlink";

SZN.SVG.prototype.$constructor = function(width, height) {
	var svg = document.createElementNS(this.ns, "svg");
	svg.style.position = "absolute";
	svg.setAttribute("width", width);
	svg.setAttribute("height", height);
	svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", this.xlinkns);

	SZN.Events.addListener(svg,'mousemove',SZN.Events.cancelDef,false,false)
	SZN.Events.addListener(svg,'mousedown',SZN.Events.cancelDef,false,false)
	SZN.Events.addListener(svg,'mouseup',SZN.Events.cancelDef,false,false)

	this.canvas = svg;
};

/**
 * destruktor
 * @method
 */   
SZN.SVG.prototype.$destructor = function() {
	SZN.Events.removeListener(this.canvas,'mousemove',SZN.Events.cancelDef,false,false)
	SZN.Events.removeListener(this.canvas,'mousedown',SZN.Events.cancelDef,false,false)
	SZN.Events.removeListener(this.canvas,'mouseup',SZN.Events.cancelDef,false,false)

	if (this.canvas.parentNode && this.canvas.parentNode.nodeType == 1) { this.canvas.parentNode.removeChild(this.canvas); }
	this.canvas = null;
};

/**
 * @see SZN.Vector#getContainer
 */   
SZN.SVG.prototype.getContainer = function() {
	return this.canvas;
};

/**
 * @see SZN.Vector#getContent
 */   
SZN.SVG.prototype.getContent = function() {
	return this.canvas;
};

/**
 * @see SZN.Vector#clear
 */   
SZN.SVG.prototype.clear = function() {
	SZN.Dom.clear(this.canvas);
};

/**
 * @see SZN.Vector#resize
 */   
SZN.SVG.prototype.resize = function(width, height) {
	this.canvas.setAttribute("width", width);
	this.canvas.setAttribute("height", height);
};

/**
 * @see SZN.Vector#polyline
 */   
SZN.SVG.prototype.polyline = function() {
	var el = document.createElementNS(this.ns, "polyline");
	el.setAttribute("fill", "none");
	el.setAttribute("stroke", "none");
	el.setAttribute("stroke-linejoin", "round");
	el.setAttribute("stroke-linecap", "round");

	return el;
};

/**
 * @see SZN.Vector#circle
 */   
SZN.SVG.prototype.circle = function() {
	var el = document.createElementNS(this.ns, "circle");
	el.setAttribute("fill", "none");
	el.setAttribute("stroke", "none");
	return el;
};

/**
 * @see SZN.Vector#polygon
 */   
SZN.SVG.prototype.polygon = function() {
	var el = document.createElementNS(this.ns, "polygon");
	el.setAttribute("fill", "none");
	el.setAttribute("stroke", "none");
	el.setAttribute("stroke-linejoin", "round");
	el.setAttribute("stroke-linecap", "round");
	
	return el;
};

/**
 * @see SZN.Vector#path
 */   
SZN.SVG.prototype.path = function() {
	var el = document.createElementNS(this.ns, "path");
	el.setAttribute("fill", "none");
	el.setAttribute("stroke", "none");
	el.setAttribute("stroke-linejoin", "round");
	el.setAttribute("stroke-linecap", "round");

	return el;
}

/**
 * @see SZN.Vector#setStroke
 */
SZN.SVG.prototype.setStroke = function(element, options) {
	if ("color" in options) { element.setAttribute("stroke", options.color); }
	if ("opacity" in options) { element.setAttribute("stroke-opacity", options.opacity); }
	if ("width" in options) { element.setAttribute("stroke-width", options.width); }
}

/**
 * @see SZN.Vector#setFill
 */   
SZN.SVG.prototype.setFill = function(element, options) {
	if ("color" in options) { element.setAttribute("fill", options.color); }
	if ("opacity" in options) { element.setAttribute("fill-opacity", options.opacity); }
}

/**
 * @see SZN.Vector#setCenterRadius
 */   
SZN.SVG.prototype.setCenterRadius = function(element, center, radius) {
	element.setAttribute("cx", center.getX());
	element.setAttribute("cy", center.getY());
	element.setAttribute("r", radius);
}

/**
 * @see SZN.Vector#setPoints
 */   
SZN.SVG.prototype.setPoints = function(element, points, closed) {
	var arr = points.map(function(item) { return item.join(" "); });
	element.setAttribute("points", arr.join(", "));
}

/**
 * @see SZN.Vector#setFormat
 */   
SZN.SVG.prototype.setFormat = function(element, format) {
	element.setAttribute("d", format);
}