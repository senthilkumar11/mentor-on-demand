import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-user-tech-list',
  templateUrl: './user-tech-list.component.html',
  styleUrls: ['./user-tech-list.component.css']
})
export class UserTechListComponent implements OnInit {

  tech:String[];
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getTech().subscribe(response=> this.tech=response)
  }

}
