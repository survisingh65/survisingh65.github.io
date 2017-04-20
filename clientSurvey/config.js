
(function() {
    var myapp = angular.module("surviapp");
    myapp
        .config(function($routeProvider) {
                $routeProvider
                    .when("/",{
                        templateUrl: "views/survey/qualifier.view.html",
                        controller: "qualifierController"
                    })
                    .when("/startSurvey",{
                        templateUrl: "views/survey/startSurvey.view.html",
                        controller: "startSurveyController"
                    })
                    .when("/general",{
                        templateUrl: "views/survey/general.view.html",
                        controller: "generalController"
                    })
                    .when("/section1",{
                        templateUrl: "views/survey/section1.view.html",
                        controller: "section1Controller"
                    })
                    .when("/section2",{
                        templateUrl: "views/survey/section2.view.html",
                        controller:"section2Controller"
                    })
                    .when("/section3",{
                        templateUrl: "views/survey/section3.view.html",
                        controller:"section3Controller"
                    })
                    .when("/output",{
                        templateUrl: "views/survey/output.view.html",
                        controller:"outputController"
                    })
                    .otherwise({
                        redirectTo: "/"
                    })
            }
        )
    }
)();