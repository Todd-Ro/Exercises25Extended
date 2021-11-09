export function stringOfZeros(numZeros) {
    let zeros = "00000000"; //Length 8
    if (numZeros <= 8) {
        return zeros.slice(8 - numZeros);
    } 
    else {
      let zerCount = zeros.length; //Initialized at 8
      while (zerCount < numZeros) {
        zeros = zeros.concat(zeros);
        zerCount *= 2;
      }
      return (zeros.slice(zerCount - numZeros));
    }
  }
  
  function leadingZeros(num, numDigits) {
    /*Returns a string with leading zeros to make a number
    a specified number of digits. For example, 
    leadingZeros(64, 5) will return "00064".*/
    let numS = String(num);
    let leng = numS.length;
    if (leng == numDigits) {
      /*Note that, as written, the function counts a - sign or decimal point counts toward the desired number of characters*/
      return numS;
    } else if (leng < numDigits) {
      return stringOfZeros(numDigits-leng).concat(numS);
    } else {
      return numS.slice(0, numDigits);
    }
  }
  
  //True URL = https://b947fa11-5551-46bb-80b7-eb7ac2bc7c0c.id.repl.co/helperFuncs.js
  