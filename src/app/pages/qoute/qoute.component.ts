import { Component, OnInit } from '@angular/core';

import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  quote: any;

  constructor(private apiservice: apiService ) { }

  ngOnInit() {
    this.getquote();
    // this.DataCollector['x.id'] = dataa;
  }
getquote() {

    this.apiservice.get('getquote').subscribe((res: any) => {

      this.quote = res.body.response;
    });
  }
}
