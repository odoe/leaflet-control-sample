// refer to the IControl interface
// http://leafletjs.com/reference.html#icontrol
L.Control.Search = L.Control.extend({
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

L.control.seach = function(id, options) {
    return new L.Control.Search(id, options);
};
