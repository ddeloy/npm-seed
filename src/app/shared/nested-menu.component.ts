import { Component, Input, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { ConnectedPositionStrategy, MdMenuTrigger } from '@angular/material';

const originWithFallbackPosition = ConnectedPositionStrategy.prototype.withFallbackPosition;
ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos) {
  overlayPos.overlayX = 'start';
  if ( this._preferredPositions.length) {
    return this;
  }
  return originWithFallbackPosition.apply(this, arguments);
};

@Component({
  selector: 'app-nested-menu',
  templateUrl: 'nested-menu.component.html',
})
export class NestedMenuComponent {
  @Input() items: any[];
  @Input() color: string = "default";

  constructor(private elementRef: ElementRef) { }

  @ViewChildren(MdMenuTrigger) triggers: QueryList<MdMenuTrigger>;

  // for categorization
  // do only if the menu doesn't already have more-horz class
  onMenuOpen(trigger: any, items: any[]) {
    let el = document.getElementById(trigger._overlayRef._pane.id);
    if(!el.classList.contains('menu-horz')) {
      let catCount = 0;
      items.forEach(item => {
        if(item.isCategory){ catCount++; }
      });
      if(catCount >= 3) {
        el.classList.add('menu-horz')
      }
    }
  }

  openMenu(trigger: MdMenuTrigger, level: number, event) {
    this.triggers
      .filter((x: any) => x._element.nativeElement.dataset.level >= level && x !== trigger)
      .forEach(x => x.closeMenu());
    trigger.openMenu();
    if(event) {
      if(!event.currentTarget.className.includes(' open')) {
        event.currentTarget.className += ' open';
      }
    }
    this.alignMenu(trigger);
  }

  alignMenu(trigger: any) {
    let paneEl = undefined;
    let winWidth = window.innerWidth;

    // overlayRef is included in trigger only if x/yPosition mentioned
    // else containerElement needs to be used
    if(trigger._overlayRef) {
      paneEl = trigger._overlayRef.overlayElement;
    } else {
      let contEl = trigger._overlay._overlayContainer._containerElement;
      paneEl = contEl.getElementsByClassName('cdk-overlay-pane')[0];
    }

    let curLeft = Number.parseFloat(paneEl.style.left);
    let curMenuWidth = paneEl.clientWidth;
    let curDiff = (curLeft + curMenuWidth) - winWidth;
    if (curDiff > 0) {
      let newLeft = curLeft - curDiff;
      paneEl.style.left = newLeft + 'px';
    }
  }

  closeMenu() {
    this.triggers.forEach((x: any) => {
      x._element.nativeElement.className =
        x._element.nativeElement.className.replace('open', '');
      x.closeMenu();
    });
  }
}
