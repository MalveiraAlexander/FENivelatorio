import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleRequestModel } from 'src/app/models/vehicle';
import { CoreService } from 'src/app/services/core.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  users: {
    first_name: string;
    last_name: string;
  }[];

  constructor(private core: CoreService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.obtenerTitulares();
  }

  obtenerTitulares() {
    this.core.allUsers().subscribe((data: any) => {
      this.users = data.data;
    });
  }

  guardarVehiculo() {
    let auto: VehicleRequestModel = new VehicleRequestModel();
    auto.marca = this.formAddVehicle.value.marca;
    auto.modelo = this.formAddVehicle.value.modelo;
    auto.patente = this.formAddVehicle.value.patente;
    auto.puertas = this.formAddVehicle.value.puertas;
    auto.titular = this.formAddVehicle.value.titular;
    this.core.addVehicle(auto).subscribe((data: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Vehículo agregado con éxito',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('list')
      console.log(data);
    }, error => {
      let e: string = error.error;
      if (e.includes('1000')) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Patente existente!',
          showConfirmButton: false,
          timer: 1500
        });
        this.formAddVehicle.controls.patente.reset();
      }

    });
  }

  // Formulario reactivo

  formAddVehicle = this.fb.group({
    patente: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(2)]],
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    titular: ['', [Validators.required]],
    puertas: ['', [Validators.required]],
  });
}
