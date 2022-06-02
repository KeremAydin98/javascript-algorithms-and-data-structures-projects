/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

*/

function checkCashRegister(price, cash, cid) {

    let value = {"PENNY":0.01, "NICKEL":0.05,"DIME":0.1,"QUARTER":0.25,"ONE":1,"FIVE":5,"TEN":10,"TWENTY":20,"ONE HUNDRED":100};
  
    let valueKeys = Object.keys(value);
  
    for(let money in cid){
  
      cid[money][1] = Math.round(cid[money][1] / value[valueKeys[money]]);
  
    }
  
    let diff = cash - price;
  
    let numChange = {"status":["OPEN","CLOSED","INSUFFICIENT_FUNDS"],"change":[]};
  
    for(let i=cid.length-1; i>=0; i--){
  
      let changeKey = [cid[i][0],0];
        
      while(diff>=value[valueKeys[i]] && cid[i][1] > 0){
  
        changeKey[1] = Math.round((changeKey[1] + value[valueKeys[i]] + Number.EPSILON) * 100) / 100;
  
        diff = Math.round((diff - value[valueKeys[i]] + Number.EPSILON) *100) /100;
  
        cid[i][1] -= 1;
  
  
      }
  
      if(changeKey[1] !== 0){
        numChange.change.push(changeKey);
      }  
        
    }
    
    if(diff>0){
      console.log(diff);
      numChange.status = numChange.status[2];
      numChange.change = [];
      return numChange;
    }
    else{
      for(let i=0;i<cid.length;i++){
        if(cid[i][1] !== 0){
          numChange.status = numChange.status[0];
          return numChange;
        }
      }
      for(let j=1;j<cid.length;j++){
        if(cid[j][1] == 0){
          numChange.change.push(cid[j]);
        }
      }
      numChange.status = numChange.status[1];
      return numChange;
      
    }
  
  }
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));