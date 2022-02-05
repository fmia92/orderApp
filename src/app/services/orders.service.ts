import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import sha384 from "crypto-js/sha384";

@Injectable()

export class OrdersService {
  
  constructor(private httpClient: HttpClient) { }
  
  today = new Date();
  day = String(this.today.getDate()).padStart(2, '0');
  month = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  year = this.today.getFullYear(); 

  token = sha384("FRANSOLA" + this.year + this.month + this.day).toString()
  
  readonly headerOrders = new HttpHeaders()
  .set('X-Auth', this.token)
  .set('funcion', 'getTareas')

  readonly headerTipos = new HttpHeaders()
  .set('X-Auth', this.token)
  .set('funcion', 'getTipos')

  readonly headerEstados = new HttpHeaders()
  .set('X-Auth', this.token)
  .set('funcion', 'getEstados')

  getOrders(): Observable<any> {
    return this.httpClient.get('https://www.azurglobal.es/intranet/apiTest/', {
      headers: this.headerOrders
    })
  }

  getTipos(): Observable<any> {
    return this.httpClient.get('https://www.azurglobal.es/intranet/apiTest/', {
      headers: this.headerTipos
    })
  }

  getEstados(): Observable<any> {
    return this.httpClient.get('https://www.azurglobal.es/intranet/apiTest/', {
      headers: this.headerEstados
    })
  }

  getToken() {
    console.log(this.token)
    console.log(typeof(this.token))
  }
}