function showMeaning(){
    document.getElementById("meaning").innerHTML = "Hola means Hello in Spanish";
}

function checkAnswer(answer){

    if(answer == "Hello"){
        document.getElementById("result").innerHTML = "Correct Answer";
    }
    else{
        document.getElementById("result").innerHTML = "Wrong Answer";
    }

}