import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) {

   }

   getCatalogs() {
      return this.http.get("/api/catalogs")
   }

}
