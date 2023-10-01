// 1st step 
const uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ.";
const lowercase =  'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = "!@#$%^&*()_+";
const numbers = "0123456789";
// var passwordLength;

// slectors
//4th step
const passBox= document.getElementById("pass-box");
const toalchar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const loerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symboalInput = document.getElementById("symbols");



// 2nd step
const getRandomData =(daataset)=>{
    return daataset[Math.floor(Math.random()*daataset.length)] ;
}

// console.log("upercase no ",getRandomData(uppercase));
// console.log("lowercase no ",getRandomData(lowercase));
// console.log("specialCharacters no ",getRandomData(specialCharacters));
// console.log("numbers no ",getRandomData(numbers));

// 3rd step
const generatePassword =(paswword ="")=>{
    // 5th step 
    if(upperInput.checked){
        // paswword +=  getRandomData(uppercase); also a method
        paswword = paswword + getRandomData(uppercase);
    }
    if(loerInput.checked){
        // paswword +=  getRandomData(uppercase); also a method
        paswword = paswword + getRandomData(lowercase);
    }
    if(symboalInput.checked){
        // paswword +=  getRandomData(uppercase); also a method
        paswword = paswword + getRandomData(specialCharacters);
    }
    if(numberInput.checked){
        // paswword +=  getRandomData(uppercase); also a method
        paswword = paswword + getRandomData(numbers);
    }
    //  6th step 
    if(paswword.length < toalchar.value ){
        return  generatePassword(paswword);
    }
    // 5th step 
    // console.log(paswword);
    // check  7th step 
    // console.log(truncateString(paswword,toalchar.value));

  passBox.innerText =truncateString(paswword,toalchar.value) ;


}
// 8th step independent call
generatePassword();

// 6th step 

document.getElementById("btn").addEventListener(
    "click",
    function (){
        // getcolor()
        generatePassword()
        // last step copy password generater
        
        navigator.clipboard.writeText(passBox.innerText);
    }

)


// 7th step online serch truncatestring charter
// truncatestring website https://levelup.gitconnected.com/javascript-algorithm-truncate-a-string-bf4f9dd0147c
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}


