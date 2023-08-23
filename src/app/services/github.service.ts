import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Repository } from '../models/repository.model';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    const url = `${this.apiUrl}/users/${username}`;


    return this.http.get<User>(url).pipe(
      switchMap((user: User) => {
        return this.getRepositories(username).pipe(
          map((repos: Repository[]) => {
            user.repositories = repos;
            return user;
          })
        );
      })
    );
  }

  getRepositories(username: string): Observable<Repository[]> {
    const url = `${this.apiUrl}/users/${username}/repos`;
    return this.http.get<Repository[]>(url).pipe(
      map((data: any[]) => data.map(repo => new Repository(repo.name, repo.description, repo.html_url, repo.stargazers_count, repo.updated_at)))
    );
  }
}
