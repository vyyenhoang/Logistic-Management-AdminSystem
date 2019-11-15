import { Component, OnInit } from '@angular/core';
import { AppData2 } from 'src/app/AppData2';
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { apiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  loginres: any;
  // imgUrl=environment.imageUrl;
data = new AppData2('', '', '', '', '', '');

  constructor(private apiservice: apiService) { }

  ngOnInit() {
  }
addorder() {

    this.apiservice.post('addorder', this.data).subscribe((response: any) => {

      // this.loginres = res.body.response;

      console.log(response.body);
      if (response.body.status === true) {
        alert('Inserted');
        window.location.replace('http://localhost:4200/order');
        } else {
           alert('Errod');
           window.location.replace('http://localhost:4200/addorder');
           }
      });
  }


}
