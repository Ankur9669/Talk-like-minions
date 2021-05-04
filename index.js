const baseUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
let txt_translate = document.querySelector("#txt-translate");
let btn_translate = document.querySelector("#btn-translate");
let txt_translated = document.querySelector("#txt-translated");
let textEnteredByUser = "";
let urlToCall = "";
let image = document.querySelector("#img");
btn_translate.addEventListener("click", onClick);

window.addEventListener('load', () => {
   // let contentHeight = contentOfPage.clientHeight;
    const minHeight = screen.height;
    console.log(minHeight);

    // if(minHeight > contentHeight){
    //     contentHeight = minHeight;
    //    // footer.classList.add('bottom0');
    // }
    image.height = screen.height;
  });
  
function onClick()
{
    console.log("Yes");
    textEnteredByUser = txt_translate.value;
    constructUrl(textEnteredByUser);
    fetch(urlToCall)
    .then(response => response.json())
    .then(json => txt_translated.innerText = json.contents.text)
    .catch(errorHandler);
}

function errorHandler(error)
{
    alert("Something is wrong: " + error);
}

function constructUrl(text)
{
    urlToCall =  baseUrl + "?text=" + text;
    console.log(urlToCall)
}