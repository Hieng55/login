const buttonLogin = document.querySelector(".login-check");
const register = document.querySelector(".register");
const box = document.querySelector(".box");
const round = document.querySelector(".round");
const bg = document.querySelector(".bg");
const URL = "http://localhost:3004/info-SinUp";
let InfoSinUp = [];
async function init() {
    await getData();
}
async function getData() {
    let resMenu = await fetch(URL);
    let dataMenu = await resMenu.json();
    InfoSinUp = dataMenu;
    return dataMenu;
}
buttonLogin.addEventListener("click", () => {
    buttonLogin.classList.add("active");
    register.classList.remove("active");
    box.classList.remove("active");
    round.classList.remove("active");
    bg.classList.remove("active");
});
register.addEventListener("click", () => {
    register.classList.add("active");
    buttonLogin.classList.remove("active");
    box.classList.add("active");
    round.classList.add("active");
    if (box.classList.contains("active")) {
        box.classList.add("left");
    }
    bg.classList.add("active");
});

async function postData(data) {
    let resPostData = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return resPostData;
}
const attention = document.querySelector(".attention");
const att = document.querySelector(".attention span");
const success = document.querySelector(".success span");
const attSuccess = document.querySelector(".success");
const signup = document.querySelector(".content .register-button");
signup.addEventListener("click", async () => {
    const userName = document.getElementById("username").value;
    const email = document.getElementById("mail").value;
    const passWord = document.getElementById("pass").value;
    const repass = document.getElementById("repass").value;
    const dataRegister = { userName, email, passWord, repass };
    console.log(dataRegister);
    const checkUser = InfoSinUp.find((check) => check.userName == userName);
    const checkEmail = InfoSinUp.find((check) => check.email == email);
    attention.classList.add("active");
    setTimeout(() => {
        attention.classList.remove("active");
    }, 2000);
    if (userName === "" || email === "" || passWord === "" || repass === "") {
        att.innerHTML = "Please enter full information";
    } else if (checkUser) {
        att.innerHTML = "Username available";
    } else if (checkEmail) {
        att.innerHTML = "Email already exists";
    } else if (passWord != repass) {
        att.innerHTML = "Incorrect password";
    } else {
        attention.classList.remove("active");
        attSuccess.classList.add("active");
        setTimeout(() => {
            attSuccess.classList.remove("active");
        }, 2000);
        success.innerHTML = "Sign Up Success";
        await postData(dataRegister);
        init();
    }
});
const login = document.querySelector(".login-button");
login.addEventListener("click", async () => {
    const userName = document.getElementById("user").value;
    const passWord = document.getElementById("password").value;
    const checkUser = InfoSinUp.find((check) => check.userName == userName);
    const checkPass = InfoSinUp.find((check) => check.passWord == passWord);
    console.log(checkUser);
    console.log(InfoSinUp);
    if (!checkUser || !checkPass) {
        attention.classList.add("active");
        setTimeout(() => {
            attention.classList.remove("active");
        }, 2000);
        att.innerHTML = "Username or password is incorrect";
    } else {
        attention.classList.remove("active");
        attSuccess.classList.add("active");
        setTimeout(() => {
            attSuccess.classList.remove("active");
        }, 2000);
        success.innerHTML = "Login Success";
    }
    init();
array.forEach(element => {
    
});
});
init();
