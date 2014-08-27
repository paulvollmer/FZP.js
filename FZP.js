/**
 * the FZP object
 */
var FZP = {
  
  module: {
    version: '0.0.0',
    id: 'default'
  },
  title: '',
  version: '0.0.0',
  description: '',
  label: '',
  author: [],
  date: (new Date()),
  url: '',
  tags: [],
  properties: [],
  views: {
    breadboard: [],
    pcb: [],
    schematic: [],
    icon: []
  },
  connectors: [],
  buses: [],

  
  addTag: function(tag) {
    console.log('Call FZP.addTag()');

    this.tags.push(tag);
  },

  addProperty: function(property) {
    console.log('Call FZP.addProperty()');

    var tmp = {
      name: property.name,
      value: property.value
    };
    this.properties.push(tmp);
  },

  addConnector: function(connector) {
    console.log('Call FZP.addConnector()');

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
  },

  addBus: function(bus) {
    console.log('Call FZP.addBus() bus:', bus);

    var tmp = {
      id: bus.id || 'temp',
      nodeMember: bus.nodeMember || []
    };
    this.buses.push(tmp);
  }

};
