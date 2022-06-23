

const { randomInt } = require('crypto');
const randome_number = randomInt(0,10);

const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
  case 'add':
    console.log(Number(myArgs[1])+Number(myArgs[2]));
    break;
  case 'sub':
    console.log(Number(myArgs[1])-Number(myArgs[2]));
    break;
    case 'multi':
        console.log(Number(myArgs[1])*Number(myArgs[2]));
        break;
 case "div":
        console.log(Number(myArgs[1])/Number(myArgs[2])); 
        break;    
 case "randome":
  console.log(randome_number);   
  break;      
  default:
    console.log('Sorry, that is not something I know how to do.');
}






