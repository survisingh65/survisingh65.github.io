/**
 * Created by Ashish on 2/11/2017.
 */
(function(){
    var myapp = angular.module("surviapp");
    myapp.service("EventService", EventService)

    function EventService($q, $http){

        this.searchEvent = searchEvent

       function searchEvent(event){
            var deff = $q.defer();

            $http({
                method: 'GET',
                url: 'https://www.eventbriteapi.com/v3/events/search/?expand=venue&location.latitude=42.35&location.longitude=-71.06&location.within=10mi',
                params: {
                    q: event,
                    token: 'IVT43S2BSWC525YQGO4S'
                }
            }).success(function(response){
                deff.resolve(response);
            }).error(function(){
                deff.reject();
            })

            return deff.promise;

        }
    }
})();
