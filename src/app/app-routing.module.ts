import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { OldTableComponent } from './old-table/old-table.component';


const routes: Routes = [
  { path: "hoje", component: TableComponent },
  { path: ":day", component: OldTableComponent },
  { path: '', redirectTo: "hoje", pathMatch: 'full' },

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
