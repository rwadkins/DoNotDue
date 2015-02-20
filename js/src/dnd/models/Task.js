define([
		"dojo/_base/declare",
		"./_Base"
	], function(
		declare,
		_Base
	) {
		return declare([_Base], {
			task_id: null,
			current_status: null,
			subject: null,
			description: null,
			dueDate: null,
			lists: null,
			history: null,

			constructor: function() {
				this.lists = {};
				this.history = {};
			}
		})
});