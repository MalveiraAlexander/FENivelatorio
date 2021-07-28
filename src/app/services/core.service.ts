import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleModel, VehicleRequestModel } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private endPoint = 'https://localhost:44384/api/'; // modificar url para probar

  private httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(private http: HttpClient) { }

  getAllVehicle(): Observable<Object>{
    return this.http.get(`${this.endPoint}master/vehicles`, this.httpHeader);
  }

  showVehicle(id: number): Observable<Object>{
    return this.http.get(`${this.endPoint}master/vehicle/${id}`, this.httpHeader);
  }

  deleteVehicle(id: number): Observable<Object>{
    return this.http.delete(`${this.endPoint}master/vehicle/${id}`, this.httpHeader);
  }

  updateVehicle(id: number, vehicle: VehicleModel): Observable<Object>{
    return this.http.delete(`${this.endPoint}master/vehicle/${id}`, this.httpHeader);
  }

  addVehicle(vehicle: VehicleRequestModel): Observable<Object>{
    return this.http.post(`${this.endPoint}master/vehicle`, vehicle, this.httpHeader);
  }

  allUsers(): Observable<Object>{
    return this.http.get(`https://reqres.in/api/users?per_page=12`, this.httpHeader);
  }


}
