myapp.controller('LoginController', ['$scope', 'googleLogin', 'googleCalendar', 'googlePlus', function($scope, googleLogin, googleCalendar, googlePlus) {
    
    this.login = function () {
        console.log("AppController login start.");
        googleLogin.login();
    };

    $scope.$on("googlePlus:loaded", function() {
       var user = googlePlus.getCurrentUser();
      console.log("googlePlus:loaded.");
      googlePlus.getCurrentUser().then(function(user) {
        console.log(user);
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(user));
        $scope.splitter.content.load("tabbar.html");
      });
    })
    
    this.currentUser = googleLogin.currentUser;

    ons.ready(function() {
        console.log("googleLogin = " + googleLogin);
        console.log("LoginController is ready!");
    });
    
}]);

