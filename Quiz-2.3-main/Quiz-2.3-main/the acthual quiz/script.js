const quizData = [
  {
  question:"Which planet is known as the 'Red Planet'?",
  options:["Venus","Mars","Jupiter"," Saturn"],
  answer:"Mars"
   }
   ,
    {question: "What is the most abundant gas in the Earth's atmosphere?",
     options:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],
     answer:"Nitrogen"
    },
    {
        question:"Which element has the highest melting point?",
        options:["Iron","Tungsten","Gold","Titanium"],
        answer:"Tungsten"
    },
    {
      question:"What is the powerhouse of the cell?",
      options:["Nucleus","Mitochondria","Ribosome","Endoplasmic Reticulum"],
      answer:"Mitochondria"}
      ,
    {
        question:"Which of the following is a non-renewable energy source?",
        options:["Solar","Wind","Coal","Geothermal"],
        answer:"Coal"
    }
    ,
    {
      question:"What is the chemical formula for water?",
      options:["H₂O","CO₂","O₂","H₂SO₄"],
      answer:"H₂O"

  }
  ,
  {
    question:"Who is known as the father of modern physics?",
    options:["Isaac Newton","Albert Einstein","Galileo Galilei","Niels Bohr"],
    answer:"Albert Einstein"

}
,
    {
        question:"What is the basic unit of life??",
        options:["Atom","Molecule","Cell","tissue"],
        answer:"Cell"
    } 
  ,
  {
    question:"What is the chemical name for common table salt??",
    options:["Sodium carbonate","Sodium chloride","Potassium chloride","Calcium chloride"],
    answer:"Sodium chloride"
} 
  ]//These are the questions that will be asked to the user
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitButton = document.getElementById("submit");
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
      const question = quizData[currentQuestion];
      questionElement.innerText = question.question;
    
      optionsElement.innerHTML = "";
      question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
      });
    }
    
    function selectAnswer(e) {
      const selectedButton = e.target;
      if (selectedButton.innerText === quizData[currentQuestion].answer) {
        score++;
        console.log(score)
      }
    
      currentQuestion++;
    
      if (currentQuestion < quizData.length) {
        showQuestion();
   
      } else {
        if(score == 9){ 
          showResultWin()
        }
        else{
          if(score< 5 && score > 2){
            showResultAlmost()
          }
          else {
            if( score == 0){
              showResultLose()
            }
            else{
              showResult()
            }
          }
        }
      }
    }
    
    function showResult() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length}</p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">You can do it!</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #392977">click here to go back</button></a>
        
        `;
 
    }
    function showResultWin() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length} wow!</p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">You really are a science nerd!</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #392977">click here to go back</button></a>
        
        `;
 
    }
    function showResultAlmost() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length} </p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Keep trying!</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #392977">click here to go back</button></a>
        
        `;
 
    }
    function showResultLose() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length} yikes.. </p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Are you sure you're supposed to be here?</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #392977">click here to go back</button></a>
        
        `;
 
    }
    showQuestion();
  
