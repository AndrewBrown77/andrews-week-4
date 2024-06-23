const submitForm= document.querySelector("#blogForm")
console.log(submitForm);

function handleSubmitForm(event) {
    event.preventDefault()
    console.log(event);
    const title=event.target[0]
    const content=event.target[1]
    console.log(title, content);
    console.log(title.value)
}

// takes a string and a callback funtion as arguments
submitForm.addEventListener("submit",handleSubmitForm)