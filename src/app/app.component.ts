import { Component, Inject } from '@angular/core';
import { OccupiedService } from './content/Services/occupied.service';
import { LocalStorageToken } from './localstoragetoken';
import { Rooms } from './Rooms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    availableRooms: number = 10;
    totalRooms: number = 10;
    roomsOccupied: Rooms[] = []
    //OccupiedService = new OccupiedService();

    //this will create or provide you with the service
    constructor(private occupiedService: OccupiedService , 
      @Inject(LocalStorageToken) private localStorage: any){ 
    }

    ngOnInit() {
      this.occupiedService.getOccupancy().subscribe(Rooms => {
        console.log('ggg',Rooms);
          this.roomsOccupied = Rooms;
      })
      // this.roomsOccupied = this.occupiedService.getOccupancy();
      this.localStorage.setItem('roomsOccupied', this.roomsOccupied);
      console.log(this.localStorage)
    }

    AddRoom(room: Rooms){
      this.roomsOccupied = [...this.roomsOccupied,{
        Roomno: this.roomsOccupied.length + 1,
        Name: "other",
        Beds: 3,
        Checkin: new Date(2020,1, this.roomsOccupied.length + 1)
      }]
      console.log("room added");
    }

    RemoveRoom(room: Rooms){
      this.roomsOccupied = this.roomsOccupied.filter(r => r.Roomno!== room.Roomno);
      console.log("room removed");
    }


}
