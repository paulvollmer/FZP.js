var xml2js = require('xml2js').parseString;
var XMLUtil = require('./XMLUtil.js');
var FZP = require('./FZP.js');


/**
 * simple function to generate the xml FZP part string.
 */
function FZPstringifyXML(fzp) {
  console.log('Call FZP.XML.stringify() fzp:', fzp);
  
  // the content object. we're using an array to perform string concatenation faster.
  var xml = [XMLUtil.HEAD];

  xml.push(XMLUtil.element('title', fzp.title));
  xml.push(XMLUtil.element('version', fzp.version));
  xml.push(XMLUtil.element('description', fzp.description));
  xml.push(XMLUtil.element('label', fzp.label));
  xml.push(XMLUtil.element('author', fzp.author));
  xml.push(XMLUtil.element('date', fzp.date));
  xml.push(XMLUtil.element('url', fzp.url));
  xml.push(XMLUtil.element('family', fzp.family));
  xml.push(XMLUtil.element('variant', fzp.variant));
  xml.push(XMLUtil.element('tags', fzp.tags));
  xml.push(XMLUtil.element('properties', fzp.properties));

  var views = '';
  //xml.push(XMLUtil.element('views', views));
  
  var connectors = '';
  //xml.push(XMLUtil.element('connectors', connectors));
  
  var buses = '';
  for (var i=0; i<fzp.buses.length; i++) {
    buses += XMLUtil.LINEBREAK+XMLUtil.element('bus', '', {id: fzp.buses[i].id});
    
    for (var j=0; j<fzp.buses[i].connectorId.length; j++) {
      buses += XMLUtil.element('nodeMember', '', {connectorId: fzp.buses[i].connectorId[j]});
    }
  }
  buses += XMLUtil.LINEBREAK;
  xml.push(XMLUtil.element('buses', buses));


  return xml.join(XMLUtil.LINEBREAK);
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
