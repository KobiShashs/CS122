import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevModeService {
  private isDev = true;
  public name: string;
  constructor() { }

  public getIsDev(): boolean{
      return this.isDev;
  }


  public setName(name: string): void{
      localStorage.setItem('name', name);
  }

  public getName(): string{
    return localStorage.getItem('name');
  }

}
