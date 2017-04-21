/**
 * Created by Venkata Rishik on 4/16/2017.
 */
(function(){
    var myapp = angular.module("surviapp");
    myapp.service("DBService", DBService)

    function DBService($q, $http, $rootScope){

        this.getData = getData;
        this.setData = setData;

        $rootScope.data1 = result = {
            OrientDB:0,
            MarkLogic:0,
            RethinkDB:0,
            Terrastore:0,
            RaptorDB:0,
            DynamoDB:0,
            MongoDB:0,
            Neo4j:0,
            Redis:0,
            CouchBase:0,
            OracleNoSQL:0,
            Datastax:0,
            HyperTable:0,
            Accumulo:0,
            Hbase:0,
            Cassandra:0,
            CartoDb:0,
            CouchDB:0,
            None:0
        }

        function getData(){
            return $rootScope.data1;
        }

        function setData(data1){
            $rootScope.data1 = data1;
        }
    }
})();

