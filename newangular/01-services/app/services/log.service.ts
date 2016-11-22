import {Injectable} from '@angular/core';

@Injectable()
export class LogService{
    
public log: void(message: string){
    console.log(message)
}    
        
constructor(){
    
}
}
