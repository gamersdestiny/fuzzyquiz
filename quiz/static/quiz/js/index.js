url = '/questions-api'

fetch(url).then((resp) => (resp.json()))
.then(function(data){
	const hquestion = document.querySelector('.question');
	const hchoices = document.querySelectorAll('.choice');
	const cc = document.querySelector('.choices')
	const hanswers = document.querySelectorAll('.answer');
	i = 0;
	data.forEach(element => {
		i++;
		console.log(element)
		//question======================================
		var fetchedQS = document.createElement('p')
		fetchedQS.innerHTML = `<p>${element.question}</p>`
		var fetchedAS1 = document.createElement('h3');
		var fetchedAS2 = document.createElement('h3');
		var fetchedAS3 = document.createElement('h3');
		var fetchedAS4 = document.createElement('h3');

		fetchedAS1.innerHTML=`${element.choice1}`
		fetchedAS2.innerHTML=`${element.choice2}`
		fetchedAS3.innerHTML=`${element.choice3}`
		fetchedAS4.innerHTML=`${element.choice4}`

		hquestion.appendChild(fetchedQS)
		hquestion.appendChild(fetchedAS1)
		hquestion.appendChild(fetchedAS2)
		hquestion.appendChild(fetchedAS3)
		hquestion.appendChild(fetchedAS4)


	});
	
})