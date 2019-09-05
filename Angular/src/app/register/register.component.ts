import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Login } from '../models/login';

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
  userlist:Login[];

  constructor(private userService:UserService,private router: Router,private login:LoginService) { }

  ngOnInit() {this.login.getUsers().subscribe(async res => {
    this.userlist = await res;
  }, error => alert(`${error.message}\nWaiting for response from server`))
  }


  registerUser():void
  {
    console.log("check")
    console.log(this.email)
    let flag=0;
    for(let i=0;i<this.userlist.length;i++)
    {
        console.log(this.userlist[i].userName)
        
      if(this.email===this.userlist[i].userName)
        {
          flag=1;
          break;
        }
      }
      if(flag===0)
      {
    let user = new User(this.firstname,this.lastname, this.gender, this.email, this.password, this.mobile);

    this.userService.registerUser(user).subscribe(response => console.log(response));
    alert('success');
    this.router.navigate(['login']);
      }
      else
      alert('user email is already present')
         }
}
