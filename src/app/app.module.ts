import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { apiService } from './services/api.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { TokenInterceptor } from './services/token.interceptor';
import { JwtInterceptor } from './services/jwt.interceptor';
import { authService } from './services/auth.service';
import { AngularButtonLoaderModule } from 'angular-button-loader';
import { NgxCaptchaModule } from 'ngx-captcha';
import { LoginComponent } from './pages/login/login.component';
import { QouteComponent } from './pages/qoute/qoute.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OrderComponent } from './pages/order/order.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { PaymentdetailComponent } from './pages/paymentdetail/paymentdetail.component';
import { AddorderComponent } from './pages/addorder/addorder.component';
import { UpdatequoteComponent } from './pages/updatequote/updatequote.component';


@NgModule({
  declarations: [
    AppComponent,


    LoginComponent,


    QouteComponent,
  MenuComponent,
  FooterComponent,
    OrderComponent,
   ForgotpasswordComponent,
   PaymentdetailComponent,
    AddorderComponent,
    UpdatequoteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    LoadingBarModule,
    AngularButtonLoaderModule.forRoot(),
    NgxCaptchaModule
    ],
  providers: [apiService,
    authService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
