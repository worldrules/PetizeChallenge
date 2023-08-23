import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilStarsComponent } from './perfil-stars.component';

describe('PerfilStarsComponent', () => {
  let component: PerfilStarsComponent;
  let fixture: ComponentFixture<PerfilStarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilStarsComponent]
    });
    fixture = TestBed.createComponent(PerfilStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
