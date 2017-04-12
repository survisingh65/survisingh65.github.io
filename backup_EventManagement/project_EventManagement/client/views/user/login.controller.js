(function(){
    angular
        .module("EventApp")
        .controller("LoginController", LoginController)

    function LoginController($rootScope, $scope, $location, $window, UserService){
        console.log("LoginController");

        $scope.login = login;

        function login(user){
            console.log("Click Login button");
            UserService.findUserByCredential(user, 
            function(response){
                    UserService.setUserToWindowScope(response);
                    UserService.setRootScope(response);
                     
                     $location.url("/"); 
                 })
            
            
            //    .then(
            //        function(response){
            //            UserService.setUserToWindowScope(response.data[0]);
            //            UserService.setRootScope(response.data[0]);

            //            $location.url("/");
            //        }
            //    )

        }
    }
})();