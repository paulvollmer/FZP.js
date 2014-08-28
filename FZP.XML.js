
var xml2js = require('xml2js').parseString;
var FZP = require('./FZP.js');


/**
 * simple function to generate the xml FZP part string.
 */
function FZPstringifyXML(options) {
  console.log('Call FZP.XML.stringify()');

  var xml = 'fzp-here';
  return xml;
}

exports.FZPstringifyXML = FZPstringifyXML;


/**
 * 
 */
function FZPparseXML(xmlstring) {
  //console.log('Call FZPparseXML()');

  var fzp = new FZP();

  // convert xml to json
  xml2js(xmlstring, function (err, result) {
    //console.log('result:', JSON.stringify(result, null, 2));

    fzp.module.version = result.module.$.fritzingVersion || null;
    fzp.module.id = result.module.$.moduleId || null;

    fzp.title = result.module.title || null;
    fzp.version = result.module.version || null;
    fzp.description = result.module.description || null;
    fzp.label = result.module.label || null;
    fzp.author = result.module.author || null;
    fzp.date = result.module.date || null;
    fzp.url = result.module.url || null;
    
    if (result.module.tags !== undefined && result.module.tags.length > 0) {
      for (var i=0; i<result.module.tags[0].tag.length; i++) {
        fzp.addTag(result.module.tags[0].tag[i]);
      }
    }
    
    if (result.module.properties !== undefined && result.module.properties.length > 0) {
      for (var j=0; j<result.module.properties[0].property.length; j++) {
        //console.log('properties', JSON.stringify(result.module.properties[0].property[j], null, 2));
        fzp.addProperty({
          name: result.module.properties[0].property[j].$.name,
          value: result.module.properties[0].property[j]._
        });
      }
    }
    
    // fzp.views = ;
    
    // fzp.connectors = ;
    // fzp.buses = ;

    //console.log('FZP:', fzp);
  });
  
  return fzp;
}

exports.FZPparseXML = FZPparseXML;
