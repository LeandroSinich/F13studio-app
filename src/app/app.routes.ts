import { Routes } from '@angular/router';
import { VistaGeneralCancionComponent } from './vista-general-cancion/vista-general-cancion.component';
import { ChannelFormComponent } from './channel-form/channel-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PatcheraComponent } from './patchera/patchera.component';
import { ConsolaComponent } from './consola/consola.component';

export const routes: Routes = [
    {path: '', component: ConsolaComponent},
    {path: 'canal', component: PatcheraComponent},
    {path: 'canal/:id', component: ChannelFormComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
