import { Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';

export const appRoutes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: "admin",
        loadChildren: "./admin/admin.module#AdminModule"
    }
]