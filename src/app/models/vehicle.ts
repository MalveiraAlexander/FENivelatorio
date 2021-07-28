export class VehicleModel {
  id: number;
  patente: string;
  marca: string;
  modelo: string;
  titular: string;
  puertas: number;
}

export class VehicleRequestModel {
  patente: string;
  marca: string;
  modelo: string;
  titular: string;
  puertas: number;
}
