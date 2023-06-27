// const img = document.querySelector("img");

// img.onclick = () => {
//     const src = img.getAttribute("src");
//     if(src === "images/firefox-icon.png"){
//         img.setAttribute("src","images/firefox2.png");
//     }else{
//         img.setAttribute("src", "images/firefox-icon.png");
//     }
// }

document.querySelector("img").addEventListener("click",(e) => {
    let img = e.target;
    const src = img.getAttribute("src");
    if(src === "images/firefox-icon.png"){
        img.setAttribute("src","images/firefox2.png");
    }else{
        img.setAttribute("src", "images/firefox-icon.png");
    }
})

const setUserName = () => {
    let userName = prompt("Please, Specify your username!!!");
    if(!userName || userName === ""){
        setUserName();
    }else{
        // localStorage.setItem("userName",userName);
        sessionStorage.setItem("userName",userName);
        document.querySelector("h1").innerText = `Mozilla is cool, ${userName}`;
    }
}

const btn = document.querySelector("button");
btn.onclick = ()=>{
    setUserName();
}


// if(localStorage.getItem("userName")){
if(sessionStorage.getItem("userName")){
    // let userName = localStorage.getItem("userName");
    let userName = sessionStorage.getItem("userName");
    document.querySelector("h1").innerText = `Mozilla is cool, ${userName}`;
}else{
    setUserName();
}

