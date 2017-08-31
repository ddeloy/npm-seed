import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  model = {'id': 18,
    'name': 'Dr IQ'
  };

  constructor() { }

  ngOnInit() {
  }

}
