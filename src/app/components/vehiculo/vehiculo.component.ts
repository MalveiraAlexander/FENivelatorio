import { Component, OnInit } from '@angular/core';
import { VehicleModel } from 'src/app/models/vehicle';
import { CoreService } from 'src/app/services/core.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {

  vehicles: VehicleModel[];
  constructor(private core: CoreService) { }

  options: AnimationOptions = {
    path: '../../../assets/70301-new-loader.json',
  };

  loading: boolean = true;
  notResult: boolean = false;
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  obtenerTodos() {
    this.loading = true;
    this.core.getAllVehicle().subscribe((data: any) => {
      this.vehicles = data;

      if (this.vehicles.length == 0) {
        this.notResult = true;
        console.log(this.vehicles.length);
      } else {
        this.notResult = false;
      }
    }, error => {
      console.log(error);
    }, () => {
      this.loading = false;
    });
  }

  eliminar(id: number) {
    this.core.deleteVehicle(id).subscribe((data: any) => {
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Vehículo eliminado',
        showConfirmButton: false,
        timer: 1500
      });
      this.vehicles = [];
      this.obtenerTodos();
    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Vehículo no eliminado (error interno)',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }
}
