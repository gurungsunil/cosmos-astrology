import { Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UserQaHistoryComponent } from './shared/user-qa-history/user-qa-history.component';

export const appRoutes: Routes = [
    {
        path: "login",
        canLoad: [AuthGuard],
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