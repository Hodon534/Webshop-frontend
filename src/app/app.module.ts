import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { ProductCardComponent } from './pages/home/components/product-card/product-card.component';
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { MatInputModule } from '@angular/material/input';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule}  from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './service/cart.service';
import { ProductService } from './service/product.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddManufacturerComponent } from './pages/add-manufacturer/add-manufacturer.component';
import { ManufacturerService } from './service/manufacturer.service';
import { UserService } from './service/user.service';
import { OverviewComponent } from './pages/overview/overview.component';
import { OrderService } from './service/order.service';
import { SideNavComponent } from './pages/overview/components/side-nav/side-nav/side-nav.component';
import { DashboardComponent } from './pages/overview/pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/overview/pages/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FiltersComponent,
    ProductCardComponent,
    ProductsHeaderComponent,
    ProductPageComponent,
    AddProductComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    AddManufacturerComponent,
    OverviewComponent,
    SideNavComponent,
    DashboardComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [ProductService, CartService, ManufacturerService, UserService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
