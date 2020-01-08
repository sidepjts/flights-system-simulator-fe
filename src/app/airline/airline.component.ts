import {Component, Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/do';
import {AirlineService} from './airline.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Injectable()
@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss'],
  providers: [ AirlineService ]
})
export class AirlineComponent implements OnInit {

  uploadForm: FormGroup;

  airlines: Observable<any[]>;
  columns: string[];

  constructor(private airlineService: AirlineService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.columns = this.airlineService.getColumns();

    this.airlines = this.airlineService.http
        .get<any>('http://localhost:8080/airlines')
        .map(resp => _.values(resp.data))
        .do(console.log);

    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    this.airlineService.http.post<any>('http://localhost:8080/airlines', formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
    );
  }

}

