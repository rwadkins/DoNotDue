define([
    "dojo/_base/declare", 
    "dijit/_WidgetBase", 
    "dijit/_TemplatedMixin", 
    "dnd/view/Header",
    "dojo/text!dnd/view/App/template.html"
], function(
    declare, 
    _WidgetBase, 
    _TemplatedMixin, 
    HeaderView,
    template
) {
    return declare("maybe", [_WidgetBase, _TemplatedMixin], {
        templateString : template,
               
        postCreate: function() {
            this.inherited(arguments);
            
            var header = new HeaderView({}, this.headerNode);
        }
    });
}); 