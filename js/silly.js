var SILLY = (function(module){

	module.Doit = function(resultObject){
		resultObject.prepend(Date()+'<br/>');
	};
	
	return module;
}(SILLY || {}));