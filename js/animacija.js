(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"animacija_atlas_", frames: [[87,0,85,70],[0,144,85,70],[0,72,85,70],[0,0,85,70],[87,72,85,70]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["animacija_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1pngcopy = function() {
	this.spriteSheet = ss["animacija_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["animacija_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["animacija_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["animacija_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ag6BCIAAgDIAEAAQAJAAADgGQACgDABgLIAAhVQAAgMgDgDQgEgFgIAAIgEAAIAAgDIA4AAQAQAAAJACQAPAEAHAJQAIAJAAALQAAAKgFAIQgHAIgLAEQANACAHAGQAKAJgBANQAAAKgGAJQgGAJgLAEQgLAEgWAAgAgVACIAAA3QAMACAJAAQATAAAIgIQAKgIAAgLQAAgIgFgHQgDgHgKgEQgKgEgMAAIgLAAIgHAAgAgVg4IAAAyIAJABIAKABQANAAAHgDQAHgDAEgHQAEgGAAgIQAAgLgJgIQgKgJgRAAQgKAAgIADg");
	this.shape.setTransform(36.4,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AgUBFIAAgDQAHAAACgBQACgCABgDQACgCAAgJIAAgiQAAgOgBgEQAAgBgBAAQAAgBAAgBQAAAAgBgBQAAAAAAAAIgEgCIgHACIgBgEIAagLIAEAAIAABHQAAAJABACQABADADACQACABAGAAIAAADgAgFgzQgDgEAAgDQAAgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAADgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(73.9,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AgZAjQgLgNAAgWQAAgUAMgNQAMgNARAAQANAAAJAHQAIAHAAAHQAAAEgCACQgCACgFAAQgFAAgDgDQgCgCAAgGQgCgGgDgDQgDgDgGAAQgJAAgGAHQgIAKAAAQQAAAPAIAMQAIAMANAAQAJAAAIgGQAFgFAFgMIADACQgEARgLAKQgKAJgNAAQgOAAgLgMg");
	this.shape_2.setTransform(106.5,27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AgUBFIAAgDQAHAAACgBQACgCABgDQACgDAAgHIAAgjQAAgPgBgDQAAgBgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgEgBIgHACIgBgEIAagKIAEAAIAABHQAAAHABADQABADADACQACABAGAAIAAADgAgFgzQgDgEAAgDQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAADgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(73.9,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AgoA/QgDgDAAgFQAAgEACgCQADgDAFAAQADAAAFADIAGABQADAAADgDQADgDAEgJIAGgPIgghDIgEgHIgFgFIgHgDIAAgDIAqAAIAAADIgCAAQgFAAgCACQgCACAAADQAAAEADAHIAVAsIAUgxIABgIIAAgCIgCgCIgHgBIAAgDIAeAAIAAADIgFACIgFAEIgDAIIgkBYQgFANgJAHQgIAGgIAAQgGAAgEgDg");
	this.shape_4.setTransform(152.1,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AgUBFIAAgDQAHAAACgCQACgBABgDQACgDAAgHIAAgjQAAgOgBgEQAAgBgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgEgBIgHACIgBgDIAagLIAEAAIAABHQAAAHABADQABADADABQACACAGAAIAAADgAgFg0QgDgDAAgDQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAADgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_5.setTransform(73.9,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("AgZAjQgMgNAAgWQAAgUANgNQAMgNARAAQANAAAJAHQAIAHAAAHQAAAEgCACQgCACgFAAQgFAAgDgDQgCgCgBgGQgBgGgCgDQgEgDgGAAQgJAAgGAHQgIAKAAAQQAAAPAIAMQAIAMAMAAQAKAAAHgGQAGgFAFgMIADACQgEARgLAKQgKAJgNAAQgOAAgLgMg");
	this.shape_6.setTransform(194.5,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("AgUBFIAAgDQAGAAACgBQADgCABgDQABgCAAgIIAAhRQAAgPgBgDQAAgEgCgCIgEgBIgGACIgCgEIAagKIAEAAIAAB2QAAAIACACQABADACACQADABAHAAIAAADg");
	this.shape_7.setTransform(230.9,38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AgUBGIAAgEQAHAAACgCQACgBABgCQACgEAAgIIAAgiQAAgPgBgDQAAgBgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgEAAIgHABIgBgDIAagMIAEAAIAABHQAAAIABAEQABACADABQACACAGAAIAAAEgAgFg0QgDgCAAgFQAAgDADgDQADgEADAAQAEAAADAEQADADAAADQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(73.9,24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("AgZAjQgMgNAAgVQAAgWAMgNQAMgMAQAAQAQAAAJAKQAKAJAAARIg9AAQAAATAKALQAJAMANAAQAIAAAHgFQAGgFAFgMIADACQgCAOgKALQgKAKgPAAQgPAAgLgMgAgPghQgHAGgBALIAoAAQAAgIgCgEQgCgFgFgDQgFgEgEAAQgIAAgGAHg");
	this.shape_9.setTransform(273.5,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{y:29.5}}]},5).to({state:[{t:this.shape,p:{y:33.5}},{t:this.shape_1}]},3).to({state:[{t:this.shape,p:{y:32.5}},{t:this.shape_3},{t:this.shape_2,p:{y:27.7}}]},3).to({state:[{t:this.shape,p:{y:31.5}},{t:this.shape_5},{t:this.shape_2,p:{y:26.7}},{t:this.shape_4,p:{y:15.9}}]},3).to({state:[{t:this.shape,p:{y:32.5}},{t:this.shape_3},{t:this.shape_2,p:{y:27.7}},{t:this.shape_4,p:{y:16.9}},{t:this.shape_6,p:{y:16.7}}]},3).to({state:[{t:this.shape,p:{y:37.5}},{t:this.shape_8},{t:this.shape_2,p:{y:32.7}},{t:this.shape_4,p:{y:21.9}},{t:this.shape_6,p:{y:21.7}},{t:this.shape_7}]},3).to({state:[{t:this.shape,p:{y:37.5}},{t:this.shape_8},{t:this.shape_2,p:{y:32.7}},{t:this.shape_4,p:{y:21.9}},{t:this.shape_6,p:{y:21.7}},{t:this.shape_7},{t:this.shape_9}]},3).to({state:[]},1).wait(1));

	// Layer 11
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhJANQgFgEgBgGQgBgFAFgFQADgFAHAAQAkgEAeAAQAgAAAGABIAbADQAGAAAEAFQAEAEAAAGQAAAGgFAEQgFAEgGAAIgegDIghgBQgcAAgjAEIgCAAQgFAAgEgEg");
	this.shape_10.setTransform(6.5,58.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AkOASQgrgFgUgBIgygBQgdAAgjADQgHABgEgEQgFgEgBgGQgBgFAFgFQADgFAHgBQAkgDAfAAIAzABQAVABAsAFQApAFAWgDIAvgIIABAAQAbgEAlADQAiADAXgEIAAAAQAagEAqAIQAGACAEAFQADAFgBAFQgBAGgFAEQgGADgGgBQgjgHgXADIABAAQgaAEgmgDQgigDgYAEIABAAIgxAHQgKACgNAAQgUAAgbgDgAEoANQgZgEgXADQgaAEgkgBIAAAAIg/gBIg9AAQgGAAgEgEQgFgFAAgFQAAgGAFgEQAEgFAGAAIA9AAIBAABIAAAAQAhABAYgEQAcgDAdAFQAaAFAegDIAAAAIAtgDIABAAQAOAAAiABQAGABAEAEQAEAFAAAFQAAAGgFAEQgFAEgGAAIgsgBIguADIAAAAIgWABQgWAAgTgEg");
	this.shape_11.setTransform(45,59.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AFyAXQgcgDgcgDQgcgCgkgBQgGAAgFgEQgEgFAAgFQAAgGAEgFQAFgEAGAAQAmABAdACQAdADAcAEQAYADAUgIQAcgLAoAKIAAAAQAhAIAbgCIA9gFQAggDAkAAQAkAAARgCQAGAAAFADQAFAEABAGQABAGgEAEQgEAFgGABQgTACgmAAQgjAAgfADIg9AFQggACglgJQgdgHgVAHQgTAIgVAAIgTgCgABbARQgVgFggAAIgBAAIg9ABIg8ADIAAAAQgiADgdgGQgZgEgXADQgaAEgkgBIAAAAIhAgBIg8AAQgGAAgFgEQgEgFAAgFQAAgGAEgEQAFgFAGAAIA8AAIBBABIAAAAQAhABAYgEQAcgDAdAFQAaAFAegDIAAAAIA9gDIAAAAIA+gBIAAAAQAmAAAXAGIABAAQAVAGAggBIAAAAQAgAAAegIQAGgCAFADQAGADABAGQACAFgDAFQgDAGgGACQghAJglAAIAAAAIgFAAQghAAgXgGgArLASQgrgFgUgBIgygBQgdAAgkADQgGABgFgEQgEgEgBgGQgBgFAEgFQAEgFAGgBQAlgDAfAAIAzABQAVABAsAFQApAFAWgDIAvgIIABAAQAbgEAlADQAiADAWgEIABAAQAagEArAIQAGACADAFQAEAFgBAFQgBAGgGAEQgFADgGgBQgkgHgXADIAAAAQgZAEgmgDQgigDgYAEIABAAIgxAHQgKACgNAAQgUAAgbgDgANlALQgPgFgcgBQgdgBgeAJQgFACgGgDQgFgCgCgGQgCgFADgGQADgFAFgCQAkgLAhABQAjABASAHQAGADgDAEQAEgFAGgBQAGAAAFADQAFAEABAGQABAGgEAEQgEAJgLAAQgJAAgOgGg");
	this.shape_12.setTransform(89.6,59.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag6AXQgcgDgcgDQgcgCgkgBQgHAAgEgEQgEgFAAgFQAAgGAEgFQAFgEAGAAQAmABAdACQAcADAdAEQAYADAUgIQAbgLAoAKIAAAAQAgAIAcgCIA9gFQAggDAkAAQAkAAARgCQAGAAAFADQAFAEABAGQAAAGgDAEQgEAFgGABQgTACgmAAQgjAAgfADIg9AFQggACglgJQgdgHgVAHQgSAIgVAAIgTgCgAQLAUQgagGgjAAQgmABgZgCQgYgBgoACQgGABgFgFQgFgEAAgGQgBgFAFgFQAEgEAGgBQArgCAZABQAYACAkgBQAoAAAdAHIAAAAQAYAGAUgGQAagIAhABIBCABIAAAAQAiACATgDQAGAAAFADQAFAEABAGQAAAGgDAEQgEAFgGABQgVADglgCIhBgBQgcgBgWAHQgOAEgPAAQgPAAgQgEgAICAWQgYgDgggHQgfgGgegBQgdgBgeAJQgGACgFgDQgGgCgBgGQgCgFADgGQACgFAGgCQAjgLAiABQAgABAhAGIAAAAQAgAHAXADQAWADAfgCIAAAAQAdgBAWgIIABAAQAcgLApAMQAfALAcgIQAkgJAeAFQAGACADAFQAEAFgBAFQgCAGgFADQgFAEgGgBQgYgEgcAHQgkAKgogNQgegJgUAHIAAAAQgaAKgjABIAAAAIgWABQgUAAgQgCgAlRARQgVgFghAAIAAAAIg/ABIg7ADIgBAAQgiADgdgGQgZgEgXADQgaAEgjgBIgBAAIg/gBIg9AAQgGAAgEgEQgFgFAAgFQAAgGAFgEQAEgFAGAAIA9AAIBAABIAAAAQAhABAYgEQAcgDAeAFQAZAFAegDIAAAAIA9gDIABAAIA/gBIAAAAQAlAAAYAGIAAAAQAVAGAggBIAAAAQAhAAAdgIQAGgCAGADQAFADACAGQABAFgDAFQgDAGgGACQghAJgkAAIgBAAIgFAAQghAAgWgGgAx5ASQgrgFgUgBIgygBQgdAAgjADQgGABgFgEQgFgEgBgGQAAgFAEgFQAEgFAGgBQAlgDAeAAIA0ABQAUABAtAFQApAFAVgDIAwgIIAAAAQAbgEAmADQAhADAXgEIAAAAQAbgEAqAIQAGACAEAFQADAFgBAFQgBAGgFAEQgFADgGgBQglgHgXADIABAAQgaAEgmgDQghgDgYAEIAAAAIgxAHQgJACgOAAQgTAAgcgDgAUSAOQgGAAgFgEQgEgFAAgFQAAgGAEgEQAFgFAGAAIAbAAQAGAAAEAFQAFAEAAAGQAAAFgFAFQgEAEgGAAIgbAAg");
	this.shape_13.setTransform(132.5,59.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AnZAYQgcgEgcgCQgcgDgkAAQgHAAgEgFQgEgEAAgGQAAgGAEgEQAFgEAGAAQAmAAAdADQAcACAdAEQAYAEAUgIQAcgMAoAKIAAAAQAgAIAcgCIA9gFQAggCAkAAQAkAAARgCQAGgBAFAEQAFAEABAGQAAAFgDAFQgEAFgGABQgTACgmAAQgjAAgfACIg9AFQggADglgKQgdgHgVAIQgTAHgVAAIgTgBgASeAXIg8gHQgZgCglgHIAAAAQgggFgYAGIAAAAQgcAJgagBIhCgBQgGAAgFgFQgEgEAAgGQAAgFAEgFQAFgEAGAAIBDABIAAAAQAVABAXgHIABAAQAdgJAoAGIAAAAQAkAHAYACIA9AHIAAAAQAgAEAZgDIA6gJQAGgBAGADQAFAEABAGQABAFgEAFQgEAFgGABIg7AJQgNACgOAAQgSAAgUgCgAJsAUQgagGgjABQgmAAgZgBQgYgCgoADQgGAAgFgEQgFgEAAgGQgBgGAFgEQAEgFAGAAQArgDAZACQAYABAkAAQAogBAdAHIAAAAQAYAGAUgGQAagHAhAAIBCACIAAAAQAiABATgCQAGgBAFAEQAFAEABAGQAAAFgDAFQgEAFgGABQgVACglgBIhBgCQgcAAgWAGQgOAEgPAAQgPAAgQgEgABjAWQgYgDgggHQgfgFgdgBQgdgBgeAJQgGACgFgDQgGgDgBgGQgCgFADgFQACgGAGgCQAjgKAiABQAfABAhAGIAAAAQAgAGAXADQAWADAfgBIAAAAQAdgBAWgJIABAAQAcgLApANQAfAKAcgHQAkgKAeAGQAGABADAFQAEAFgBAFQgCAGgFAEQgFAEgGgCQgYgEgcAIQgkAJgogNQgegJgUAHIAAAAQgaALgjABIAAAAIgWAAQgUAAgQgCgArxASQgVgFggAAIgBAAIg+ABIg8ADIAAAAQgiACgdgFQgZgFgXADQgbAEgjgBIAAAAIhAAAIg8AAQgGAAgFgFQgEgEAAgGQAAgFAEgFQAFgEAGAAIA8AAIBBAAIAAAAQAgABAZgDQAcgEAdAFQAaAFAegCIAAAAIA9gDIAAAAIA/gBIAAAAQAlAAAYAGIABAAQAVAFAgAAIAAAAQAgAAAegJQAGgBAFADQAGADABAGQACAFgDAFQgDAFgGACQgiAKgkAAIAAAAIgFAAQghAAgXgGgA4YASQgrgFgUgBIgygBQgdAAgjAEQgGAAgFgEQgFgEgBgGQAAgFAEgFQAEgFAGAAQAlgEAeAAIA0ABQAUABAtAFQApAFAVgDIAwgHIAAAAQAbgEAmADQAhADAXgEIAAAAQAbgEAqAIQAGABAEAFQADAFgBAFQgBAHgFADQgFAEgGgCQglgHgXADIABAAQgaAFgmgDQghgDgYADIAAAAIgxAIQgJABgOAAQgTAAgcgDgAZhALQgZgEgdgBIgBAAQgegBghAEQgkAGgZgBIg0gCIAAAAQgagBgnAEQgGAAgFgEQgFgEAAgGQgBgFAEgFQAEgFAGAAQApgEAcABIAAAAIAzACIAAAAQAYABAhgFIAAAAQAjgFAhABIAAAAQAhABAbAFIAAAAQAXAFARgBIA9gBQAGAAAEAEQAFAEAAAGQAAAGgEAEQgFAFgGAAIg8ABIgHAAQgRAAgXgFg");
	this.shape_14.setTransform(174,59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},5).to({state:[{t:this.shape_13}]},5).to({state:[{t:this.shape_14}]},5).to({state:[{t:this.shape_14}]},4).wait(1));

	// Layer 5
	this.instance = new lib._1pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(343,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(6));

	// Layer 4
	this.instance_1 = new lib._4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(258,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(5).to({_off:true},1).wait(5));

	// Layer 3
	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(170,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(5).to({_off:true},1).wait(10));

	// Layer 2
	this.instance_3 = new lib._2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(85,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(5).to({_off:true},1).wait(15));

	// Layer 1
	this.instance_4 = new lib._1();
	this.instance_4.parent = this;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(3).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 600,
	height: 70,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/animacija_atlas_.png", id:"animacija_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;