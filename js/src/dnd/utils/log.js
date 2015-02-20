define([], function() {
	return {
        log: function() {
            console.log.apply(console, arguments);
        }

	}
})