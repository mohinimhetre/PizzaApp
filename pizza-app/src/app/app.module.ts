import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service.service'
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { PizzaMainLayoutComponent } from './pizza-main-layout/pizza-main-layout.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaHeaderComponent } from './pizza-header/pizza-header.component';
import { CartComponent } from './cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSliderModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    PizzaMainLayoutComponent,
    PizzaDetailComponent,
    PizzaHeaderComponent,
    CartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }