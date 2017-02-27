(function(){
    angular
        .module("EventApp")
        .controller("HomeController", HomeController)

    function HomeController($rootScope, $scope, $location, $window, UserService, EventService) {
        console.log("HomeController");
        var vm = this;

        $scope.lat = 42.364506;
        $scope.lon = -71.038887;
        $scope.getPopularEvent = getPopularEvent;

        function getPopularEvent(){
            getCurrentPosition();

            EventService.searchEvent(event, $scope.lat ,$scope.lon)
                .then(
                    function(doc){
                        vm.events = doc.events;
                        for (i = 0; i < vm.events.length; i++) {
                            createMarker(vm.events[i]);
                        }
                    }
                )
        }

        if(UserService.getUserFromWindowScope()){
            UserService.setRootScope(JSON.parse(UserService.getUserFromWindowScope()));
        }

        function getCurrentPosition(){
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            if(navigator.geolocation){
               navigator.geolocation.getCurrentPosition(showPosition, error, options);
            }
            else{
                console.log("Browser does not support geo");
            }

            function showPosition(geoposition) {
                $scope.lat = geoposition.coords.latitude;
                $scope.lon = geoposition.coords.longitude;
            }

            function error() {
                console.log("Error");
            }
        }

        // Google map logic and building the marker of events on map

        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng($scope.lat, $scope.lon),
            mapTypeId: google.maps.MapTypeId.TERRAIN,
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info) {
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.venue.latitude, info.venue.longitude),
                title: info.name.text,
                animation: "Animation.BOUNCE",
                icon: "https://upload.wikimedia.org/wikipedia/commons/9/92/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Home_%E2%80%93_People_%E2%80%93_Default.png"
            });
            marker.content = '<div class="infoWindowContent">' + info.venue.name + '</div>';

            var et = info.id;
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent('<a href="#/eventDetail/'+et+'"><h4 style="color:#3B5998">' + marker.title + '</h4></a>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);
        }
    }
})();