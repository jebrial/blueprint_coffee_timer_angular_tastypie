BlueprintAppConfig.registerModule('coffee_timer');

angular.module('coffee_timer').config(['$tastypieProvider', function($tastypieProvider) {
    $tastypieProvider.setResourceUrl('http://127.0.0.1:8001/api/v1/');
    $tastypieProvider.setAuth('admin','320c4e7da6ed93946f97f51e6f4c8354a098bb6e');
}]);

angular.module('coffee_timer').controller('TimerController',
  ['$scope','$tastypieResource', function($scope, $tastypieResource) {

    $scope.test = "Meow";

}]);