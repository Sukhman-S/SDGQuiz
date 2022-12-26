//VARIABLES
var sdg2Score = 0;//SDG2 SCORE
var sdg4Score = 0;//SDG4 SCORE
var sdg6Score = 0;//SDG6 SCORE
var sdg7Score = 0;//SDG7 SCORE
var questionCount = 0; //ANSWERS CLICKED ON

//DOM
var restartBtn = document.getElementById("restartBtn");//RESTART
var show = document.getElementById("show");//DISPLAY
var result = document.getElementById("result");//RESULT

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1"); 
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

//CLICK ANSWERS EVENT LISTENER
q1a1.addEventListener("click",sdg4);
q1a2.addEventListener("click",sdg7);
q1a3.addEventListener("click",sdg6);
q1a4.addEventListener("click",sdg2);

q2a1.addEventListener("click",sdg4);
q2a2.addEventListener("click",sdg7);
q2a3.addEventListener("click",sdg6);
q2a4.addEventListener("click",sdg2)

q3a1.addEventListener("click",sdg6);
q3a2.addEventListener("click",sdg2);
q3a3.addEventListener("click",sdg4);
q3a4.addEventListener("click",sdg7);

q4a1.addEventListener("click",sdg7);
q4a2.addEventListener("click",sdg4);
q4a3.addEventListener("click",sdg2);
q4a4.addEventListener("click",sdg6);

q5a1.addEventListener("click",sdg6);
q5a2.addEventListener("click",sdg7);
q5a3.addEventListener("click",sdg4);
q5a4.addEventListener("click",sdg2);

q6a1.addEventListener("click",sdg4);
q6a2.addEventListener("click",sdg2);
q6a3.addEventListener("click",sdg6);
q6a4.addEventListener("click",sdg7);

show.addEventListener("click",updateResult);//DISPLAY
restartBtn.addEventListener("click", restart);//RESTART

//TRACK SDG2 SCORES + CHECK COMPLETION
function sdg2() {
  sdg2Score += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " sdg2Score = " + sdg2Score);
  if (questionCount == 6) {
      updateResult();
}
  console.log("The quiz is done!");
}

//TRACK SDG4 SCORES + CHECK COMPLETION
function sdg4() {
  sdg4Score += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " sdg4Score = " + sdg4Score);
  if (questionCount == 6) {
      updateResult();
}
  console.log("The quiz is done!");
}

//TRACK SDG6 SCORES + CHECK COMPLETION
function sdg6() {
  sdg6Score += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " sdg6Score = " + sdg6Score);
  if (questionCount == 6) {
      updateResult();
}
  console.log("The quiz is done!");
}

//TRACK SDG7 SCORES + CHECK COMPLETION
function sdg7() {
  sdg7Score += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " sdg7Score = " + sdg7Score);
  if (questionCount == 6) {    updateResult(); }
  console.log("The quiz is done!");
}

//UPDATE RESULTS FUNCTION
function updateResult(){
show.addEventListener("click",display);}

function display() {
  if (sdg2Score >= 2){
  result.innerHTML = "<img class= endresult src=imgs/sdg2.png> <br/> <br/> You would enjoy contributing to SDG2! <br/> <br/> Sustainable Development Goal 2 aims to achieve zero hunger to end hunger, achieve food security and improved nutrition and promote sustainable agriculture. <br/> <br/>You can volunteer at a local food bank like <a class=links href=https://www.dailybread.ca/volunteer/>Daily Bread</a> to help promote food security.";
  console.log("You would enjoy contributing to SDG2!");
} else if (sdg4Score >= 2){
  result.innerHTML = "<img class= endresult src=imgs/sdg4.png> <br/> <br/> You would enjoy contributing to SDG4! <br/> <br/> Sustainable Development Goal 4 is about quality education to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. <br/> <br/>You can start a local <a class=links href=https://girlswhocode.com/get-involved>Girls Who Code</a> club and/or campaign to promote educating females in STEM.";
  console.log("You would enjoy contributing to SDG4!");}
 else if (sdg6Score >= 2){
  result.innerHTML = "<img class= endresult src=imgs/sdg6.png> <br/> <br/> You would enjoy contributing to SDG6! <br/> <br/> Sustainable Development Goal 6 is about clean water and sanitation to ensure availability and sustainable management of water and sanitation for all. <br/> <br/> You can volunteer with <a class=links href=https://www.waterforpeople.org/volunteer/>Water for People</a> by outreaching to communities and fundraising to increase access to water for individuals residing in third-world countries.";
  console.log("You would enjoy contributing to SDG6!");}
else if (sdg7Score >= 2){
  result.innerHTML = "<img class= endresult src=imgs/sdg7.png> <br/> <br/> You would enjoy contributing to SDG7! <br/> <br/> Sustainable Development Goal 7 aims to provide affordable and clean energy, specifically to ensure access to affordable, reliable, sustainable and modern energy for all. <br/> <br/> You can volunteer with <a class=links href=https://sunwork.org/volunteer/>SunWork</a> to install solar panels for small nonprofit organizations to promote access to affordable and clean energy.";
  console.log("You would enjoy contributing to SDG7!");
}
}

