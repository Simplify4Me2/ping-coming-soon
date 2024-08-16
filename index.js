window.onload = function () {
    document.getElementById('submitBtn').addEventListener("click", (event) => handleClick(event));
};

function handleClick(event) {
    event.preventDefault();

    const inputField = document.getElementById("eMailInput");
    const formField = document.getElementById("eMailForm");
    const validationMessageField = document.getElementById("validationMsg");

    const isValid = ValidateEmail(inputField.value)

    if(!isValid) {
      inputField.classList.add("invalid");
      formField.classList.add("noBottomMargin");
      validationMessageField.hidden = false
    }
    else {
      inputField.classList.remove("invalid");
      formField.classList.remove("noBottomMargin");
      validationMessageField.hidden = true
    }
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    // alert("You have entered an invalid email address!")
    return (false)
}
