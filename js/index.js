// Iteration 1: Names and Input
let hacker1 = "aaaa";
 console.log(`The driver's name is ${hacker1}.`) 

let hacker2 = "fff"
 console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals


 if (hacker1.lenght > hacker2.lenght) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.lenght > hacker1.lenght) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.lenght} characters.`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.lenght} characters!`)
}
else {
    console.log("¿?")  
} 


// Iteration 3: Loops

//3.1
let counter= "";

for (let i=0; i < hacker1.length; i++) {
    //let name1 = hacker1[i];
   // let NAME1 = hacker1[i].toUpperCase();
    counter = counter + hacker1[i].toUpperCase() + " "; 
}
console.log(counter);

//3.2
for (let j = hacker1.length-1; j >= 0; j--) {

    counter = counter + hacker1[j];
}
console.log(counter);

//3.3
let sumLetters = 0;
for (let k = 0; k < hacker1.length && k < hacker2.length; k++) {
    if (hacker1[k] > hacker2[k]) {
        console.log("The driver's name goes first.");
        break;
 }
    else if (hacker1[k] < hacker2[k]) {
        console.log("Yo, the navigator goes first definetly.");
        break;
}
    else if (hacker1[k] === hacker2[k]) {
        console.log("what?! You both have the same name?");
        break;
}
}



//BONUS!!

let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

//BONUS 1.2:

let chars = 0;

for (let l = 0; l < longText.length; l++) {
    if (longText[l] === " "){
        chars++
    }

}
console.log(`There are ${chars} words in total.`)

//BONUS 1.3: 
for (let m = 0; m < longText.length; m++) {
    if (longText[m] === "e" && longText[m+1] === "t") {
        chars++
    }

}
console.log(`The word "et" is written ${chars} times in the text.`)


//BONUS 2:

let phraseTocheck = "A man, a plan, a canal, Panama!";
let phraseDone = "";
for (let n = 0; n < phraseTocheck.length; n++) {
    if (phraseTocheck[n] === " " || phraseTocheck[n] === "," || phraseTocheck[n] === "!") {
        continue;
    }
    else {
        phraseDone = phraseDone + phraseTocheck[n];
    }
}
console.log(phraseDone);

let firstHalf = "";
let secondHalf = "";
/*Aquí no se acumular la primera mitad de una palabra aleatoria (en firstHalf), y hacer
lo mismo desde el final a la mitad (para secondHalf);

for (let o = 0; o < phraseDone.length/2; o++) {
    firstHalf = firstHalf + phraseDone.length[o]/2;
}
console.log(firstHalf);*/