import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersService } from './services/orders.service';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgbPaginationModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
