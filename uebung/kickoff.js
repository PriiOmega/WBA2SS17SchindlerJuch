var fs = require('fs');

// Asynchrones Auslesen

fs.readFile('staedte.json',function(err,data){


// String in JS-Objekt umwandeln
   
    
 var obj = JSON.parse(data);
    
 
    
// Daten aus cities entnehmen
    
  var Stadt =obj.cities;
    
   
 // Ausgabe
      Stadt.forEach(function(entry){
         console.log('name: '+entry.name);
         console.log('country: '+entry.country);
         console.log('population: '+entry.population);
         console.log(' ');
         console.log('----------------------- ');
         
         
      });


});


// Asynchrones Schreiben
    

//  fs.writeFile('test1.txt', 'kickoff.js',function(err){
                 
                 
         
                 
                 
                 
                // });
