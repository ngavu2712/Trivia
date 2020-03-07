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
 
var currentQuestion = 0;
var score = 0;








// var timeCount = {
//     timer: 30,
//     timerOn: false,
//     timerId: ''
// };

var questions = [

        { //Question, Options and Answer Object
    
            "question": "A foreign exchange student lived with Michael when he was young. What did the foreign exchange student take from Michael back to Yugoslavia?" , 
            "option1": "All of his blue jeans" , 
            "option2": "All of his short" , 
            "option3": "His favorite shoes" ,
            "correctAnswer": "All of his blue jeans" 
            
        } ,
        
        {
            "question": "What does Kevin suggest Dwight put in his gun holster?" , 
            "option1": "A cell phone" ,
            "option2": "A banana" , 
            "option3": "A toy gun" ,
            "correctAnswer": "A banana"
            
        } , 
    
        {
            "question": "At Phyllis and Bob Vance's wedding, what did Michael say everyone called Phyllis back in high school?" ,
            "option1": "Less-urban Aunt Jemima" ,
            "option2": "Phyll" , 
            "option3": "Easy rider" ,
            "correctAnswer": "Easy rider"

        } , 
    
        {
            "question": "What kind of sandwich does Michael have a dream about when he's the head of Michael Scott Paper Company?" ,
            "option1": "Peanut butter and tunafish" ,
            "option2": "Tunafish and skittles" , 
            "option3": "Mayo and black olives" ,
            "correctAnswer": "Peanut butter and tunafish"

        } ,
        {
            "question": "What's Stanley's morning 3 by 5?" ,
            "option1": "Iced tea 3 sugars 5 creams" ,
            "option2": "Coffee 3 sugars 5 creams" , 
            "option3": "Tea 3 sugar 5 creams" ,
            "correctAnswer": "Iced tea 3 sugars 5 creams"
        } ,

        {
            "question": "What brand is Michael wearing on the day he accidentally wearing a woman's suit?" ,
            "option1": "MISSsterious" , 
            "option2": "MISStery" , 
            "option3": "Sassypant" ,
            "correctAnswer": "MISSsterious"
           
        } ,
    
        {
            "question": "Who does Michael wear on his head during the activity on diversity day?" , 
            "option1": "Colin Powell" ,
            "option2": "Ghandi" , 
            "option3": "Martin Luther King Jr" ,
            "correctAnswer": "Martin Luther King Jr"
        } ];


        $("#timecount").hide();
        $("#question").hide();
        $('#result').hide();
        
        $("#start-btn").on('click',function(){
            $(this).parent().hide(); //hide the start box before user click start
            $('#timecount').show();
            $('#question').show();
            countdown(3);
            questionDisplay ();
         })  
         
         
//Question Display function 
var questionDisplay = function() 
    {
    //Create a loop to display question on a new Div
    for (var i=0 ; i < questions.length ; i++) {
        console.log(questions[i].question);
        var linebreak =$('<br />');
        //var questionDiv = $('<div id= "question"></div>');
        //$("#game").append(questionDiv); 
        $("#question").append(questions[i].question); //Append question list to the game

        $('.option').append(questions[i].answers.a); //Append answer "a" list to the game
        $(".option").append('<input type="radio" name="questions" value="' + questions[i].answers.a + '"/>'); //Create an input ratio for multiple choice
       
        
        $('.option').append(questions[i].answers.b); //Append answer "b" list to the game
        $(".option").append('<input type="radio" name="questions" value="' + questions[i].answers.b + '"/>');
        
        $('.option').append(questions[i].answers.c); //Append answer "c" list to the game
        $(".option").append('<input type="radio" name="questions" value="' + questions[i].answers.c + '"/>');

        $('#game').append(linebreak);
        
        }  
    }


//Count down function
var countdown = function(seconds) {

    var timer = setInterval(function () {
        seconds -= 1;
        $("#remainingTime").text(seconds);

        if (seconds <= 0) {
            $('#countdown').fadeOut(500);
            var correct =0;
            var incorrect =0;
            var unanswer =0;

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

})
