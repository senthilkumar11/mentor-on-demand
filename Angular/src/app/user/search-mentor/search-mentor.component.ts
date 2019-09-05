import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-search-mentor',
  templateUrl: './search-mentor.component.html',
  styleUrls: ['./search-mentor.component.css']
})
export class SearchMentorComponent implements OnInit {
mentors:any[];
  mentor:Mentor[];
  tech:String[];
  filter:any;
  constructor(private adminService:AdminService) { }

  ngOnInit() {this.adminService.getMentor().subscribe(response=> this.mentor=response);
    this.adminService.getTech().subscribe(response=> this.tech=response);
    console.log(this.tech);

  }
  onChange(){
    var listMentor  = this.mentor;
     if(this.filter){
      listMentor = listMentor.filter(v => v.skill == this.filter);
     }
      this.mentors = listMentor;
  }

  resetFilter(){
    this.filter = {};
    this.onChange();
  }
  requestCourse(id)
  {
   let user=sessionStorage.getItem("username");
   
  }
}
