'use strict';

angular.module('WorksApp')
  .service('Rpxservice', ['$http', function ($http) {

        var apiUrl =  'http://10.50.43.27:8080/AnalyticsPoc/services/analytics';

        this.getModels = function () {
            return $http.get(apiUrl + '/models');
          };

        this.getModelDetails = function(id) {

          return $http.get( apiUrl + '/models/' + id);
        };

        this.getModelResult = function(id, data) {
            //var data = { I_PATENT_NUMS : '122122', I_NUM_CLASSCODES :10 };
            var config = { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return $http.post( apiUrl + '/models/'+id, $.param(data) ,config);
          };
      }]);