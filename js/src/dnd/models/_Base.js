define( [
	'dojo/_base/declare',
	'dojo/_base/lang',
	'dojo/Stateful',
	'dnd/utils/log'
], function (
	declare,
	lang,
	Stateful,
	log
) {
	return declare([Stateful], {
		constructor : function() {
			this._bindWatcher();
		},
		_bindWatcher : function() {
			this.watch(lang.hitch(this, "_watchHandler"));
		},
		_watchHandler : function(name, oldValue, newValue) {
			log("a property has changed", name, oldValue, newValue);
		}
	})
} );
