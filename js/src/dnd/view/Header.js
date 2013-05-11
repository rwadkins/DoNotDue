define([
    "dojo/_base/declare", 
    "dijit/_WidgetBase", 
    "dijit/_TemplatedMixin",
    "dojo/topic", 
    "dojo/_base/lang",
    "dojo/on",
    "dojo/text!dnd/view/Header/template.html"
], function(
    declare, 
    _WidgetBase, 
    _TemplatedMixin,
    topic, 
    lang,
    on,
    template
) {
   return declare([_WidgetBase, _TemplatedMixin], {
      templateString: template,
      declaredClass: "header",
      postCreate: function() {
          console.log("Header postCreate");
          this.inherited(arguments);
      },
      startup: function() {
          console.log("Header startup");
          this.inherited(arguments);

          this.own(
              on(this.domNode, ".addItem:click", lang.hitch(this, "addItemClick"))
          )
      },
      addItemClick: function(e) {
          console.log("addItemClick");
          topic.publish("editItem", null);
      }
   });
});