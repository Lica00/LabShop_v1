


// All <button> gift / like / elimina 
const allGift = document.querySelectorAll("#carrello > div button:nth-of-type(1)");
const allLike = document.querySelectorAll("#carrello > div button:nth-of-type(2)");
const allDel = document.querySelectorAll("#carrello > div button:nth-of-type(3)");

// All <p> "ritira gratuitamente"
const allP = document.querySelectorAll("#carrello > div > p:last-of-type");



// Gestione <button> gift / like / <p> ritira --> Refresh page
funzione(allGift); funzione(allLike); funzione(allP);

function funzione(all){

    for(let i = 0; i < all.length; i++){
        all[i].addEventListener("click",function(){
            location.reload();
        })
    }
}





// <span> Subtotale / Totale
const subTot = document.querySelector("#cont2 > div:first-of-type span:last-of-type");
const tot = document.querySelector("#cont2 > div:last-of-type span:last-of-type");

// All <span> prezzi
const prezzi = document.querySelectorAll("#carrello > div > span");

// <button> pagamento + paypal
const bottoni = document.querySelectorAll("#cont2 button");



let totale = 0;
let totale2;

calcolo();



// Calcola totale / subtotale 
function calcolo(){

    for (let i = 0; i <prezzi.length; i++){
        if ( prezzi[i].parentElement.classList.contains("rimosso") ) { continue; } 
        else {
            let prezzo = +(prezzi[i].textContent.replace(",",".").replace("€",""));
            totale += prezzo;   
        }
    }
    
    totale2 = totale.toFixed(2);

    subTot.textContent = totale2.replace(".",",") + "€"; 
    tot.textContent = totale2.replace(".",",") + "€"; 

}; 


// Rimuove il prodotto e ricalcola totale / subtotale
for (let i = 0; i<allDel.length; i++){

    allDel[i].addEventListener("click",function(){

        this.parentElement.parentElement.classList.add("rimosso");

        totale = 0; 

        calcolo();

    })

}


for (let i = 0; i < bottoni.length; i++){
    bottoni[i].addEventListener("click",function(){ location.assign("../html/pagamento.html"); })
}