import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  heading = 'Hello Angular';
  name = "jay";
  isLogin = false;
  items = [
    { "key": "abc" },
    { "key": "abc1" },
    { "key": "abc2" }
  ];

  num = 2;

  constructor() {

  }

  ngOnInit(): void {
    localStorage.setItem('isLogin', 'true');

    this.login();
  }

  login() {
    this.isLogin = !this.isLogin;

    // alert('hi');
  }

}
