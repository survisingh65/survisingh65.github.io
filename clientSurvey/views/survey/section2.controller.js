(function(){
    var section2Controller = function($scope, $rootScope, $location, FrameService){

        $scope.OnNextSubmit = function(){
            var data = FrameService.getData();

            var question1 = $scope.opt26;
            var question2 = $scope.opt27;
            var question3 = $scope.opt28;
            var question4 = $scope.opt29;
            var question5 = $scope.opt30;
            var question7 = $scope.opt32;
            var question8 = $scope.opt33;
            var question9 = $scope.opt34;
           // var question10 = $scope.opt35;
            var question11 = $scope.opt36;
            var question12 = $scope.opt37;

            //35

            var question351 = $scope.opt351;
            var question352 = $scope.opt352;
            var question353 = $scope.opt353;
            var question354 = $scope.opt354;
            var result35 = question351 + "," + question352 + "," + question353 + "," + question354 ;

            var arrList10 = result35.split(",");
            console.log(arrList10);

            console.log("testing 35!!!!!");

            arrList10 = arrList10.filter( function( item, index, inputArray ) {
                return inputArray.indexOf(item) == index;
            });

            console.log(arrList10);

            for(var p in arrList10){
                console.log(arrList10[p]);
                data[arrList10[p]] = data[arrList10[p]] + 25;
            }

            var result = question5 + "," + question7 + "," +
                question11 + "," + question12; //10
            var result1 = question1 + "," + question2 + "," + question3 + "," +
                question4 + "," + question8 + "," + question9 ;//25

            var arrList = result.split(",");

            var arrList1=result1.split(",");

            console.log(arrList);
            console.log(arrList1);

            for(var p in arrList){
                console.log(arrList[p]);
                data[arrList[p]] = data[arrList[p]] + 10;
            }

            for(var p in arrList1){
                console.log(arrList1[p]);
                data[arrList1[p]] = data[arrList1[p]] + 25;
            }
            console.log(data);

            FrameService.setData(data);
            $location.path("/section3");

        }
    }

    var myapp = angular.module("surviapp")
    myapp.controller("section2Controller", section2Controller)
})();

