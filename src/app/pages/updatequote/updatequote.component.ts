import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
/// import { DataService } from '../data.service';

import { AppData3 } from 'src/app/AppData3';
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { apiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-updatequote',
  templateUrl: './updatequote.component.html',
  styleUrls: ['./updatequote.component.css']
})
export class UpdatequoteComponent implements OnInit {
email: any ;
est: any;
// data: any;
loginres: any;
temp: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private apiservice: apiService, private ActivatedRoute: ActivatedRoute) {

    this.ActivatedRoute.queryParams.subscribe(params => {
      this.email = params.email;
      this.est = params.est;
      localStorage.setItem('email', this.email);
      // console.log(this.email);

      });
    }
 // tslint:disable-next-line:no-bitwise
 // data = new AppData3(this.id, this.est);


  ngOnInit() {
  }
update(temp) {
  console.log(temp);
  this.apiservice.post('updatequote', temp).subscribe((response: any) => {
      console.log(response.body);
      alert('Email sent ');
        });
  }
}
