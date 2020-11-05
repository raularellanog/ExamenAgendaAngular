import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import{HttpClient}from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url_loging='htpp://localhost:3000/api/signin'

  constructor(private http: HttpClient, private router: Router) { }
  login(user){
    return this.http.post<any>(this.url_loging,user);
  }
}
