import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'user',
        component:UserComponent
    }
];

export const appRouting = [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(FormsModule), 
  ];