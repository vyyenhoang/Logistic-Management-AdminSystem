import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppData } from 'src/app/AppData';
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { apiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginres: any;
  // imgUrl=environment.imageUrl;
data = new AppData('', '');

  constructor(private apiservice: apiService) { }

  ngOnInit() {
  }
//   login(){
// this.router.navigateByUrl('qoute')
  postlogin() {

    this.apiservice.post('adminlogin', this.data).subscribe((response: any) => {

      // this.loginres = res.body.response;

      console.log(response.body);
      if (response.body.status === true) {
        alert('Sucessfully authenticated');
        window.location.replace('http://localhost:4200/quote');
        } else {
           alert('Email and password doesnot match');
           window.location.replace('http://localhost:4200/login');
           }
      });
  }

}
