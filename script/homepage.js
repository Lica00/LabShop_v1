



// Click <div> prodotti slider --> portano a prodotto.html

const allProd = document.querySelectorAll("#slider > div > div");

for (let i = 0; i < allProd.length; i++){

        allProd[i].addEventListener("click",function(){
            location.assign("../html/product.html");
    })
}










// *************** SLIDER **********************

// <div> slide 
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

// All <button> dot 
const allDot = document.querySelectorAll("#slider > button");

// <span> blocco dot 
const spanBlock = document.querySelector("#slider span");

// 1° dot selezione di default
allDot[0].classList.add("selezionato");


// Animazione
for( let i = 0; i < allDot.length; i++){

    allDot[i].addEventListener("click",function(){

        switch(this.getAttribute("id")){

            case "primo": 


                // Da 2° a 1°
                if (slide2.classList.contains("centro")){

                    slide2.classList.replace("centro","destra");
                    slide1.classList.replace("sinistra","centro");
                    addRemDot(this); blocca();
                }    

                // Da 3° a 1°
                else if ( slide3.classList.contains("centro")) {
                    
                    slide3.classList.replace("centro","destra");
                    slide2.classList.replace("sinistra","centro");

                    setTimeout(() => { // Tempo 2° slide prima di 1° slide 
                        blocca();
                        slide2.classList.replace("centro", "destra");
                        slide1.classList.replace("sinistra","centro");
                    }, 1500)

                    addRemDot(this); blocca();
                }
                break;

            case "secondo":

                //Da 1° a 2°
                if (slide1.classList.contains("centro")){

                    slide1.classList.replace("centro","sinistra");
                    slide2.classList.replace("destra","centro");
                    addRemDot(this); blocca();
                }
                
                //Da 3° a 2°
                else if (slide3.classList.contains("centro")) {

                    slide3.classList.replace("centro","destra");
                    slide2.classList.replace("sinistra","centro");
                    addRemDot(this); blocca();
                }
                break; 

            case "terzo":    

                // Da 1° a 3°
                if (slide1.classList.contains("centro")){

                    slide1.classList.replace("centro","sinistra");
                    slide2.classList.replace("destra","centro");
            
                    setTimeout(() => { // Tempo 2° slide prima di 3° slide
                        blocca();
                        slide2.classList.replace("centro", "sinistra");
                        slide3.classList.replace("destra","centro");
                    }, 1500)
        
                    addRemDot(this); blocca();
                }

                // Da 2° a 3°
                else if (slide2.classList.contains("centro")){

                    slide2.classList.replace("centro","sinistra");
                    slide3.classList.replace("destra","centro");
                    addRemDot(this); blocca();
                }
                break;
        }
    }
)}




function addRemDot(click){
    for(let i = 0; i < allDot.length; i++){

        if(allDot[i] == click){
            click.classList.add("selezionato");
        } else {
            allDot[i].classList.remove("selezionato");
        }
    }
}

function blocca(){ 
    spanBlock.classList.add("blocco");
    setTimeout(() => spanBlock.classList.remove("blocco") ,1400);
}





















