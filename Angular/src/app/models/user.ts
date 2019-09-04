export class User {

    userId: number;
     firstName: String;
     lastName:String;
     gender: String;
     mailId: String;
     password: String;
     mobileNumber: String;
 
     constructor(firstname,lastname,gender,email,password,contactNumber) {
         this.firstName = firstname;
         this.lastName=lastname;
         this.gender = gender;
         this.mailId = email;
         this.password = password;
         this.mobileNumber = contactNumber;
     
        
     }
  }
  