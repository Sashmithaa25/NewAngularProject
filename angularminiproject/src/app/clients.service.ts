import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

 
  constructor(private httpClient:HttpClient) { }

  createClients(addResource: any){
    //const httpHeaders =new HttpHeaders();
    //httpHeaders.append('content-type','application/json');
    return this.httpClient.post('http://localhost:3000/clients',addResource);
  }

  getClients(){
    //const httpHeaders =new HttpHeaders();
    //httpHeaders.append('content-type','application/json');
    return this.httpClient.get('http://localhost:3000/clients')
  }
}
