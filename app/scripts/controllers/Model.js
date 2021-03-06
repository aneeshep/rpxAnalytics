'use strict';

angular.module('WorksApp')
  .controller('ModelCtrl', function ($scope, Rpxservice, $routeParams ) {


    /*console.log($routeParams.id);*/
    $scope.model = {};
    $scope.results = [];
    $scope.data = {};


    $scope.init = function() {

      Rpxservice.getModelDetails($routeParams.id)
       .success(function(res){
          /*console.log(res);*/
          $scope.model = res;
		     res.inputs.forEach(function(el, i){
              $scope.data[el.id] = el.defValue;

          });
        });
    };

    $scope.getDetails = function() {

      Rpxservice.getModelResult($routeParams.id, $scope.data)
        .success(function(res){

          console.log(res);
          $scope.results = res;
        });
    };


  });
