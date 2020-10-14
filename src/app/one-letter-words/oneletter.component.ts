import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneletter',
  templateUrl: './oneletter.component.html',
  styleUrls: ['./oneletter.component.css']
})
export class OneletterComponent implements OnInit {



  constructor() { }
  isShown = false ; // hidden by default

  ngOnInit(): void {
  }


  public toggleShow() {
    this.isShown = ! this.isShown;
  }
}
