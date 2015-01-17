// refer to the IControl interface
// http://leafletjs.com/reference.html#icontrol
L.Control.AutoComplete = L.Control.extend({
	options: {
    // topright, topleft, bottomleft, bottomright
    position: 'topright'
	},
	initialize: function (options) {
		// constructor
	},
	onAdd: function (map) {
		// happens after added to map
	},
	onRemove: function (map) {
		// when removed
	}
});
