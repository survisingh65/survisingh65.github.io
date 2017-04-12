/**
 * Created by Ashish on 2/11/2017.
 */
(function(){
  var myapp = angular.module("surviapp")
  var temp = function(){
    return{template: "<h1>survi's directive</h1>"};
  }
  myapp.directive("ngSurviSingh",temp)
})();