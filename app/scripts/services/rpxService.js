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
      }]);