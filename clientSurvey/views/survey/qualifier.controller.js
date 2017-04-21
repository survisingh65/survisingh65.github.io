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
            //($scope.opt6 == "true")? validCounter++ : inValidCounter++;

            if(validCounter >  2){
                console.log("Success");
                $rootScope.result = "Your company needs a Big Data Project";
                $rootScope.needCloud = "true";
                $location.path("/startSurvey");
            }
            else{
                console.log("Failure");
                $rootScope.result = "Your company does not need a Big Data Project";
                $rootScope.needCloud = "false";
                $location.path("/startSurvey");
            }
        }

    }

    var myapp = angular.module("surviapp")
    myapp.controller("qualifierController", qualifierController)
})();