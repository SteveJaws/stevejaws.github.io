let container12 = document.getElementById("container12")
let container34 = document.getElementById("container34")
let Menu = document.getElementById("menu")
let menutrigger = document.getElementById("menutrigger")
let scaleall = document.getElementById("scaleall")
let imghome = document.getElementById("imghome")
let imgprojects = document.getElementById("imgprojects")
let imgabout = document.getElementById("imgabout")
let imgcontact = document.getElementById("imgcontact")

function page1(){
    document.querySelector('#page1').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("middenwoord").style.display = "block"
    document.getElementById("pword").style.display = "block"
    setTimeout(function () {
        location.reload(); // Reloads the current page
    }, 1500);
    Menu.style.display = "none";
    menutrigger.style.display = "none";
    scaleall.style.transform = "scale(1)";
    container12.style.opacity = "1";
    container34.style.opacity = "1";
    container12.style.filter = "none";
    container34.style.filter = "none";
    imghome.style.display = "none";
    imgcontact.style.display = "none";
    imgabout.style.display = "none";
    imgprojects.style.display = "none";
    document.body.style.backgroundColor = "rgb(242, 234, 243)"
}

function page2(){
    document.querySelector('#page2').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("disappear").style.display = "none";
    Menu.style.display = "none";
    scaleall.style.transform = "scale(1)"
    scaleall.style.transition = 'transform 0.5s ease-in-out';
    container12.style.opacity = "1";
    container34.style.opacity = "1";
    container12.style.filter = "none";
    container34.style.filter = "none";
    imghome.style.display = "none";
    imgcontact.style.display = "none";
    imgabout.style.display = "none";
    imgprojects.style.display = "none";
    document.body.style.backgroundColor = "rgb(242, 234, 243)"
}

function page3(){
    document.querySelector('#page3').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("disappear").style.display = "none";
    Menu.style.display = "none";
    scaleall.style.transform = "scale(1)"
    scaleall.style.transition = 'transform 0.5s ease-in-out';
    container12.style.opacity = "1";
    container34.style.opacity = "1";
    container12.style.filter = "none";
    container34.style.filter = "none";
    imghome.style.display = "none";
    imgcontact.style.display = "none";
    imgabout.style.display = "none";
    imgprojects.style.display = "none";
    document.body.style.backgroundColor = "rgb(242, 234, 243)"
}

function page4(){
    document.querySelector('#page4').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("disappear").style.display = "none";
    Menu.style.display = "none";
    scaleall.style.transform = "scale(1)"
    scaleall.style.transition = 'transform 0.5s ease-in-out';
    container12.style.opacity = "1";
    container34.style.opacity = "1";
    container12.style.filter = "none";
    container34.style.filter = "none";
    imghome.style.display = "none";
    imgcontact.style.display = "none";
    imgabout.style.display = "none";
    imgprojects.style.display = "none";
    document.body.style.backgroundColor = "rgb(242, 234, 243)"
}



function menu(){
    container12.style.opacity = "0.3";
    container34.style.opacity = "0.3";
    container12.style.filter = "blur(15px)";
    container34.style.filter = "blur(15px)";
    Menu.style.display = "block";
    scaleall.style.transform = "scale(0.9)"
    scaleall.style.transition = 'transform 0.5s ease-in-out';
    
    document.body.style.backgroundColor = "rgb(181, 172, 182)"
}

function homeon(){
    imghome.style.display = "block";
}

function homeoff(){
    imghome.style.display = "none";
}

function projectson(){
    imgprojects.style.display = "block";
}

function projectsoff(){
    imgprojects.style.display = "none";
}

function abouton(){
    imgabout.style.display = "block";
}

function aboutoff(){
    imgabout.style.display = "none";
}

function contacton(){
    imgcontact.style.display = "block";
}

function contactoff(){
    imgcontact.style.display = "none";
}


