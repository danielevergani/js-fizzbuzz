/*
test per verificare "gerarchia"

var test = 15;

if ((test % 3 == 0) && (test % 5 == 0)){
    console.log("bella");
}
else if(test % 5 == 0){
    console.log("5");
}
else if (test % 3 == 0){
    console.log("3");
}
*/ 

// inizializzo array vuoto + variabili utili

var lista = [];
var i = 0;
var elemento;

// inizio ciclo per creare array

for (i=1; i<101; i++){

    if ((i % 3 == 0) && (i % 5 == 0)){
        lista.push("FizzBuzz");
    }
    else if(i % 5 == 0){
        lista.push("Buzz");

    }
    else if (i % 3 == 0){
        lista.push("Fizz");

    }
    else{
        lista.push(i);
    }

}

// ciclo per stampare array in console e desktop

for(i=0; i<lista.length; i++){
    console.log(lista[i]);
    document.getElementById("lista").innerHTML += "<li>" + lista[i] + "</li>";
}


