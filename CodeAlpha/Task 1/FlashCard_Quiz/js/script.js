let flashcards = [
{question:"What is HTML?", answer:"HTML is used to create web pages."},
{question:"What is CSS?", answer:"CSS is used for styling web pages."},
{question:"What is JavaScript?", answer:"JavaScript makes websites interactive."}
];

let currentIndex = 0;

function displayCard(){
document.getElementById("question").innerText = flashcards[currentIndex].question;
document.getElementById("answer").innerText = flashcards[currentIndex].answer;
document.getElementById("answer").classList.add("hidden");
}

function showAnswer(){
document.getElementById("answer").classList.remove("hidden");
}

function nextCard(){
if(currentIndex < flashcards.length-1){
currentIndex++;
displayCard();
}
}

function prevCard(){
if(currentIndex > 0){
currentIndex--;
displayCard();
}
}

function addCard(){
let q = document.getElementById("newQuestion").value;
let a = document.getElementById("newAnswer").value;

if(q && a){
flashcards.push({question:q,answer:a});
document.getElementById("newQuestion").value="";
document.getElementById("newAnswer").value="";
alert("Flashcard Added");
}
}

function editCard(){
let q = document.getElementById("newQuestion").value;
let a = document.getElementById("newAnswer").value;

if(q && a){
flashcards[currentIndex] = {question:q,answer:a};
displayCard();
alert("Flashcard Updated");
}
}

function deleteCard(){
flashcards.splice(currentIndex,1);

if(currentIndex>0){
currentIndex--;
}

displayCard();
}

displayCard();