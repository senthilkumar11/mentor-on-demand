export class Mentor {
    mentorId: number;
    firstName: string;
    lastName: string;
    password: string;
    mobileNumber: string;
    mailId: string;
    permission: string;
    skill: string;
    experience: string;
    fee: number;
    rating: number;
    gender:String;
    constructor(firstname,lastname,password,mobile,mail,gender,skill,experience,fee) {
        this.firstName=firstname;
        this.lastName= lastname;
        this.password=password;
        this.mobileNumber=mobile;
        this.mailId=mail;
        this.gender=gender;
        this.skill=skill;
        this.experience=experience;
        this.fee=fee;

    }
}

