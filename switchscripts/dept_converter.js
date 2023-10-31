"use strict";

const departmentCode = 1;

let departmentName ="";

switch (departmentCode){
    case 1:
        departmentName ="marketing";
        break;
    case 5:
    departmentName = "Human Reasources"
    break;
    
    case 10:
    departmentName = "Accounting"
    break;

    case 12:
    departmentName = "Legal";
    break;
  default:
    break;
}

console.log(departmentName);

