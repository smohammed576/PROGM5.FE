const cursive = document.getElementById("js--cursive");
const sansSerif = document.getElementById("js--sansserif");
const serif = document.getElementById("js--serif");

const input = document.getElementById("js--input");

input.oninput = function(event){
    cursive.innerText = event.target.value;
    sansSerif.innerText = event.target.value;
    serif.innerText = event.target.value;
}

const hearts = document.getElementsByClassName("heart");

for(let i = 0; i < hearts.length; i++)
hearts[i].onclick = function(event){
    for(let i = 0; i < hearts.length; i++){
        hearts[i].children[0].classList = "fa-regular fa-heart heart__logo";
    }
    hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
};

const toggle = document.getElementById("js--toggle");

let darkmode = true;

toggle.onclick = function(){
    if(darkmode === true){
        document.getElementsByTagName("body")[0].classList = "lightmode";
        document.getElementsByTagName("header")[0].classList = "header lightmode__header";
        document.getElementsByTagName("article")[0].classList = "showcase lightmode__showcase";
        darkmode = false;
    }
    else{
        document.getElementsByTagName("body")[0].classList.remove("lightmode");
        document.getElementsByTagName("header")[0].classList.remove("lightmode__header");
        document.getElementsByTagName("article")[0].classList.remove("lightmode__showcase");
        darkmode = true;
    }
};