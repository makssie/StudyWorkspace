import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

import { ProductListComponent } from './products/product-list.component'
import { ProductDetailGuard } from './products/product-guard.service'
import { ProductFilterPipe} from './products/product-filter.pipe'
import { StarComponent} from './shared/star.component'
import { ProductDetailComponent } from './products/product-detail.component'
import { WelcomeComponent } from './home/welcome.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
    { path: 'products', component: ProductListComponent},
    { path: 'product/:id', 
    canActivate : [ ProductDetailGuard ],
    component: ProductDetailComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  ])
  ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, ProductDetailComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ProductDetailGuard ]
})
export class AppModule { 

}
