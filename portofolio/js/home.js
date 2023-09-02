function page1(){
    document.querySelector('#page1').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("middenwoord").style.display = "block"
    document.getElementById("middenwoord2").style.display = "block"
    setTimeout(function () {
        location.reload(); // Reloads the current page
    }, 1000); // 2000 milliseconds (2 seconds)
    document.getElementById("disappear").style.display = "none";
}

function page2(){
    document.querySelector('#page2').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("middenwoord").style.display = "none"
    document.getElementById("middenwoord2").style.display = "none"
    document.getElementById("disappear").style.display = "none";
}

function page3(){
    document.querySelector('#page3').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("disappear").style.display = "none";
}

function page4(){
    document.querySelector('#page4').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("disappear").style.display = "none";
}