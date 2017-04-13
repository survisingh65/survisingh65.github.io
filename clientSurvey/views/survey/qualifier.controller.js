(function(){
    var qualifierController = function($scope, $rootScope, $location){
        $scope.OnAssessmentSubmit = function(){
            if($scope.opt1 && $scope.opt2 && $scope.opt3 && $scope.opt4 && $scope.opt5){
                console.log("Success");
                $rootScope.result = "Need cloud";
                $location.path("/startSurvey");
            }
            else{
                console.log("Failure");
                $rootScope.result = "Dont't Need cloud";
                $location.path("/startSurvey");
            }
        }

    }

    var myapp = angular.module("surviapp")
    myapp.controller("qualifierController", qualifierController)
})();
