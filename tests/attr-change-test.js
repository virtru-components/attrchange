var $ = require('jquery');
var itAsync = require('mocha-promises-kit').itAsync;
var Q = require('q');
require('../attr-change');

describe('Attr-change', function() {

  // Stupid simple test to make sure this works
  itAsync ('fires an attribute change event', function() {
    var $div = $('<div>', { class: 'abc' });

    var deferred = Q.defer();

    $div.attrchange(function(event){
      console.log(['Event raised']);
      deferred.resolve();
    });

    $div.attr('class', 'changed');

    return deferred.promise.timeout(1000, 'Event fired successfully');
  });

});
