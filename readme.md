# Validade Email Javascript

### Validate Email Function
This project create a simple validate email function. You can see this project in "email" folder.

#### Usage (email/validateEmail.js)
Example of call this function:
		
	Insert <script src="email/validateEmail.js"></script> in your index.html file
	Now you can call validateEmail('user_email@msn.com')

#### Usage (email/validateEmailES6.js)
Example of call this function:
	
	Import file using ES6 "import validateEmail from './email/validateEmailES6'"
	Now you can call validateEmail('user_email@msn.com')

#### Usage (email/validateEmail_clr.js)
Example of call this function:

	Insert <script src="email/validateEmail_clr.js"></script> in your index.html file
	Now you can call validateEmail.render('user_email@msn.com')

#### Return Example 

	var emailToTest = validateEmail.render('user_email@msn.com')
	console.log(emailToTest) // Return true or false