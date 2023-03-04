import { Inject, Injectable } from '@angular/core';
import { LocalStorageToken } from 'src/app/localstoragetoken';
import { HttpClient } from '@angular/common/http';
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
  constructor( private http: HttpClient) {
   }

   getOccupancy(){
    // return this.OccupiedRooms;
    return this.http.get<Rooms[]>('http://localhost:3000/data');
   }

}
