import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { AppRoutingModule } from './app-routing.module';
import { InventoryCreateComponent } from './inventory-create/inventory-create.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoriesComponent,
    InventoryCreateComponent,
    InventoryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }