import { Component, Input, OnInit } from '@angular/core'
import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient, private router: Router) { }
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

  goBack() {
    this.router.navigate(['/']);
  }

}
