
"use strict";
module.exports = {
	//success,
	error
};

function error(message = null, code = 400) {
	const status = {
		code: code,
		message: message
	};
	if (message.code)
		status.code = message.code; 
	if (message.message)
		status.message = message.message; 
	if (!message)
        status.message = "ERROR";
    
	console.error("Final Error Is ", status);
	return {
		status
	};
}