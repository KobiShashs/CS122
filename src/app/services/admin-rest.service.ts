import { Customer } from './../models/customer';
import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminRestService {

  constructor(private httpClient: HttpClient) { }

  public getAllCustomers(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>('../../../assets/json/customers.json');
  }
}
