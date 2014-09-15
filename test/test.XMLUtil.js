var assert = require('assert');
var XMLUtil = require('../src/XMLUtil.js');


describe('XMLUtil.js', function() {

  describe('HEAD', function() {
    it('should return the xml head', function() {
      assert.equal(XMLUtil.HEAD, '<?xml version="1.0" encoding="UTF-8"?>');
    });
  });

  describe('LINEBREAK', function() {
    it('should return the linebreak', function() {
      assert.equal(XMLUtil.LINEBREAK, '\n');
    });
  });

  describe('element', function() {
    it('should return an xml element', function() {
      var xml = XMLUtil.element('fritzing');
      var expected = '<fritzing/>';
      assert.equal(xml, expected);
    });
    it('should return an xml element with content', function() {
      var xml = XMLUtil.element('fritzing', 'part');
      var expected = '<fritzing>part</fritzing>';
      assert.equal(xml, expected);
    });
    it('should return an xml element with content and attributes', function() {
      var xml = XMLUtil.element('fritzing', 'part', {});
      var expected = '<fritzing>part</fritzing>';
      assert.equal(xml, expected);

      xml = XMLUtil.element('fritzing', 'part', {att: 'a1'});
      expected = '<fritzing att="a1">part</fritzing>';
      assert.equal(xml, expected);

      xml = XMLUtil.element('fritzing', 'part', {att: 'This is in "double quotes" and this is in \'single quotes\''});
      expected = '<fritzing att="This is in &apos;double quotes&apos; and this is in \'single quotes\'">part</fritzing>';
      assert.equal(xml, expected);

      xml = XMLUtil.element('fritzing', 'part', {att: 'This is in \'single quotes\' and this is in "double quotes"'});
      expected = '<fritzing att=\'This is in &quot;single quotes&quot; and this is in "double quotes"\'>part</fritzing>';
      assert.equal(xml, expected);
    });
    it('should return an xml element and set the whitespace', function() {
      var xml = XMLUtil.element('fritzing', '', {}, '  ');
      var expected = '  <fritzing/>';
      assert.equal(xml, expected);
    });
  });

  describe('elementNL', function() {
    it('should return an xml element with linebreak', function() {
      var xml = XMLUtil.elementNL('fritzing');
      var expected = '<fritzing/>\n';
      assert.equal(xml, expected);
    });
  });

});
