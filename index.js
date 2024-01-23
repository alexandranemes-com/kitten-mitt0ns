let  button = document.querySelector("#change-style");
let alternateStylesheet = document.querySelector("link[href='alternate-styles.css']");

//toggleAttribute() does not work for the "disabled" booleanon link tag therefore tracking clicks is the solution I found strating with its value being true
let clicks = 1;

button.addEventListener("click", () => {

    clicks = clicks + 1;

    if (clicks % 2 == 0) {
        alternateStylesheet.removeAttribute("disabled", "");
    } else {
        alternateStylesheet.setAttribute("disabled", "");
    }
});