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
    var frequency = 0 ;

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
          trainName: name ,
          location: destination,
          firstTrain: firstTrain ,
          frequency: frequency ,
          
        })
        

        // Appending results into table using JQuery
        $("#add-row").prepend("<tr><td>" + name + "</td><td>" + destination + "</td><td>"+ frequency + "</td><td>")

    })


