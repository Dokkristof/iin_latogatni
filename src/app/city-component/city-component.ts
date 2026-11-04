
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
      area: 97.5,
      population: 78324
    },
    {id: 3, 
      name: 'Sopron', 
      country: 'Győr-Moson-Sopron',
      area: 169.04,
      population: 62900
    },
    {id: 4, 
      name: 'Zalaegerszeg', 
      country: 'Zala',
      area: 102.42,
      population: 55470
    },
    {id: 5, 
      name: 'Sárvár', 
      country: 'Vas',
      area: 64.65,
      population: 15072
    },
    {id: 6, 
      name: 'Lenti', 
      country: 'Zala',
      area: 73.79,
      population: 7348
    },
    {id: 7, 
      name: 'Zalakaros', 
      country: 'Zala',
      area: 17.17,
      population: 2407
    },
  ]
}
