const input = document.getElementById("input");
const form = document.getElementById("form");
const content = document.getElementById("content")


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkinputs();
})

function checkinputs() {
    const inputvalue = input.value.trim();
    const small = content.querySelector('small');
    const error = content.querySelector('form')
    if (inputvalue ==="") {
        small.className = 'error error-1';
    }
    else if (!isEmail(inputvalue)) {
		small.className = 'error error-txt';
        error.className = 'form error-input';
	}
    else {
        small.className = 'error';
        error.className = 'form';
        alert("success")
    }
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
