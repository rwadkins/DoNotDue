define([
    "dojo/_base/declare", 
    "dijit/_WidgetBase", 
    "dijit/_TemplatedMixin", 
    "dojo/topic", 
    "dojo/_base/lang", 
    "dojo/on",
    "dnd/models/Task",
    "dojo/text!dnd/view/EditItem/template.html"
], function(
    declare, 
    _WidgetBase, 
    _TemplatedMixin, 
    topic, 
    lang, 
    on,
    Task, 
    template
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        declaredClass : "dnd_view_EditItem",
        templateString : template,
        task : null,
        startup : function() {
            this.inherited(arguments);
            this._bindEvents();
        },
        _bindEvents : function() {
            this.own(
                on(this.domNode, "button:click", lang.hitch(this, "buttonClick")),
                on(this.domNode, "backbutton", lang.hitch(this,"backButton"))
            );
        },
        buttonClick : function(e) {
            var task = this.task;
            if(!task) {
                task = new Task();
            }

            task.set("subject", this.subjectNode.value);
            task.set("description", this.descriptionNode.value);
            this.hide(task);
        },
        keyPress : function(e) {
            
        },
        backButton : function(e) {
            this.hide();
        },
        reset : function() {
            this.subjectNode.value = null;
            this.descriptionNode.value = null;
            this.task = null;
        },
        hide : function(task) {
            topic.publish("editItemDone", {task: task});
            this.reset();
        }
    });
}); 