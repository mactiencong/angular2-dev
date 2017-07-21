import { routing } from './app.router';
import { ItemService } from './services/item.service';
import { ItemDetailComponent } from './item-detail.component';
import { ItemsComponent } from './items.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
