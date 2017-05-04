var fs = require('fs');

// Asynchrones Auslesen

fs.readFile('staedte.json',function(err,data){


// String in JS-Objekt umwandeln
   
    
 var obj = JSON.parse(data);
    
 
    
// Daten aus cities entnehmen
    
  var Stadt =obj.cities;
    
      console.log(Stadt)    ; 


});


// Asynchrones Schreiben
    

//  fs.writeFile('test1.txt', 'kickoff.js',function(err){
                 
                 
         
                 
                 
                 
                // });
