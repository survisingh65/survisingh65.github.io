(function(){
    var startSurveyController = function($scope, $rootScope, $location){
        $scope.result = $rootScope.result;

    }

    var myapp = angular.module("surviapp")
    myapp.controller("startSurveyController", startSurveyController)
})();
