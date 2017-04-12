/**
 * Created by Ashish on 2/11/2017.
 */
(function(){

    var eventController = function($scope, EventService, EventFactory){
        $scope.search = function(){
        console.log("This is eventcontroller");
        EventFactory.searchEvent($scope.searchKey)
            .then(successFunction, errorFunction)

            function successFunction(response){
                console.log(response);
                $scope.events = response.events;
                $scope.errorMsg = "";
            }

            function errorFunction(){
                console.log("Error Cannot talk to server");
                $scope.events = null;
                $scope.errorMsg = "Error Cannot talk to server";
            }

        }

    }


    var myapp = angular.module("surviapp");

    myapp.controller("ec",eventController);



})();
