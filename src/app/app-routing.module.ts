
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { QouteComponent } from './pages/qoute/qoute.component';
import { OrderComponent } from './pages/order/order.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { PaymentdetailComponent } from './pages/paymentdetail/paymentdetail.component';
import { AddorderComponent } from './pages/addorder/addorder.component';
import { UpdatequoteComponent } from './pages/updatequote/updatequote.component';



const routes: Routes = [

      { path: '', component: LoginComponent, data: {title: 'Login'}},

      {path: 'qoute', component: QouteComponent, data: {title: 'Qoute'}},
      {path: 'order', component: OrderComponent, data: {title: 'Orders'}},
      {path: 'addorder', component: AddorderComponent, data: {title: 'AddOrder'}},
      {path: 'updatequote', component: UpdatequoteComponent, data: {title: 'updatequote'}},
      {path: 'forgotpassword', component: ForgotpasswordComponent, data: {title: 'Forgot Password'}},
      {path: 'paymentdetail', component: PaymentdetailComponent, data: {title: 'Payment Detail'}},

      {path: '**', redirectTo: 'qoute', pathMatch: 'full', data: {title: 'Home'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
