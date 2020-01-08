import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {ApiResponse} from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService],

})
export class DashboardComponent implements OnInit {


  apiResponse: ApiResponse;
  arrivalColumns: string[];
  departureColumns: string[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.arrivalColumns = this.dashboardService.getArrivalColumns();
    this.departureColumns = this.dashboardService.getDeparturesColumns();

    this.dashboardService.http
        .get<ApiResponse>('http://localhost:8080/simulation/FCO/flights')
        .subscribe( res => {
          this.apiResponse = res;
          console.log(res);
        });

  }

}
