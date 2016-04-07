'use strict';

/**
 * @ngdoc service
 * @name markAngularApp.navService
 * @description
 * # navService
 * Service used to turn on/off navigation bar on view.
 */
'use strict';
angular.module('markAngularApp')
    .factory("navService", function () {
    var factory = {};
    var showNav = true;
  factory.set = function(val) {
   showNav = val;
  };
  factory.get = function() {
    return showNav;
  };
  return factory;
});
