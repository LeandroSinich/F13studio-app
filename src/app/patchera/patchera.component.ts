import { Component, OnInit, inject } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CardPatchComponent } from '../card-patch/card-patch.component';
import { IChannels } from '../ichannels';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'app-patchera',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CardPatchComponent],
  templateUrl: './patchera.component.html',
  styleUrl: './patchera.component.css'
})
export class PatcheraComponent {
  
  
 
  private _router = inject(Router);
  

  channelNavigate(id: number){
    this._router.navigate(['/canal', id])
  }
  
}
