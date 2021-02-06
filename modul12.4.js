
          function ElectroDevice(electroName, currentStrenght,voltage,include){
            
             
             
               this.electroName=electroName;
              this.currentStrenght=currentStrenght;
               this.voltage=voltage;
              this.include=include;
              this.start=function(){
                  let result = (this.include==true )? ` ${this.electroName} включен(a)`: ` ${this.electroName} выключен(a)`;
                  console.log(result);

              }
          }
            ElectroDevice.prototype.getPower=function(){
                
                let power=this.voltage*this.currentStrenght;
        
                  console.log(` ${this.electroName} имеет мощность ${power} Вт`);
             
            }
          
            const Lamp=new ElectroDevice('Лампа', 0.3, 220, true);
            const TV=new ElectroDevice('Телевизор', 1.2, 220, true);
            const Iron=new ElectroDevice('Утюг', 3, 0, false);
              Lamp.start();
            TV.start();
            Iron.start();
            Lamp.getPower();
            TV.getPower();
            Iron.getPower();
     