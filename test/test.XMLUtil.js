var assert = require('assert');
var XMLUtil = require('../src/XMLUtil.js');


describe('XMLUtil.js', function() {

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
        var atts = {
          att1: 'a1',
          att2: 'This is in "double quotes" and this is in \'single quotes\'',
          att3: 'This is in \'single quotes\' and this is in "double quotes"'
        };
        var xml = XMLUtil.element('fritzing', 'part', atts);
        var expected = '<fritzing att1=\'a1\' att2=\'This is in "double quotes" and this is in &quot;single quotes&quot;\' att3="This is in \'single quotes\' and this is in &apos;double quotes&apos;">part</fritzing>';
        assert.equal(xml, expected);
      });
    });

});
