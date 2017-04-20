/**
 * Created by Venkata Rishik on 4/17/2017.
 */
(function(){
    var section3Controller = function($scope, $rootScope, $location, DBService){

        $scope.OnNextSubmit = function(){
            var data = DBService.getData();
            var question38 = $scope.opt38;
            var question39 = $scope.opt39;
            var question40 = $scope.opt40;
            var question41 = $scope.opt41;
            var question42 = $scope.opt42;
            var question43 = $scope.opt43;
            var question44 = $scope.opt44;
            var question45 = $scope.opt45;
            var question46 = $scope.opt46;
            var question47 = $scope.opt47;
            var question48 = $scope.opt48;

            var result = question38 + "," + question39 + "," + question40 + "," + question41 + "," + question42;

            var result1 = question43 + "," + question44 + "," + question45 + "," + question46 + "," + question47 + "," +question48;

            var arrList = result.split(",");
            console.log(arrList);

            var arrList1 = result1.split(",");
            console.log(arrList1);

            for(var p in arrList){
                console.log(arrList[p]);
                data[arrList[p]] = data[arrList[p]] + 20;
            }

            for(var p in arrList1){
                console.log(arrList1[p]);
                data[arrList1[p]] = data[arrList1[p]] + 10;
            }

            console.log(data);

            DBService.setData(data);
            $location.path("/output");

        }
    }

    var myapp = angular.module("surviapp")
    myapp.controller("section3Controller", section3Controller)
})();

