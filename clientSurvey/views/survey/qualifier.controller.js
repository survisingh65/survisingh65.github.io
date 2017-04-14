(function(){
    var qualifierController = function($scope, $rootScope, $location){
        $scope.OnAssessmentSubmit = function(){
            var validCounter = 0;
            var inValidCounter = 0;
            ($scope.opt1 == "true")? validCounter++ : inValidCounter++;
            ($scope.opt2 == "true")? validCounter++ : inValidCounter++;
            ($scope.opt3 == "true")? validCounter++ : inValidCounter++;
            ($scope.opt4 == "true")? validCounter++ : inValidCounter++;
            ($scope.opt5 == "true")? validCounter++ : inValidCounter++;

            if(validCounter >= 3){
                console.log("Success");
                $rootScope.result = "Need cloud";
                $rootScope.needCloud = "true";
                $location.path("/startSurvey");
            }
            else{
                console.log("Failure");
                $rootScope.result = "Dont't Need cloud";
                $rootScope.needCloud = "false";
                $location.path("/startSurvey");
            }
        }

    }

    var myapp = angular.module("surviapp")
    myapp.controller("qualifierController", qualifierController)
})();
