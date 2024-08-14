window.onload = function () {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener("click", (event) => handleClick(event));
};

function handleClick(event) {
    console.log(event);
    event.preventDefault();
    
}
