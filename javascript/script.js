// var CalFreq = 10;


// $(document).ready()

// {
// $("#Calfrequency").text("Yo")
// console.log(CalFreq)

// }

var toneFrequency = 10;
var tsecondFrequency = 40;
var tthreeFrequency = 20;

var firstTrainTime= "5:30";
var secondTrainTime= "4:00";
var thirdTrainTime= "3:30";


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
    console.log("MINUTES TILL TRAIN: " + toneMinutesTillTrain);

    var tsecondMinutesTillTrain = tsecondFrequency - tsecondRemainder;
    console.log("MINUTES TILL TRAIN: " + tsecondMinutesTillTrain);

    var tthirdMinutesTillTrain = tthreeFrequency - tthirdRemainder;
    console.log("MINUTES TILL TRAIN: " + tthirdMinutesTillTrain);

    // Next Train
    var nextoneTrain = moment().add(toneMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextoneTrain).format("hh:mm"));

    var nextsecondTrain = moment().add(tsecondMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextsecondTrain).format("hh:mm"));

    var nextthirdTrain = moment().add(tthirdMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextthirdTrain).format("hh:mm"));

