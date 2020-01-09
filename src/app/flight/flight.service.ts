import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FlightService {

    constructor(public http: HttpClient) { }

    getColumns(): string[] {
        return ['flightNumber', 'source', 'destination', 'scheduledTime', 'estimatedTime', 'status', 'fk_airline']};
}

