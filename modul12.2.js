let Car={
'model': 'Audi',
'year': 2010
}; 
            
function propInObj(prop,obj){

console.log(prop in obj);

}
            
propInObj('model', Car); 
propInObj('color', Car);       
propInObj('year', Car);       
          
  