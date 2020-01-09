import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AirportService {

    constructor(public http: HttpClient) { }

    getColumns(): string[] {
        return ['iataCode', 'name', 'city', 'country']};
}
