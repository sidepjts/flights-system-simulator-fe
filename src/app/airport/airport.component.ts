import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
import {AirportService} from './airport.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss'],
  providers: [AirportService]
})
export class AirportComponent implements OnInit {

  airports: Observable<any[]>;
  columns: string[];

  constructor(private airportService: AirportService) { }

  ngOnInit() {
    this.columns = this.airportService.getColumns();

    this.airports = this.airportService.http
        .get<any>('https://nameless-hamlet-24060.herokuapp.com/airports')
        .map(resp => _.values(resp.data))
        .do(console.log);
  }
}
