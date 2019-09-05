import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Technology } from 'src/app/models/technology';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-technology',
  templateUrl: './create-technology.component.html',
  styleUrls: ['./create-technology.component.css']
})
export class CreateTechnologyComponent implements OnInit {
  techname:String;
  desc:String;
  tech:Technology[];
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit() {
    this.adminService.getTech().subscribe(response=> this.tech=response)
  }
  addTech()
  {
    let flag=0;
  this.tech.forEach((tech)=>{
    console.log(tech.name)
    if(tech.name===this.techname)
    {
    flag=1;
    
    }
  })

  if(flag===0)
  {
    let techno=new Technology(this.techname,this.desc);
    this.adminService.addTech(techno).subscribe(response => console.log(response));
    alert('added successfully')
    this.router.navigate(['/listtech'])
  }
  else
  {
    alert('already excist');
  }
}
}
