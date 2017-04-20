(function(){
    var myapp = angular.module("surviapp");
    myapp.service("CloudService", CloudService)

    function CloudService($q, $http, $rootScope){

        this.getData = getData;
        this.setData = setData;


        $rootScope.data = result = {
            Pentaho:0,
            Informatica:0,
            Talend:0,
            SkyTree:0,
            Sqoop:0,
            Zookeeper:0,
            NiFi:0,
            Flume:0,
            None:0
        }
        function getData(){
            return $rootScope.data;
        }

        function setData(data){
            $rootScope.data = data;
        }
    }
})();
