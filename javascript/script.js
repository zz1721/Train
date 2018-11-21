// var CalFreq = 10;


// $(document).ready()

// {
// $("#Calfrequency").text("Yo")
// console.log(CalFreq)

// }

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCbqukNwY_vmTc6WkUuCKvyy430sCwlxMk",
    authDomain: "trainschedule-829f9.firebaseapp.com",
    databaseURL: "https://trainschedule-829f9.firebaseio.com",
    projectId: "trainschedule-829f9",
    storageBucket: "trainschedule-829f9.appspot.com",
    messagingSenderId: "335964255387"
  };

  firebase.initializeApp(config);

  var database = firebase.database();




var toneFrequency = 10;
var tsecondFrequency = 50;
var tthreeFrequency = 25;

var firstTrainTime= "5:00";
var secondTrainTime= "4:00";
var thirdTrainTime= "3:30";
   // Capture Button Click
//    $("#submitbt").on("click", function(event){

//     event.preventDefault();

//     alert("clicked!");
//     // YOUR TASK!!!
//     // Code in the logic for storing and retrieving the most recent user.
//     // Don't forget to provide initial data to your Firebase database.


//     name = $("#name-input").val().trim();
//     destination = $("#Destination-input").val().trim();
//     time = $("#Time-input").val().trim();
//     Frequency = $("#Frequency-input").val().trim();

//     // Code for the push
//     dataRef.ref().push({
    
//       name: name,
//       destination: destination,
//       time: time,
//       Frequency: Frequency,
//       dateAdded: firebase.database.ServerValue.TIMESTAMP
//     });
//   });

var Timeinput;

 // First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

var secondTimeConverted = moment(secondTrainTime, "HH:mm").subtract(1, "years");
    console.log(secondTimeConverted);

var thirdTimeConverted = moment(thirdTrainTime, "HH:mm").subtract(1, "years");
    console.log(thirdTimeConverted);

var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times for first train
    var firstdiffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + firstdiffTime);

    // Difference between the times for second train
    var seconddiffTime = moment().diff(moment(secondTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + seconddiffTime);

    // Difference between the times for third train
    var thirddiffTime = moment().diff(moment(thirdTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + thirddiffTime);


     // Time apart (remainder)
    var toneRemainder = firstdiffTime % toneFrequency;
    console.log(toneRemainder);

     // Time apart (remainder)
    var tsecondRemainder = seconddiffTime % tsecondFrequency;
    console.log(tsecondRemainder);

     // Time apart (remainder)
    var tthirdRemainder = thirddiffTime % tthreeFrequency;
    console.log(tthirdRemainder);


    // Minute Until Train
    var toneMinutesTillTrain = toneFrequency - toneRemainder;
    $(".oMinAway").html(toneMinutesTillTrain)
    console.log("MINUTES TILL TRAIN: " + toneMinutesTillTrain);

    var tsecondMinutesTillTrain = tsecondFrequency - tsecondRemainder;
    $(".sMinAway").html(tsecondMinutesTillTrain)
    console.log("MINUTES TILL TRAIN: " + tsecondMinutesTillTrain);

    var tthirdMinutesTillTrain = tthreeFrequency - tthirdRemainder;
    $(".tMinAway").html(tthirdMinutesTillTrain)
    console.log("MINUTES TILL TRAIN: " + tthirdMinutesTillTrain);

    // Next Train
    // var nextoneTrain = moment().add(toneMinutesTillTrain, "minutes");
    // $(".onearrivalTime").html(nextoneTrain)
    // console.log("ARRIVAL TIME: " + moment(nextoneTrain).format("hh:mm a"));

    // var nextsecondTrain = moment().add(tsecondMinutesTillTrain, "minutes");
    // $(".secondarrivalTime").html(nextsecondTrain)
    // console.log("ARRIVAL TIME: " + moment(nextsecondTrain).format("hh:mm A"));

    var nextthirdTrain = moment().add(tthirdMinutesTillTrain, "minutes");
    $(".thirdarrivalTime").html(nextthirdTrain)
    console.log("ARRIVAL TIME: " + moment(nextthirdTrain).format("hh:mm"));
    Timeinput=moment(nextthirdTrain).format("hh:mm A");
    
    $("#add-train").on("click", function(event) {
        event.preventDefault();
      
        // Grabs user input
        var TrainName = $("#name-input").val().trim();
        var Destination = $("#destination-input").val().trim();
        Timeinput = moment($("#train-input").val().trim(), "HH:mm").format("X");
        var FrequencyInput = $("#time-input").val().trim();

        
      
        // Creates local "temporary" object for holding  data
        var newEmp = {
          name: TrainName,
          Destination: Destination,
          Timeinput: Timeinput,
          FrequencyInput: FrequencyInput
        };
      
        // Uploads employee data to the database
        database.ref().push(newEmp);
      
        // Logs everything to console
        console.log(newEmp.name, "train");
        console.log(newEmp.Destination);
        console.log(newEmp.Timeinput);
        console.log(newEmp.FrequencyInput);
      
        alert("Etrain successfully added");
      
        // Clears all of the text-boxes
        $("#name-input").val("");
        $("#Destination-input").val("");
        $("#Time-input").val("");
        $("#Frequency-input").val("");
      });
      
      // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
      database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());
      
        // Store everything into a variable.
        var TrainName = childSnapshot.val().name;
        var Destination = childSnapshot.val().Destination;
        var Timeinput = childSnapshot.val().Timeinput;
        var FrequencyInput = childSnapshot.val().FrequencyInput;
      
        // Employee Info
        console.log(TrainName);
        console.log(Destination);
        console.log(Timeinput);
        console.log(FrequencyInput);
      
        
        // Prettify the employee start
        var Timeinput = moment.unix(Timeinput).format("HH:mm A");
      
        // Calculate the months worked using hardcore math
        // To calculate the months worked
        var TimeMin = moment().diff(moment(Timeinput, "X"), "minutes");
        console.log(TimeMin);
      
        // Calculate the total billed rate
        // var empBilled = empMonths * empRate;
        // console.log(empBilled);
      
        // Create the new row
        var newRow = $("<tr>").append(
          $("<td>").text(TrainName),
          $("<td>").text(Destination),
          $("<td>").text(FrequencyInput),
          $("<td>").text(Timeinput),
          $("<td>").text(toneMinutesTillTrain)
        );
      
        // Append the new row to the table
        $("tbody").append(newRow);
      });

