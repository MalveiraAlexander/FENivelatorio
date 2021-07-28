import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private core: CoreService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }



  formAddVehicle = this.fb.group({
    patente: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(2)]],
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    titular: ['', [Validators.required]],
    puertas: ['', [Validators.required]],
  });

}
