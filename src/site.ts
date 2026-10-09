const div : HTMLElement | null = document.getElementById("screen");
const message : string = "Bonjour les WAD 26, comment allez-vous ?";

if(div) div.innerText = message;

console.log(message);
