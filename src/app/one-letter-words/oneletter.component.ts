import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneletter',
  templateUrl: './oneletter.component.html',
  styleUrls: ['./oneletter.component.css']
})
export class OneletterComponent implements OnInit {
  panelOpenState = false;

  customCollapsedHeight: string = '190px';
  customExpandedHeight: string = '190px';

  public letters = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z'];
  isShown: boolean;
  Asound: any;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleShow(event) {

   if (event === 'A'){
     this.Asound = 'APPLE';
     this.isShown = !this.isShown;
    }else {
     this.isShown = false;
   }
  }
}
