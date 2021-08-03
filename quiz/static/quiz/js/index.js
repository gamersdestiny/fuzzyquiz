const readyBtn = document.querySelector('.ans-rdy-btn');
const hquestion = document.querySelector('.question');
const markss = document.querySelector('.marks');

const lChoice1 = document.querySelector('.l-choice1');
const lChoice2 = document.querySelector('.l-choice2');
const lChoice3 = document.querySelector('.l-choice3');
const lChoice4 = document.querySelector('.l-choice4');
const choices = document.querySelector('.choices');

const answer1 = document.querySelector('.answer');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');

const submitBtn = document.querySelector('.ans-sub-btn');
const nextBtn = document.querySelector('.ans-nxt-btn');
const bthBtn = document.querySelector('.ans-bth-btn');

const loading = document.querySelector('.loading');

choices.classList.add('hide');
submitBtn.classList.add('hide');
nextBtn.classList.add('hide');
// previousBtn.classList.add('hide');

let urlNo = 1;
let url = '/questions-api/'


let answerlst = [];
let userInput = [];
var mark = 0;

readyBtn.addEventListener('click', ()=>{
	
	fetch(url+1)
	.then((resp) => (resp.json()))
	.then(function(element){
		console.log(element)
		if(Object.keys(element).length>2){
			hquestion.innerHTML = `<h2>${element.question}</h2>`
			lChoice1.innerHTML =`${element.choice1}`
			lChoice2.innerHTML =`${element.choice2}`
			lChoice3.innerHTML =`${element.choice3}`
			lChoice4.innerHTML =`${element.choice4}`
			readyBtn.style.display = 'none'
		} else {
			console.log(element)
		}
	});
	choices.classList.remove('hide');
	submitBtn.classList.remove('hide');
	nextBtn.classList.remove('hide');
	markss.classList.remove('hide');
	// previousBtn.classList.remove('hide');

	return url
})


userInput.push(lChoice1.textContent)
console.log(userInput)

submitBtn.addEventListener('click', (e)=>{
	loading.classList.remove('hide');
	url = '/questions-api/'+  urlNo;
	e.preventDefault();

	console.log(answerlst)
	const iChoice = document.querySelectorAll('.checkbox-q');
	iChoice.forEach(elements => {
		elements.parentElement.style.color='black';	
	});	
	fetch(url).then((resp) => (resp.json()))
	.then(function(element){
		if(Object.keys(element).length>2){
			setTimeout(function(){
				loading.classList.add('hide');
				answer1.innerHTML =`${element.answer}`
				answer2.innerHTML =`${element.answer2}`
				answer3.innerHTML =`${element.answer3}`
				answer4.innerHTML =`${element.answer4}`
				answerlst.push(element.answer)
				console.log(element.answer, 'anser1')
				answerlst.push(element.answer1)
				answerlst.push(element.answer2)
				answerlst.push(element.answer3)
				const iChoice = document.querySelectorAll('.checkbox-q:checked');
				iChoice.forEach((elements) => {
				if (answerlst.includes(elements.parentElement.textContent)){
					elements.parentElement.style.color='green';
					mark++;
					markss.textContent = 'Total Marks = '+ mark;
				} else {
					elements.parentElement.style.color='red';
				}
				});
				const iChoiceU = document.querySelectorAll('.checkbox-q');
				iChoiceU.forEach((elements) => {
				if (answerlst.includes(elements.parentElement.textContent)){
					elements.parentElement.style.color='green';
				}
				});
			}, 1500)
	}
})
	
	readyBtn.style.display = 'none'
	answer1.classList.remove('hide')
	answer2.classList.remove('hide')
	answer3.classList.remove('hide')
	answer4.classList.remove('hide')
})

nextBtn.addEventListener('click', ()=>{
	urlNo++;
	url = '/questions-api/'+  urlNo;
	fetch(url).then((resp) => (resp.json()))
	.then(function(element){
	console.log(Object.keys(element).length>2)
	
	if(Object.keys(element).length>1){
			//question======================================
			hquestion.innerHTML = `<h2>${element.question}</h3>`
			lChoice1.innerHTML =`${element.choice1}`
			lChoice2.innerHTML =`${element.choice2}`
			lChoice3.innerHTML =`${element.choice3}`
			lChoice4.innerHTML =`${element.choice4}`
			
	} else {
		--urlNo;
		nextBtn.classList.add('hide')
		bthBtn.classList.remove('hide')
	} 
	});

	const iChoice = document.querySelectorAll('.checkbox-q');
	iChoice.forEach(elements => {
		elements.parentElement.style.color='black';	
	});	

	readyBtn.style.display = 'none'
	answer1.classList.add('hide')
	answer2.classList.add('hide')
	answer3.classList.add('hide')
	answer4.classList.add('hide')
	return urlNo
})

// previousBtn.addEventListener('click', ()=>{
// 	urlNo--;
// 	url = '/questions-api/'+  urlNo;
// 	fetch(url).then((resp) => (resp.json()))
// 	.then(function(element){
// 	console.log(Object.keys(element).length>2)
	
// 	if(Object.keys(element).length>2){
// 			//question======================================
// 			hquestion.innerHTML = `<h2>${element.question}</h3>`
// 			lChoice1.innerHTML =`${element.choice1}`
// 			lChoice2.innerHTML =`${element.choice2}`
// 			lChoice3.innerHTML =`${element.choice3}`
// 			lChoice4.innerHTML =`${element.choice4}`
// 			console.log(element.category)
// 	} else {
// 		urlNo++;
// 		console.log('underfined')
// 	}
// 	});
// 	answer1.classList.add('hide')
// 	answer2.classList.add('hide')
// 	answer3.classList.add('hide')
// 	answer4.classList.add('hide')
// 	return urlNo
// })
