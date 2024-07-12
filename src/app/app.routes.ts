import { Routes } from '@angular/router';

import { ChannelFormComponent } from './channel-form/channel-form.component';

import { PatcheraComponent } from './patchera/patchera.component';
import { ConsolaComponent } from './consola/consola.component';
import { CanalDetalleComponent } from './canal-detalle/canal-detalle.component';

export const routes: Routes = [
    {path: '', component: ConsolaComponent},
    {path: 'canal', component: PatcheraComponent},
    {path: 'canal/:id', component: ChannelFormComponent},
    {path: ':id', component: CanalDetalleComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
