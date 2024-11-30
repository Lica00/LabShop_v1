


// <button> Scelta --> spedizione / ritiro
const bScelta = document.querySelectorAll("#spedizione > div:first-of-type button");

// <div> ritiro + <form> spedizione 
const sped = document.getElementById("formSped");
const rit = document.querySelector("#spedizione > div:nth-of-type(2) h3");

// <button> invio spedizione + pagamento
const allButton = document.querySelectorAll(".buttonInvio");

// <p> recap spedizione
const pRecap = document.querySelectorAll("#spedizione > div:nth-of-type(3) p");

// <form> pagamento
const formPagamento = document.getElementById("formP");

// <h3> pagamento
const pPagamento = document.querySelector("#pagamento > h3");
pPagamento.style.opacity = "50%"; 

// Paese Fatturazione
const p = document.querySelector("#contP > div:first-of-type span"); // <span>
const select = document.getElementById("paese"); // <select> 

// GiftCard
const gift = document.querySelector("#contG input");

// Metodi Pagamento
const allinputR = document.querySelectorAll("#contPay input");

// <div> Pagamento Carta
const card = document.getElementById("payCard");

// All <h3> "Non disponibile"
const allH3 = document.querySelectorAll("h3.invisibile");

// All <input> / <label> consegna + pagamento carta
const allInput = document.querySelectorAll("#formSped input"); 
const allLabel = document.querySelectorAll("#formSped label");
const allInputCard = document.querySelectorAll("#payCard input");
const allLabelCard = document.querySelectorAll("#payCard label");

let nome, last, addre, mail, cel, numCarta, mm, cvv;

