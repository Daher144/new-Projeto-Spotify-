import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginUser(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }

  registerUser(userData: any): Observable<any> {
    // Este método POST envia os dados do usuário para a API externa para registro
    // Certifique-se de que userData contenha as propriedades corretas (users, password, name).
    return this.http.post('http://localhost:3000/users', userData);
    
  }
}
