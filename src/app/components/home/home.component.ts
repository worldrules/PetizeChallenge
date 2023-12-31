import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/user.model';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private githubService: GithubService) { }
  findControl = new FormControl();
  error: boolean = false;
  user: User | undefined;

  ngOnInit() {
    this.findControl.valueChanges
      .pipe(filter(value => value.length > 3),
        debounceTime(1000),
        switchMap(value =>
          this.githubService.getUser(value).pipe(
            catchError(err => {
              this.user = undefined;
              this.error = true;
              return EMPTY;
            })))
      ).subscribe((user: User) => {
        this.user = user;
        this.error = false;
      });
  }

}
