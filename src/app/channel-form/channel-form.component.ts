import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-channel-form',
  templateUrl: './channel-form.component.html',
  styleUrl: './channel-form.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class ChannelFormComponent {
  private fb = inject(FormBuilder);
  channelForm = this.fb.group({
    detalle: null,
    name: [null, Validators.required],    
    anotaciones: [null, Validators.required],    
    mic: [null, Validators.required],
    grupo: [null, Validators.required],    
    power: false,
  });

  

  grupos = [
    {name: 'Bateria', abbreviation: 'Bata'},
    {name: 'Bajo', abbreviation: 'Bajo'},
    {name: 'Guitarra', abbreviation: 'GTR'},
    {name: 'Teclados', abbreviation: 'Teclas'},
    {name: 'Vocal', abbreviation: 'Vox'},
    {name: 'Percusion', abbreviation: 'Percu'},
    {name: 'Vientos', abbreviation: 'Vientos'},
    {name: 'Cuerdas', abbreviation: 'Cuerdas'},
    {name: 'Otro', abbreviation: 'Otro'},
    
  ];

  microfonos = [
    {marca: 'Linea',modelo: 'Linea', abbreviation: 'Linea'},
    {marca: 'Shure',modelo: 'sm-58', abbreviation: 'sm-58'},
    {marca: 'Shure',modelo: 'sm-57', abbreviation: 'sm-57'},
    {marca: 'Shure',modelo: 'beta-52', abbreviation: 'b-52'},
    {marca: 'Sennheiser',modelo: 'e-906', abbreviation: 'e-906'},
    {marca: 'Sennheiser',modelo: 'e-835', abbreviation: 'e-835'},
    {marca: 'AudioTechnica',modelo: 'AE-2500', abbreviation: 'AE-2500'},
    {marca: 'AKG',modelo: 'D-40', abbreviation: 'AKG-d40'},
    {marca: 'Blue',modelo: 'Baby Bottle', abbreviation: 'baby'},
    {marca: 'Blue',modelo: 'Gemini II', abbreviation: 'gemini'},
    {marca: 'Blue',modelo: 'Hummingbird', abbreviation: 'Hummingbird'},
    {marca: 'Avantone',modelo: 'CK-1', abbreviation: 'avantone'},
   
    
  ];

  onSubmit(evento: Event): void {
    evento.preventDefault();
    console.log(this.channelForm);
    alert('Guardado');
  }
}