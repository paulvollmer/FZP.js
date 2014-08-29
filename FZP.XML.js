
var xml2js = require('xml2js').parseString;
var FZP = require('./FZP.js');


/**
 * XML utilities
 * like this: http://oreilly.com/pub/h/2127
 */
var XMLUtil = {
  // some settings
  LINEBREAK: '\n',
  APOS: "'",
  QUOTE: '"',
  ESCAPED_QUOTE: {
    "'": '&quot;',
    '"': '&apos;'
  },

  element: function(name, content, attributes) {
    var att_str = '';
    if (attributes) { // tests false if this arg is missing!
        att_str = this.formatAttributes(attributes);
    }
    var xml;
    if (!content){
        xml = '<'+name+att_str+'/>';
    }
    else {
        xml = '<'+name+att_str+'>'+content+'</'+name+'>';
    }
    return xml;
  },

  // elementNL: function(name, content, attributes) {
  //   return element(name, content, attributes).this.LINEBREAK;
  // }
  
  /**
   * Format a dictionary of attributes into a string suitable
   * for inserting into the start tag of an element.  Be smart
   * about escaping embedded quotes in the attribute values.
   */
  formatAttributes: function(attributes) {
    var att_value;
    var apos_pos, quot_pos;
    var use_quote, escape, quote_to_escape;
    var att_str;
    var re;
    var result = '';
   
    for (var att in attributes) {
      att_value = attributes[att];
      
      // Find first quote marks if any
      apos_pos = att_value.indexOf(this.APOS);
      quot_pos = att_value.indexOf(this.QUOTE);
     
      // Determine which quote type to use around 
      // the attribute value
      if (apos_pos == -1 && quot_pos == -1) {
        att_str = ' ' + att + "='" + att_value +  "'";
        result += att_str;
        continue;
      }
      
      // Prefer the single quote unless forced to use double
      if (quot_pos != -1 && quot_pos < apos_pos) {
        use_quote = this.APOS;
      }
      else {
        use_quote = this.QUOTE;
      }
 
      // Figure out which kind of quote to escape
      // Use nice dictionary instead of yucky if-else nests
      escape = this.ESCAPED_QUOTE[use_quote];
      
      // Escape only the right kind of quote
      re = new RegExp(use_quote,'g');
      att_str = ' ' + att + '=' + use_quote + att_value.replace(re, escape) + use_quote;
      result += att_str;
    }
    return result;
  }
};

exports.XMLUtil = XMLUtil;


/**
 * simple function to generate the xml FZP part string.
 */
function FZPstringifyXML(fzp) {
  console.log('Call FZP.XML.stringify() fzp:', fzp);
  
  // the content object. we're using an array to perform string concatenation faster.
  var xml = ['<?xml version="1.0" encoding="UTF-8"?>'];

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
