define([
    "dojo/_base/declare", 
    "dijit/_WidgetBase", 
    "dijit/_TemplatedMixin", 
    "dojo/topic", 
    "dojo/_base/lang", 
    "dojo/on", 
    "dojo/text!dnd/view/EditItem/template.html"
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
        templateString : template,
        startup : function() {
            this.inherited(arguments);

            this.own(
                on(this.domNode, "button:click", lang.hitch(this, "buttonClick")),
                on(this.domNode, "backbutton", lang.hitch(this,"backButton"))
            );
        },
        buttonClick : function(e) {
            this.hide();
        },
        keyPress : function(e) {
            
        },
        backButton : function(e) {
            this.hide();
        },
        hide : function() {
            topic.publish("editItemDone", null);
        }
    });
}); 