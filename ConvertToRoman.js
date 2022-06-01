function convertToRoman(num) {

    let romanNumbers = {"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40, "X":10,"IX":9,"V":5,"IV":4,"I":1};
    let romanNumberKeys = Object.keys(romanNumbers);
  
    let romanNumber = "";
  
    while(num>0){
  
      for(let i=0;i<romanNumberKeys.length;i++){
  
        while(num / romanNumbers[romanNumberKeys[i]] >= 1){
  
          romanNumber += romanNumberKeys[i];
          num -= romanNumbers[romanNumberKeys[i]];
  
        }
  
      }
    }
   return romanNumber;
  }
  
  console.log(convertToRoman(3999));
