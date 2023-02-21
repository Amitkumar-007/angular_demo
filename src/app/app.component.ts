import { Component } from '@angular/core';
import { rooms } from './rooms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelinv';
  available = 3
  roomdata : rooms[] = []
  ngOnInit() {
    this.roomdata = [{
      num: 3,
      type: "luxury",
      checkin: new Date,
      price: 4000
    },{
      num: 4,
      type: "simple",
      checkin: new Date(2020,1,2),
      price: 10000
    }];
  }

  roomshow(room:rooms){
    console.log(room);
  }


}
