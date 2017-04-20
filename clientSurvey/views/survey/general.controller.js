/**
 * Created by Venkata Rishik on 4/17/2017.
 */
(function(){
    var generalController = function($scope, $rootScope, $location, CloudService,DBService,FrameService){

        $scope.OnNextSubmit = function(){
            var data = CloudService.getData();
            var data1= DBService.getData();
            var data2= FrameService.getData();




           //1
            var question11 = $scope.opt11;
            var question12 = $scope.opt12;
            var question13 = $scope.opt13;
            var question14 = $scope.opt14;
            var result1 = question11 + "," + question12 + "," + question13 + "," + question14 ;//+ "," + question13;

            var arrList10 = result1.split(",");
            console.log(arrList10);

            console.log("testing !!!!!");

            arrList10 = arrList10.filter( function( item, index, inputArray ) {
                return inputArray.indexOf(item) == index;
            });

            console.log(arrList10);

            for(var p in arrList10){
                console.log(arrList10[p]);
                data[arrList10[p]] = data[arrList10[p]] + 25;
            }
            for(var p in arrList10){
                console.log(arrList10[p]);
                data1[arrList10[p]] = data1[arrList10[p]] + 25;
            }
            for(var p in arrList10){
                console.log(arrList10[p]);
                data2[arrList10[p]] = data2[arrList10[p]] + 25;
            }

            //2
            var question21 = $scope.opt21;
            var question22 = $scope.opt22;
            var question23 = $scope.opt23;
            var question24 = $scope.opt24;
            var question25 = $scope.opt25;
            var question26 = $scope.opt26;
            var question27 = $scope.opt27;
            var question28 = $scope.opt28;
            var question29 = $scope.opt29;
            var result2 = question21 + "," + question22 + "," + question23 + "," + question24+ "," + question25+ "," +question26 + "," + question27 + "," + question28+ "," + question29 ;//+ "," + question13;

            var arrList20 = result2.split(",");
            console.log(arrList20);

            console.log("testing 2!!!!!");

            arrList20 = arrList20.filter( function( item, index, inputArray ) {
                return inputArray.indexOf(item) == index;
            });

            console.log(arrList20);

            for(var p in arrList20){
                console.log(arrList20[p]);
                data[arrList20[p]] = data[arrList20[p]] + 25;
            }
            for(var p in arrList20){
                console.log(arrList20[p]);
                data1[arrList20[p]] = data1[arrList20[p]] + 25;
            }
            for(var p in arrList20){
                console.log(arrList20[p]);
                data2[arrList20[p]] = data2[arrList20[p]] + 25;
            }
            //3
            var question31 = $scope.opt31;
            var question32 = $scope.opt32;
            var question33 = $scope.opt33;
            var result3 = question31 + "," + question32 + "," + question33  ;//+ "," + question13;

            var arrList30 = result3.split(",");
            console.log(arrList30);

            console.log("testing 3!!!!!");

            arrList30 = arrList30.filter( function( item, index, inputArray ) {
                return inputArray.indexOf(item) == index;
            });

            console.log(arrList30);

            for(var p in arrList30){
                console.log(arrList30[p]);
                data[arrList30[p]] = data[arrList30[p]] + 25;
            }
            for(var p in arrList30){
                console.log(arrList30[p]);
                data1[arrList30[p]] = data1[arrList30[p]] + 25;
            }
            for(var p in arrList30){
                console.log(arrList30[p]);
                data2[arrList30[p]] = data2[arrList30[p]] + 25;
            }
            //4
            var question41 = $scope.opt41;
            var question42 = $scope.opt42;
            var question43 = $scope.opt43;
            var result4 = question41 + "," + question42 + "," + question43  ;//+ "," + question13;

            var arrList40 = result4.split(",");
            console.log(arrList40);

            console.log("testing 4!!!!!");

            arrList40 = arrList40.filter( function( item, index, inputArray ) {
                return inputArray.indexOf(item) == index;
            });

            console.log(arrList40);

            for(var p in arrList40){
                console.log(arrList40[p]);
                data[arrList40[p]] = data[arrList40[p]] + 25;
            }
            for(var p in arrList40){
                console.log(arrList40[p]);
                data1[arrList40[p]] = data1[arrList40[p]] + 25;
            }
            for(var p in arrList40){
                console.log(arrList40[p]);
                data2[arrList40[p]] = data2[arrList40[p]] + 25;
            }
            //5
            var question51 = $scope.opt51;
            var question52 = $scope.opt52;
            var question53 = $scope.opt53;
            var question54 = $scope.opt54;
            var result5 = question51 + "," + question52 + "," + question53+ "," + question54  ;//+ "," + question13;

            var arrList50 = result5.split(",");
            console.log(arrList50);

            console.log("testing 5!!!!!");

            arrList50 = arrList50.filter( function( item, index, inputArray ) {
                return inputArray.indexOf(item) == index;
            });

            console.log(arrList50);

            for(var p in arrList50){
                console.log(arrList50[p]);
                data[arrList50[p]] = data[arrList50[p]] + 25;
            }
            for(var p in arrList50){
                console.log(arrList50[p]);
                data1[arrList50[p]] = data1[arrList50[p]] + 25;
            }
            for(var p in arrList50){
                console.log(arrList50[p]);
                data2[arrList50[p]] = data2[arrList50[p]] + 25;
            }





             CloudService.setData(data);
             DBService.setData(data1);
             FrameService.setData(data2);
             $location.path("/section1");

        }
    }

    var myapp = angular.module("surviapp")
    myapp.controller("generalController", generalController)
})();