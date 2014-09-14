var assert = require('assert');
var fs = require('fs');
var FZP = require('../src/FZP.js');
var FZPXML = require('../src/FZP.XML.js');

// read a simple test fzp...
var simpleFZP = fs.readFileSync('./test/files/simple.fzp', {encoding: 'utf8'});

describe('FZP.XML.js', function() {


  describe('FZPparseXML', function() {
    var fzp = FZPXML.FZPparseXML(simpleFZP);
    
    describe('module', function() {
      describe('version', function() {
        it('check the module version', function() {
          assert.equal(fzp.module.version, '0.0.0');
        });
      });

      describe('id', function() {
        it('check the module id', function() {
          assert.equal(fzp.module.id, 'simple');
        });
      });
    });

    describe('version', function() {
      it('check the version', function() {
        assert.equal(fzp.version, '1');
      });
    });

    describe('author', function() {
      it('check the author', function() {
        assert.equal(fzp.author, 'FZP.js');
      });
    });

    describe('title', function() {
      it('check the title', function() {
        assert.equal(fzp.title, 'simple');
      });
    });

    describe('description', function() {
      it('check the description', function() {
        assert.equal(fzp.description, 'A simple test file');
      });
    });

    describe('label', function() {
      it('check the label', function() {
        assert.equal(fzp.label, 'test');
      });
    });

    describe('date', function() {
      it('check the date', function() {
        assert.equal(fzp.date, '2014-08-27');
      });
    });

    describe('tags', function() {
      it('check the tags array', function() {
        assert.equal(fzp.tags.length, 2);
        assert.equal(fzp.tags[0], 'simple');
        assert.equal(fzp.tags[1], 'test');
      });
    });

    describe('properties', function() {
      it('check the properties array', function() {
        assert.equal(fzp.properties.length, 2);
        assert.equal(fzp.properties[0].name, 'package');
        assert.equal(fzp.properties[0].value, 'simple');
        assert.equal(fzp.properties[1].name, 'family');
        assert.equal(fzp.properties[1].value, 'test');
      });
    });

    // describe('views', function() {
    //   describe('icon', function() {
    //     it('check the icon view object', function() {
    //       assert.equal(fzp.views.icon, '');
    //     });
    //   });

    //   describe('breadboard', function() {
    //     it('check the breadboard view object', function() {
    //       assert.equal(fzp.views.breadboard, '');
    //     });
    //   });

    //   describe('pcb', function() {
    //     it('check the pcb view object', function() {
    //       assert.equal(fzp.views.pcb, '');
    //     });
    //   });

    //   describe('schematic', function() {
    //     it('check the schematic view object', function() {
    //       assert.equal(fzp.views.schematic, '');
    //     });
    //   });
    // });

    // describe('connectors', function() {

    // });

    // describe('buses', function() {

    // });


  });


  describe('FZPstringifyXML', function() {

    it('should return the xml as string', function() {
      var fzp = new FZP();
      fzp.date = '2014';
      fzp.addBus({id: 'bus0', connectorId: '0'});

      var actual = FZPXML.FZPstringifyXML(fzp);
      var expected = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<title>untitled</title>',
        '<version>0.0.0</version>',
        '<description>no part description available</description>',
        '<label>fzp.js</label>',
        '<author></author>',
        '<date>2014</date>',
        '<url>http://fritzing.org</url>',
        '<family>fzp</family>',
        '<variant>variant 1</variant>',
        '<tags></tags>',
        '<properties></properties>',
        // '<views></views>',
        // '<connectors></connectors>',
        '<buses></buses>'
      ];
      assert.equal(actual, expected.join('\n'));
    });

  });

});
