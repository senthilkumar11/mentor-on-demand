import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=''
  password=''
  invalidLogin=false
  userlist:Login[];
 
  userType='';
   constructor(private router: Router,
     private loginservice: AuthenticationService,private login:LoginService) { }
 
   ngOnInit() {
     this.login.getUsers().subscribe(async res => {
       this.userlist = await res;
     }, error => alert(`${error.message}\nWaiting for response from server`))
   }
 
   checkLogin()
   {
     console.log("check")
     console.log(this.username)
     let flag=0;
     for(let i=0;i<this.userlist.length;i++)
     {
         console.log(this.userlist[i].userName)
         
       if(this.username===this.userlist[i].userName&&this.password===this.userlist[i].password)
         {
   
        sessionStorage.setItem('username',this.userlist[i].userName)
        sessionStorage.setItem('userType',this.userlist[i].userType)
        this.userType=this.userlist[i].userType;
           flag=1;
         break;
         }
     }
     
     if(flag===1&&this.userType==="ADMIN")
     {
       this.router.navigate(['/admin'])
       this.invalidLogin=false
     }
     else if(flag===1&&this.userType==="USER")
     {
       console.log(this.userType);
       this.router.navigate(['/admin'])
       this.invalidLogin=false
     }
     else if(flag===1&&this.userType==="MENTOR")
     {
       console.log(this.userType);
       this.router.navigate(['/mentor'])
       this.invalidLogin=false
     }
     else
     this.invalidLogin=true
   }
}
