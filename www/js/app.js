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
apiKey: "AIzaSyAAi3FXzbY4Jl2Ij1Zc7Qf4p45GZZXaGUM",
authDomain: "kintaiapp-db93d.firebaseapp.com",
databaseURL: "https://kintaiapp-db93d.firebaseio.com",
projectId: "kintaiapp-db93d",
storageBucket: "kintaiapp-db93d.appspot.com",
messagingSenderId: "118236638197"
};

console.log(config);

firebase.initializeApp(config);

console.log("app.js loaded!");
