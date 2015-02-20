define([
    "dojo/_base/declare", 
    "dijit/_WidgetBase", 
    "dijit/_TemplatedMixin",
    "dojo/topic",
    "dojo/_base/lang",
    "dojo/dom-class",
    "dnd/view/EditItem",  
    "dojo/text!dnd/view/Main/template.html"
], function(
    declare, 
    _WidgetBase, 
    _TemplatedMixin,
    topic,
    lang,
    domClass,
    EditItem, 
    template
) {
   return declare([_WidgetBase, _TemplatedMixin], {
      templateString: template,
      declaredClass: "main",
      postCreate: function() {
          this.inherited(arguments);
          this._createChildNodes();
      },
      startup: function() {
          this.inherited(arguments);
          this._pubSubBindings();
      },
      _pubSubBindings : function() {
          this.own(
            topic.subscribe("editItem", lang.hitch(this,"editItemSubscribe")),
            topic.subscribe("editItemDone", lang.hitch(this,"editItemDoneSubscribe"))
          );
      },
      _createChildNodes : function() {
          var editItem = new EditItem({}, this.itemEditNode);
          editItem.startup();
          this.own(editItem);
      },
      editItemSubscribe: function(e) {
          console.log("editItemSubscribe");
          domClass.add(this.domNode, "editItem");
      },
      editItemDoneSubscribe: function(e) {
          domClass.remove(this.domNode, "editItem");
      }
   });
});