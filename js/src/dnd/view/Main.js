define([
    "dojo/_base/declare", 
    "dijit/_WidgetBase", 
    "dijit/_TemplatedMixin",
    "dnd/view/EditItem",  
    "dojo/text!dnd/view/Main/template.html"
], function(
    declare, 
    _WidgetBase, 
    _TemplatedMixin,
    EditItem, 
    template
) {
   return declare([_WidgetBase, _TemplatedMixin], {
      templateString: template,
      declaredClass: "main",
      postCreate: function() {
          this.inherited(arguments);
          var editItem = new EditItem({}, this.itemEditNode);
          editItem.startup();
      }
   });
});