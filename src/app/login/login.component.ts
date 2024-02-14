import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userName = "";
  password = "";
  errorMsg = "";

  constructor(private auth : AuthService, private router : Router) { }

  login(){
      if(this.userName.trim() == "" || this.password.trim() == "")
        this.errorMsg = "UserName or Password is not correct";
      else {
        let res = this.auth.login(this.userName, this.password);
        if(res === 200)
          this.router.navigate(['home']);
        if(res === 403)
        this.errorMsg = "Invalid credentials";

        console.log("successful")
      }
  }

}
