myapp.controller('HomeController', ['$scope', '$interval', 'googleLogin', function ($scope, $interval) {

    // 1000ミリ秒単位に処理を実行
    var t = $interval(function() {
      $scope.now = '現在時刻：' + (new Date()).toLocaleTimeString();
      // console.log(this.now);
      $scope.user = firebase.auth().currentUser;
      // console.log($scope.user);
    }, 1000);
    
    ons.ready(function() {
        // $scope.splitter.left.toggle();
        // console.log("googleLogin = " + googleLogin);
        console.log("HomeController is ready!");
    });
    
}]);
