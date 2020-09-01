let totaltime=200;
let timer;
let min=0;
let sec=0;
let counter=0;
let index=0;
let name = document.getElementById('nameinput');
let questions=quiz.sort(function(){
	return 0.5 - Math.random();
});
let attempt = 0;
let score=0;
let wrong=0;
let totalquestions = questions.length;
let highscorelist = document.getElementById('highscorelist');


for(var j=0;j<=totalquestions-1;j++){
	var button = document.createElement("button");
	var appdiv = document.getElementById('navbarscreen');
	button.id = j+1;
	button.innerHTML = j+1;
	appdiv.appendChild(button);	
}

let getbtns = document.getElementById('navbarscreen').querySelectorAll('button');
/*for(var k=0; k<=9; k++){
getbtns[k].addEventListener("click", function(){
  var btn1 = questions.findIndex(obj=>obj.question===questions[k].question);
  console.log(btn1);
  index=btn1;
  printQuestions(btn1);
});
}*/
getbtns[0].addEventListener("click", function(){
  var btn1 = questions.findIndex(obj=>obj.question===questions[0].question);
  console.log(btn1);
  index=btn1;
  printQuestions(btn1);
});
getbtns[1].addEventListener("click", function(){
  var btn2 = questions.findIndex(obj=>obj.question===questions[1].question);
  console.log(btn2);
  index=btn2;
  printQuestions(btn2);
});
getbtns[2].addEventListener("click", function(){
  var btn3 = questions.findIndex(obj=>obj.question===questions[2].question);
  console.log(btn3);
  index=btn3;
  printQuestions(btn3);
});
getbtns[3].addEventListener("click", function(){
  var btn4 = questions.findIndex(obj=>obj.question===questions[3].question);
  console.log(btn4);
  index=btn4;
  printQuestions(btn4);
});
getbtns[4].addEventListener("click", function(){
  var btn5 = questions.findIndex(obj=>obj.question===questions[4].question);
  console.log(btn5);
  index=btn5;
  printQuestions(btn5);
});
getbtns[5].addEventListener("click", function(){
  var btn6 = questions.findIndex(obj=>obj.question===questions[5].question);
  console.log(btn6);
  index=btn6;
  printQuestions(btn6);
});
getbtns[6].addEventListener("click", function(){
  var btn7 = questions.findIndex(obj=>obj.question===questions[6].question);
  console.log(btn7);
  index=btn7;
  printQuestions(btn7);
});
getbtns[7].addEventListener("click", function(){
  var btn8 = questions.findIndex(obj=>obj.question===questions[7].question);
  console.log(btn8);
  index=btn8;
  printQuestions(btn8);
});
getbtns[8].addEventListener("click", function(){
  var btn9 = questions.findIndex(obj=>obj.question===questions[8].question);
  console.log(btn9);
  index=btn9;
  printQuestions(btn9);
});
getbtns[9].addEventListener("click", function(){
  var btn10 = questions.findIndex(obj=>obj.question===questions[9].question);
  console.log(btn10);
  index=btn10;
  printQuestions(btn10);
});


function goahead(){
	document.getElementById('writename').style.display="block";
	document.getElementById('container').style.display="none";
	
}