//RESTART FUNCTION
function restart (){
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
  q6a1.disabled = false;
  q6a2.disabled = false;
  q6a3.disabled = false;
  q6a4.disabled = false;
  show.disabled = false;
        
document.getElementById("result").innerHTML = "You would ...";
  
  sdg2Score = 0;
  sdg4Score = 0;
  sdg6Score = 0;
  sdg7Score = 0;
  questionCount = 0;
} 

//DISABLE BUTTON
q1a1.addEventListener("click", disableBtnA1);
q1a2.addEventListener("click", disableBtnA2);
q1a3.addEventListener("click", disableBtnA3);
q1a4.addEventListener("click", disableBtnA4);

q2a1.addEventListener("click", disableBtnA5);
q2a2.addEventListener("click", disableBtnA6);
q2a3.addEventListener("click", disableBtnA7);
q2a4.addEventListener("click", disableBtnA8);

q3a1.addEventListener("click", disableBtnA9);
q3a2.addEventListener("click", disableBtnA10);
q3a3.addEventListener("click", disableBtnA11);
q3a4.addEventListener("click", disableBtnA12);

q4a1.addEventListener("click", disableBtnA13);
q4a2.addEventListener("click", disableBtnA14);
q4a3.addEventListener("click", disableBtnA15);
q4a4.addEventListener("click", disableBtnA16);

q5a1.addEventListener("click", disableBtnA17);
q5a2.addEventListener("click", disableBtnA18);
q5a3.addEventListener("click", disableBtnA19);
q5a4.addEventListener("click", disableBtnA20);

q6a1.addEventListener("click", disableBtnA21);
q6a2.addEventListener("click", disableBtnA22);
q6a3.addEventListener("click", disableBtnA23);
q6a4.addEventListener("click", disableBtnA24);

//DISPLAY RESULT
show.addEventListener("click,disableBtnDis");

function disableBtnA1 (){
  document.getElementById("q1a1").disabled = true;
}
function disableBtnA2 (){
  document.getElementById("q1a2").disabled = true;
}
function disableBtnA3 (){
  document.getElementById("q1a3").disabled = true;
}
function disableBtnA4 (){
  document.getElementById("q1a4").disabled = true;
}

function disableBtnA5 (){
  document.getElementById("q2a1").disabled = true;
}
function disableBtnA6 (){
  document.getElementById("q2a2").disabled = true;
}
function disableBtnA7 (){
  document.getElementById("q2a3").disabled = true;
}
function disableBtnA8 (){
  document.getElementById("q2a4").disabled = true;
}

function disableBtnA9 (){
  document.getElementById("q3a1").disabled = true;
}
function disableBtnA10 (){
  document.getElementById("q3a2").disabled = true;
}
function disableBtnA11 (){
  document.getElementById("q3a3").disabled = true;
}
function disableBtnA12 (){
  document.getElementById("q3a4").disabled = true;
}

function disableBtnA13 (){
  document.getElementById("q4a1").disabled = true;
}
function disableBtnA14 (){
  document.getElementById("q4a2").disabled = true;
}
function disableBtnA15 (){
  document.getElementById("q4a3").disabled = true;
}
function disableBtnA16 (){
  document.getElementById("q4a4").disabled = true;
}

function disableBtnA17 (){
  document.getElementById("q5a1").disabled = true;
}
function disableBtnA18 (){
  document.getElementById("q5a2").disabled = true;
}
function disableBtnA19 (){
  document.getElementById("q5a3").disabled = true;
}
function disableBtnA20 (){
  document.getElementById("q5a4").disabled = true;
}

function disableBtnA21 (){
  document.getElementById("q6a1").disabled = true;
}
function disableBtnA22 (){
  document.getElementById("q6a2").disabled = true;
}
function disableBtnA23 (){
  document.getElementById("q6a3").disabled = true;
}
function disableBtnA24 (){
  document.getElementById("q6a4").disabled = true;
}
