import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryManagerPageRoutingModule } from './library-manager-routing.module';

import { LibraryManagerPage } from './library-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryManagerPageRoutingModule
  ],
  declarations: [LibraryManagerPage]
})
export class LibraryManagerPageModule {}
