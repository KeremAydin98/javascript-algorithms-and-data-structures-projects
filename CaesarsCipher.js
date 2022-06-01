/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
*/

function rot13(str) {

    let newStr = "";

    for(let i=0;i<str.length;i++){

        let newLetter = cipherLetter(str[i]);

        newStr += newLetter;

        
    }
    
  return newStr
}
  
  function cipherLetter(letter) {
  
  
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    var index = alphabet.indexOf(letter) + 13;
  
    if(index == 12){
      return letter
    }
  
    if(index >= alphabet.length){
      
          index = index % alphabet.length;
  
          return alphabet[index];
  
        }
  
    return alphabet[index];
  }
  console.log(rot13("SERR CVMMN!"));