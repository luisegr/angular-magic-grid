magicTable = angular.module('angular-magic-table',[]);
magicTable.directive('magicGrid', function() {
  return {
    restrict: 'E',
    scope: {
      datos: "=",
      config: "="
    },
    transclude: true,
    templateUrl: 'templates/mg-table.html',
    controller: ['$scope', function magicController($scope){
      $scope.search_text = "";
      console.log($scope.config);
    }]
  };
});
