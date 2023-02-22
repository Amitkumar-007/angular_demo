import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  welcomeLine: string = "welcome to the Hotel";
  @Input() AvailableRooms: number = 0;
  @Output() AddRoom = new EventEmitter<any>();

  addRoom(){
    console.log("added room");
    this.AddRoom.emit(undefined);
  }
}
