import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { rooms } from '../rooms';

@Component({
  selector: 'app-hinv',
  templateUrl: './hinv.component.html',
  styleUrls: ['./hinv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HinvComponent implements OnInit , OnChanges  {
  name = 'amit';

  @Input() roomlist: rooms[] = [];

  @Output() roomSelected = new EventEmitter<rooms>();

  ngOnInit(): void {}
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  roomSelect(room : rooms){
    this.roomSelected.emit(room);
  }

  addroom(){
    console.log("adding....");
    this.roomlist = [...this.roomlist,{
      num: this.roomlist.length+1,
      type: 'amit',
      price: 100,
      checkin: new Date()
    }]
  }

  delroom(){
    this.roomlist = this.roomlist.slice(0,this.roomlist.length-1);
  }
}
