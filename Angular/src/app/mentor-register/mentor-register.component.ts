import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { MentorService } from '../service/mentor.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Mentor } from '../models/mentor';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-mentor-register',
  templateUrl: './mentor-register.component.html',
  styleUrls: ['./mentor-register.component.css']
})
export class MentorRegisterComponent implements OnInit {
  firstname:String;
  lastname:String;
  password:String;
  email:String;
  mobile:String;
  gender='';
  skill='';
  fee:number;
  experience='';
  userlist:Login[];
  tech: String[];

  constructor(private mentorService:MentorService,private router: Router,private login:LoginService,private adminService: AdminService) { }

  ngOnInit() {this.login.getUsers().subscribe(async res => {
    this.userlist = await res;
  }, error => alert(`${error.message}\nWaiting for response from server`));
  this.adminService.getTech().subscribe(response => this.tech = response);
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
    let mentor = new Mentor(this.firstname,this.lastname,this.password, this.mobile,this.email,this.gender,this.skill,this.experience,this.fee);

    this.mentorService.registerMentor(mentor).subscribe(response => console.log(response));
    alert('success');
    this.router.navigate(['login']);
      }
      else
      alert('user email is already present')
         }
}
