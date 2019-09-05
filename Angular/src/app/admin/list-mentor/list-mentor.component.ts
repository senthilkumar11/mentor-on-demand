import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-mentor',
  templateUrl: './list-mentor.component.html',
  styleUrls: ['./list-mentor.component.css']
})
export class ListMentorComponent implements OnInit {
mentor:Mentor[];
  constructor(private adminService:AdminService) { }

  ngOnInit() {this.adminService.getMentor().subscribe(response=> this.mentor=response)
  }

}
