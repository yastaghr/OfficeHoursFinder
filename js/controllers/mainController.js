app.controller('mainController', ['$scope', function($scope){
  $scope.header: {
    left: 'prev,next today',
    center: 'Your Scheduled Hours:',
    right: 'month,basicWeek,basicDay'
  },
  $scope.defaultDate: '2015-02-12',
  $scope.editable: true,
  $scope.eventLimit: true, // allow "more" link when too many events
  $scope.events: []
  $scope.addHours = function(){
    //get new hours formatted
    $scope.events.push(newHours);
  }
  $scope.removeHours = function(hours){
    delete $scope.events[hours];
  }
}]);
