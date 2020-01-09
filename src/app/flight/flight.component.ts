import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FlightService} from './flight.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
  providers: [FlightService]
})
export class FlightComponent implements OnInit {

  flights: Observable<any[]>;
  columns: string[];

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.columns = this.flightService.getColumns();

    this.flights = this.flightService.http
        .get<any>('https://nameless-hamlet-24060.herokuapp.com/flights')
        .map(resp => _.values(resp.data))
        .do(console.log);
  }

}
