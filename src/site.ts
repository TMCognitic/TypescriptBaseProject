const title : HTMLTitleElement | null = document.querySelector<HTMLTitleElement>("#title");
const message : string = "Bienvenue sur le Playground TS";

try {
    if(!title) throw Error("no title");

    title.innerText = message;
    console.log(message);
} catch (error) {
    console.error(error)
}