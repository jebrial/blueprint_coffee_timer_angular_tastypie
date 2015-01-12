BlueprintAppConfig.registerModule('coffee_timer');

angular.module('coffee_timer').config(['$tastypieProvider',
  function($tastypieProvider) {
    $tastypieProvider.setResourceUrl('http://127.0.0.1:8001/api/v1/');
    $tastypieProvider.setAuth('admin','320c4e7da6ed93946f97f51e6f4c8354a098bb6e');
}]);

angular.module('coffee_timer').controller('TimerController',
  ['$scope','$tastypieResource', '$interval',
  function($scope, $tastypieResource, $interval) {
    $scope.minutes = 0;
    $scope.seconds = 0;
    var stop;
    $scope.timer = function() {
      if(angular.isDefined(stop)){ return; }

      stop = $interval(function() {
        if($scope.seconds < 59) {
          $scope.seconds++;
        } else {
          $scope.minutes++;
          $scope.seconds = 0;
        }
      },1000);
    };

    $scope.timer_stop = function() {
      if(angular.isDefined(stop)) {
        $interval.cancel(stop);
        stop = undefined;
      }
    };

    $scope.timer_reset = function() {
      $scope.timer_stop();
      $scope.minutes = 0;
      $scope.seconds = 0;
    };

    $scope.$on('$destroy', function() {
      $scope.timer_stop();
    });

}]);