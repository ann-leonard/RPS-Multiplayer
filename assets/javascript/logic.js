 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC4IziQ1wQ5nOhfxljJBMKqKmAAAGr0oXY",
    authDomain: "rpsgame-52908.firebaseapp.com",
    databaseURL: "https://rpsgame-52908.firebaseio.com",
    projectId: "rpsgame-52908",
    storageBucket: "rpsgame-52908.appspot.com",
    messagingSenderId: "750365837167"
  };
  firebase.initializeApp(config);
//database reference
var database = firebase.database();
//connections reference
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
//global variables
var firstImg = $(".domPlayerOne")
var secondImg = $(".domPlayerTwo")
var rockSrc = "./assets/images/rock.png"
var paperSrc= "./assets/images/paper.png"
var scissorSrc = "./assets/images/scissors.png"

connectedRef.on("value", function(snapshot) {
    if (snapshot.val()) {
      var con = connectionsRef.push(true);
      con.onDisconnect().remove();
    }
  });
  connectionsRef.on("value", function(snapshot) {
    console.log(snapshot.numChildren())

  });
  

$(document.body).on("click", ".card", function(){
 
    if(firstImg.attr("src") != "./assets/images/loading.gif"){
        alert("You have already made your move")
    }
    else if ($(this).hasClass("rock")){
        firstImg.attr("src", rockSrc)    
    }
    else if ($(this).hasClass("paper")){
        firstImg.attr("src", paperSrc)
    }
    else{
        firstImg.attr("src", scissorSrc)
    }
})