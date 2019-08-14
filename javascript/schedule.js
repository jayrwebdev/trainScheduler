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

  database.ref().set({
    trainName: name,
    location: destination,
    firstTrain: firstTrain,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })


  var momentFirstTrain = moment(firstTrain, "HH:mm z")
  var momentFrequency = moment(frequency, "mm")
  var now = moment();




  var diffMin = now.diff(momentFirstTrain, "minutes ")
  var remaining = diffMin % frequency;
  var mintoCompleteFrequency = frequency - remaining;
  var nextTrain = now.add(mintoCompleteFrequency, "minutes").format("HH:mm z");

  console.log('moment first train', momentFirstTrain);
  console.log('moment freq', momentFrequency);
  console.log("current time", now);
  console.log("next train time", nextTrain);
  console.log("remaining time", remaining);
  console.log("moment current time", now)
  console.log("complate frequency",mintoCompleteFrequency)









  // Appending results into table using JQuery
  $("#add-row").prepend("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextTrain + "</td><td>" + mintoCompleteFrequency + "</td></tr>");

})







