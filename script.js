var timeLimit = 10000;   // this variable stores the time alloted for each question in millisecond 
var allScores = {}  // this will store scores of all
var highScoreJSON = {}; // this JSON Variable will be used to hold the scores of the people taking the current type of test
let currentUserScore = 0;
let currentUser = "";  // stores the name of the user currently writing the test
let currentQuizType = ""  // stores which is quiz is being wriiten currently
var masterQuestionBank = {
    "anime": [
        {
            "In the first season of In Sword Art Online, what is the black blade used by Kirito called?": {
                "correct": "The Elucidator",                                           
                "wrong1": "Blue Dragon",
                "wrong2": "Rising Sun",
                "wrong3": "Howls Moving Castle"
            }
        },
        {
            "As of 2021, what is the highest-grossing anime movies of all time?": {
                "correct": "Demon Slayer: Mugen Train",
                "wrong1": "Your Name",
                "wrong2": "Silent Voice",
                "wrong3": "Howls Moving Castle"
            }
        },
        {
            "In the anime Dragon Ball, what can you do after collecting all seven dragon balls?": {
                "correct": "To fulfil your wishes",
                "wrong1": "To become immortal",
                "wrong2": "To rule the world",
                "wrong3": "More Candy"
            }    
        },
        {
            "In Attack on Titan, What are actually Titans?": {
                "correct": "Giant People",
                "wrong1": "Giant dinosaurs",
                "wrong2": "Giant Animals",
                "wrong3": "Giant Mechs"
            }    
        },
        {
            "The Gum-Gum Pistol is a signature attack of which anime character?": {
                "correct": "Monkey D. Luffy",
                "wrong1": "Black Butler",
                "wrong2": "Goku",
                "wrong3": "Naruto"
            }    
        },
        {
            "In Death Note, who was the first successor of L in the Kira investigation?": {
                "correct": "Light",
                "wrong1": "Nero",
                "wrong2": "Milo",
                "wrong3": "Hajime"
            }    
        },
        {
            "In addition to original works, Japanese anime are often adapted from light novels, manga, and …": {
                "correct": "Video games",
                "wrong1": "Local legends",
                "wrong2": "Live action movies",
                "wrong3": "Real life stories"
            }    
        },
        {
            "Haikyu!! is an anime centred around a boy who wants to be successful in which sport?": {
                "correct": "Volleyball",
                "wrong1": "Baseball",
                "wrong2": "Kabbadi",
                "wrong3": "Cricket"
            }    
        },
        {
            "What is the meaning of Deku, the nickname of Izuku Midoriya in the anime My Hero Academia?": {
                "correct": " A person who cannot do anything",
                "wrong1": "Hope",
                "wrong2": "Fearing no one",
                "wrong3": "A good friend"
            }    
        },
        {
            "Goku belongs to which race in the anime Dragon Ball?": {
                "correct": "Saiyan",
                "wrong1": "Human",
                "wrong2": "Majin",
                "wrong3": "Namekian"
            }    
        }
    ],
    "starwars":[
        {
            "What is Mandos real name from The Mandalorian?": {
                "correct": "Din Djarin",                                           
                "wrong1": "Anakin Skywalker",
                "wrong2": "Ahsoka Tano",
                "wrong3": "Rey"
            }
        },
        {
            "Who had the highest midi-chlorian count in Star Wars?": {
                "correct": "Anakin Skywalker",
                "wrong1": "Rey",
                "wrong2": "Darth Maul",
                "wrong3": "Han Solo"
            }
        },
        {
            "Where was Yodas home in his final years?": {
                "correct": "Dagobah",
                "wrong1": "Starkiller base",
                "wrong2": "Tattooine",
                "wrong3": "Vesper Bay"
            }    
        },
        {
            "What was Finns stormtrooper number?": {
                "correct": "FN-2187",
                "wrong1": "MS-8746",
                "wrong2": "NF-5474",
                "wrong3": "RO-2110"
            }    
        },
        {
            "Padme was Queen of what?": {
                "correct": "Naboo",
                "wrong1": "Tattoine",
                "wrong2": "Dagobah",
                "wrong3": "Mos Bispah"
            }    
        },
        {
            "What is Kylo Rens birth name?": {
                "correct": "Ben Solo",
                "wrong1": "Lil Wayne",
                "wrong2": "Poe Dameron",
                "wrong3": "Cardi B"
            }    
        },
        {
            "C-3PO is fluent in over how many forms of communication?": {
                "correct": "Over 6 Million",
                "wrong1": "Almost 1 Million",
                "wrong2": "Ten Thousand",
                "wrong3": "Hundred Thousand"
            }    
        },
        {
            "Where does Rey find Luke Skywalker?": {
                "correct": "Ahch-To",
                "wrong1": "Dagohab",
                "wrong2": "Crosuant",
                "wrong3": "Vespah Bay"
            }    
        },
        {
            "Who directed Star Wars: The Rise of Skywalker?": {
                "correct": "J.J. Abrams",
                "wrong1": "Billy Dee William",
                "wrong2": "Poe Dameron",
                "wrong3": "Cardi B"
            }    
        },
        {
            "According to Luke, confronting what is the destiny of a Jedi?": {
                "correct": "Fear",
                "wrong1": "Hope",
                "wrong2": "Evil",
                "wrong3": "Greed"
            }    
        }
    ],
    "marvel": [
        {
            "What is the name of Thors hammer?": {
                "correct": "Mjolnir",                                           
                "wrong1": "Vanir",
                "wrong2": "Aesir",
                "wrong3": "Norn"
            }
        },
        {
            "What type of scientist is Jane Foster in Thor?": {
                "correct": "Astronomer",  
                "wrong1": "Biologist",
                "wrong2": "Chemist",
                "wrong3": "Meterologist"
            }
        },
        {
            "What type of vehicle did Thanos briefly use in the comic books and make a brief appearance in the Loki series?": {
                "correct": "A helicopter with Thanos written on the side",
                "wrong1": "A tank with Infinity written on it",
                "wrong2": "A car with perfectly balanced” on the side",
                "wrong3": "A motorbike with Titan on the side"
            }    
        },
        {
            "During which war did Captain America get his superhuman abilities?": {
                "correct": "World War 2",
                "wrong1": "Civil War",
                "wrong2": "World War 1",
                "wrong3": "Cold War"
            }    
        },
        {
            "What is the name of Peter Quills home planet?": {
                "correct": "Earth",
                "wrong1": "Mordor",
                "wrong2": "Asgard",
                "wrong3": "Godrick Hollow"
            }    
        },
        {
            "Which of the following characters did not disappear during the blip?": {
                "correct": "Rocket",
                "wrong1": "Spider-Man",
                "wrong2": "Black Panther",
                "wrong3": "Doctor Strange"
            }    
        },
        {
            "Which actor played Eddie Brock in Venom (2018)?": {
                "correct": "Tom Hardy",
                "wrong1": "Dwayne Johnson",
                "wrong2": "Chris Rock",
                "wrong3": "Tony Lee Yeong"
            }    
        },
        {
            "Which of the following items of Jewelry does Ben from Fantastic 4 try to pick up from the pavement?": {
                "correct": "Ring",
                "wrong1": "Ballpin",
                "wrong2": "Necklace",
                "wrong3": "Earring"
            }    
        },
        {
            "What is Thors mothers name?": {
                "correct": "Frigga",
                "wrong1": "Freya",
                "wrong2": "Fridda",
                "wrong3": "Fahrah"
            }    
        },
        {
            "In which of the following movies does the character Taserface appear?": {
                "correct": "Guardians of the Galaxy Vol 2",
                "wrong1": "X-Men",
                "wrong2": "Deadpool 2",
                "wrong3": "Iron-Man"
            }    
        }
    ]
} // this JSON Stores the questions for all quizes
var questionBank = [
    {
        "What is the capital of India?": {
            "correct": "Delhi",
            "wrong1": "Tokyo",
            "wrong2": "Mumbai",
            "wrong3": "London"
        }
    },
    {
        "Where is Conestoga college located?": {
            "correct": "Canada",
            "wrong1": "India",
            "wrong2": "China",
            "wrong3": "UAE"
        }
    },
    {
        "Who is the strongest among these 4 characters?": {
            "correct": "Saitama",
            "wrong1": "Naruto",
            "wrong2": "Luffy",
            "wrong3": "Goku"
        }    
    },
    {
        "Who is the CEO of Google?": {
            "correct": "Sundar Pichai",
            "wrong1": "Chris Rock",
            "wrong2": "Dwayne Johnson",
            "wrong3": "Will Smith"
        }    
    },
    {
        "Who is the President of USA?": {
            "correct": "Joe Biden",
            "wrong1": "Donald Trump",
            "wrong2": "Kanye West",
            "wrong3": "Vladimir Putin"
        }    
    },
    {
        "Who is the best rapper in the world?": {
            "correct": "Eminem",
            "wrong1": "Lil Wayne",
            "wrong2": "Drake",
            "wrong3": "Cardi B"
        }    
    },
    {
        "Who is the Prime Minister of India?": {
            "correct": "Narendra Modi",
            "wrong1": "Shah Rukh Khan",
            "wrong2": "KRK",
            "wrong3": "Tarzan"
        }    
    },
    {
        "How many legs does a spider have?": {
            "correct": "Eight",
            "wrong1": "Two",
            "wrong2": "Six",
            "wrong3": "Nine"
        }    
    },
    {
        "Which is the fastest land animal?": {
            "correct": "Cheetah",
            "wrong1": "Human",
            "wrong2": "Horse",
            "wrong3": "Tiger"
        }    
    },
    {
        "How many days are in a year?": {
            "correct": "365",
            "wrong1": "251",
            "wrong2": "100",
            "wrong3": "340"
        }    
    }
];  // this is our question bank array. Used for dummy and contingencies. Will not be used in the actual quiz

