
module('FZP.js');

test('Initialize', function() {
  var fzp = FZP;
  
  ok(typeof fzp === 'object');
});

test('addTag', function() {
  var fzp = FZP;
  fzp.addTag('foo');
  
  ok(fzp.tags.length === 1);
  ok(fzp.tags[0] === 'foo');
});

test('addProperty', function() {
  var fzp = FZP;
  fzp.addProperty({name: 'foo', value: 123});

  ok(fzp.properties.length === 1);
  ok(fzp.properties[0].name === 'foo');
  ok(fzp.properties[0].value === 123);
});

test('addConnector', function() {
  var fzp = FZP;
  fzp.addConnector('foo');
  
  ok(fzp.connectors.length === 1);
});

test('addBus', function() {
  var fzp = FZP;
  fzp.addBus({id: 123, nodeMember: 'foo'});
  
  ok(fzp.buses.length === 1);
  ok(fzp.buses[0].id === 123);
  ok(fzp.buses[0].nodeMember === 'foo');
});
