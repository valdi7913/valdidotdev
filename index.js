const darkLink = 'dark';
const lightLink = 'light';
let isLight = true;
const sunMoonButton = document
    .getElementById("mode")
    .addEventListener( 'click', (e) => {
        console.log(e.target.classList);
        e.target.classList.toggle("flip");
        if(isLight) {
            addCss(darkLink);
            removeCss(lightLink);
        } else {
            addCss(lightLink);
            removeCss(darkLink);
        }
        isLight = !isLight;
    });

function addCss(fileName) {
    const head = document.head;
    const link = document.createElement("link");

    link.id=fileName;
    link.type="text/css";
    link.rel="stylesheet";
    link.href=fileName+".css";
    
    head.appendChild(link);
}

function removeCss(fileName) {
    console.log('removing element with id ', fileName)
    const sheet = document.getElementById(fileName);
    sheet.disabled = true;
    sheet.parentNode.removeChild(sheet);
}