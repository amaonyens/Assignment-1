function createHelloWorld(){
    return function(){
     return 'Hello World'; 
      }
    }
    let myFunction = createHelloWorld();
    console.log(myFunction());