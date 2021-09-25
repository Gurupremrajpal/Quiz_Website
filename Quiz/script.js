//Adding the event listner 
document.querySelector(".submitbtn").addEventListener("click", submit);

document.querySelector(".resetbtn").addEventListener("click", reset);

//Score Update 
var score = 0;
var attempts = localStorage.getItem("total_attempts");
var q_scr = 20;
//var ans2 = "Markup language";
var ans1 = "Internet Programming"
var ans4 = "Dr. Miguel Lara";
var ans5 = "logo2";


//the options for question 2).
var radi = ["Markup language", "Programming Language", "Machine Language"];

 radi = _.shuffle(radi);

// creates radio buttons 
for (i=0; i<radi.length; i++) {
  $("#radiodiv").append(`<input type='radio' name='answerchoices' value='${radi[i]}'> ${radi[i]}`);
} 

function submit(){

  //question 1
  let ques1= $("input").val();

  if(ques1.toLowerCase()==ans1.toLowerCase()){
      score+=q_scr;
     $(".message").html('<span class="text-success"> Correct </span>');
     $("#q1-img").html("<img src='img/checkmark.png' alt='checkmark'>");
  }
  else{
     $(".message").html('<span class="text-danger"> Incorrect </span>');

     $("#q1-img").html("<img src='img/xmark.png' alt='xmark'>");
  }

  //question 2 
  if ($("#radiodiv [type='radio']:checked").val() == "Markup language"){
    score+=q_scr;
    $(".q2message").html('<span class="text-success"> Correct </span>');

    $("#q2-img").html("<img src='img/checkmark.png' alt='checkmark'>");

  }else{
       $(".q2message").html('<span class="text-danger"> Incorrect </span>');

       $("#q2-img").html("<img src='img/xmark.png' alt='xmark'>");

  }
  
  //question 3
  if ( document.querySelector("#html").checked && document.querySelector("#css").checked && !document.querySelector("#java").checked && !document.querySelector("#c").checked) {
     $(".q3message").html('<span class="text-success"> Correct </span>')

     $("#q3-img").html("<img src='img/checkmark.png' alt='checkmark'>");
     
     score+=q_scr;
    }else{
       $(".q3message").html('<span class="text-danger"> Incorrect </span>')

       $("#q3-img").html("<img src='img/xmark.png' alt='xmark'>");
    }
  
  

  // question 4
 let ques4= $("#q4").val();

  if(ques4==ans4){
      score+=q_scr;
     $(".q4message").html('<span class="text-success"> Correct </span>')

     $("#q4-img").html("<img src='img/checkmark.png' alt='checkmark'>");
  }
  else{

     $(".q4message").html('<span class="text-danger"> Incorrect </span>')

     $("#q4-img").html("<img src='img/xmark.png' alt='xmark'>");
  }

  // question 5
  if (document.querySelector("#secondimg").checked && !document.querySelector("#firstimg").checked && !document.querySelector("#thirdimg").checked) {
     $(".q5message").html('<span class="text-success"> Correct </span>')

     $("#q5-img").html("<img src='img/checkmark.png' alt='checkmark'>");

     score+=q_scr;
    }
    else{
       $(".q5message").html('<span class="text-danger"> Incorrect </span>')

       $("#q5-img").html("<img src='img/xmark.png' alt='xmark'>");
    }

    // Displaying score
    if (score>80){
      document.querySelector("#scr").innerHTML= `Congratulation Your is Score : ${score}`;

      document.querySelector("#totalAttempts").innerHTML= `Total Attempts: ${++attempts}`;
      localStorage.setItem("total_attempts", attempts);
    }
    else {
      document.querySelector("#scr").innerHTML= `Your Score is Less. Try Again! : ${score}`;

      document.querySelector("#totalAttempts").innerHTML= `Total Attempts: ${++attempts}`;
      localStorage.setItem("total_attempts", attempts);
    }

}

function reset(){
  document.querySelector(".submitbtn").disabled = true;

  let attempts_reset=[];
  document.querySelector("#totalAttempts").innerHTML= `TOTAL Attempts are cleared: Refresh the page!! ${attempts_reset}`;
  localStorage.clear();
}