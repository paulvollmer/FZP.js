var XMLUtil = require('./XMLUtil.js');


/**
 * simple functions to generate the different xml tags.
 */
var FZPXMLstringify = {

  title: function(theTitle) {
    return XMLUtil.element('title', theTitle);
  },
  
  version: function(theVersion) {
    return XMLUtil.element('version', theVersion);
  },

  description: function(theDescription) {
    return XMLUtil.element('description', theDescription);
  },

  label: function(theLabel) {
    return XMLUtil.element('label', theLabel);
  },

  author: function(theAuthor) {
    return XMLUtil.element('author', theAuthor);
  },

  date: function(theDate) {
    return XMLUtil.element('date', theDate);
  },

  url: function(theUrl) {
    return XMLUtil.element('url', theUrl);
  },

  family: function(theFamily) {
    return XMLUtil.element('family', theFamily);
  },

  variant: function(theVariant) {
    return XMLUtil.element('variant', theVariant);
  },

  tags: function(theTags) {
    var content = [];
    for (var i = 0; i < theTags.length; i++) {
      content.push(XMLUtil.element('tag', theTags[i]));
    }
    return XMLUtil.element('tags', content.join(''));
  },

  properties: function(theProperties) {
    var content = [];
    for (var i = 0; i < theProperties.length; i++) {
      content.push(XMLUtil.element('property', theProperties[i].value, {name: theProperties[i].name}));
    }
    return XMLUtil.element('properties', content.join(''));
  },

  // connectors: function(theConnectors) {
    
  // },

  // views: function() {
    
  // },

  buses: function(theBuses) {
    var content = [];
    for (var i = 0; i < theBuses.length; i++) {
      var nodeContent = XMLUtil.element('nodeMember', '', {connectorId: theBuses[i].connectorId});
      content.push(XMLUtil.element('bus', nodeContent, {id: theBuses[i].id}));
    }
    return XMLUtil.element('buses', content.join(''));
  },

  /**
   * all the data objects
   */
  data: function(options) {
    // TODO...
  }
};

module.exports = FZPXMLstringify;
