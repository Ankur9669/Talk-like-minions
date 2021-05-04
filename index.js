const baseUrl = "https://api.funtranslations.com/translate/minion.json";
let txt_translate = document.querySelector("#txt-translate");
let btn_translate = document.querySelector("#btn-translate");
let txt_translated = document.querySelector("#txt-translated");
let textEnteredByUser = "";
let urlToCall = "";
let image = document.querySelector("#img");
btn_translate.addEventListener("click", onClick);

//Setting the size of image according to screen size
window.addEventListener('load', () => {
    const minHeight = screen.height;
    console.log(minHeight);
    image.height = screen.height;
  });
  
 //Functionality to perform on button click 
function onClick()
{
    console.log("Yes");
    textEnteredByUser = txt_translate.value;
    constructUrl(textEnteredByUser);
    fetch(urlToCall)
    .then(response => response.json())
    .then(json => txt_translated.innerText = json.contents.translated)
    .catch(errorHandler);
}

//If api returns something else
function errorHandler(error)
{
    alert("Something is wrong: " + error);
}

//Function for contructiong url according to user input
function constructUrl(text)
{
    urlToCall =  baseUrl + "?text=" + text;
    console.log(urlToCall)
}