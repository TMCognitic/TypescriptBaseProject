const div : HTMLDivElement | null = document.querySelector<HTMLDivElement>("#screen");
const message : string = "Bonjour tout le monde, comment allez-vous ?";

try {
    if(!div) throw Error("no screenDiv");

    div.innerText = message;
    console.log(message);
} catch (error) {
    console.error(error)
}