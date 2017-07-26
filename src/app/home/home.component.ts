import { Component, OnInit } from '@angular/core';
import { SidenavMenuItem } from '@ddeloy/dd-library';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems = [
    new SidenavMenuItem('Settings', 'User Management', '', '', [
      new SidenavMenuItem('', 'Company Settings', '', '', null),
      new SidenavMenuItem('', 'User Management', '', '', null),
      new SidenavMenuItem('', 'Shared Settings', '', '', null)
    ]),
    new SidenavMenuItem('', 'Users', '', '', null),
    new SidenavMenuItem('', 'Non-employee access', '', '', null),
    new SidenavMenuItem('', 'Roles', '', '', null),
    new SidenavMenuItem('', 'Data Access Groups', '', '', null),
    new SidenavMenuItem('', 'DD Groups', '', '', null)
  ];

  constructor() { }

  ngOnInit() {
  }

}
