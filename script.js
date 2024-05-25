const form = document.getElementById("form");
const input = document.querySelector(".email-box");
const error = document.querySelector(".error-message");
const error_icon = document.querySelector(".error-icon");
const email_box = document.querySelector(".email-box");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (event)=>{
     if(input.value == "" || !emailRegex.test(input.value)){
          error.textContent = "Please provide a valid email";
          error_icon.style.display = "block"
          email_box.style.borderColor = "red";
          error.style.color = "red";
     }else{
          error.textContent = "Email added succeessfully!";
          error.style.color = "green";
          error_icon.style.display = "none"
          email_box.style.borderColor = "green";
     }
     event.preventDefault()
})