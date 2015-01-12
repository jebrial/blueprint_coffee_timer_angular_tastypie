describe('TimerController', function() {
  var scope, TimerController;

  beforeEach(module(BlueprintAppConfig.appName));

  beforeEach(inject(function($controller,$rootScope) {
    scope = $rootScope.$new();

    TimerController = $controller('TimerController', {
      $scope : scope
    });
  }));

  it('should be an instance of the TimerController', function() {
    expect(TimerController).not.toBeUndefined();
  });
});
