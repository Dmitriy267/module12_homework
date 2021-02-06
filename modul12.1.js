let Human={
job:'manager',
 city:'Moscow',
company:"Nestle"
}

const work=Object.create(Human)
 work.ownCity='Samara'; 
 work.age=32;
            
function getObj (work){
              
for(let key in work){
 if(work.hasOwnProperty(key)){
 console.log(key+':'+work[key]);  
  }
                             
}
     
}
 getObj (work); 
      