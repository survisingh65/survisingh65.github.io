(function(){
   var q1Controller = function($scope,$rootScope){
       $scope.OnSubmit = function(){
           var x = $scope.radioValue;
           var arr = x.split(",");
           console.log(arr);

            for(var p in arr){
                console.log(arr[p]);
                $rootScope.result[arr[p]] = $rootScope.result[arr[p]] + 1;
            }

           console.log($rootScope.result);
       }

       $rootScope.result = {
           a:0,
           b:0,
           c:0,
           d:0,
           e:0,
           f:0,
           g:0,
           h:0
       }

   }
     var myapp = angular.module("surviapp")
     myapp.controller("q1Controller", q1Controller)
})();
