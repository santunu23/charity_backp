import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'homeload', pathMatch: 'full' },
  { path: 'homeload',
  children: [
    {
      path: '',
      loadChildren: './homeload/homeload.module#HomeloadPageModule' 
    },
   
    {
      path: ':homeloadId',
      loadChildren: './homeload/homeload-details/homeload-details.module#HomeloadDetailsPageModule'
    },
  ]
  },
  { path: 'getupdate', loadChildren: './getupdate/getupdate.module#GetupdatePageModule' },
  { path: 'donation', loadChildren: './donation/donation.module#DonationPageModule' },
  { path: 'volunteer', loadChildren: './volunteer/volunteer.module#VolunteerPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'forgetpword', loadChildren: './forgetpword/forgetpword.module#ForgetpwordPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
