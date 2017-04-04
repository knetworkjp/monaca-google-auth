myapp.controller('AppController', ['$scope', '$interval', 'googleLogin', 'googleCalendar', 'googlePlus', function($scope, $interval, googleLogin, googleCalendar, googlePlus) {

    this.load = function(page) {
        console.log("AppController loading " + page);
        $scope.splitter.content.load(page);
        $scope.splitter.left.close();
    };

    this.toggle = function() {
      $scope.splitter.left.toggle();
    };
    
    this.changetab = function(tabId) {
      $scope.tabbar.setActiveTab(tabId);
      $scope.splitter.left.toggle();
    };
    
    this.navi = function(page) {
      $scope.tabNavigator.pushPage(page);
      $scope.splitter.left.toggle();
    };
    
    this.tabchange = function($event) {
        console.log("AppController tabchange is called tabid = " + $event.index);
        var user = null;
        var userStr = localStorage.getItem('user');
        if(userStr != null) {
            user = eval('(' + userStr + ')');
            console.log(user);
            $scope.user = user;
            this.test = 'test2';
        }
        if(user == null){
            $scope.splitter.content.load('view/login.html');
        }
        if($event.index == 1) {
            googleCalendar.listCalendars().then(function(response) {
                console.log(response);
            });
        }
    };
    
    this.currentUser = googleLogin.currentUser;

    this.logout = function() {
      localStorage.setItem('user', null);
      $scope.splitter.left.close();
      $scope.splitter.content.load("tabbar.html");
    };
    
    ons.ready(function() {
        console.log("googleLogin = " + googleLogin);
        console.log("AppController is ready!");
    });
    
}]);

