define([
    "dojo/query",
    "dnd/view/App",
    "dnd/utils/log"
], function(
    query, 
    AppView,
    log
) {
    var app = {
        initialize: function() {            
            this.mainContent = query("#content-main")[0];
            this.build();
        },
        
        build: function() {
            var app = new AppView({},this.mainContent);
        }
    };
    
    return app; 
});
