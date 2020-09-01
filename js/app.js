const quenmb = document.querySelector(".question-nmb");
const queText = document.querySelector(".question-text");
const optcont = document.querySelector(".opt-cont");
let optcontainer = document.getElementById("allopts").querySelectorAll('div');
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
let index = 0;
let quesCounter = 0;
let currentques;
let availablequestions = myQuestions;
let availableoptions = [];
let correctans = 0;
let attempt=0;
let mark='mark';



function getNewQues(n){
	
	
	if(n==0 || n>myQuestions.length){
	document.getElementById('prevbtn').style.display="none";
}
else{
	document.getElementById('prevbtn').style.display="block";
}

console.log(n);
	quenmb.innerHTML = "Question "+(quesCounter+1)+" of " + myQuestions.length;
	const queindex = availablequestions[n];
	queText.innerHTML = queindex.question;
	console.log(availablequestions[n]);
	//console.log(availablequestions[n].options);
	let optlen = queindex.options.length;
	//console.log(optlen);
	let animationdelay = 0.15;
	for(let i=0; i<optlen; i++){
		const option = document.createElement("div");
		option.innerHTML = queindex.options[i];
		option.id = i;
		option.style.animationDelay = animationdelay + 's'; 
		animationdelay = animationdelay + 0.15;
		option.className = "opt";
		optcont.appendChild(option);
		option.setAttribute("onclick", "getResults(this)");
	}
	if(availablequestions[index].response=="marked"){
		optlength = availablequestions[index].options.length;
		for(let i=0; i<optlength; i++){
			var opt = document.getElementById(i);
			opt.setAttribute("onclick",' ');
			
			if(opt.id==availablequestions[index].correctAnswer){
				opt.style.backgroundColor='green';
				//console.log(opt.id);
			}
	}
	
	}
}

function getResults(optionElem){
	availablequestions[index].response="marked";
	console.log(availablequestions[index]);
	const optid = parseInt(optionElem.id);
	//console.log(typeof optid);
	if(optid===availablequestions[index].correctAnswer){
		//console.log('correct');
		optionElem.classList.add("correct");
		correctans++;
			attempt++;
	}
	else{
		//console.log('wrong');
		optionElem.classList.add("wrong");
		const opt_len = optcont.children.length;
	for(let i=0; i<opt_len; i++){
		if(parseInt(optcont.children[i].id)===availablequestions[index].correctAnswer){
			optcont.children[i].classList.add("correct");
		}
	}
		attempt++;
	}

	unclickableopt();
}

function unclickableopt(){
	const opt_len = optcont.children.length;
	for(let i=0; i<opt_len; i++){
		optcont.children[i].classList.add("already-answered");
	}
}

function next(){
	
	if(index==9){
		quizOver();
	}
	else{
	optlength = availablequestions[index].options.length;
	//console.log(optlength);
	
	for(var k=0; k<optlength; k++){
	var elem = document.getElementById(k);
	if(elem!=0){
	elem.parentNode.removeChild(elem);}}
	quesCounter++;
	index++;
	getNewQues(index);
	}
	
}
function prev(){
	
	optlength = availablequestions[index].options.length;
	for(var k=0; k<optlength; k++){
	var elem = document.getElementById(k);
	elem.parentNode.removeChild(elem);}
	quesCounter--;
	index--;
	getNewQues(index);
	
}
function quizOver(){
	quizBox.classList.add("hide");
	resultBox.classList.remove("hide");
	quizResult();
}

function quizResult(){
	console.log(attempt);
	resultBox.querySelector(".total-question").innerHTML = myQuestions.length;
	resultBox.querySelector(".total-attempt").innerHTML = attempt;
	resultBox.querySelector(".total-correct").innerHTML = correctans;
	resultBox.querySelector(".total-wrong").innerHTML = attempt-correctans;
}

function resetquiz(){
	quesCounter = 0;
	attempt = 0;
    correctans = 0;
	index = 0;
	document.location.href=" ";
}

function startquiz(){
	homeBox.classList.add('hide');
	quizBox.classList.remove('hide');
	getNewQues(index);
}
