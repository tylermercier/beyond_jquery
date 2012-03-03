// module pattern example
var Profiler = (function () {
	return {
		run: function (description, func) {
			var start = new Date();
			func();
			var duration = new Date().getTime() - start.getTime();
			console.info("Call to function %o took %oms", description, duration);
		}
	};
}());