function submit() {
    let naam = document.getElementById("naam").value;

    if (!naam) {
        alert("U moet uw naam nog invoeren");
    } else {
        alert("Bedankt");
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


const myArray = ["Apple", "Banana", "Cherry", "Date", "Fig"];

const arrayList = document.getElementById("array-list");

myArray.forEach(item => {
    const li = document.createElement("li"); 
    li.textContent = item; 
    arrayList.appendChild(li); 
});

let tekst = document.getElementById("tekst")
tekst.addEventListener("mouseover" , function(){
    tekst.style.color = "red"
})

const newParagraph = document.createElement("p");


newParagraph.textContent = "deze paragraaf is gemaakt in javascript";
newParagraph.style.color = "blue";

document.body.appendChild(newParagraph);