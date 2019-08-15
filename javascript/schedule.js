// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBoHOFDGn5JXKm0pSuKO5-C5ioH3MNLZbE",
  authDomain: "trainscheduler-jayr.firebaseapp.com",
  databaseURL: "https://trainscheduler-jayr.firebaseio.com",
  projectId: "trainscheduler-jayr",
  storageBucket: "",
  messagingSenderId: "495137990831",
  appId: "1:495137990831:web:3ffb42c7b9d92aaf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


var name
var destination
var firstTrain
var frequency = 0;

// Click event to gather useer input info
$("#addTrain").on("click", function () {
  event.preventDefault();
  name = $("#trainName").val().trim();
  destination = $("#place").val().trim();
  firstTrain = $("#firstTrain").val().trim();
  frequency = $("#frequency").val().trim();

  console.log(name)
  console.log(destination)
  console.log(firstTrain)
  console.log(frequency)


  var momentFirstTrain = moment(firstTrain, "HH:mm ")
  var momentFrequency = moment(frequency, "mm")
  var now = moment();

  console.log('moment first train', momentFirstTrain);
  console.log('moment freq', momentFrequency);
  console.log("current time", now);
  console.log("moment current time", now)

   var diffMin = now.diff(momentFirstTrain, "minutes ")
   var remaining = diffMin % frequency;
   var mintoCompleteFrequency = frequency - remaining;
   var nextTrain = now.add(mintoCompleteFrequency, "minutes").format("HH:mm ");

   console.log("next train time", nextTrain);
   console.log("remaining time", remaining);
   console.log("complate frequency", mintoCompleteFrequency)

   database.ref().push({
    trainName: name,
    location: destination,
    firstTrain: firstTrain,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP,
    next: nextTrain,
    remaining: mintoCompleteFrequency,
  })
  
  
  
})
database.ref().on("child_added", function (childSnapshot) {
  
  console.log( childSnapshot.val() );
  $("#add-row").prepend("<tr><td>" + childSnapshot.val().trainName + "</td><td>" + childSnapshot.val().location + "</td><td>" + childSnapshot.val().frequency + "</td><td>" + childSnapshot.val().next + "</td><td>" + childSnapshot.val().remaining + "</td></tr>");

})







