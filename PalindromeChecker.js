function palindrome(str) {

    let letters = str.toLowerCase().match(/(?!_)\w/gi);
    console.log(letters);
    str = letters.join('');
    let reverseStr = "";
  
    for(let i=0;i<letters.length;i++){
  
      reverseStr = letters[i] + reverseStr;
    }
  
    return reverseStr == str;
  }