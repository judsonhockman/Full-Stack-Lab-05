// The user's words per minute should be calculated and displayed on the screen when you reach the end of the last sentence.
//     * Can be calculated by: `numberOfWords / minutes - 2 * numberOfMistakes`
//  * For number of words, you can just count how many words make up the sentences you were given and hard code that value.
// * There should be a delay so the user can see the score. Then ask them if they would like to play again.
//     * If confirmed yes, reset the game back to the start.
//     * If no, leave as is.

// var numberOfWords = 54 {
// math('numberOfWords / minutes - 2 * numberOfMistakes`);
// };





//$(document).ready(function () { //not needed here becuae the scritp is at the bottom of the body

    $('#keyboard-upper-container').hide();

    $(document).keydown(function (event) {
        if (event.which === 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
    });
    $(document).keyup(function (event) {
        if (event.which === 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }

        $('.key').css('background-color', '#f5f5f5');
    });
//});

// different way to do the below
// to .css add:
//  .highlighted {
    // background-color: yellow;
    // }
    // $(document).keypress(function (event) {
// $('#' + event.which).addClass('highlighted')
// in key up above $('.highlighted').removeClass('highlighted);
    // })
    
var startTime;
var errorCount = 0
$(document).keypress(function (event) {
    event.preventDefault(); // this will prevent the screen from scrolling when the space bar is pressed
   if (!startTime) { // startTime is undefined at this time. ! says to set it
startTime = event.timeStamp;
   }
    var code = event.which;           // event.which tells it to look for an ASCII key number
    $('#' + code).css("background-color", "yellow"); 

if (event.which === currentLetter.charCodeAt(0)) {
    $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
} else {
    $('#feedback').append('<span class="glyphicon glyphicon-remove"></span');
    errorCount++;

}

letterIndex++;
if (letterIndex === currentSentence.length) { // if we are at the end of the current sentence...move on to the next sentence
    sentenceIndex++;
    if (sentenceIndex === sentences.length) { /// we are out of sentences...done
// **TODO end of the game, complete the wpm, show the alert, ask if they want to play again
var endTime = event.timeStamp;
var elapsedMinutes = (endTime - startTime) / (60 * 1000)
var wpm = 54 / elapsedMinutes - 2 * errorCount;
$('#feedback').text('You scored ' + ' words per minute.');
setTimeout(function() {
if (confirm('Would you like to play again')) {
    sentenceIndex = 0;
    letterIndex = 0;
    currentSentence = sentences[0];
    currentLetter = currentSentence.charAt(0);
    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);
    $('#feedback').empty();
    $('#yellow-block').css('left', '15px');
    startTime = undefined;
}
}, 2000);
    } else {
        // there is at least one more sentence
        // move on to the next sentence
        currentSentence = sentences[sentenceIndex];
        $('#sentence').text(currentSentence);
        // reset the letter back to the first position
        letterIndex = 0;
        currentLetter = currentSentence.charAt(letterIndex);
        $('#target-letter').text(currentLetter);
$('#feedback').empty();
        // TO DONE: clear out the feedback div (checks and Xs)
        $('#yellow-block').css('left', '15px');
    }
} else {
// not at the end of the sentence...move on to the next letter
currentLetter = currentSentence.charAt(letterIndex);
$('#target-letter').text(currentLetter);
$('#yellow-block').css('left', '+=17.5px');
}


});


// var timer = 0;
// var seconds = 0;//time elapsed
// var t;
// var stopped = 0;
// function Timer(event){
//     //clear timer if the reset button is
//     //clicked
//     $(".resetBtn").click(function(){
//       clearInterval(t);
//       seconds = 0;
//       timer = 0;
//     });

//     //start the timer (called from onkeypress in index.html)
//     if(timer == 0 && event.which!=13 && stopped == 0){
//       $('h2').replaceWith("<h2>Time elapsed: " + seconds/10 + " seconds.</h2>");
//       timer = 1;
//       t = setInterval(function() {startTime()}, 100);
//       timer = 1;
//     }

// }

// //timer
// function startTime () {
//     seconds = seconds + 1;
//     $('h2').replaceWith("<h2>Time elapsed: " + seconds/10 + " seconds.</h2>");
// }

// var startTime

// if (user says they'd like to play again') {
//     alert ('Great! Start typing now.');
//     }   else {

//     }
// ;


     // # symbol represents id(s) in both css and jquery. the # here says "look for everything in index.html that has an id. Index.html has labeled all of the upper and lower case keys as ids.




// The sentences in the provided array should be displayed at the top of the page one sentence at a time. Once the sentence has been completed, the next in line should appear. There is already a div with id="sentence" in your html file. This is where you will display each sentence one at a time.

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

var sentenceIndex = 0;
var letterIndex = 0;
var currentSentence = sentences[0];
var currentLetter = currentSentence.charAt(0);
// $('#keyboard-upper-container').hide(); This appears elsewhere in the .js code
$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);

// did you hit t?



//  id="sentence"></div>
//  r" id="target-letter"></div>
// // forEach
// for (var i = 0; i < sentences.length; i++) {
//     var oneSentence = sentences[i];
// console.log(oneSentence);   }


 
//current sentence, current letter







//$('*').hide();
// Line above makes whole page disappear on load. Can't figure out how to identify the individual keyboards




