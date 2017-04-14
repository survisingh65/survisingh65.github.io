(function(){
    var section1Controller = function($scope, $rootScope, $location, CloudService){

        $scope.OnNextSubmit = function(){
            var data = CloudService.getData();

            var question1 = $scope.opt1;
            var question2 = $scope.opt2;
            var question3 = $scope.opt3;
            var question4 = $scope.opt4;
            var question5 = $scope.opt5;

            var result = question1 + "," + question2 + "," + question3 + "," + question4 + "," + question5;

            var arrList = result.split(",");
            console.log(arrList);

            for(var p in arrList){
                console.log(arrList[p]);
                data[arrList[p]] = data[arrList[p]] + 1;
            }

            console.log(data);

            CloudService.setData(data);
            $location.path("/section2");

        }
    }

    var myapp = angular.module("surviapp")
    myapp.controller("section1Controller", section1Controller)
})();
