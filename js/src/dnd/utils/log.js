define([], function() {

    var log = function() {
        console.log.apply(console, arguments);
    }

    return log;
})