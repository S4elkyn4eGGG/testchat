import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
    data: { animation: 'LoginPage' },
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then((m) => m.ChatModule),
    data: { animation: 'ChatPage' },
  },
  { path: '**', redirectTo: 'chat', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
