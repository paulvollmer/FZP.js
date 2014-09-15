var assert = require('assert');
var FZPXMLstringify = require('../src/FZP.XMLstringify.js');


describe('FZPXMLstringify.js', function() {

  describe('title()', function() {
    it('should return the title xml node as string', function() {
      var actual = FZPXMLstringify.title('foo');
      var expected = '<title>foo</title>';
      assert.equal(actual, expected);
    });
  });

  describe('version()', function() {
    it('should return the version xml node as string', function() {
      var actual = FZPXMLstringify.version('0.0.0');
      var expected = '<version>0.0.0</version>';
      assert.equal(actual, expected);
    });
  });

  describe('description()', function() {
    it('should return the description xml node as string', function() {
      var actual = FZPXMLstringify.description('some words');
      var expected = '<description>some words</description>';
      assert.equal(actual, expected);
    });
  });

  describe('label()', function() {
    it('should return the label xml node as string', function() {
      var actual = FZPXMLstringify.label('foo');
      var expected = '<label>foo</label>';
      assert.equal(actual, expected);
    });
  });

  describe('author()', function() {
    it('should return the author xml node as string', function() {
      var actual = FZPXMLstringify.author('fritzing');
      var expected = '<author>fritzing</author>';
      assert.equal(actual, expected);
    });
  });

  describe('date()', function() {
    it('should return the date xml node as string', function() {
      var actual = FZPXMLstringify.date('2014');
      var expected = '<date>2014</date>';
      assert.equal(actual, expected);
    });
  });

  describe('url()', function() {
    it('should return the url xml node as string', function() {
      var actual = FZPXMLstringify.url('http://fritzing.org');
      var expected = '<url>http://fritzing.org</url>';
      assert.equal(actual, expected);
    });
  });

  describe('family()', function() {
    it('should return the family xml node as string', function() {
      var actual = FZPXMLstringify.family('foo');
      var expected = '<family>foo</family>';
      assert.equal(actual, expected);
    });
  });

  describe('variant()', function() {
    it('should return the variant xml node as string', function() {
      var actual = FZPXMLstringify.variant('foo');
      var expected = '<variant>foo</variant>';
      assert.equal(actual, expected);
    });
  });

  describe('tags()', function() {
    it('should return the tags xml node as string', function() {
      var actual = FZPXMLstringify.tags(['foo', 'bar']);
      var expected = '<tags><tag>foo</tag><tag>bar</tag></tags>';
      assert.equal(actual, expected);
    });
  });
  
  describe('properties()', function() {
    it('should return the properties xml node as string', function() {
      var actual = FZPXMLstringify.properties([
        {name: 'foo', value: 123},
        {name: 'bar', value: 456}
      ]);
      var expected = '<properties><property name="foo">123</property><property name="bar">456</property></properties>';
      assert.equal(actual, expected);
    });
  });

  // describe('connectors()', function() {

  // });
  
  // describe('views', function() {

  // });

  describe('buses()', function() {
    it('should return the buses xml node as string', function() {
      var actual = FZPXMLstringify.buses([
        {id: 'ground', connectorId: 'connector0'},
        {id: 'anode', connectorId: 'connector1'}
      ]);
      var expected = '<buses><bus id="ground"><nodeMember connectorId="connector0"/></bus><bus id="anode"><nodeMember connectorId="connector1"/></bus></buses>';
      assert.equal(actual, expected);
    });
  });

  // it('should return the xml as string', function() {
  //   var fzp = new FZP();
  //   fzp.date = '2014';
  //   fzp.addBus({id: 'bus0', connectorId: '0'});

  //   var actual = FZPXML.FZPstringifyXML(fzp);
  //   var expected = [
  //     '<?xml version="1.0" encoding="UTF-8"?>',
  //     '<title>untitled</title>',
  //     '<version>0.0.0</version>',
  //     '<description>no part description available</description>',
  //     '<label>fzp.js</label>',
  //     '<author></author>',
  //     '<date>2014</date>',
  //     '<url>http://fritzing.org</url>',
  //     '<family>fzp</family>',
  //     '<variant>variant 1</variant>',
  //     '<tags></tags>',
  //     '<properties></properties>',
  //     // '<views></views>',
  //     // '<connectors></connectors>',
  //     '<buses></buses>'
  //   ];
  //   assert.equal(actual, expected.join('\n'));
  // });

});
