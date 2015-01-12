/* jshint ignore:start */
'use strict';
/*jshint ignore:end */

var BlueprintAppConfig = (function() {

  var appName = 'blueprint';

  var appDependencies = [
    'ngResource',
    'ngAnimate',
    'ngResourceTastypie'
  ];

  var registerModule = function(moduleName) {
    angular.module(moduleName, []);
    angular.module(appName).requires.push(moduleName);
  };

  return {
    appName: appName,
    appDependencies: appDependencies,
    registerModule: registerModule
  };
})();

angular.module(BlueprintAppConfig.appName, BlueprintAppConfig.appDependencies);

angular.element(document).ready( function() {
  angular.bootstrap(document, [BlueprintAppConfig.appName]);
});

// ******** ****** *** ** * * CUSTOM FILTERS * * ** *** ***** *******



// ******** ****** *** ** * * CUSTOM DIRECTIVES * * ** *** ***** *******