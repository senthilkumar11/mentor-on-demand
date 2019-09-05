export class Proposal
{
    id:number;
    username:string;
    mentorId:number;
    menterName:string;
    proposal:string;
    payment:string;
    constructor(username,mentorid,mentorName,proposal,payment)
    {
this.username=username;
this.menterName=mentorName;
this.mentorId=mentorid;
this.proposal=proposal;
this.payment=payment;
    }
}