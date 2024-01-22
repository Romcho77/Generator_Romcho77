let passwordLength 
let upperCase
let lowerCase = []
let generateButton = document.querySelector("#generate")
let lengthButton = document.querySelector("#checkbox1")
let alphabetMaj = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let numbers = ["1","2","3","4","5","6","7","8","9","0"]

let signs = ["!","@","#","$","%","^","&","*","(",")",",","_","+",
"-","=","{","}","[","]","|", '\ ', ":", ";","<",">",",",".","?","/"]


let check1 = document.querySelector(".chkbox1")
let check2 = document.querySelector(".chkbox2")
let check3 = document.querySelector(".chkbox3")
let check4 = document.querySelector(".chkbox4")
let inputPwd = document.querySelector("#inpute1")

let allPossibilities = []

let password = []
alphabetMaj.forEach(element => {
    lowerCase.push(element.toLowerCase())
});

allPossibilities = [alphabetMaj,lowerCase,numbers,signs]

// stock length
lengthButton.addEventListener('change', ()=>{
    passwordLength = lengthButton.value
    console.log(passwordLength);
})

check1.addEventListener('click', ()=>{
    if(check1.checked){
        if(!allPossibilities.includes(alphabetMaj)){
            allPossibilities.push(alphabetMaj)
        }
        
       
    }else{
        if (allPossibilities.includes(alphabetMaj)) {
            // allPossibilities = allPossibilities.filter(alphabetMaj => allPossibilities.includes(alphabetMaj))
            
            allPossibilities.splice(allPossibilities.indexOf(alphabetMaj),1)
            console.log("capital filter", allPossibilities);
            
        }else{
            console.log("No matches for CAPITAL LETTERS");
        }
        

    }
})
check2.addEventListener('click', ()=>{

    if(check2.checked){
        
        allPossibilities.push(lowerCase)
       
    }else{
        if (allPossibilities.includes(lowerCase)) {
            
            allPossibilities.splice(allPossibilities.indexOf(lowerCase),1)
            console.log("lowers filter", allPossibilities);
            // allPossibilities.splice(allPossibilities.findIndex(lowerCase),1)
        }else{
            console.log("No matches for Lowercase LETTERS");
        }
        

    }
})
check3.addEventListener('click', ()=>{
    if(check3.checked){
        
        allPossibilities.push(numbers)
        
    }else{
        if (allPossibilities.includes(numbers)) {
            allPossibilities.splice(allPossibilities.indexOf(numbers),1)
            console.log("nulbers filter", allPossibilities);
            // allPossibilities.splice(allPossibilities.findIndex(numbers),1)
        }else{
            console.log("No matches for NUMBERS");
        }
        

    }
})
check4.addEventListener('click', ()=>{
    if(check4.checked){
        
        allPossibilities.push(signs)
       
    }else{
        if (allPossibilities.includes(signs)) {
            
            allPossibilities.splice(allPossibilities.indexOf(signs),1)
            console.log("signs filter", allPossibilities);
            // allPossibilities.splice(allPossibilities.findIndex(signs),1)
        }else{
            console.log("No matches for signs");
        }
        

    }
})

let toutlesPossibilites
let typeOfletter
let randomLetter
generateButton.addEventListener('click', ()=>{
    console.log(allPossibilities);
    // toutlesPossibilites = allPossibilities.toString().replace(/,/g, "")
    // console.log(toutlesPossibilites);
    for (let index = 0; index < passwordLength; index++) {
        typeOfletter = allPossibilities[Math.floor(Math.random()*allPossibilities.length)]
        randomLetter = typeOfletter[Math.floor(Math.random()*typeOfletter.length)]
        console.log(randomLetter);
        password.push(randomLetter)
        
    }
    password = password.toString().replace(/,/g, "")
    inputPwd.value = password
    password = []
})







