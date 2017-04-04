var myapp = ons.bootstrap(['onsen','googleApi']);

// myapp.config(function(googleLoginProvider) {
//         googleLoginProvider.configure({
//             clientId: '25604735847-3hrfjp74pv66pqhvc7u6nho2iok2hts7.apps.googleusercontent.com',
//             scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/plus.login"]
//         });
//     });

ons.enableAutoStatusBarFill();

// Initialize Firebase
var config = {
apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
authDomain: "XXXXXXXXXXXXX.firebaseapp.com",
databaseURL: "https://xxxxxxxxxxxx.firebaseio.com",
projectId: "kintaiapp-99999",
storageBucket: "kintaiapp-99999.appspot.com",
messagingSenderId: "999999999999"
};

console.log(config);

firebase.initializeApp(config);

console.log("app.js loaded!");
