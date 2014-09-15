/**
 * XML utility
 * like this: http://oreilly.com/pub/h/2127
 */
var XMLUtil = {
  // some settings
  HEAD: '<?xml version="1.0" encoding="UTF-8"?>',
  LINEBREAK: '\n',
  APOS: "'",
  QUOTE: '"',
  ESCAPED_QUOTE: {
    "'": '&quot;',
    '"': '&apos;'
  },

  element: function(name, content, attributes, whitespace) {
    var att_str = '';
    if (attributes) { // tests false if this arg is missing!
        att_str = this.formatAttributes(attributes);
    }
    var xml;
    var ws = whitespace || '';
    if (!content){
        xml = ws+'<'+name+att_str+'/>';
    }
    else {
        xml = ws+'<'+name+att_str+'>'+content+'</'+name+'>';
    }
    return xml;
  },
  
  elementNL: function(name, content, attributes, whitespace) {
    return this.element(name, content, attributes, whitespace)+this.LINEBREAK;
  },

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
        att_str = ' ' + att + "=\"" + att_value +  "\"";
        result += att_str;
        continue;
      }
      
      // Prefer the single quote unless forced to use double
      if (quot_pos != -1 && quot_pos < apos_pos) {
        use_quote = this.QUOTE;
      }
      else {
        use_quote = this.APOS;
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

module.exports = XMLUtil;
