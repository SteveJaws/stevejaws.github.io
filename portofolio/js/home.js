function page1(){
    document.querySelector('#page1').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("middenwoord").style.display = "block"
    document.getElementById("pword").style.display = "block"
    setTimeout(function () {
        location.reload(); // Reloads the current page
    }, 1000);
}

function page2(){
    document.querySelector('#page2').scrollIntoView({
        behavior: 'smooth'
    });
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