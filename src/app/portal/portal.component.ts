import {Component, ViewChildren, QueryList} from '@angular/core';
import {
  Portal,
  ComponentPortal,
  TemplatePortalDirective,
} from '@angular/material';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent {

  @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;

  selectedPortal: Portal<any>;

  get programmingJoke() {
    return this.templatePortals.first;
  }

  get mathJoke() {
    return this.templatePortals.last;
  }

  get scienceJoke() {
    return new ComponentPortal(ScienceJokeComponent);
  }
}

@Component({
  selector: 'app-science-joke',
  template: `<p> 100 kilopascals go into a bar. </p>`
})
export class ScienceJokeComponent { }
