import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  private serviceValue = 'Olá eu sou o First Service'

  getFirstService(){
    return this.serviceValue
  }

  updateServiceValue(value: string){
    this.serviceValue = value
  }
}
