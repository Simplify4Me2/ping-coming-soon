window.onload = function () {
    document.getElementById('submitBtn').addEventListener("click", (event) => handleClick(event));
};

function handleClick(event) {
    event.preventDefault();

    const inputField = document.getElementById("eMailInput");
    const isValid = ValidateEmail(inputField.value)

    console.log("is valid: ", isValid);
    // if(!isValid)
    //   inputField.classList.add("invalid");
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
