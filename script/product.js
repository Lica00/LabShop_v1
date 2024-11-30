


// <button> add cart / add pref
const cart = document.querySelector("#cont2 button:first-of-type");
const pref = document.querySelector("#cont2 button:last-of-type");


// Array <li> versioni / piattaforma
const allVersion = document.querySelectorAll("#cont2 ul:first-of-type li");
const allPlatform = document.querySelectorAll("#cont2 > ul:last-of-type li");

// Box carrello
const box = document.getElementById("box");

// <p> seleziona una versione / piattaforma
const v = document.querySelector("#cont2 p:nth-child(5)");
const p = document.querySelector("#cont2 p:nth-child(7)");

// <p> versione / piattaforma scelta
const vS = document.querySelector("#descr p:nth-child(2)"); 
const pS = document.querySelector("#descr p:nth-child(3)");


// All <button> di box
const allButton = document.querySelectorAll("#box button");

// <span> blocco
const blocco = document.querySelector("body > span");

//  Text versione/piattaforma selezionata
let verS;
let plaS;
 





// Evento click all version 
for(let i = 0; i < allVersion.length; i++){

    allVersion[i].addEventListener("click",function(){

        for(let i = 0; i < allVersion.length; i++){

            if ( allVersion[i] == this ){
                this.classList.add("checkVer");
                verS = this.textContent;
            } else {
                allVersion[i].classList.remove("checkVer");
            }
        }
    })
}


// Evento click all platform 
for(let i = 0; i < allPlatform.length; i++){

    allPlatform[i].addEventListener("click", function(){

        for(let i = 0; i < allPlatform.length; i++){

            if ( allPlatform[i] == this) { 
                this.classList.add("checkPlat");
                plaS = this.textContent;
            }
            else {
                allPlatform[i].classList.remove("checkPlat");
            }
        }
    })
} 


// Evento click su aggiungi carrello 
cart.addEventListener("click", function(){

    // Versione non selezionata 
    if ( verS == undefined ){
        v.classList.add("error");
    } else {
        v.classList.remove("error");
    }

    // Piattaforma non selezionata 
    if ( plaS == undefined ){
        p.classList.add("error");
    } else {
        p.classList.remove("error");
    }
 
    // Versione e Piattaforma selezioante
    if ( verS != undefined && plaS != undefined){

        blocco.classList.add("blocco");
        box.classList.add("visibile");

        vS.textContent = verS;
        pS.textContent = plaS;

        setTimeout(scomparsa, 5000);
    }


})


function scomparsa(){
    box.classList.remove("visibile");
    setTimeout(() => blocco.classList.remove("blocco"), 500);
}





// Gestione <button> del carrello 
for( let i = 0; i < allButton.length; i++){

    allButton[i].addEventListener("click", function(){

        switch (allButton[i].getAttribute("id")){

            case "chiudi":
                scomparsa();
                break;

            case "view":
                location.assign("../html/carrello.html");
                break;

            case "pay":
                location.assign("../html/pagamento.html");
                break;
        }       
    })
}


// <button> preferiti --> refresh 
pref.addEventListener("click",function(){
    location.reload();
})





// ****************** SLIDER PRODOTTO *******************

// All <figure> small image 
const arrImg = document.querySelectorAll("#cont1 div:last-child figure");

// Container big image 
const contB = document.querySelector("#cont1 div:first-child");

// <figure> big image
const bigImage = document.querySelector("#cont1 div:first-child figure");





for(let i = 0; i<arrImg.length; i++){

    arrImg[i].addEventListener("mouseover",function(){

        if (arrImg[i].classList.contains("img2") == true) {

        contB.innerHTML = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rXMX4YJ7Lks?si=p-COORqEMmLUErcF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;   

        } else {

            contB.innerHTML= "<figure class=" + this.classList[0] + ">" + "</video>" 

        }
    })
}