function start(){
	if(name.value=='');
	else{
	document.getElementById('questionScreen').style.display = "block";
	document.getElementById('navbarscreen').style.display = "grid";
	document.getElementById('writename').style.display = "none";
	document.getElementById('highScorescreen').style.display="none"
  timer= setInterval(function(){
	 counter++;
     min = Math.floor((totaltime - counter) / 60);
	 sec = totaltime - min * 60 - counter;
	 document.getElementById('setime').innerHTML = (min) + ":" + (sec);
	 
	 if(counter==totaltime){
		alert("Times's up.<br />Press Ok to see the results");
		 result();
		 clearInterval(timer);
	 }
	 //console.log("min = " + min);
	 //console.log("sec = " + sec);
 }, 1000);
}
 }
 
 printQuestions(index);
 //shownavbar();
 
 function printQuestions(i){
	 if(getbtns[i].style.backgroundColor=='green' || getbtns[i].style.backgroundColor=='red'){
		 //alert('already answered');
		 document.getElementById('opt1').setAttribute('onclick','');
	  document.getElementById('opt2').setAttribute('onclick','');
	  document.getElementById('opt3').setAttribute('onclick','');
	  document.getElementById('opt4').setAttribute('onclick','');
	 }
	 //console.log(questions[0]);
	 document.getElementsByClassName('questionbox')[0].innerHTML=(questions.findIndex(obj=>obj.question===questions[i].question) + 1) + " " + questions[i].question;
	 var opt=document.getElementsByClassName('optionbox');
	 //var spans=opt.getElementsByTagName('span');

	 document.getElementById('opt1').innerHTML=questions[i].options[0];
	 document.getElementById('opt2').innerHTML=questions[i].options[1];
	 document.getElementById('opt3').innerHTML=questions[i].options[2];
	 document.getElementById('opt4').innerHTML=questions[i].options[3];
	 
 }
 
 
 function checkAnswer(option){
	 var optionclicked = option.getAttribute("data-opt");
	 var opts = document.getElementById('optionsbox').querySelectorAll('span');
	 var opt = questions.findIndex(x=>x.options[0]===opts[0].innerHTML);
	  console.log(index);
	 if(optionclicked==questions[index].answer){
		 option.classList.add("right");
		 getbtns[opt].style.backgroundColor='green';
		 getbtns[opt].style.color='white';
		 score++;
		 attempt++;
	 }
	 else{
		 option.classList.add("wrong");
		 getbtns[opt].style.backgroundColor='red';
		 getbtns[opt].style.color='white';
		 wrong++;
		 attempt++;
	 }
	 document.getElementById('setscore').innerHTML=score;
	  document.getElementById('opt1').setAttribute('onclick','');
	  document.getElementById('opt2').setAttribute('onclick','');
	  document.getElementById('opt3').setAttribute('onclick','');
	  document.getElementById('opt4').setAttribute('onclick','');
 }
 
 function shownext(){
	 //document.getElementById('right').style.backgroundColor=document.getElementById(index+1).style.backgroundColor;
	 if(index>=questions.length-1){
		 if(!confirm("You are at last question, Press OK to see results")){
		 return;
		 }
		 else{
			 showResult(0);
		 }
		 
	 }
	 
	 index++;
	 document.getElementById('opt1').classList.remove('right', 'wrong');
	  document.getElementById('opt2').classList.remove('right', 'wrong');
	  document.getElementById('opt3').classList.remove('right', 'wrong');
	  document.getElementById('opt4').classList.remove('right', 'wrong');
	  
	  document.getElementById('opt1').setAttribute('onclick','checkAnswer(this)');
	  document.getElementById('opt2').setAttribute('onclick','checkAnswer(this)');
	  document.getElementById('opt3').setAttribute('onclick','checkAnswer(this)');
	  document.getElementById('opt4').setAttribute('onclick','checkAnswer(this)');
	 printQuestions(index);
	 
 }
 
 
 function showResult(j){
	 
	 if(j==1 && index < questions.length && !confirm("Quiz has not finished yet, Press OK to see results.")){
		return;
	 }
	 result();
	 
 }
 /*function getname(){
	 var name = document.getElementById('nameinput').value;
	 document.getElementById('username').innerHTML=name;
 }*/


let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
 
function result(){
	
	document.getElementById('questionScreen').style.display="none";
	document.getElementById('navbarscreen').style.display="none";
	document.getElementById('writename').style.display = "none";
	document.getElementById('highScorescreen').style.display="none"
	 document.getElementById('resultScreen').style.display="block";
	 
	 document.getElementById('username').innerHTML=name.value;
	 document.getElementById('totalquestions').innerHTML=totalquestions;
	 document.getElementById('attemptquestions').innerHTML=attempt;
	 document.getElementById('correctanswers').innerHTML=score;
	 document.getElementById('wronganswers').innerHTML=wrong;
	 
	 
	 clearInterval(timer);
	 const scores = {
		recentscore : score,
		userName : name.value
	};
	highscores.push(scores);
	highscores.sort(function(a,b){return b.recentscore - a.recentscore});
	highscores.splice(7);
	
	localStorage.setItem("highscores", JSON.stringify(highscores));
	//console.log(highscores);
}


function viewhighscores(){
	document.getElementById('highScorescreen').style.display="block"
	
	document.getElementById('questionScreen').style.display="none";
	document.getElementById('navbarscreen').style.display="none";
	document.getElementById('writename').style.display = "none";
	 document.getElementById('resultScreen').style.display="none";
	 
	 console.log(highscores);
	 console.log(highscores.length);
	
	let h = 7;
	if(highscores.length<h)
		h=highscores.length
	 for(var n=0; n<h; n++){
		 var list = document.createElement("li");
		 var unlist = document.getElementById('highscorelist');
		 let nm = highscores[n].userName;
		 let sc = highscores[n].recentscore;
		 list.innerHTML = n+1+". "+ " "+"Name:"+" "+nm+" "+"&"+" "+"Score:"+sc;
		 unlist.appendChild(list);
	 }
	 
	 
}
 
