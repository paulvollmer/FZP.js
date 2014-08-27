
var assert = require('assert');
var FZP = require('../FZP.js');

describe('FZP.js', function() {

  describe('initialize', function() {
    it('should be type of object', function() {
      var fzp = new FZP();
      assert.ok(typeof fzp === 'object');
    });
  });

  describe('addTag() without params', function() {
    it('should return the default tag object', function() {
      var fzp = new FZP();
      fzp.addTag();
      assert.equal(fzp.tags.length, 1);
      assert.equal(fzp.tags[0], 'fritzing');
    });
  });

  describe('addTag() with params', function() {
    it('should return a tag object with the defined params', function() {
      var fzp = new FZP();
      fzp.addTag('foo');
      assert.equal(fzp.tags.length, 1);
      assert.equal(fzp.tags[0], 'foo');
    });
  });

  describe('addProperty() without params', function() {
    it('should return the default property object', function() {
      var fzp = new FZP();
      fzp.addProperty();
      assert.equal(fzp.properties.length, 1);
      assert.equal(fzp.properties[0].name, 'package');
      assert.equal(fzp.properties[0].value, 'fritzing');
    });
  });

  describe('addProperty() with params', function() {
    it('should return a property object with the defined params', function() {
      var fzp = new FZP();
      fzp.addProperty({name: 'foo', value: 123});
      assert.equal(fzp.properties.length, 1);
      assert.equal(fzp.properties[0].name, 'foo');
      assert.equal(fzp.properties[0].value, 123);
    });
  });

  // describe('addConnector() without params', function() {
  //   var fzp = new FZP();
  //   // without params
    
  //   // with params
  //   fzp.addConnector('foo');
  //   assert.equal(fzp.connectors.length === 1);
  // });

  // describe('addConnector() with params', function() {

  // });

  // describe('addLayer() without params', function() {
  //   var fzp = new FZP();
  //   fzp.addLayer('foo');
    
  //   assert.equal(fzp.tags.length === 1);
  //   assert.equal(fzp.tags[0] === 'foo');
  // });


  describe('addBus() without params', function() {
    it('should return the default bus object', function() {
      var fzp = new FZP();
      fzp.addBus();
      assert.equal(fzp.buses.length, 1);
      assert.equal(fzp.buses[0].id, 'temp');
      assert.equal(fzp.buses[0].nodeMember, null);
    });
  });

  describe('addBus() with params', function() {
    it('should return a bus object with the defined params', function() {
      var fzp = new FZP();
      fzp.addBus({id: 123, connectorId: ['foo']});
      assert.equal(fzp.buses.length, 1);
      assert.equal(fzp.buses[0].id, 123);
      assert.equal(fzp.buses[0].connectorId[0], 'foo');
    });
  });

});
