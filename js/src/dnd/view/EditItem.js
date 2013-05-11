define([
    "dojo/_base/declare", 
    "dijit/_WidgetBase", 
    "dijit/_TemplatedMixin", 
    "dojo/topic", 
    "dojo/_base/lang",
    "dojo/dom-class",
    "dojo/on",
    "dojo/text!dnd/view/EditItem/template.html"
], function(
    declare, 
    _WidgetBase, 
    _TemplatedMixin, 
    topic, 
    lang,
    domClass,
    on,
    template
) {
   return declare([_WidgetBase, _TemplatedMixin], {
      templateString: template,
      startup: function() {
          console.log("EditItem startup");
          this.inherited(arguments);
          
          topic.subscribe("editItem", lang.hitch(this,"editItemSubscribe"));
          
          this.own(
              on(this.domNode, "button:click", lang.hitch(this, "buttonClick")) 
          );
      },
      editItemSubscribe: function() {
          console.log("editItemSubscribe");
          domClass.add(this.domNode, "visible");
      },
      buttonClick: function(e) {
          domClass.remove(this.domNode, "visible");  
      }
   });
});