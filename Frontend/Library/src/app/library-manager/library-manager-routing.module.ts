import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryManagerPage } from './library-manager.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryManagerPageRoutingModule {}
