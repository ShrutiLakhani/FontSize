var textInp = document.querySelector("#text");
var outputVal = document.querySelector("#output");
var btnInc = document.querySelector("#btn-inc");
var btnDec = document.querySelector("#btn-dec");

btnInc.addEventListener("click", increaseFont);
btnDec.addEventListener("click", decreaseFont);

var size = 16;
function increaseFont()
{
size = size + 2;
var outtext = textInp.value;
outputVal.style.fontsize = `${size}px`;
console.log(outputVal.style.fontsize);
outputVal.textContent = outtext;
console.log(outputVal.textContent);
}

function decreaseFont()
{
console.log("comes here")
size -=2;
var outtext = textInp.value;
outputVal.style.fontsize = `${size}px`;
outputVal.textContent = outtext;
}
