import { GithubService } from './../../services/github.service';
import { Component, Input, OnInit } from '@angular/core'
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-perfil-stars',
  templateUrl: './perfil-stars.component.html',
  styleUrls: ['./perfil-stars.component.css']
})
export class PerfilStarsComponent implements OnInit {
  constructor(private githubService: GithubService) { }
  @Input()
  user: User;
  sortedRepos: any[];

  ngOnInit() {

    this.githubService.getUserRepos(this.user.name)
    this.githubService.getUserRepos(this.user.name).subscribe((sortedRepos) => {
      this.sortedRepos = sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    });
  }

}
