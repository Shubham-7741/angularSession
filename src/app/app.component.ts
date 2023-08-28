import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hello Friends !! yyi';
  username: string = 'Jay';
  loginScreen: boolean = false;
  reg: boolean = true;
  newDate = new Date();




  login(name) {
    alert('Hello ' + name);
    console.log(this.username)
  }


  fun() {
    this.login('a');
  }

  ngOnInit(): void {

    // alert(localStorage.getItem('isLogin'));

  }
}
