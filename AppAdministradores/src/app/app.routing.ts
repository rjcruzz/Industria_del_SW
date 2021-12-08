import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { EmpresasComponent } from './empresas/empresas.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { MotoristasComponent } from './motoristas/motoristas.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'empresas', component: EmpresasComponent, canActivate: [AuthGuard] },
    { path: 'ordenes', component: OrdenesComponent, canActivate: [AuthGuard] },
    { path: 'motoristas', component: MotoristasComponent, canActivate: [AuthGuard] },

    // para redireccionar a home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);