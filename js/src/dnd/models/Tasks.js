define( [
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/topic",
	"./_Collection"
], function (
	declare,
	lang,
	topic,
	_Collection
) {
	return declare([_Collection], {
		constructor : function() {
			this._bindSubscriptions();
		},
		_bindSubscriptions : function() {
			// TODO: need to do something about destory here.
			topic.subscribe("editItemDone", lang.hitch("_editItemDoneHandler")); 
		},
		_editItemDoneHandler : function(e) {
			if(e && e.task) {
				//TODO: handle edits
				this.push(e.task);
			}
		} 
	});
} );
