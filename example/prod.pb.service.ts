// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: prod.proto

// package example




// Reference imports to suppress errors if they are not otherwise used.

// Generated by the protocol buffer compiler.  DO NOT EDIT!
// Source:prod.proto
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Prod {
  id?: number;
  name?: string;
  details?: string;
  skus?: Sku[];
}
export interface Sku {
  skuId?: number;
  price?: number;
  bn?: string;
  weight?: number;
  prodId?: number;
}
export interface ProdId {
  id?: number;
}
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};
@Injectable()
export class ProductService {
  url = 'https://myfoodie.com';
  constructor(private http: HttpClient) { }
  getProd(param: ProdId): Observable<Prod> {
    const params = new HttpParams();
    params.set('id', '' + param.id);
    return this.http.get<Prod>(this.url + '/v1/prod/getProd', {params: params});
  }
  setProd(param: Prod): Observable<{}> {
    return this.http.post<{}>(this.url + '/v1/prod/setProd', param, httpOptions);
  }
}
