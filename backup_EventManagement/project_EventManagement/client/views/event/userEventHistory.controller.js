(function() {
    angular
        .module("EventApp")
        .controller("UserEventHistoryController", UserEventHistoryController)

    function UserEventHistoryController($rootScope, $scope, $location, $routeParams, UserService, EventService) {
        console.log("Inside user event history");

        $scope.init = init;

        if(UserService.getUserFromWindowScope()){
            UserService.setRootScope(JSON.parse(UserService.getUserFromWindowScope()));
        }

        function init(){
            console.log("Success in Login");
            $rootScope.history = UserService.getRootScope().events;
        }
    }
})();
