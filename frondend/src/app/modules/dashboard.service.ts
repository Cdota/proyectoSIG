import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  pieChart() {
    return [{
      name: 'Merluza',
      y: 15,
      sliced: true,
      selected: true
    }, {
      name: 'Gallo',
      y: 25,
      sliced: true,
      selected: true
    }, {
      name: 'Rodaballo',
      y: 20,
      sliced: true,
      selected: true
    }, {
      name: 'Rape',
      y: 10,
      sliced: true,
      selected: true
    }, {
      name: 'Bacalao',
      y: 30,
      sliced: true,
      selected: true
    }];
  }
}
