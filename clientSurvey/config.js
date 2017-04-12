/**
 * Created by Ashish on 2/9/2017.
 */
(function() {
    var myapp = angular.module("surviapp");
    myapp
        .config(function($routeProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "views/home/home.view.html"
                    })
                    .when("/course",{
                        templateUrl: "views/course/course.view.html"
                    })
                    .when("/contact",{
                        templateUrl: "views/contact/contact.view.html"
                    })
                    .when("/event",{
                        templateUrl: "views/event/event.view.html",
                        controller: "ec"
                    })
                    .when("/survey",{
                        templateUrl: "views/survey/q1.view.html",
                        controller:"q1Controller"
                    })
            }
        )
    }
)();