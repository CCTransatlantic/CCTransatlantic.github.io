function askQuestions(){

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName; 
	console.log(fullName);

	var age = prompt('How old are you?'); 

	age = parseInt(age); 
	console.log('You are ' + age + ' years old');

	if (age >=18) {
		console.log('You\'re an adult');
	} else if (age >= 13) {
		console.log('You are a teenager');
	} else {
		console.log('You are a child');
	}

	if (firstName == 'General' && lastName != 'Assembly') {
		console.log ('Hello General');
	} else {
		console.log('Nice to meet you!');
	}	
}



// When the page has loaded
 $(function () {

 		// When the user clicks the image, ask the questions 
 		$('img').on('click', askQuestions);

	// When the user clicks an h3
	$('h3').on('click', function () {

	// Toggle the next element
		$(this).next().slideToggle(800);

	});

});