$(document).ready(function(){
 
  var magic8Ball = {};
    
  magic8Ball.listOfAnswers = ["it is certain", "yes", "no", "don't count on it", "ask again later","of course!", "outlook good"];
    
  magic8Ball.askQuestion = function (question) {  
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    $("#answer").fadeIn(4000); 
    var randomNumber = Math.random();
    var randomNumberListOfAnswers= randomNumber*this.listOfAnswers.length;
    var randomIndex= Math.floor(randomNumberListOfAnswers);
    var answer=this.listOfAnswers[randomIndex];
    
    $("#answer").text(answer);
    console.log(question);
    console.log(answer);
    
  };
  // hides answer when page is loading. not sure if position is correct 
    
  $("#answer").hide();
    
  var onClick = function (){
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    setTimeout(
      function() {
        var question=prompt("Ask a Yes/No question.");
        $("#8ball").effect( "shake" );
        magic8Ball.askQuestion(question);
     }, 500);
  };
  
  // button is clicked, triggers onClick function
    $("#questionButton").click(onClick);
   
  });
  
  
  