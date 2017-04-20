(function(){
    var outputController = function($scope, $rootScope, $location, CloudService,DBService,FrameService){
        var data = CloudService.getData();
        var data1=DBService.getData();
        var data2=FrameService.getData();

        var max = 0;
        var max1=0;
        var max2=0;

        console.log("Db"+data1);
        console.log("Cloud"+data);
        console.log("Frame"+data2);


        for(d in data){
            if(max<data[d] && d !="None")
                max = data[d];
            console.log(data[d]);
        }

        var listOfFrameworks = [];
        for(d in data){
            if(data[d] == max && d !="None"){
                listOfFrameworks.push(d);
            }
        }
        console.log("FrameWork Starts Here"+listOfFrameworks);

        $scope.out = listOfFrameworks;

        //DB

        for(p in data1){
            if(max1<data1[p] && p !="None")
                max1 = data1[p];
            console.log(data1[p]);
        }

        var listOfDB = [];
        for(p in data1){
            if(data1[p] == max1 && p !="None"){
                listOfDB.push(p);
            }
        }
        console.log("DB Starts Here"+listOfDB);

        $scope.out1 = listOfDB;

        //Frame

        for(p in data2){
            if(max2<data2[p] && p !="None")
                max2 = data2[p];
            console.log(data2[p]);
        }

        var listOfFrame = [];
        for(p in data2){
            if(data2[p] == max2 && p !="None"){
                listOfFrame.push(p);
            }
        }
        console.log("DB Starts Here"+listOfDB);

        $scope.out2 = listOfFrame;
    }



    var myapp = angular.module("surviapp")
    myapp.controller("outputController", outputController)
})();
