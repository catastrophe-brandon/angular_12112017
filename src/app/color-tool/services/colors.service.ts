import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from '../models/color';
//
// automatically added to service when created with the angular CLI
// Technically @Injectable is optional if you do not need to inject other services into a service.
// @Injectable allows you to inject services via the constructor.
//
@Injectable()
export class ColorsService {


  constructor(private httpClient: HttpClient) {

  }

  public all() {
    return this.httpClient.get<Color[]>('http://localhost:3050/colors').toPromise();
  }

}
