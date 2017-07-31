import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Need to add this if not importing whole library */
/* Either once in feature Module or globally at root level */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Import Whole Library - get it all */
/* We will be decoupling into logical sub-units */
import { LibraryModule } from '@ddeloy/dd-library';

/* Wild card to import all Material Modules */
/* import { MaterialModule} from '@angular/material'; */

// Import only what you use from Material:
/*
import {
  MdIconModule,
  MdCardModule,
  MdInputModule,
 } from '@angular/material';
*/
/* Import Library Module custom components you need */
/* import { TopMenuComponent } from '@ddeloy/dd-library'; */
/* I need to add this as an npm export so it is available */


import { DougComponent } from './doug.component';
import { RamanComponent } from './raman.component';






@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    LibraryModule,


  ],
  declarations: [DougComponent, RamanComponent]
})
export class DougModule { }
