const div : HTMLElement | null = document.getElementById("screen");
const message : string = "Bonjour tout le monde, comment allez-vous ?";

if(div) div.innerText = message;

console.log(message);
