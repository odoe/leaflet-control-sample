// refer to the IControl interface
// http://leafletjs.com/reference.html#icontrol
// sample influenced by leaflet-geocoder
// https://github.com/perliedman/leaflet-control-geocoder
L.Control.Search = L.Control.extend({
  options: {
    // topright, topleft, bottomleft, bottomright
    position: 'topright',
    placeholder: 'Search...'
  },
  initialize: function (options /*{ data: {...}  }*/) {
    // constructor
    L.Util.setOptions(this, options);
  },
  onAdd: function (map) {
    // happens after added to map
    var container = L.DomUtil.create('div', 'search-container');
    this.form = L.DomUtil.create('form', 'form', container);
    var group = L.DomUtil.create('div', 'form-group', this.form);
    this.input = L.DomUtil.create('input', 'form-control input-sm', group);
    this.input.type = 'text';
    this.input.placeholder = this.options.placeholder;
    this.results = L.DomUtil.create('div', 'list-group', group);
    L.DomEvent.addListener(this.input, 'keyup', _.debounce(this.keyup, 300), this);
    L.DomEvent.addListener(this.form, 'submit', this.submit, this);
    L.DomEvent.disableClickPropagation(container);
    return container;
  },
  onRemove: function (map) {
    // when removed
    L.DomEvent.removeListener(this._input, 'keyup', this.keyup, this);
    L.DomEvent.removeListener(form, 'submit', this.submit, this);
  },
  keyup: function() {},
  submit: function() {},
});

L.control.search = function(id, options) {
  return new L.Control.Search(id, options);
}
