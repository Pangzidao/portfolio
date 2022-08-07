console.log("hello");

const background = document.getElementsByTagName("body");
const text = document.getElementsByClassName("text");
const modeButton = document.getElementById("modeButton");
let darkMode = false;


function changeMode(){
    console.log("changé de mode");

    



    if (background[0].style.backgroundColor === "black"){
        background[0].style.backgroundColor = "white";
        darkMode === false;
        modeButton.innerText = "light mode";
        text.item(1).style.color = "black";
        }else{
        background[0].style.backgroundColor = "black";
        darkMode === true;
        modeButton.innerText = "dark mode";

    }
}