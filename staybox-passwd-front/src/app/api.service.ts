import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://api.passwd.staybox.com.br/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllPasswords() : Observable<any> {
    return this.http.get(this.baseUrl + 'password/',
    {headers: this.httpHeaders});
  };

  getIpAddress() : Observable<any> {
    return this.http.get("https://api.ipify.org/?format=json");
  };

  writePassword(copied) : Observable<any> {
    return this.http.post(this.baseUrl + 'password/', copied,
    {headers: this.httpHeaders});
  };

}
