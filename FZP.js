/**
 * The FZP object constructor.
 */
function FZP() {
  
  this.module = {
    version: '0.0.0',
    id: 'default'
  };
  this.title = '';
  this.version = '0.0.0';
  this.description = '';
  this.label = '';
  this.author = [];
  this.date = (new Date());
  this.url = '';
  this.tags = [];
  this.properties = [];
  this.views = {
    breadboard: [],
    pcb: [],
    schematic: [],
    icon: []
  };
  this.connectors = [];
  this.buses = [];
}

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
  module.exports = FZP;
}


/**
 * Add a tag to the tags array.
 */
FZP.prototype.addTag = function(tag) {
  //console.log('Call FZP.addTag() tag:', tag);

  var tmpTag = tag || 'fritzing';
  this.tags.push(tmpTag);

  return this;
};

/**
 * Add a property to the properties array.
 */
FZP.prototype.addProperty = function(property) {
  //console.log('Call FZP.addProperty() property:', property);

  var tmp = {
    name: property && property.name || 'package',
    value: property && property.value || 'fritzing'
  };
  this.properties.push(tmp);

  return this;
};

/**
 * Add a connector to the connectors array.
 */
FZP.prototype.addConnector = function(connector) {
  //console.log('Call FZP.addConnector() connector:', connector);

  var tmp = {
    id: '',
    type: '',
    name: '',
    description: '',
    views: {
      breadboard: {
        layer: '',
        svg: '',
        terminal: ''
      },
      schematic: {
        layer: '',
        svg: '',
        terminal: ''
      },
      pcb: {
        layer: '',
        svg: '',
        terminal: ''
      }
    }
  };
  this.connectors.push(tmp);

  return this;
};

/**
 * Add a layer to the layers array.
 */
FZP.prototype.addLayers = function(view, layers) {
  //console.log('Call FZP.addLayers()');

  //this.views[view]
  //
  return this;
};

/**
 * Add a bus to the buses array.
 */
FZP.prototype.addBus = function(bus) {
  //console.log('Call FZP.addBus() bus:', bus);

  var tmp = {
    id: bus && bus.id || 'temp',
    connectorId: bus && bus.connectorId || null
  };
  this.buses.push(tmp);

  return this;
};
