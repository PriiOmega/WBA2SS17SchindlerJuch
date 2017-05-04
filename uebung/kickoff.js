var fs = require('fs');

// Asynchrones Auslesen

fs.readFile('staedte.json',function(err,data){


// String in JS-Objekt umwandeln
    
    var obj = JSON.parse(data.toString())
    
// Daten aus Staedte entnehmen
    
    var Stadt =obj.staedte;
    
    
