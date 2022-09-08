const email_bar = document.querySelector("#email_bar");
const input = document.querySelector("#email");
const submit = document.querySelector("#submit");
setInterval(() => {
  console.log(input.value);
}, 1000);
console.log(submit);

submit.addEventListener("click", () => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let email = input.value;
  
  if(!regex.test(email)){
    email_bar.style.borderColor = "red";
    email_bar.style.borderColor = "red";
    email_bar.style.borderColor = "red";
    email_bar.style.borderColor = "red";

  }
  else{
    email_bar.style.borderColor = "hsl(0, 36%, 70%, 0.5)";
  }
});


