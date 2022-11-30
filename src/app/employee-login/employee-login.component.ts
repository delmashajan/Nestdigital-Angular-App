import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  empid=""
  password=""

  readValue=()=>{
    let data:any={
      "username":this.empid,"password":this.password
    }
    console.log(data)

    if (this.empid=="1122" && this.password=="12345") {
      alert("valid login")
      
    } else {

      alert("invalid credentials")
      
    }
  }



}
