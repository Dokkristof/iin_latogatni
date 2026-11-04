import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-city-component',
  styleUrl: './city-component.css',
  templateUrl: './city-component.html',
})
export class CityComponent {
  cities= [
    {id: 1, 
      name: 'Székesfehérvár', 
      country: 'Fejér',
      area: 170.89,
      population: 95545
    },
    {id: 2, 
      name: 'Szombathely', 
      country: 'Vas',
      area:97.5,
      population: 78324
    },
  ]
}