var checkAndEvaluateAnswer = function(correct,clickedOption){
    if(correct.trim()==clickedOption.trim()){
        currentUserScore++;
    }
}

var changeQuestion = function(questionInterval,questionOrderArray,i){
    clearInterval(questionInterval);
    clearInterval(screenTimer);
    displayQuestions(questionOrderArray,i);
    
}

var displayCurrentUserScore = function(){
    $("#quizdiv").addClass('hideit');
    $("#quizover").removeClass('hideit');
    if(currentUserScore == 0){
        $("#quizover h3").html("Oh no "+currentUser+"! <br> You got a "+currentUserScore+" ");
    }
    else if(currentUserScore == 1){
        $("#quizover h3").html("Congratulations "+currentUser+"!! <br> You scored "+currentUserScore+" point.");
    }
    else{
        $("#quizover h3").html("Congratulations "+currentUser+"!! <br> You scored "+currentUserScore+" points.");
    }
    

    //saving  user's score to the leaderboard variable
    highScoreJSON[currentUser] = currentUserScore;

    //save in localStorage 
    if(!localStorage.getItem(currentQuizType) || JSON.parse(localStorage.getItem(currentQuizType))=={}  ){
        localStorage.setItem(currentQuizType,JSON.stringify(highScoreJSON))
    }
    else if(localStorage.getItem(currentQuizType) && JSON.parse(localStorage.getItem(currentQuizType))!={} ){
        let currentData=  JSON.parse(localStorage.getItem(currentQuizType));
        for (i of Object.keys(highScoreJSON)){
            currentData[i] = highScoreJSON[i];
        }
        localStorage.setItem(currentQuizType,JSON.stringify(currentData));

    }
}

