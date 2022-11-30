import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  constructor(private route:Router){}

  empid=""
  password=""

  readValue=()=>{
    let data:any={
      "username":this.empid,"password":this.password
    }
    console.log(data)

    if (this.empid=="1122" && this.password=="12345") {

      alert("Login Successfully")
      this.route.navigate(['/addcourse'])
      
    } else {

      alert("invalid credentials")
      
    }
  }



}
