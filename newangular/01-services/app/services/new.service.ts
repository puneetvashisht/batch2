export abstract class IService{
        doSomething(): void; 
}

import {Injectable} from '@angular/core'
@Injectable()
export class NewService{
name:string =  'newservice'
    doSomething():void {
    console.log('does something');    
    }    
} 

@Injectable()
export abstract class Engine{
    start():void;
} 

@Injectable()
export class NormalEngine extends Engine{
start():void {
    console.log('start normal engine')
}
} 
@Injectable()
export class PlaneEngine extends Engine{
   start():void {
    console.log('start plane engine')
}
} 





