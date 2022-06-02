/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
*/

function telephoneCheck(str) {

    let regexFirst = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    let regexSecond = /^1\s?([0-9]{3})(?!\))/;
    let regexThird = /^1\s?\(?([0-9]{3})?\)/;
    let regexFourth = /^1\s?([0-9]{3})/;
  
    let regexLeft = /\(/g;
    let regexRight = /\)/g;
  
    if(regexLeft.test(str) || regexRight.test(str)){
        let left = str.match(regexLeft);
        let right = str.match(regexRight);
        if(left == null){
          left = [];
        }
        if(right == null){
          right = [];
        }
        if(left.length !== right.length){
      return false;
    }
    }
    if(regexFirst.test(str)){
      console.log("1");
      return true;
    }
    if(regexSecond.test(str)){
      console.log("2");
      return true;
    }
    if(regexThird.test(str)){
      console.log("3");
      return true;
    }
    if(regexFourth.test(str)){
      console.log("4");
      return true;
    }
  
    return false;
  }
  
  console.log(telephoneCheck("1 555)555-5555"));