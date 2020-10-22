const rememberDiv= document.querySelector(".husk");
const forgetDiv= document.querySelector(".glem");
const form= document.querySelector("form");
const nameInput= document.querySelector("#skrivNavn");
const submitBtn= document.querySelector("#submitNavn");
const forgetBtn= document.querySelector("#glemNavn");

const h1= document.querySelector("h1");
var personalGreeting=document.querySelector(".personalGreeting");

form.addEventListener("submit", function(e){
    e.preventDefault();
});

submitBtn.addEventListener("click", function(){
    localStorage.setItem("navn", nameInput.value);
    nameDisplayCheck()
});

forgetBtn.addEventListener("click", function(){
    localStorage.removeItem("navn");
    nameDisplayCheck()
});

function nameDisplayCheck(){
    if(localStorage.getItem("navn")){
        let name= localStorage.getItem("navn");
        h1.textContent="Velkommen "+ name;
        personalGreeting.textContent = "Velkommen til vores hjemmeside " + name;
        forgetDiv.style.display="block"
        rememberDiv.style.display="none"
    } else {
        h1.textContent= "Velkommen ukendte person";
        personalGreeting.textContent="Hej person jeg ikke ved hvem er";
        forgetDiv.style.display="none"
        rememberDiv.style.display="block"
    }
}

document.body.onload=nameDisplayCheck;