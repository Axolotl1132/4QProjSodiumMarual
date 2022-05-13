function Blur(input) {
  if(input.value == "") {
     input.style.border = "2px red solid";
  }
  else {
     input.style.border = "2px green solid";
  }
}

function check() {
  var correct = 0;
  if(document.getElementById('question[i]').checked == "correct") {
    correct++;
  }
  console.log('correct');
}

function goIndex() {
  window.location.href="index.html"
}

function goQuiz() {
  getInput();
  window.location.href='quiz.html';
}

function goResult() {
  var score = check();
  window.localStorage.setItem("Result", JSON.stringify(score));
  window.location.href="result.html"
}

function loadAnswers() {
  var correctAns = JSON.parse(localStorage.getItem("correctAns"));
  var arrAnswers = JSON.parse(localStorage.getItem("userAnswers"));
  console.log(arrAnswers)
  document.getElementById('q1').innerHTML = "Your Answer: " + arrAnswers[0] + "</br> Correct Answer: " + correctAns[0];
  document.getElementById('q2').innerHTML = "Your Answer: " + arrAnswers[1] + "</br> Correct Answer: " + correctAns[1];
  document.getElementById('q3').innerHTML = "Your Answer: " + arrAnswers[2] + "</br> Correct Answer: " + correctAns[2];
  document.getElementById('q4').innerHTML = "Your Answer: " + arrAnswers[3] + "</br> Correct Answer: " + correctAns[3];
  document.getElementById('q5').innerHTML = "Your Answer: " + arrAnswers[4] + "</br> Correct Answer: " + correctAns[4];
  document.getElementById('q6').innerHTML = "Your Answer: " + arrAnswers[5] + "</br> Correct Answer: " + correctAns[5];
  document.getElementById('q7').innerHTML = "Your Answer: " + arrAnswers[6] + "</br> Correct Answer: " + correctAns[6];
  document.getElementById('q8').innerHTML = "Your Answer: " + arrAnswers[7] + "</br> Correct Answer: " + correctAns[7];
  document.getElementById('q9').innerHTML = "Your Answer: " + arrAnswers[8] + "</br> Correct Answer: " + correctAns[8];
  document.getElementById('q10').innerHTML = "Your Answer: " + arrAnswers[9] + "</br> Correct Answer: " + correctAns[9];
  document.getElementById('q11').innerHTML = "Your Answer: " + arrAnswers[10] + "</br> Correct Answer: " + correctAns[10];
  document.getElementById('q12').innerHTML = "Your Answer: " + arrAnswers[11] + "</br> Correct Answer: " + correctAns[11];
  document.getElementById('q13').innerHTML = "Your Answer: " + arrAnswers[12] + "</br> Correct Answer: " + correctAns[12];
  document.getElementById('q14').innerHTML = "Your Answer: " + arrAnswers[13] + "</br> Correct Answer: " + correctAns[13];
  document.getElementById('q15').innerHTML = "Your Answer: " + arrAnswers[14] + "</br> Correct Answer: " + correctAns[14];
  document.getElementById('q16').innerHTML = "Your Answer: " + arrAnswers[15] + "</br> Correct Answer: " + correctAns[15];
  document.getElementById('q17').innerHTML = "Your Answer: " + arrAnswers[16] + "</br> Correct Answer: " + correctAns[16];
  document.getElementById('q18').innerHTML = "Your Answer: " + arrAnswers[17] + "</br> Correct Answer: " + correctAns[17];
  document.getElementById('q19').innerHTML = "Your Answer: " + arrAnswers[18] + "</br> Correct Answer: " + correctAns[18];
  document.getElementById('q20').innerHTML = "Your Answer: " + arrAnswers[19] + "</br> Correct Answer: " + correctAns[19];
}

function loadResult() {
  var result = JSON.parse(localStorage.getItem("Result"));
  document.getElementById('result').innerHTML = "Your Score is " + result + " out of 20. (" + result/0.2 + "%)"
}

function getInput() {
  const userName = document.getElementById('userName').value;
  console.log(userName);
  const age = document.getElementById('age').value;
  console.log(age);
  const userCollection = [userName, age];
  window.localStorage.setItem("user" , JSON.stringify(userCollection)); 
}

function check() {
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var q6 = document.quiz.question6.value;
  var q7 = document.quiz.question7.value;
  var q8 = document.quiz.question8.value;
  var q9 = document.quiz.question9.value;
  var q10 = document.quiz.question10.value;
  var q11 = document.quiz.question11.value;
  var q12 = document.quiz.question12.value;
  var q13 = document.quiz.question13.value;
  var q14 = document.quiz.question14.value;
  var q15 = document.quiz.question15.value;
  var q16 = document.quiz.question16.value;
  var q17 = document.quiz.question17.value;
  var q18 = document.quiz.question18.value;
  var q19 = document.quiz.question19.value;
  var q20 = document.quiz.question20.value;
  const arrAnswers = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20];
  const correctAns = ["D","D","D","D","D","D","D","D","D","D",
                      "D","D","D","D","D","D","D","D","D","D"];
  window.localStorage.setItem("userAnswers", JSON.stringify(arrAnswers));
  window.localStorage.setItem("correctAns", JSON.stringify(correctAns));
  var correct = 0;
  if(q1 == correctAns[0]) {
    correct++
    console.log(correct);
  }
  if(q2 == correctAns[1]) {
    correct++
    console.log(correct);
  }
  if(q3 == correctAns[2]) {
    correct++
    console.log(correct);
  }
  if(q4 == correctAns[3]) {
    correct++
    console.log(correct);
  }
  if(q5 == correctAns[4]) {
    correct++
    console.log(correct);
  }
  if(q6 == correctAns[5]) {
    correct++
    console.log(correct);
  }
  if(q7 == correctAns[6]) {
    correct++
    console.log(correct);
  }
  if(q8 == correctAns[7]) {
    correct++
    console.log(correct);
  }
  if(q9 == correctAns[8]) {
    correct++
    console.log(correct);
  }
  if(q10 == correctAns[9]) {
    correct++
    console.log(correct);
  }
  if(q11 == correctAns[10]) {
    correct++
    console.log(correct);
  }
  if(q12 == correctAns[11]) {
    correct++
    console.log(correct);
  }
  if(q13 == correctAns[12]) {
    correct++
    console.log(correct);
  }
  if(q14 == correctAns[13]) {
    correct++
    console.log(correct);
  }
  if(q15 == correctAns[14]) {
    correct++
    console.log(correct);
  }
  if(q16 == correctAns[15]) {
    correct++
    console.log(correct);
  }
  if(q17 == correctAns[16]) {
    correct++
    console.log(correct);
  }
  if(q18 == correctAns[17]) {
    correct++
    console.log(correct);
  }
  if(q19 == correctAns[18]) {
    correct++
    console.log(correct);
  }
  if(q20 == correctAns[19]) {
    correct++
    console.log(correct);
  }
  return correct;
}