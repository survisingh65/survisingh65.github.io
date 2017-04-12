(function(){
    var myapp = angular.module("surviapp");
    myapp.factory("EventFactory", EventFactory)

    function EventFactory($q, $http){

        var api = {
            searchEvent : searchEvent
        }
        return api;

        function searchEvent(event){
            var deff = $q.defer();

            $http({
                method: 'GET',
                url: 'https://www.eventbriteapi.com/v3/events/search/?expand=venue&location.latitude=42.35&location.longitude=-71.06&location.within=10mi',
                params: {
                    q: event,
                    token: 'IVT43S2BSWC525YQGO4S'
                }
            }).then(successFunct, errorFunct)

                function successFunct(response){
                    deff.resolve(response.data)
                }

                 function errorFunct(){
                    deff.reject( )
                 }
m
            return deff.promise;

        }
    }
})();
