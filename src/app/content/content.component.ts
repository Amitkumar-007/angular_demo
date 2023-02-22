import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rooms } from '../Rooms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() roomsOccupied : Rooms[] = [];
  @Output() RemoveRoom = new EventEmitter<Rooms>();

  removeRoom(room: Rooms){
    console.log('removeRoom');
    this.RemoveRoom.emit(room);
  }
}
