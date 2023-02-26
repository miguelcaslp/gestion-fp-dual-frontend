import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  getEncargos():Observable<any>{
    const url = environment.api.url+environment.api.endpoints.encargo
    return this.http.get(url);
  }

  updateEncargo(encargo:any):Observable<any>{
    const url = environment.api.url+environment.api.endpoints.encargo
    return this.http.put(url, encargo);
  }

  addTitulo (titulo:any):Observable<any>{
    console.log(environment.api.url+environment.api.endpoints.titulo)
    const url = environment.api.url+environment.api.endpoints.titulo
    return this.http.post(url, titulo);
  } 

  addUsuario(user:any):Observable<any>{
    const url = environment.api.url+environment.api.endpoints.user
    return this.http.post(url, user,{
    
    });
  }
}
