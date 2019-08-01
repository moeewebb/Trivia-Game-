
$('#start').on('click',function() {
    $('#start').remove();
for(var i=0;i<questions.length;i++){
$('#subwrapper').append('<h2>'+questions[i].question+'<h2>')
for(var j=0;j<questions[i].answers.length;j++){
  $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
    game.start();
      }    
    }
})

var questions =[{
    question:"What was the first full-length CGI movie",
    answers:["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
},  {
    question:"Which of these is NOT a name of one of the Spice Girls",
    answers:["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    correctAnswer: "Fred Spice" 
},
    {   
    question:"Which NBA team won the most titles in the 90's?",
    answers:["New York Knicks", "Portland Trailblazers", "Los Angeles"],
    correctAnswer: "Chicago Bulls"
},
    {
    question:"Which group released the hit song, Smells like Teen Spirit",
    answers:["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
    correctAnswer: "Nirvana"

}, 
    {
    question:'What popular Disney movie featured the song, "Circle of Lions"',
    answers:["Aladdin", "Hercules", "Mulan", "The Lion King"], 
    correctAnswer: "The Lion King"

},   
   {
    question:'Finish this line from the Fresh Prince of Bel-Air Theme',
    answers:["Dice", "Mirror", "Fresh", "Cab"], 
    correctAnswer: "Fresh"  
},
    {
        question:"What was Doug's best friend's name?",
        answers:["Skeeter", "Mark", "Zach", "Cody"], 
        correctAnswer: "Skeeter"     
},
    {
        question:"What was the name of the principal at Bayside High School",
        answers:["Mr.Zhou", "Mr.Driggers", "Mr. Belding", "Mr. Page"], 
        correctAnswer: "Mr. Belding"    

    }];

     var game = {
      correct: 0,
         incorrect: 0,
         counter: 120, 
         countdown: function(){
             game.counter--;
             $('#counter').html(game.counter);
             if(game.counter<=0){
                 console.log("Time is Up!");
                 game.done();
             }}
  }


        //$('#start').on('click',function()){
          //$('#start').remove();
        //for(var i=0;i<questions.length;i++){
        //$('#subwrapper').append('<h2>'+questions[i].question+'<h2>')
        //for(var j=0;j<questions[i].answers.length;j++){
          //  $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])

        //}