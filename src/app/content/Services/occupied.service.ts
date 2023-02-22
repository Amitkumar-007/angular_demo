import { Inject, Injectable } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { Rooms } from 'src/app/Rooms';

@Injectable({
  providedIn: 'root'
})
export class OccupiedService {
  OccupiedRooms : Rooms[] = [{
    Roomno: 1,
    Name: "Amit",
    Beds: 3,
    Checkin: new Date(2020,1,2)
  },
  {
    Roomno: 2,
    Name: "Pranshul",
    Beds: 3,
    Checkin: new Date(2020,3,2)
  }]
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig) {
    console.log(config)
   }

   getOccupancy(){
    return this.OccupiedRooms;
   }

}
