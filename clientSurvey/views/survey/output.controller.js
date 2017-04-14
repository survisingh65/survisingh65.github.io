(function(){
    var outputController = function($scope, $rootScope, $location, CloudService){
        var data = CloudService.getData();
        var max = 0;

        for(d in data){
            if(max<data[d])
                max = data[d];
            console.log(data[d]);
        }

        var listOfFrameworks = [];
        for(d in data){
            if(data[d] == max && d !="None"){
                listOfFrameworks.push(d);
            }
        }
        console.log(listOfFrameworks);

        $scope.out = listOfFrameworks;

    }

    var myapp = angular.module("surviapp")
    myapp.controller("outputController", outputController)
})();
