import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BACK_TO_LOGIN, CREATE_ACCOUNT, REGISTRATION, SIGN_IN } from 'src/app/shared/constants';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { tap } from 'rxjs/operators';
import { defaultAnimation } from '../../shared/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [defaultAnimation],
})
export class LoginComponent {
  public loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    room_id: ['7c8dbf29-e78d-4f21-8d1a-048bda091be8'],
  });
  public isLogin = true;

  get title(): string {
    return this.isLogin ? SIGN_IN : REGISTRATION;
  }

  get label(): string {
    return this.isLogin ? CREATE_ACCOUNT : BACK_TO_LOGIN;
  }

  public changeForm(): void {
    this.isLogin = !this.isLogin;

    if (this.isLogin) {
      this.loginForm.removeControl('name');
    } else {
      this.loginForm.addControl('name', this.fb.control(''));
    }
  }

  public signIn(): void {
    this.router.navigate([`/chat`, '']);
    if (this.loginForm.valid) {
      this.loginService$
        .signIn(JSON.stringify(this.loginForm.value))
        .pipe(tap((resp: any) => (this.loginService$.user = resp)))
        .subscribe((_: any) => this.router.navigate([`/chat`, '']));
    }
  }

  public signUp(): void {
    this.router.navigate([`/chat`, '']);
    if (this.loginForm.valid) {
      this.loginService$
        .signUp(JSON.stringify(this.loginForm.value))
        .subscribe((_: any) => this.router.navigate([`/chat`, '']));
    }
  }

  constructor(private fb: FormBuilder, private router: Router, private loginService$: LoginService) {}
}
