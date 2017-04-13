import { FormControl } from '@angular/forms';



export class BasicValidators{

    static validEmail(control:FormControl){
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(control.value)?null:{email:true}
    }
    static validPassword(control:FormControl){
        
        if(control.value.indexOf(' ') >=0)
            return {invalidPassword:'Can not contain space'} 
         else if(control.value.length<6)
            return {invalidPassword:'Minimum 6 character'}   
         else if(!control.value)
            return {invalidPassword:'Password Required'}  


        return null;    
    }

}