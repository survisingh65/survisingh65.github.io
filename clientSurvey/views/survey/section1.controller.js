(function(){
    var section1Controller = function($scope, $rootScope, $location, CloudService){

        $scope.OnNextSubmit = function(){
            var data = CloudService.getData();


            //10 points each
            var question6 = $scope.lang6;
            var question7 = $scope.lang7;
            var question8 = $scope.lang8;
            var question9 = $scope.lang9;
            var question10 = $scope.lang10;
            var question11 = $scope.lang11;
            var question12 = $scope.lang12;

            //this is a checkbox, hasn't been included
            //var question13 = $scope.lang13;


            //one point each
            var question14 = $scope.lang14;
            var question15 = $scope.lang15;
           var question16 = $scope.lang16;
            var question17 = $scope.lang17;
           var question18 = $scope.lang18;
            var question19 = $scope.lang19;
           var question20 = $scope.lang20;
            var question21 = $scope.lang21;
           var question22 = $scope.lang22;
            var question23 = $scope.lang23;


            var result10 = question6 + "," + question7 + "," + question8 + "," + question9 + "," + question10 + "," + question11 + "," + question12 + "," + question14 ;

            var result1 = question15 + "," + question16 + "," + question17 + "," + question18 + "," + question19 + "," + question20 + "," + question21 + "," + question22 + "," + question23;

            var arrList10 = result10.split(",");
            console.log(arrList10);

            for(var p in arrList10){
                console.log(arrList10[p]);
                data[arrList10[p]] = data[arrList10[p]] + 10;
            }

            var arrList1 = result1.split(",");
            console.log(arrList1);

            for(var p in arrList1){
                console.log(arrList1[p]);
                data[arrList1[p]] = data[arrList1[p]] + 1;
            }
            var question131 = $scope.lang131;
            var question132 = $scope.lang132;
            var question133 = $scope.lang133;
            var question134 = $scope.lang134;
            var question135 = $scope.lang135;
            var question136 = $scope.lang136;

            var result2 = question131 + "," + question132 + "," + question133 + "," + question134+ "," + question135+ "," +question136;
            var arrList20 = result2.split(",");
            console.log(arrList20);

            console.log("testing 13!!!!!");

            arrList20 = arrList20.filter( function( item, index, inputArray ) {
                return inputArray.indexOf(item) == index;
            });

            console.log(arrList20);

            for(var p in arrList20){
                console.log(arrList20[p]);
                data[arrList20[p]] = data[arrList20[p]] + 10;
            }



            CloudService.setData(data);
            $location.path("/section2");

        }
    }

    var myapp = angular.module("surviapp")
    myapp.controller("section1Controller", section1Controller)
})();