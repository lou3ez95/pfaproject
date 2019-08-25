import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  uri = 'http://192.168.56.101:3000';
  constructor(private http: HttpClient) { }

  getshell(val) {
    return this.http.get(`${this.uri}/api/shellRequest?patern=`+val);

  }
}

