require(["dojo/has", "dojo/ready", "dnd/controller/app"], function(has, ready, app) {
    // console.log(config);
    if (has("deviceReady")) {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
    else {
        ready(onDeviceReady);
    }
    
    function onDeviceReady() {
        console.log("i'm Ready!!!");
        app.initialize();
    }        
});