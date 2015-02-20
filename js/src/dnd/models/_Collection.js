define( [
	"dojo/_base/declare",
	"dojo/_base/array"
], function (
	declare,
	array
) {
	return declare([], {
		store = null,
		constructor : function() {
			this.store = [];
		},
		push : function() {
			Array.prototype.push.apply(this.store, arguments);
		},
		unshift : function() {
			Array.prototype.unshift.apply(this.store, arguments);
		},
		pop : function() {
			Array.prototype.pop.apply(this.store, arguments);
		},
		shift : function() {
			Array.prototype.shift.apply(this.store, arguments);
		},
		filter : function() {
			array.filter.apply(array, arguments);
		},
		forEach : function() {
			array.forEach.apply(array,arguments);
		},
		sort : function() {
			Array.prototype.sort.apply(this.store, arguments);
		},
		map : function() {
			array.map.apply(array, arguments)
		},
		reduce : function() {
			Array.prototype.reduce.apply(this.store, arguments);
		},
		length : function() {
			return this.store.length;
		}
	});
} );
