import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { MdSelectChange } from '@angular/material';


// Pipe is not exported here because it is used within the component
@Pipe({name: 'optfilter'})
export class OptFilterPipe implements PipeTransform {
  transform(items: any[], filter: string, showOnlyChecked: boolean = false): any {
    if (!items) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => {
      if(showOnlyChecked) {
        return item.checked && (item.text.toLowerCase().indexOf(filter) !== -1);
      } else {
        return (item.text.toLowerCase().indexOf(filter) !== -1);
      }
    });
  }
}
// Component has inline template
@Component({
  selector: 'app-select-custom',
  template: `

    <md-card>
      <md-card-title>Select</md-card-title>
      <md-card-subtitle>Custom MultiSelect</md-card-subtitle>
      <md-card-content>
        <p>Download sample component with inline template: select-custom.component.ts</p>
        <a md-raised-button color="primary" href="http://ddeloy.com/itn-library-downlaods/select-custom.zip" download>Download Zip</a>
        <div fxLayout="row" fxLayoutWrap="wrap">
          <div fxFlex.gt-sm="50" fxFlex.gt-xs="75" fxFlex="100">
            <label class="select-popover">
              <span>{{ label }}</span>
              <div class="select-content">
                <md-input-container floatPlaceholder="never" class="compact">
                  <input mdInput placeholder="Search" type="text" #txtFilter>
                </md-input-container>
                <p class="select-status">
                  {{countSelected}} option(s) selected
                  ( <a href="javascript:void(0);" (click)="showOnlyChecked=!showOnlyChecked">
                  show {{ showOnlyChecked ? 'all' : 'selected'}}
                </a> )
                </p>
                <div class="option-container">
                  <ul class="option-list">
                    <li *ngFor="let option of options | optfilter:txtFilter.value:showOnlyChecked">
                      <md-checkbox [(ngModel)]="option.checked" color="primary" (change)="onOptionChange()">
                        {{option.text}}
                      </md-checkbox>
                    </li>
                  </ul>
                </div>
              </div>
            </label>
          </div>
        </div>
      </md-card-content>
    </md-card>
  `
})
export class SelectCustomComponent implements OnInit, OnDestroy {
  /* Core */
  showSelect = false;
  latestChangeEvent: MdSelectChange;
  floatPlaceholder = 'never';
  popoverShown = false;

  /* Custom Menu Specific */
  @Input() label: string;
// need to comment out or throws error @Input() options: any[];
  @Output() onClose = new EventEmitter<any[]>();
  // cannot be private or will break build
  countSelected = 0;
  // cannot be private or will break build
  showOnlyChecked = false;
  // Sample array for populating the custom menu
  options = [{
    text: 'Spinach',
    checked: false
  }, {
    text: 'Cabbage',
    checked: true
  }, {
    text: 'Tomato',
    checked: false
  }, {
    text: 'Orange',
    checked: false
  }, {
    text: 'Apple',
    checked: true
  }, {
    text: 'Mango',
    checked: false
  }]

  onOptionChange() {
    let checked:number = 0;
    this.options.forEach(option => {
      if(option.checked) {
        checked++;
      }
    });
    this.countSelected = checked;
  }

  ngOnInit() { this.onOptionChange(); }

  ngOnDestroy() {
    this.onClose.emit(this.options);
  }
}
