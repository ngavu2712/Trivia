/* Player click the Start button, question box display with a list of 10 questions and Start button hide 
Users choose their answer then hit Submit button, question box hide and result box display
 */

 /* VARIABLE:
    Create question variable with question list
    Create timeCount variable with timer set to 15second
    Create Result variable with display of correct/incorrect/unanswered 

    FUNCTION:
    Create questionDisplay function, this function loop through the question variable and append those question list to #game div. 
    Create countTime function, this function setInterval -1 second from 15s for each question (need the loop)
    Create gradeQuiz function

    EVENT LISTENER:
    Add event listener on START button and SUBMIT button 
  */

$(document).ready(function(){

$("#timecount").hide();
$("#game").hide();
$('#result').hide();

$("#start-btn").on('click',function(){
    $(this).parent().hide(); //hide the start box before user click start
    $('#timecount').show();
    $('#game').show();
    countdown(32);
    questionDisplay ();

})

// var result = {
//     correct: 0 ,
//     incorrect: 0 ,
//     unanswer: 0
// };

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
            correctAnswer: "All of his blue jeans" ,
            class: 'first' ,
            divClass: '.exchange'
        } ,
        
        {
            question: "What does Kevin suggest Dwight put in his gun holster?" , 
            answers: {
                a: "A cell phone" ,
                b: "A banana" , 
                c: "A toy gun"
            } , 
            correctAnswer: "A banana",
            class: 'second' ,
            divClass: '.gun'
            
        } , 
    
        {
            question: "At Phyllis and Bob Vance's wedding, what did Michael say everyone called Phyllis back in high school?" ,
            answers: {
                a: "Less-urban Aunt Jemima" ,
                b: "Phyll" , 
                c: "Easy rider" 
            } ,
            correctAnswer: "Easy rider",
            class: 'third' ,
            divClass: 'phyllis'
        } , 
    
        {
            question: "What kind of sandwich does Michael have a dream about when he's the head of Michael Scott Paper Company?" ,
            answers: {
                a: "Peanut butter and tunafish" ,
                b: "Tunafish and skittles" , 
                c: "Mayo and black olives" 
            } ,
            correctAnswer: "Peanut butter and tunafish",
            class: 'forth' ,
            divClass: '.sandwich'
        } ,
        {
            question: "What's Stanley's morning 3 by 5?" ,
            answers: {
                a: "Iced tea 3 sugars 5 creams" ,
                b: "Coffee 3 sugars 5 creams" , 
                c: "Tea 3 sugar 5 creams"
            } ,
            correctAnswer: "Iced tea 3 sugars 5 creams",
            class: 'sixth' ,
            divClass: '.stanley'
        } ,

        {
            question: "What brand is Michael wearing on the day he accidentally wearing a woman's suit?" ,
            answers: {
                a: "MISSsterious" , 
                b: "MISStery" , 
                c: "Sassypant" 
            } ,
            correctAnswer: "MISSsterious",
            class: 'eighth' ,
            divClass: '.suit'
        } ,
    
        {
            question: "Who does Michael wear on his head during the activity on diversity day?" , 
            answers: {
                a: "Colin Powell" ,
                b: "Ghandi" , 
                c: "Martin Luther King Jr"
            } ,
            correctAnswer: "Martin Luther King Jr" ,
            class: 'tenth' ,
            divClass: '.michael'
        } ];

//var labels = ["Question 1:" , "Question 2:" , "Question 3:" , "Question 4:" , "Question 5:" , "Question 6:" , "Question 7:" , "Question 8:" , "Question 9:" , "Question 10:"]

//Question Display function 
var questionDisplay = function() 
{
    //Create a loop to display question on a new Div
    for (var i=0 ; i < questions.length ; i++) {
        console.log(questions[i].question);
        var linebreak =$('<br />');
        //var questionDiv = $('<div id= "question">');
        //$("#game").append(questionDiv)
        $("#game").append(questions[i].question);
        $('#game').append(linebreak);
       
   
        // $("#game").append(linebreak);
        // $("#question").append(questions[i].answers.a);
        
        //   $("#game").append('<input type="radio" name="questions"value=" ' + questions[i].answers.a + ' "/>' 
        //  +'<label for="Question 1:"> ' + questions[i].answers.a + ' </label> ')
        // $("#game").append(questions[i].answers.b);
        //     $("#game").append(' <input type="radio" name="' + questions[i].question + '"value=" ' + questions[i].answers.b + ' "/>' 
        //     +'<label for="Question 1:"> ' + questions[i].answers.b + ' </label> ')
        // $("#game").append(questions[i].answers.c);
        //     $("#game").append(' <input type="radio" name="' + questions[i].question + '"value=" ' + questions[i].answers.c + ' "/>' 
        //     +'<label for="Question 1:"> ' + questions[i].answers.c + ' </label> ')
        // $(questions[i].class).append (' <div class="questionTitle"> ' + questions[i].question + ' </div> ');
    }

    // for (var j = 0 ; j < question[i].answers.length ; j++ ) {
    // $(questions[i].Class).append( ' <input type="radio" name="' + questions[i].name + '"value=" ' + questions[i].answers[j] + ' "/>' 
    // +'<label for="' + labels + ' "> ' + questions[i].answers[j] + ' </label> ');
    // }

    // $('#game').prepend('<hr />');
   }
})

//Count down function
var countdown = function(seconds) {
    var timer = setInterval(function () {
        seconds -= 1;
        $("#remainingTime").html(seconds);

        if (seconds <= 0) {
            $('#countdown').fadeOut(500);
            var correct =0;
            var incorrect =0;
            var unanswer =0;

        for ( var c=0; c < questions.length ; c++) {
            if ($('input:radio[name="' + questions[c].name + ' "]:checked').val() === questions[c].correct) {
                correct++;
                console.log("this is correct! number: " + c);

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
    var correct = 0;
    var incorrect =0;
    var unanswer = 0;

    for (var i =0; i<10; i++) {
        if($(' input:radio[name=" ' + questions[i].name + ' "]:checked').val() === questions[i].correct) {
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

