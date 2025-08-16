const questions = [
  {
    question: "What is the capital of India?",
    option: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: 0
  },
  {
    question: "Which language runs in a web browser?",
    option: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does HTML stand for?",
    option: [
      "Hypertext Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "None of the above"
    ],
    answer: 0
  },
  {
   question: "What does CSS stand for?",
  option: [
    "Computer Style Sheets",
    "Cascading Style Sheets",
    "Creative Style System",
    "Colorful Style Sheets"
  ],
  answer: 1
},
{
  question: "Which language is used for web apps?",
  option: [
    "PHP",
    "Python",
    "JavaScript",
    "All of the above"
  ],
  answer: 3
}
  
  

];



const question = document.getElementById("question")
const mainContainer = document.getElementById("container")
const buttons = [
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
  document.getElementById("btn4"),
];
// const nextBtn=document.getElementById("next")
const options = document.getElementById("optipns")
const scores = document.getElementById("score")


let i = 0
let scor = 0

function loadQuestion(index) {
  question.innerText = questions[index].question;
  buttons.forEach((btn, idx) => {
    btn.innerText = questions[index].option[idx];
    btn.style.backgroundColor = "";
    btn.style.color = "";
  });
  selected = null;
}

loadQuestion(i)



buttons.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.disabled = true);
    if (idx === questions[i].answer) {

      btn.style.backgroundColor = "green";
      scor++
    } else {
      btn.style.backgroundColor = "red";
      buttons[questions[i].answer].style.backgroundColor = "green";

    }
    const nextBtn = document.createElement("button");
    nextBtn.className = "b1"


    nextBtn.innerText = "Next";

    if (i === questions.length-1) {
    nextBtn.innerText = "Submit";
      
    }

    nextBtn.addEventListener("click", () => {
      i++;
      if (i < questions.length) {
        loadQuestion(i);
        buttons.forEach(b => b.disabled = false);
      } else {
        const marke = document.createElement("div")
        const h1 = document.createElement("h1")
        const divS=document.createElement("div")
        // const reLoad=documen.createElement("button")
        
        // reLoad.innerText="Reload"

        h1.innerHTML = "<i>score<i>"
        h1.className="m"

        marke.innerText = scor
        marke.className="marke"

        divS.className="divS"
        divS.append(h1,marke)
        document.body.appendChild(divS)
        mainContainer.remove()
      }
      nextBtn.remove()
    });
    mainContainer.appendChild(nextBtn);
  });
});



