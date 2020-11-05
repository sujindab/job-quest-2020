const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  function fib(num) 
    {    
        if(num==1) 
            return 0; 
        if (num == 2) 
            return 1; 
        return fib(num - 1) + fib(num - 2); 
    } 
  readline.question('enter number : ', num => {
    console.log(fib(num));
    readline.close();
  });