import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(public http:HttpClient) { }
  addWish(item:any){
    return this.http.post<any>('http://localhost:3000/insert', { item });
  }
}
