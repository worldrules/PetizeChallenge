import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/user.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let githubService: GithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, HttpClientModule, RouterModule],
      providers: [GithubService,]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    githubService = TestBed.inject(GithubService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set user and error properties on successful search', fakeAsync(() => {
    const mockUser: User = {
      name: 'leonardo',
      login: 'worldrules',
      avatar_url: "https://avatars.githubusercontent.com/u/33266800?v=4",
      created_at: "2017-10-31T20:23:23Z",
      location: 'RS',
      bio: "Cartomante - Ex Jogador de LOL - O melhor jogador de UNO",
      public_repos: 104,
      public_gists: 15,
      followers: 5,
      html_url: ''
    };
    spyOn(githubService, 'getUser').and.returnValue(of(mockUser));

    component.findControl.setValue('username-to-search');
    tick(1000);
    fixture.detectChanges();

    expect(component.user).toBe(mockUser);
    expect(component.error).toBeFalse();
  }));

  it('should handle error on failed search', fakeAsync(() => {
    spyOn(githubService, 'getUser').and.returnValue(throwError('some error'));

    component.findControl.setValue('invalid-username');
    tick(1000);
    fixture.detectChanges();

    expect(component.user).toBeNull();
    expect(component.error).toBeTrue();
  }));
});
