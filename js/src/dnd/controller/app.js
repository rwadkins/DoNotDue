define([
    "dojo/query",
    "dnd/view/App"
], function(
    query, 
    AppView
) {
    var app = {
        initialize: function() {
            this.log("App Initialize!");
            
            this.mainContent = query("#content-main")[0];
            this.build();
            
        },
        
        build: function() {
            this.log("build started");

            var app = new AppView({},this.mainContent);
        },
        
        log: function() {
            console.log.apply(console, arguments);
        }
    }
    
    return app; 
});
