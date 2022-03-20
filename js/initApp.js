import { getUserName } from "./utils/getUsername.js";

export const initApp = function(){
    initPage1();
    handleStart();

    const userName = getUserName("get");
};

function handleStart(e) {
    if(e) {
        e.preventDefault();
        
        let userName = e.target.elements.userName.value;
        getUserName("set", userName);
        
        initPage2();
        setTimer();
    }
}

const initPage1 = function () {
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.add("hide");
}

document.getElementById("userNameForm")
.addEventListener("submit", handleStart);

const initPage2 = function () {
    document.getElementById("page2").classList.remove("hide");
    document.getElementById("page1").classList.add("hide");
}

const setTimer = function () {
    let timer = document.getElementById("timer");
    let time = 0;
    let interval = setInterval(function () {
        time += 1;
        timer.textContent = `Time: ${time} seconds`;
    }, 1000);
}

document.getElementById("replay").addEventListener("click", function() {location.reload()})
