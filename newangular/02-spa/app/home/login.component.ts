import { Component, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router'
import {Http, Response,RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'login',
    template: `
         <h1>Login</h1>
    {{errorMessage}}
    <input type="text" placeholder="Enter email" #email (keyup)="0"/>
        <input type="password" #pwd (keyup)="0"/>
        <button (click)="onSubmit(email.value, pwd.value)">Login</button>
    `
})
export class LoginComponent {
    
errorMessage: string = ''
    
constructor(private _http: Http, private _router:Router){
    
}
    
onSubmit(email:string, pwd:string){
    console.log('http call' + email + " : " + pwd )
    
    var empData = {email: email, pwd: pwd }
    
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    this._http.post('http://localhost:8000/authenticate', empData, options)    
        .map(res => res.json())
        .subscribe(data => {
            console.log(data);
if(data.sucess){
    this._router.navigate(['welcome']);
}
else{
    this.errorMessage = 'Invalid Username/Password!!'
}
            
        })
    
}
   
}