import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';
import { Proposal } from 'src/app/models/proposal';
import { User } from 'src/app/models/user';
import { PaymentService } from 'src/app/service/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-mentor',
  templateUrl: './search-mentor.component.html',
  styleUrls: ['./search-mentor.component.css']
})
export class SearchMentorComponent implements OnInit {
  mentors: any[];
  mentor: Mentor[];
  tech: String[];
  filter: any;
  user: User;
  constructor(private adminService: AdminService, private userService: UserService,private paymentService:PaymentService,private router: Router) { }

  ngOnInit() {
    this.adminService.getMentor().subscribe(response => this.mentor = response);
    this.adminService.getTech().subscribe(response => this.tech = response);
    console.log(this.tech);

  }
  onChange() {
    var listMentor = this.mentor;
    if (this.filter) {
      listMentor = listMentor.filter(v => v.skill == this.filter);
    }
    this.mentors = listMentor;
  }

  resetFilter() {
    this.filter = {};
    this.onChange();
  }
  requestCourse(mentorRequest) {
    let userEmail = sessionStorage.getItem("username");
    console.log(userEmail);

    this.userService.getUserbyEmail(userEmail).subscribe(response => {
    this.user = response
      console.log(this.user.firstName);
      let proposal=new Proposal(mentorRequest.skill, this.user.firstName,this.user.mailId,mentorRequest.mentorId,mentorRequest.firstName,mentorRequest.mailId,"no",'no',mentorRequest.fee);
      this.paymentService.addProposal(proposal).subscribe(response => {console.log( response)})
      alert('requested succesfully');
      this.router.navigate(['/requested'])
    });
  }
}
