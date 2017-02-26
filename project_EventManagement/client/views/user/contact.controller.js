(function(){
    angular
        .module("EventApp")
        .controller("ContactController", ContactController)

    function ContactController($rootScope, $scope, $location, UserService){
        console.log("ContactController");

        if(UserService.getUserFromWindowScope()){
            UserService.setRootScope(JSON.parse(UserService.getUserFromWindowScope()));
        }

    }
})();