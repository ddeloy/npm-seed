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
  @Input() color = 'default';
  @ViewChildren(MdMenuTrigger) triggers: QueryList<MdMenuTrigger>;

  constructor(private elementRef: ElementRef) { }

  // for categorization
  // do only if the menu doesn't already have more-horz class
  onMenuOpen(trigger: any, items: any[]) {
    const el = document.getElementById(trigger._overlayRef._pane.id);
    if (!el.classList.contains('menu-horz')) {
      let catCount = 0;
      items.forEach(item => {
        if (item.isCategory) {catCount++; }
      });
      if (catCount >= 3) {
        el.classList.add('menu-horz')
      }
    }
  }

  openMenu(trigger: MdMenuTrigger, level: number, event: any) {
    this.triggers
      .filter((x: any) => x._element.nativeElement.dataset.level >= level && x !== trigger)
      .forEach(x => x.closeMenu());
    trigger.openMenu();
    if (event) {
      if (!event.currentTarget.className.includes(' open')) {
        event.currentTarget.className += ' open';
      }
    }
    this.alignMenu(trigger);
  }

  alignMenu(trigger: any) {
    let paneEl;
    const winWidth = window.innerWidth;

    // overlayRef is included in trigger only if x/yPosition mentioned
    // else containerElement needs to be used
    if ( trigger._overlayRef) {
      paneEl = trigger._overlayRef.overlayElement;
    } else {
      const contEl = trigger._overlay._overlayContainer._containerElement;
      paneEl = contEl.getElementsByClassName('cdk-overlay-pane')[0];
    }

    const curLeft = Number.parseFloat(paneEl.style.left);
    const curMenuWidth = paneEl.clientWidth;
    const curDiff = (curLeft + curMenuWidth) - winWidth;
    if (curDiff > 0) {
      const newLeft = curLeft - curDiff;
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
