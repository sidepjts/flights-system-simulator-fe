import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DashboardService {

    constructor(public http: HttpClient) { }

    getArrivalColumns(): string[] {
        return ['flight', 'source', 'scheduledTime', 'estimatedTime', 'actualTime', 'status']
    };

    getDeparturesColumns(): string[] {
        return ['flight', 'destination', 'scheduledTime', 'estimatedTime', 'actualTime', 'status']
    };
}
