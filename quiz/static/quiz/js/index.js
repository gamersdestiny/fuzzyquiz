const hquestion = document.querySelector('.question');
const markss = document.querySelector('.marks');
const marksc = document.querySelector('.marks-c');

const lChoice1 = document.querySelector('.l-choice1');
const lChoice2 = document.querySelector('.l-choice2');
const lChoice3 = document.querySelector('.l-choice3');
const lChoice4 = document.querySelector('.l-choice4');
const choices = document.querySelector('.choices');

const answer1 = document.querySelector('.answer');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');
const results = document.querySelector('.results');

const readyBtn = document.querySelector('.ans-rdy-btn');
const submitBtn = document.querySelector('.ans-sub-btn');
const nextBtn = document.querySelector('.ans-nxt-btn');
const bthBtn = document.querySelector('.ans-bth-btn');
const nfBtn = document.querySelector('.ans-nf-btn');
const buttons = document.querySelector('.buttons');

const pass = document.querySelector('.pass');
const fail = document.querySelector('.fail');
const timeH = document.querySelector('.time');

const loading = document.querySelector('.loading');

const curl = '/category-api/';
const qTitles = document.querySelectorAll('.q-title');
const cTitle = document.querySelector('.c-title');
const qDetails = document.querySelectorAll('.q-detail');
const qCards = document.querySelectorAll('.cards');

const cContainer = document.querySelector('.category-container');
const qContainer = document.querySelector('.question-container');
const maincq = document.querySelector('.main-cq')

choices.classList.add('hide');
submitBtn.classList.add('hide');
nextBtn.classList.add('hide');
cTitle.classList.add('hide')
// previousBtn.classList.add('hide');

let urlNo = 1;
let url = '/questions-api/';

let answerlst = [];
let userInput = [];
var mark = 0;
var time = 0;

readyBtn.classList.remove('hide')

readyBtn.addEventListener('click', (e)=>{
	readyBtn.classList.add('hide')
	
fetch(curl)
.then((resp) => (resp.json()))
.then(function(element){
	cTitle.classList.remove('hide')
	var c = 0;
	var qNo = 0;
	element.forEach(e => {
		var card = document.createElement("div");  
		var qsTitle = document.createElement("h3");
		var qsDetail = document.createElement("p");

		card.classList.add('cards');
		qsTitle.classList.add('q-title');
		qsDetail.classList.add('q-detail');

		cContainer.appendChild(card)
		card.appendChild(qsTitle)
		card.appendChild(qsDetail)

		qsTitle.textContent = e.categoryName;
		qsDetail.textContent = e.categoryDetails;
		card.addEventListener('click', (cc)=>{
			var cqurl = '/category-api/'+e.id;
			fetch(cqurl)
			.then((resp) => (resp.json()))
			.then(function(category){
				cTitle.classList.add('hide');
				nextBtn.classList.add('hide')
				cContainer.classList.add('hide');
				qContainer.classList.remove('hide');
				console.log(category.question[qNo])
				if(category.question[qNo]){
					hquestion.innerHTML = `<h2>${category.question[qNo].question}</h2>`
					lChoice1.innerHTML =`${category.question[qNo].choice1}`
					lChoice2.innerHTML =`${category.question[qNo].choice2}`
					lChoice3.innerHTML =`${category.question[qNo].choice3}`
					lChoice4.innerHTML =`${category.question[qNo].choice4}`
					readyBtn.style.display = 'none'
					
				} else {
					marksc.classList.add('hide');
					choices.classList.add('hide');
					buttons.classList.add('hide');
					results.classList.add('hide');
					nfBtn.classList.remove('hide')
				}
			});
			choices.classList.remove('hide');
			submitBtn.classList.remove('hide');
			nextBtn.classList.remove('hide');
			marksc.classList.remove('hide');
			// previousBtn.classList.remove('hide');

			
			add = setInterval(() => {
				time++
				timeH.textContent = 'Time: '+ time + 's'
				return time
			}, 1000);
			
		//submit btn ===========================================
		userInput.push(lChoice1.textContent)

		submitBtn.addEventListener('click', (e)=>{
			loading.classList.remove('hide');
			submitBtn.classList.add('hide');
			url = '/questions-api/'+  urlNo;
			e.preventDefault();
			const iChoice = document.querySelectorAll('.checkbox-q');
			iChoice.forEach(elements => {
				elements.parentElement.style.color='black';	
			});	
			fetch(cqurl).then((resp) => (resp.json()))
			.then(function(element){

				if(Object.keys(element.question[qNo]).length>2){
					setTimeout(function(){
						loading.classList.add('hide');
						answer1.innerHTML =`${element.question[qNo].answer}`
						answer2.innerHTML =`${element.question[qNo].answer2}`
						answer3.innerHTML =`${element.question[qNo].answer3}`
						answer4.innerHTML =`${element.question[qNo].answer4}`
						answerlst.push(element.question[qNo].answer)
						answerlst.push(element.question[qNo].answer1)
						answerlst.push(element.question[qNo].answer2)
						answerlst.push(element.question[qNo].answer3)
						const iChoice = document.querySelectorAll('.checkbox-q:checked');
						iChoice.forEach((elements) => {
							elements.checked = false
						if (answerlst.includes(elements.parentElement.textContent)){
							elements.parentElement.style.color='green';
							mark++;
							if((iChoice.length>=2)&&(answerlst.includes(elements.parentElement.textContent))){
								mark -= 0.5;
							}
							markss.textContent = 'Total Marks = ' + mark
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
						nextBtn.classList.remove('hide');
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
			nextBtn.classList.add('hide');
			submitBtn.classList.remove('hide');

			qNo++;
			fetch(cqurl).then((resp) => (resp.json()))
			.then(function(nq){
				console.log(nq.question[qNo])
			// if(Object.keys(nq.question[qNo]).length>8){
				if(nq.question[qNo]){

				//question======================================
					hquestion.innerHTML = `<h2>${nq.question[qNo].question}</h3>`
					lChoice1.innerHTML =`${nq.question[qNo].choice1}`
					lChoice2.innerHTML =`${nq.question[qNo].choice2}`
					lChoice3.innerHTML =`${nq.question[qNo].choice3}`
					lChoice4.innerHTML =`${nq.question[qNo].choice4}`	
			} else {
				nextBtn.classList.add('hide')
				bthBtn.classList.remove('hide')
				submitBtn.classList.add('hide')
				choices.classList.add('hide')
				clearInterval(add)	
				if(mark>3){
					pass.classList.remove('hide');
				} else {
					fail.classList.remove('hide');
				}
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

		})
		c++;
	});
});

})

