/* Player click the Start button, question box display with a list of 10 questions and Start button hide 
Users choose their answer then hit Submit button, question box hide and result box display
 */

 /* VARIABLE:
    Create question variable with question list
    Create timeCount variable with timer set to 15second
    Create Result variable with display of correct/incorrect/unanswered 

    FUNCTION:
    Create questionDisplay function, this function loop through the question variable and append those question list to #game div. 
    Create countTime function, this function setInterval -1 second from 32s for each question (need the loop)
    Create a TimeUp function that stop the game when the time reach 0
    Create gradeQuiz function


    EVENT LISTENER:
    Add event listener on START button and SUBMIT button 
  */

$(document).ready(function(){

$("#timecount").hide();
$("#question").hide();
$('#result').hide();

//What happen after user click Start
$("#start-btn").on('click',function(){
    $(this).parent().hide(); //hide the start box before user click start
    $('#timecount').show();
    $('#question').show();
    $('#result').hide();
    countdown(35);
    questionDisplay ();
    //timeUp();

})

//What happen after user click Submit
$('#submit-btn').on('click' , function () {
    $('#result').show();
}) 




var correct = 0 ;
var incorrect = 0 ;
var unanswer = 0 ;

// var timeCount = {
//     timer: 30,
//     timerOn: false,
//     timerId: ''
// };

var questions = [

        { //Question, Options and Answer Object
    
            question: "A foreign exchange student lived with Michael when he was young. What did the foreign exchange student take from Michael back to what was formerly Yugoslavia?" , 
            answers: {
                a: "All of his blue jeans" , 
                b: "All of his short" , 
                c: "His favorite shoes"
            } ,
            correctAnswer: "All of his blue jeans" 

        } ,
        
        {
            question: "What does Kevin suggest Dwight put in his gun holster?" , 
            answers: {
                a: "A cell phone" ,
                b: "A banana" , 
                c: "A toy gun"
            } , 
            correctAnswer: "A banana"
            
        } , 
    
        {
            question: "At Phyllis and Bob Vance's wedding, what did Michael say everyone called Phyllis back in high school?" ,
            answers: {
                a: "Less-urban Aunt Jemima" ,
                b: "Phyll" , 
                c: "Easy rider" 
            } ,
            correctAnswer: "Easy rider"

        } , 
    
        {
            question: "What kind of sandwich does Michael have a dream about when he's the head of Michael Scott Paper Company?" ,
            answers: {
                a: "Peanut butter and tunafish" ,
                b: "Tunafish and skittles" , 
                c: "Mayo and black olives" 
            } ,
            correctAnswer: "Peanut butter and tunafish"

        } ,
        {
            question: "What's Stanley's morning 3 by 5?" ,
            answers: {
                a: "Iced tea 3 sugars 5 creams" ,
                b: "Coffee 3 sugars 5 creams" , 
                c: "Tea 3 sugar 5 creams"
            } ,
            correctAnswer: "Iced tea 3 sugars 5 creams"

        } ,

        {
            question: "What brand is Michael wearing on the day he accidentally wearing a woman's suit?" ,
            answers: {
                a: "MISSsterious" , 
                b: "MISStery" , 
                c: "Sassypant" 
            } ,
            correctAnswer: "MISSsterious"

        } ,
    
        {
            question: "Who does Michael wear on his head during the activity on diversity day?" , 
            answers: {
                a: "Colin Powell" ,
                b: "Ghandi" , 
                c: "Martin Luther King Jr"
            } ,
            correctAnswer: "Martin Luther King Jr" 
        } ];

//Question Display function 
var questionDisplay = function() 
    {
    //Create a loop to display question on a new Div
    for (var i=0 ; i < questions.length ; i++) {
        console.log(questions[i].question); //log the question out to test if it's running

        //Append linebreak
        var linebreak =$('<br />');
        $('#question').append(linebreak);

        //Create question boxes by js and attach it to div#question 
        var questionDiv = $('<div id= "questionBox"></div>');
        $(questionDiv).append(questions[i].question) //Assign the question loop to JS questionDiv variable
        //Then append that variable to HTML question Div
        $("#question").append(questionDiv); 

        //Create answer boxes by Js and attach it to div#question
        var answerDiv = $('<div id = "answerBox"></div>');

        var radioCheck1 = $('<label class="option"><input type="radio" name="option" value="' + questions[i].answers.a + '"/> </label>')
        var radioCheck2 = $('<label class="option"><input type="radio" name="option" value="' + questions[i].answers.b + '"/> </label>')
        var radioCheck3 = $('<label class="option"><input type="radio" name="option" value="' + questions[i].answers.c + '"/> </label>')
        //var radioCheck1 = $('<input type="radio" name="questions" value="' + questions[i].answers.a + '"/>')
        //var radioCheck2 = $('<input type="radio" name="questions" value="' + questions[i].answers.b + '"/>')
        //var radioCheck3 = $('<input type="radio" name="questions" value="' + questions[i].answers.c + '"/>')
        $(answerDiv).append(radioCheck1 , questions[i].answers.a);
        $(answerDiv).append(radioCheck2 , questions[i].answers.b);
        $(answerDiv).append(radioCheck3 , questions[i].answers.c);

        $("#question").append(answerDiv); //Then append answer variable to HTML question Div




        /* $('#col1').append(questions[i].answers.a); //Append answer "a" list to the game
        $('#opt1').append('<input type="radio" name="questions" value="' + questions[i].answers.a + '"/>'); //Create an input ratio for multiple choice
       
        
        $('#col2').append(questions[i].answers.b); //Append answer "b" list to the game
        $('#opt2').append('<input type="radio" name="questions" value="' + questions[i].answers.b + '"/>');
        
        $('#col3').append(questions[i].answers.c); //Append answer "c" list to the game
        $('#opt3').append('<input type="radio" name="questions" value="' + questions[i].answers.c + '"/>'); */
        }  

        //Submit Button
        var submitBtn = $('<button type="button" class="btn btn-primary black-background white" id="submit-btn">Submit</button>');
        $('#question').append(submitBtn);
    }


//Count down function
var countdown = function(seconds) {

    var timer = setInterval(function () {
        seconds -= 1;
        $("#remainingTime").text(seconds);

        if (seconds <= 0) {
            $('#countdown').fadeOut(500);
            correct =0;
            incorrect =0;
            unanswer =0;

        for ( var c = 0; c < questions.length ; c++) {
            if ($('input:radio[name="' + questions[c].correctAnswer + ' "]:checked').val() === questions[c].correctAnswer) {
                correct++;
                console.log("this is correct! number: " + c)

            } else {
                incorrect++;
                console.log("this is wrong: " + c)
            };
        }
        $('#correctAnswer').append(correct);
        $('#incorrectAnswer').append(incorrect);
        $('#result').fadeIn(1000).show();

        clearInterval(timer);
        return;
    }
},1000);

$('#submit-btn').on('click',function() {
    clearInterval(timer);
})

};

//gradeQuiz function

var gradeQuiz = $('#submit-btn').on('click', function(){
   

    for (var i =0; i < questions.length; i++) {
        if($(' input:radio[name="' + questions[i].correctAnswer + '"]:checked').val() === questions[i].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }; 
    };
    countdown();

    $('#timecount').fadeOut(500);
    $('#result').show();
    $('#correctAnswer').append(correct);
    $('#incorrectAnswer').append(incorrect);

})

//TimeUp function
//var timeUp = function () {
//   setTimeOut (countdown(),0);
//}
})