// RegExp Convalida
const regExp = {
    name : /^[a-zA-Z ]+$/,
    add : /^[a-zA-Z0-9\s,.'-]{3,}$/,
    email :  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
    tel : /^3[0-9]{8,9}$/,
    card : /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
    date : /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
    cvv : /[0-9]{3}/,

}





// #region COMPARSA/SCOMPARSA OPZIONI CONSEGNA

for(let i = 0; i < bScelta.length; i++){

    bScelta[i].addEventListener("click",function(){

       if ( this.textContent === "Spedizione"){

        this.classList.add("selezionato");
        bScelta[1].classList.remove("selezionato");

        sped.classList.remove("invisibile");
        rit.classList.add("invisibile");
       } 
        else {
        this.classList.add("selezionato");
        bScelta[0].classList.remove("selezionato");

        sped.classList.add("invisibile");
        rit.classList.remove("invisibile");
       }
    })
}


// #endregion




// #region <select> PAESE / PAGAMENTO

p.textContent = select.value;

p.nextElementSibling.addEventListener("click",function(){

    p.classList.add("invisibile");
    p.nextElementSibling.classList.add("invisibile"); // <a> "Modifica"
    select.parentElement.classList.remove("invisibile"); // <div> select
})

// Problema: selezionando = opzione  NON si verifica il change --> non risolto.

select.addEventListener("change",function(){
    p.textContent = this.value;
    p.classList.remove("invisibile");
    p.nextElementSibling.classList.remove("invisibile");
    select.parentElement.classList.add("invisibile");
})

// #endregion




// #region CHECKBOX GIFTCARD

gift.addEventListener("change",function(){

    if (gift.checked == true ){
        allH3[1].classList.remove("invisibile");
    } else {
        allH3[1].classList.add("invisibile");
    }

})
// #endregion




// #region SCELTA PAGAMENTO <fieldset> 

for( let i = 0; i < allinputR.length; i++){

    allinputR[i].addEventListener("click",function(){

        switch ( allinputR[i].getAttribute("id")){

            case "carta":
                allH3[2].classList.add("invisibile");
                card.classList.remove("invisibile");
                allButton[1].classList.remove("invisibile");
                break;

            case "paypal":
                allH3[2].classList.remove("invisibile");
                card.classList.add("invisibile");
                break;

            case "gpay":
                allH3[2].classList.remove("invisibile");
                card.classList.add("invisibile");
                break;
        }
  
    })


}

// #endregion




// #region CONVALIDA CONSEGNA

allButton[0].addEventListener("click",function(blocco){
    blocco.preventDefault();


    for(let i = 0; i < allInput.length; i++){

        switch ( allInput[i].getAttribute("id")){

            case "name":
                if ( regExp.name.test( allInput[i].value.trim()) ){
                    allInput[i].classList.remove("error");
                    allInput[i].nextElementSibling.classList.add("invisibile"); // <span> errore
                    nome = allInput[i].value;
                } else {
                    allInput[i].classList.add("error");
                    allInput[i].nextElementSibling.classList.remove("invisibile");
                }
                break;

            case "lastName":
                if ( regExp.name.test( allInput[i].value.trim()) ){
                    allInput[i].classList.remove("error");
                    allInput[i].nextElementSibling.classList.add("invisibile");
                    last = allInput[i].value;
                } else {
                    allInput[i].classList.add("error");
                    allInput[i].nextElementSibling.classList.remove("invisibile");
                }
                break;

            
            case "address":
                if ( regExp.add.test( allInput[i].value.trim()) ){
                    allInput[i].classList.remove("error");
                    allInput[i].nextElementSibling.classList.add("invisibile");;
                    addre = allInput[i].value;
                } else {
                    allInput[i].classList.add("error");
                    allInput[i].nextElementSibling.classList.remove("invisibile");
                }
                break;
            
            case "mail":
                if ( regExp.email.test( allInput[i].value.trim()) ){
                    allInput[i].classList.remove("error");
                    allInput[i].nextElementSibling.classList.add("invisibile");
                    mail = allInput[i].value;

                } else {
                    allInput[i].classList.add("error");
                    allInput[i].nextElementSibling.classList.remove("invisibile");
                }
                break;

            case "tel":
                if ( regExp.tel.test( allInput[i].value.trim()) ){
                    allInput[i].classList.remove("error");
                    allInput[i].nextElementSibling.classList.add("invisibile");
                    cel = allInput[i].value;
                } else {
                    allInput[i].classList.add("error");
                    allInput[i].nextElementSibling.classList.remove("invisibile");
                }
                break;
        }
    }


    // Convalida Corretta 
    if ( nome !== undefined && last !== undefined && addre !== undefined && cel !== undefined && mail != undefined ){

        allButton[0].parentElement.classList.add("invisibile");
        pRecap[0].parentElement.classList.remove("invisibile"); // <div> recap
        bScelta[1].nextElementSibling.classList.replace("invisibile","blocco"); // <span> blocco
        

        pRecap[0].textContent = nome;
        pRecap[1].textContent = last;
        pRecap[2].textContent = addre;
        pRecap[3].textContent = mail;
        pRecap[4].textContent = cel;

        formPagamento.classList.remove("invisibile");
        pPagamento.style.opacity = "100%"; 
    }

})

// #endregion




// #region CONVALIDA PAGAMENTO


allButton[1].addEventListener("click",function(blocco){
    blocco.preventDefault();

    
for(let i = 0; i <allInputCard.length; i++){

    switch (allInputCard[i].getAttribute("id")){


        case "num":
            if ( regExp.card.test( allInputCard[i].value.trim()) ){
                allInputCard[i].classList.remove("error");
                allInputCard[i].nextElementSibling.classList.add("invisibile");
                numCarta = allInputCard[i].value;

            } else {
                allInputCard[i].classList.add("error");
                allInputCard[i].nextElementSibling.classList.remove("invisibile");
            }
            break;

        case "dat":
            if ( regExp.date.test( allInputCard[i].value.trim()) ){
                allInputCard[i].classList.remove("error");
                allInputCard[i].nextElementSibling.classList.add("invisibile");
                mm = allInputCard[i].value

            } else {
                allInputCard[i].classList.add("error");
                allInputCard[i].nextElementSibling.classList.remove("invisibile");
            }
            break;


        case "cvv":
            if ( regExp.cvv.test( allInputCard[i].value.trim()) ){
                allInputCard[i].classList.remove("error");
                allInputCard[i].nextElementSibling.classList.add("invisibile");
                cvv = allInputCard[i].value;

            } else {
                allInputCard[i].classList.add("error");
                allInputCard[i].nextElementSibling.classList.remove("invisibile");
            }
            break;

            
    }

    
    // Convalida Corretta --> Compara <div> completo
    if ( numCarta != undefined && mm != undefined && cvv != undefined){

        console.log("Tutto Corretto");
        const h2 = document.querySelector("main h2");
        const compl = document.getElementById("completo");
        const divCart = document.getElementById("cart");
        const divSped = document.getElementById("cont");

        h2.classList.add("invisibile");
        divCart.classList.add("invisibile");
        divSped.classList.add("invisibile");

        compl.classList.remove("invisibile")

        setTimeout(() => location.assign("../html/homepage.html"), 5000);
    }

}})

// #endregion




// #region ANIMAZIONE LABEL

spostamento(allInput,allLabel);
spostamento(allInputCard, allLabelCard);



function spostamento(input,label){

    for(let i = 0; i < input.length; i++){

        input[i].addEventListener("focus",function(){
            label[i].classList.add("move");
        })
    
        input[i].addEventListener("blur",function(){
    
            if (input[i].value == ""){
                label[i].classList.remove("move");
            }
        })
    
    }



}
// #endregion

