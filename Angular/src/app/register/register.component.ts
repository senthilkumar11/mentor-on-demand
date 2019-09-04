import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname:String;
  lastname:String;
  password:String;
  email:String;
  mobile:String;
  gender='';
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit() {
  }


  registerUser():void
  {
    let user = new User(this.firstname,this.lastname, this.gender, this.email, this.password, this.mobile);

    this.userService.registerUser(user).subscribe(response => console.log(response));
    alert('success');
  }

}
