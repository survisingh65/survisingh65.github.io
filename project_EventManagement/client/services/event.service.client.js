'use strict';
(function() {
    angular
        .module("EventApp")
        .factory("EventService", EventService);

    function EventService($q, $http) {
        var api = {
            searchEvent: searchEvent,
            getEventById: getEventById,
            getEventByQuery: getEventByQuery,
            getEventBySubCategories: getEventBySubCategories,
            saveUserEvent: saveUserEvent
        };

        return api;

        function searchEvent(event) {
            console.log("in event search function");
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'https://www.eventbriteapi.com/v3/events/search/?expand=venue&location.latitude=42.35&location.longitude=-71.06&location.within=10mi',
                params: {
                    //q: event,
                    token: 'IVT43S2BSWC525YQGO4S'
                }
            }).success(function (response) {
                    var a = response;
                    console.log(a);
                    deferred.resolve(response);
                }
            );
            return deferred.promise;
        }



        function getEventByQuery(query) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'https://www.eventbriteapi.com/v3/events/search/?expand=venue',
                params: {
                    q: query,
                    token: 'IVT43S2BSWC525YQGO4S'
                }
            }).success(function (response) {
                    var a = response;
                    console.log(a);
                    deferred.resolve(response);
                }
            );
            return deferred.promise;
        }

        function getEventBySubCategories(query) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'https://www.eventbriteapi.com/v3/events/search/?expand=venue',
                params: {
                    subcategories: query,
                    token: 'IVT43S2BSWC525YQGO4S'
                }
            }).success(function (response) {
                    var a = response;
                    console.log(a);
                    deferred.resolve(response);
                }
            );
            return deferred.promise;
        }

        function getEventById(eventId) {
            console.log("in event by Id function");
            var deferred = $q.defer();
            $http({
                method: 'GET',
                //https://www.eventbriteapi.com/v3/events/search/?expand=venue&token=
                url: 'https://www.eventbriteapi.com/v3/events/'+eventId+'/?expand=venue',
                params: {
                    token: 'IVT43S2BSWC525YQGO4S'
                }
            }).success(function (response) {
                    var a = response.events;
                    console.log(a);
                    deferred.resolve(response);
                }
            );
            return deferred.promise;
        }

        function saveUserEvent(cu, event){
            var deferred = $q.defer();
            $http.post("/api/em/saveuserevent/"+cu._id, event)
                .then(
                    function(response){
                        deferred.resolve(response);
                    },
                    function(error){
                        deferred.reject(error);
                    }
                );
            return deferred.promise;
        }
    }
})();