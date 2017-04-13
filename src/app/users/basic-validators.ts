import {FormControl} from '@angular/forms';

export class BasicVaildators{

static validEmail(control:FormControl){
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(control.value)?null:{email:true}
}
    static ShouldBeUnique(control:FormControl){
            return new Promise((resolve,reject)=>{

                if(control.value =="deb")
                    resolve({unique:true});
                else    
                    resolve(null); 
                
            })
        

    }

}

