let validateEmail = (() => {

	function load(email){

		/* Info: Regexp from Alura */
		let regExpCode = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
		return regExpCode.test(email)
	}

	return{

		render:load
	}
})()