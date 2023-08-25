import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { PerfilStarsComponent } from './perfil-stars.component';

describe('PerfilStarsComponent', () => {
  let component: PerfilStarsComponent;
  let fixture: ComponentFixture<PerfilStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilStarsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search repositories and sort them by stargazers_count', () => {
    const mockRepos = [
      { name: 'Repo1', description: 'Description 1', stargazers_count: 10, html_url: 'url1' },
      { name: 'Repo2', description: 'Description 2', stargazers_count: 5, html_url: 'url2' },
    ];

    spyOn(component['http'], 'get').and.returnValue(of(mockRepos));

    component.searchQuery = 'some-username';
    component.searchRepositories();

    expect(component.repositories).toEqual(mockRepos);
  });

  it('should navigate back', () => {
    const routerSpy = spyOn(component['router'], 'navigate');

    component.goBack();

    expect(routerSpy).toHaveBeenCalledWith(['/']);
  });
});
