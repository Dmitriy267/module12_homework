        class ParentElectroDevice{
              constructor(include){
            
              this.include=include; 
                   
              }
              getInfo(){
                  
                 if(this.include){
                     return 'электроприбор включен ';
                 
                 }else{
                   return  'электроприбор выключен '; 
                 }
                  } 
          }
             
          
            class ChildElectroDevice extends ParentElectroDevice{
                constructor(electroName,currentStrenght,voltage,include){
                  super(include);
                   
                    this.electroName=electroName;
                    this.currentStrenght=currentStrenght;  
                     this.voltage=voltage;
                   
                }
                getInfo(){
                 
                        let power=this.voltage*this.currentStrenght;
             
                     return ` ${this.electroName} имеет мощность ${power} Вт, ${super.getInfo()}`   
                
           
               
            }
            }
            
            const device1=new ChildElectroDevice('Лампа', 0.3, 220,true);
            const device2=new ChildElectroDevice( 'Телевизор', 1.2, 220, true);
            const device3=new ChildElectroDevice('Утюг', 3, 0, false );
            console.log(device1.getInfo());
            console.log(device2.getInfo());
            console.log(device3.getInfo());
    