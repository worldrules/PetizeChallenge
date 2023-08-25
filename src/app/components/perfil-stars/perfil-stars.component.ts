import { GithubService } from './../../services/github.service';
import { Component, Input, OnInit } from '@angular/core'
import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}


@Component({
  selector: 'app-perfil-stars',
  templateUrl: './perfil-stars.component.html',
  styleUrls: ['./perfil-stars.component.css']
})
export class PerfilStarsComponent {
  constructor(private http: HttpClient) { }
  @Input()
  user: User;
  sortedRepos: any[];
  searchQuery: string = '';
  repositories: Repository[] = [];

  searchRepositories() {
    if (this.searchQuery.trim() !== '') {
      const apiUrl = `https://api.github.com/users/${this.searchQuery}/repos`;

      this.http.get<Repository[]>(apiUrl)
        .subscribe(data => {
          this.repositories = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        });
    }
  }

}
