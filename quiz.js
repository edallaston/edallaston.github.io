/* Defining quiz variables */

const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

const quizQuestions = [{

    question: "Which statement is true of strict liability offences?",

    answers: {

      a: "Mens rea must be proved",

      b: "Actus reus must be proved",

      c: "Burden of proof is not relevant",

      d: "Standard of proof is not relevant"

    },

    correctAnswer: "b"

  },

  {

    question: "The International Covenant on Economic, Social and Cultural Rights is an example of:",

    answers: {

      a: "a statute law",

      b: "a constitutional law",

      c: "an international customary law",

      d: "a formal statement of human rights"

    },

    correctAnswer: "d"

  },

  {

    question: "Of the following, the person most likely to be granted legal aid under NSW law is a person:",

    answers: {

      a: "who pleads guilty.",

      b: "involved in a divorce.",

      c: "accused of a serious crime.",

      d: "appealing a criminal conviction."

    },

    correctAnswer: "c"

  },

  {

    question: "During an argument, Don punches Jack, who later dies. Don is convicted of murder. Which of the following must have been established in court for this finding to be reached?",

    answers: {

      a: "Causation",

      b: "Mitigation",

      c: "Provocation",

      d: "Self-defence"

    },

    correctAnswer: "a"

  }

];

function buildQuiz() {
    // variable to store the HTML output
    const output = [];

for(i=0; i<quizQuestions.length; i++){
    // variable to store the list of possible answers
    const answers = [];
    
    // for each available answer to this question add a html radio button
for(letter in quizQuestions[i].answers){
    answers.push(    
        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + quizQuestions[i].answers[letter]
        + '</label>'
        );
    }

        // add this question and its answers to the output
    output.push(
    '<div class="question">' + quizQuestions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div>'
      );
}

     // combine our output list into one string of HTML and put it on the page

     quizContainer.innerHTML = output.join('');
}
function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var numCorrect = 0;
    
    // for each question...
    for(i=0; i<quizQuestions.length; i++){
    
        // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
    // if answer is correct
    if(userAnswer===quizQuestions[i].correctAnswer){

    // add to the number of correct answers
    numCorrect++;       
  
    // color the answers green
    answerContainers[i].style.color = 'lightgreen';
    }
  
    // if answer is wrong or blank
  
      else{
  
      // color the answers red
  
          answerContainers[i].style.color = 'red';
  
      }
  }
  if (numCorrect === 0) { 
    resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
    }
    if (numCorrect === 1) { 
    resultsContainer.innerHTML = "It's a start - you got one question right!";
    }
    if (numCorrect === 2) { 
    resultsContainer.innerHTML = "Halfway there - 50% correct.";
    }
    if (numCorrect === 3) { 
        resultsContainer.innerHTML = "Great effort! 3 out of 4.";
                }
    if (numCorrect === 3) { 
        resultsContainer.innerHTML = "4 out of 4!";
                            }
                }
        ;

//load quiz
buildQuiz();

submitButton.onclick = function() {
    showResults();
  }