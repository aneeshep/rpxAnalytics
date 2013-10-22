'use strict';

angular.module('WorksApp')
  .controller('MainCtrl', function ($scope, Rpxservice) {

    $scope.models = [];
    

    $scope.init = function() {
      Rpxservice.getModels()
      .success(function (res) {
        console.log(res);
        $scope.models = res;
      });
    };


  });