var displaySingleQuestion = function(questionOrderArray,i){
    clearInterval(screenTimer);
    countdown(timeLimit/1000);
    $("#optionA").off("click");
    $("#optionB").off("click");
    $("#optionC").off("click");
    $("#optionD").off("click");
    console.log("--------------",i);
    let questionJSON = getQuestion(questionOrderArray[i]);
    i++;
    let question = "";
    let correctOption1 = "";
    let option2 = "";
    let option3 = "";
    let option4 = "";
    let clickedAnswer ="";
    console.log(questionJSON);


    // retrieves the questions and options from JSON 
    question = Object.keys(questionJSON)[0];
    correctOption1 = questionJSON[question]['correct'];
    option2 = questionJSON[question]['wrong1'];
    option3 = questionJSON[question]['wrong2'];
    option4 = questionJSON[question]['wrong3'];
    optionsArray = [correctOption1,option2,option3,option4];
    jumbledOptionsArray =  shuffleArray(optionsArray);

     //display question in question div on html
     $("#question p").text(question);

     //display answers in answer divs on html
     $("#optionA p").text(jumbledOptionsArray[0]);
     $("#optionB p").text(jumbledOptionsArray[1]);
     $("#optionC p").text(jumbledOptionsArray[2]);
     $("#optionD p").text(jumbledOptionsArray[3]);

     // code for evaluation of the clicked answer 

     //adding event listeners to find out which answer was clicked
     $("#optionA").on("click",function(){
         clickedAnswer = $("#optionA p").text();
         checkAndEvaluateAnswer(correctOption1,clickedAnswer);

         
         if (i == 10) { // if an answer it clicked when we are on the last question, it comes to this if block
                        // then we display the score immediately without waiting for the timer to stop
            displayCurrentUserScore();
            clearInterval(questionInterval);
            clearInterval(screenTimer);
            
         }
         else{
             //when an answer is clicked it should immediately go to the next question 
         //thats why we clear the current interval and start a new one by calling displayQuestions with an extra parameter i
            changeQuestion(questionInterval,questionOrderArray,i);
         // clearInterval(questionInterval);
         // displayQuestions(questionOrderArray,i);
         }
         

     });

     $("#optionB").on("click",function(){
         clickedAnswer = $("#optionB p").text();
         checkAndEvaluateAnswer(correctOption1,clickedAnswer);
         console.log("B clicked");

         if (i == 10) { // if an answer it clicked when we are on the last question, it comes to this if block
            // then we display the score immediately without waiting for the timer to stop
            displayCurrentUserScore();
            clearInterval(questionInterval);
            clearInterval(screenTimer);
        }
        else{
            changeQuestion(questionInterval,questionOrderArray,i);
            
         // clearInterval(questionInterval);
         // displayQuestions(questionOrderArray,i);
        }
     });

     $("#optionC").on("click",function(){
         clickedAnswer = $("#optionC p").text();
         checkAndEvaluateAnswer(correctOption1,clickedAnswer);
        
         if (i == 10) { // if an answer it clicked when we are on the last question, it comes to this if block
            // then we display the score immediately without waiting for the timer to stop
            displayCurrentUserScore();
            clearInterval(questionInterval);
            clearInterval(screenTimer);
        }
        else{
            changeQuestion(questionInterval,questionOrderArray,i);
        }
         // clearInterval(questionInterval);
         // displayQuestions(questionOrderArray,i);
     });

     $("#optionD").on("click",function(){
         clickedAnswer = $("#optionD p").text();
         checkAndEvaluateAnswer(correctOption1,clickedAnswer);

         if (i == 10) { // if an answer it clicked when we are on the last question, it comes to this if block
            // then we display the score immediately without waiting for the timer to stop
            displayCurrentUserScore();
            clearInterval(questionInterval);
            clearInterval(screenTimer);
        }
        else{
         changeQuestion(questionInterval,questionOrderArray,i);
        }
         // clearInterval(questionInterval);
         // displayQuestions(questionOrderArray,i);
     });
     return i;

}

