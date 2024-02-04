import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, ProductAdmin } from '../types/Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // call api
  
  apiAdminUrl = 'https://db-tr2w.onrender.com/Products'; // khai bao apiUrl
  
  http = inject(HttpClient); // inject bien http
  constructor(
    private httpClient: HttpClient,
  ) {}
  getSearch( key: string): Observable<Product> {
    return this.http.get<Product>(this.apiAdminUrl + `?search=${key}`);
  }
  getAll(page:number = 1, limit:number = 10, genre: string[] = [], key: string = '', runingTime: string = ''): Observable<Product[]> {
    let url = this.apiAdminUrl + `?page=${page}&limit=${limit}`
    if(genre.length > 0) {
      url = url + `&genre=${genre.join(',')}`
    }
    if(key) {
      url = url + `&search=${key}`
    }

    if(runingTime === 'lower_100') {
      url = url + `&lower_time=100`
    }
    else if (runingTime === '100_120') {
      url = url + `&greater_time=100&lower_time=120`
    }
    else if (runingTime === 'greater_120') {
      url = url + `&greater_time=120`
    }

    return this.httpClient.get<Product[]>(url);
  }
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }

  getProductListAdmin(): Observable<ProductAdmin[]> {
    return this.http.get<ProductAdmin[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }
  getProductById(id:string):Observable<Product>{
    return this.http.get<Product>(`${this.apiAdminUrl}/${id}`)
  }
  deleteProductAdmin(id:string):Observable<Product>{
    return this.http.delete<Product>(`${this.apiAdminUrl}/${id}`);
  }
  createProductAdmin(data:Product):Observable<Product>{
    return this.http.post<Product>(this.apiAdminUrl, data)
  }
  updateProductAdmin(id:string, product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiAdminUrl}/${id}`, product);
  }
}
