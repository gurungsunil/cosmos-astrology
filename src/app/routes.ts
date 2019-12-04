import { Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { RoleGuard } from './auth/role-guard.service';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: "login",
        canLoad: [RoleGuard, AuthGuard],
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