var questionInterval;

var displayQuestions = function(questionOrderArray,index){
    
    let i = 0;
    if(index!=null){   // when index is sent as a parameter, it means its being called recursively, which happens when an answer was clicked. 
        // so we set value for i to display the remaining questions and not show old questions again
        i=index;
    }
    // console.log("=================before nodelay",i);
    if (i <10){
        i = displaySingleQuestion(questionOrderArray,i);
    }
    // console.log("=================after nodelay",i);
    questionInterval = setInterval(() => {
        if(i<10){
            i = displaySingleQuestion(questionOrderArray,i,);
        }


        if(i==10 ){
            clearInterval(questionInterval);
            setTimeout(()=>{  // this setTimeout is for giving the last question time to finish 
                
                //display Congratulations and Score 
                displayCurrentUserScore();

            },timeLimit);
            
        }
    } , timeLimit);   // set this to the time limit you want to give for every question



}

var screenTimer;

function countdown(time) {
    let timeLeft = time;
    timeLeft--;
    document.getElementById("seconds").innerHTML = timeLeft;
    clearInterval(screenTimer)
    if(timeLeft>0){
        screenTimer = setInterval(()=>{
            countdown(timeLeft);
        },1000);
    }
    // console.log("======= inside counter ",timeLeft)
    // if (timeLeft > 0) {
    //   setTimeout(countdown(timeLeft), 1000);
    // }
  }

