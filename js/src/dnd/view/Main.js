define([
    "dojo/_base/declare", 
    "dijit/_WidgetBase", 
    "dijit/_TemplatedMixin",
    "dojo/topic",
    "dojo/_base/lang",
    "dojo/dom-class",
    "dnd/view/EditItem",
    "dnd/view/TaskList",
    "dnd/utils/log",
    "dojo/text!dnd/view/Main/template.html"
], function(
    declare, 
    _WidgetBase, 
    _TemplatedMixin,
    topic,
    lang,
    domClass,
    EditItem, 
    TaskList,
    log,
    template
) {
   return declare([_WidgetBase, _TemplatedMixin], {
      templateString: template,
      declaredClass: "main",
      _editModule: null,
      _listModule : null,
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
          this._editModule = new EditItem({}, this.itemEditNode);
          this._editModule.startup();

          this._listModule = new TaskList({}, this.itemListNode);
          this._listModule.startup();

          this.own(
              this._editModule,
              this._listModule
          );
      },
      editItemSubscribe: function(e) {
          if (e && e.task) {
              this._editModule.set("task", e.task);
          }
          domClass.add(this.domNode, "editItem");
      },
      editItemDoneSubscribe: function(e) {
          log(e);
          domClass.remove(this.domNode, "editItem");
      }
   });
});