import { Component, OnInit, inject } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { IChannels } from '../ichannels';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consola',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consola.component.html',
  styleUrl: './consola.component.css'
})
export class ConsolaComponent implements OnInit {
  
  canales: IChannels[] = [];
  private _localStorageService = inject(LocalStorageService);
  private _router = inject(Router);
  
  ngOnInit(): void {
    this.loadChannels();
  }

  loadChannels(): void {
    this.canales = this._localStorageService.getChannels();
    this.sortChannelsById();
  }

  sortChannelsById(): void {
    this.canales.sort((a, b) => a.id - b.id);
  }

  canalDetailNavigate(id: number){
    // this._router.navigate(['/products', id])
    alert('detalle de canal: ' + id);
  }
}