var getQuestion = function(questionNumber){
    return questionBank[questionNumber]
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));
                    
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
}


var startQuiz = function(){

    $("#welcomediv").addClass('hideit');
    $("#quizdiv").removeClass('hideit');

    currentUserScore = 0;  


    let questionarray = shuffleArray([0,1,2,3,4,5,6,7,8,9]); // this will shuffle the questions

    displayQuestions(questionarray);

}

var submitbuttonclicked = function(){
    event.preventDefault();
    if($("#nickname").val().trim()!=""){
        startQuiz();
        currentUser = $("#nickname").val().trim();
    }
    else{
        alert("Please enter your name");
    }
}

var viewHighScoreClicked = function(){
    console.log("viewHighScoreClicked");

    $("#leaderboard").toggleClass('hideit'); // this will display the leaderboard div when viewscores is clicked and if it clicked again it will hide it 
    
    $("#scoretable tr:not(:first)").remove();   //clears the existing table 

    highScoreJSON = fetchScoresFromLocalStorage();


    let names = Object.keys(highScoreJSON);

    for (i of names){  // populating the table with scores and the names of the people
        $("#scoretable").append('<tr> <td>'+ i+ '</td> <td>'+ highScoreJSON[i]+' </td> </tr>');
    }

}

var restartQuizClicked = function(){
    $("#quizover").addClass('hideit');
    $("#welcomediv").removeClass('hideit');
    $("#leaderboard").addClass('hideit');
    
}

function backclicked(){

    // redirecting to the first page 
    let url = "./homepage.html";
    location.href = url;

}

function changeQuestionBank(){  // changes the questions based on which type of quiz you use
    if(masterQuestionBank[currentQuizType]!= null){
        questionBank = masterQuestionBank[currentQuizType];
    }   
}

function fetchScoresFromLocalStorage(){
    let data = JSON.parse(localStorage.getItem(currentQuizType));
    // if(data && data[currentQuizType] && data[currentQuizType]!={}) {
    //     // highScoreJSON = JSON.parse(data[currentQuizType]);
    //     highScoreJSON = data[currentQuizType];
    // }
    // else {
    //     alert("could not fetch scores");
    //     highScoreJSON = {};
    // }

    return data;
}



$(document).ready( () => {


    const params = (new URL (document.location)).searchParams;
    currentQuizType = params.get('quiztype');

    $("#readydiv").text("Ready for the "+currentQuizType.charAt(0).toUpperCase()+currentQuizType.slice(1)  + " quiz?");

    changeQuestionBank();   // changing question bank based on the type of quiz 

    // fetchScoresFromLocalStorage();


    $("#nickname").focus();

    $("#submitbutton").on("click",function(){
        submitbuttonclicked();
    });

    $("#viewhighscore").on("click",function(){
        viewHighScoreClicked();
    });

    $("#restartnewquiz").on("click",function(){
        restartQuizClicked();
    });
    
})