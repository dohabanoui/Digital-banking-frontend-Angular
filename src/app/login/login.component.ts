import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  OnInit{
  formLogin! : FormGroup;

  constructor(private fb : FormBuilder, private authService: AuthService , private router : Router ) {
  }
  ngOnInit() {
    this.formLogin = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }
  login(){
    let username = this.formLogin.value.username;
    let pwd = this.formLogin.value.password;
    this.authService.login(username,pwd).subscribe({
      next : data => {
        this.authService.loadProfile(data);
        this.router.navigateByUrl("/admin")
        console.log(data);
      } ,error :  err => {
        console.log(err);

      }

    })
  }
}
