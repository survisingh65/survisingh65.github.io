(function(){
    var startSurveyController = function($scope, $rootScope, $location){
        $scope.result = $rootScope.result;
        $scope.needCloud = $rootScope.needCloud;
        $scope.start = function(){
            $location.path("/general");
        }

    }

    var myapp = angular.module("surviapp")
    myapp.controller("startSurveyController", startSurveyController)
})();
