import { Component, Input, OnInit, inject, input } from '@angular/core';
import { IChannels } from '../ichannels';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-card-patch',
  standalone: true,
  imports: [],
  templateUrl: './card-patch.component.html',
  styleUrl: './card-patch.component.css'
})
export class CardPatchComponent implements OnInit {

  instrumento?: IChannels;
  canal = input<number>();
  private _localStorageService = inject(LocalStorageService);

  
  ngOnInit(): void {    
    const channels = this._localStorageService.getChannels();
    const index = channels.findIndex(c => c.id == this.canal() );
    if (index !== -1) {      
      this.instrumento = channels[index];
    }
  }
}
