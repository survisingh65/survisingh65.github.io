/**
 * Created by Venkata Rishik on 4/17/2017.
 */
(function(){

    var myapp = angular.module("surviapp");

    myapp.service("FrameService", FrameService)

    function FrameService($q, $http, $rootScope){

        this.getData = getData;

        this.setData = setData;

        $rootScope.data2 = result = {

            MapReduce:0,

            Hadoop:0,

            Storm:0,

            Spark:0,

            Flink:0,

            Peregrine:0,

            Gridgain:0,

            Samza:0,

            Gluster:0,

            Avro:0,

            Tigion:0,

            None:0

        }

        function getData(){

            return $rootScope.data2;

        }

        function setData(data2){

            $rootScope.data2 = data2;

        }

    }

})();