export class User {

    userId: number;
     firstName: string;
     lastName:string;
     gender: string;
     mailId: string;
     password: string;
     mobileNumber: string;
 
     constructor(firstname,lastname,gender,email,password,contactNumber) {
         this.firstName = firstname;
         this.lastName=lastname;
         this.gender = gender;
         this.mailId = email;
         this.password = password;
         this.mobileNumber = contactNumber;
     
        
     }
  }
  