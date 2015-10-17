app.directives('calendar', function(){
  return{
    restrict: 'E',
    scope:{
      info:'='
    },
    templateUrl: 'js/directives/calendar.html'
  }
});
