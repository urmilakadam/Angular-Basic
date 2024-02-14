import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userName:string, password:string){
    if(userName === "urmila" && password === "urmila")
      return 200;
    else 
      return 403;
  }
}
