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
          this.inherited(arguments);
      },
      startup: function() {
          this.inherited(arguments);
          this._bindEvents();
      },
      _bindEvents: function() {
          this.own(
              on(this.domNode, ".addItem:click", lang.hitch(this, "_addItemClick"))
          );
      },
      _addItemClick: function(e) {
          topic.publish("editItem", null);
      }
   });
});