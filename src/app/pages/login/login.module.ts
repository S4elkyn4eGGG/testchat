import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { InputModule } from '../../shared/components/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../shared/components/button/button.module';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [InputModule, CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, ButtonModule],
})
export class LoginModule {}
