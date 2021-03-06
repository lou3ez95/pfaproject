import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configsys } from './configsys.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigsysService {

  uri = 'http://192.168.56.101:3000';
  constructor(private http: HttpClient) { }

  getConfigsys() {    
    return this.http.get(`${this.uri}/api/users`);
    
  }
}

