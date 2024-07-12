import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { IChannels } from '../ichannels';

@Component({
  selector: 'app-canal-detalle',
  standalone: true,
  imports: [],
  templateUrl: './canal-detalle.component.html',
  styleUrl: './canal-detalle.component.css'
})
export class CanalDetalleComponent implements OnInit {

  id?: number;  
  canal?: IChannels;
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  private _localStorageService = inject(LocalStorageService);

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.id = params['id'];      
  }
    )
    this.canal = this._localStorageService.getChannelById(this.id!);
  }

  volver(){
    this._router.navigate(['/']);
  }
}
