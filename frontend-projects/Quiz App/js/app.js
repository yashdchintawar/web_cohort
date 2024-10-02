const questions = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "High Tech Modern Language",
    c: "Hyperlink and Text Markup Language",
    d: "Home Tool Markup Language",
    answer: "a",
  },
  {
    question: "Which of the following is used for styling in web development?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "XML",
    answer: "b",
  },
  {
    question: "What is the purpose of JavaScript in web development?",
    a: "To style web pages",
    b: "To create dynamic content and interactivity",
    c: "To define the structure of a webpage",
    d: "To manage databases",
    answer: "b",
  },
  {
    question: "Which tag is used to link an external CSS file in HTML?",
    a: "<style>",
    b: "<link>",
    c: "<css>",
    d: "<script>",
    answer: "b",
  },
  {
    question:
      'What does the "DOM" stand for in the context of web development?',
    a: "Document Object Model",
    b: "Data Object Management",
    c: "Document Order Model",
    d: "Dynamic Object Manipulation",
    answer: "a",
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    a: "To define the main content of the webpage",
    b: "To specify the title, meta-information, and links to external resources",
    c: "To create a navigation menu",
    d: "To define the structure of a webpage",
    answer: "b",
  },
  {
    question: "Which of the following is NOT a valid data type in JavaScript?",
    a: "string",
    b: "boolean",
    c: "decimal",
    d: "float",
    answer: "d",
  },
  {
    question: 'What does the CSS property "margin: 10px 5px;" mean?',
    a: "10 pixels top margin, 5 pixels right margin",
    b: "10 pixels top and bottom margin, 5 pixels left and right margin",
    c: "10 pixels top, right, bottom, and left margin",
    d: "10 pixels left and right margin, 5 pixels top and bottom margin",
    answer: "c",
  },
  {
    question: "Which event is triggered when a user clicks on an HTML element?",
    a: "onmouseover",
    b: "onclick",
    c: "onkeyup",
    d: "onchange",
    answer: "b",
  },
  {
    question: 'What is the purpose of the CSS property "display: none;"?',
    a: "It makes the element invisible but still takes up space",
    b: "It removes the element from the document flow",
    c: "It changes the background color of the element",
    d: "It adds a border to the element",
    answer: "a",
  },
];

let questionIndex = 0;
let questionsTotal = questions.length;
let rightAnswers = 0;
let wrongAnswers = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
    if(questionIndex === questionsTotal){
        return endQuiz();
    }else{
        resetSelection();
        const data = questions[questionIndex];
        quesBox.innerText = `${questionIndex + 1}) ${data.question}`;
        optionInputs[0].nextElementSibling.innerText = data.a;
        optionInputs[1].nextElementSibling.innerText = data.b;
        optionInputs[2].nextElementSibling.innerText = data.c;
        optionInputs[3].nextElementSibling.innerText = data.d;
    }
};

const submitQuiz = () => {
    const data = questions[questionIndex];
    const ans = getAnswer();
    if (ans == data.answer) {
        rightAnswers++;
    } else {
        wrongAnswers++;
    }
    questionIndex++;
    loadQuestion();
    return;
};


const getAnswer = () => {
    let selectedAnswer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                selectedAnswer =  input.value;
            }
        }
    )
    return selectedAnswer;
}


const resetSelection = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const endQuiz = () => {
    document.getElementById("box").innerHTML= `<div style="text-align:center"> <h3>THANK YOU FOR PLAYING THE QUIZ!</h3> <br/> <h2>${rightAnswers} / ${questionsTotal} ARE CORRECT!</h2> </div>`
}



loadQuestion();