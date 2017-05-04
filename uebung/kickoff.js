var fs = require('fs');

// Asynchrones Auslesen

fs.readFile('staedte.json',function(err,data){


// String in JS-Objekt umwandeln
   
    
 var obj = JSON.parse(data);
    
 
    
// Daten aus Staedte entnehmen
    
 //  var Stadt =obj.staedte;
    
      console.log(obj)    ; 


});


// Asynchrones Schreiben
    

//  fs.writeFile('test1.txt', 'kickoff.js',function(err){
                 
                 
         
                 
                 
                 
                // });
