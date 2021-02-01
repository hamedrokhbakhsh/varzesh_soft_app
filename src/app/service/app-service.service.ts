import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseModel} from '../models/response-model';
import {appConfig } from '../appconfig';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) {
  }

  mobileCheck(data: any): Observable<any> {
    return this.http.post<ResponseModel>(`${appConfig.api}/users`, data);

  }
  storeMobile( mobile){
    localStorage.setItem('mobile' , mobile);
  }
}


