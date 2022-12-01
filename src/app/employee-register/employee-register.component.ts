import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {

  empid=""
  firstname=""
  lastname=""
  houseno=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parentname=""
  gender=""
  degree=""
  experience=""
  doj=""
  username=""
  password=""
  cpassword=""

  constructor(private route:Router){}

  readValues=()=>{


    let data:any={"empid":this.empid,"firstname":this.firstname,"lastname":this.lastname,"houseno":this.houseno,"streetname":this.streetname,
  "pincode":this.pincode,"district":this.district,"state":this.state,"country":this.country,"mobile":this.mobile,"email":this.email,"parentname":this.parentname,
"gender":this.gender,"degree":this.degree,"experience":this.experience,"doj":this.doj,"username":this.username,"password":this.password,"cpassword":this.cpassword}



    if (this.password == this.cpassword){
      alert("Registered successfully")
      this.route.navigate(['/emplogin'])
    }
    
    else{
      alert("something went wrong")
    }



    
  }





















}
