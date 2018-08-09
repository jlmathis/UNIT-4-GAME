

var crystal1 = Math.floor(Math.random() * (12 - 1) + 1);

var crystal2 = Math.floor(Math.random() * (12 - 1) + 1);

var crystal3 = Math.floor(Math.random() * (12 - 1) + 1);

var crystal4 = Math.floor(Math.random() * (12 - 1) + 1);




var win = 0;
var loss = 0;
var finalScore;



function reset() {

    randNum = Math.floor(Math.random() * (120 - 19) + 19);
    console.log('randomNumber =  ' + randNum);
    crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal4 = Math.floor(Math.random() * (12 - 1) + 1)
    finalScore = 0;


    $('.ranNumBox').html(randNum);
    $('.scoreChild').html(finalScore);
    start();
}

function start() {

    randNum = Math.floor(Math.random() * (120 - 19) + 19);
    console.log('randomNumber =  ' + randNum);
    crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal4 = Math.floor(Math.random() * (12 - 1) + 1)
    finalScore = 0;

    ///Setup random numberbox
    $('ranNumBox').html(randNum);
    $('.scoreChild').html(finalScore);




    $('.crystal-1').attr("value", crystal1);
    var test = $('.crystal-1').attr("value");

    console.log('crystal-1   ' + test);

    $('.crystal-2').attr("value", crystal2);
    var test = $('.crystal-2').attr("value");

    console.log('crystal-2   ' + test);

    $('.crystal-3').attr("value", crystal3);
    var test = $('.crystal-3').attr("value");

    console.log('crystal-3   ' + test);

    $('.crystal-4').attr("value", crystal4);
    var test = $('.crystal-4').attr("value");

    console.log('crystal-4   ' + test);

