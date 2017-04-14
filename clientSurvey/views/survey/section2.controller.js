(function(){
    var section2Controller = function($scope, $rootScope, $location, CloudService){

        $scope.OnNextSubmit = function(){
            var data = CloudService.getData();

            var question6 = $scope.opt6;
            var question7 = $scope.opt7;
            var question8 = $scope.opt8;
            var question9 = $scope.opt9;
            var question10 = $scope.opt10;

            var result = question6 + "," + question7 + "," + question8 + "," + question9 + "," + question10;

            var arrList = result.split(",");
            console.log(arrList);

            for(var p in arrList){
                console.log(arrList[p]);
                data[arrList[p]] = data[arrList[p]] + 1;
            }

            console.log(data);

            CloudService.setData(data);
            $location.path("/output");

        }
    }

    var myapp = angular.module("surviapp")
    myapp.controller("section2Controller", section2Controller)
})();
