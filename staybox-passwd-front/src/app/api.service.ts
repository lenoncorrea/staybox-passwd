import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllPasswords() : Observable<any> {
    return this.http.get(this.baseUrl + 'password/',
    {headers: this.httpHeaders});
  };

  writePassword(copied) : Observable<any> {
    return this.http.post(this.baseUrl + 'password/', copied,
    {headers: this.httpHeaders});
  };

  getIpAddress() : Observable<any> {
    return this.http.get('https://api.ipify.org/?format=json',
    {headers: this.httpHeaders});
  };
}
