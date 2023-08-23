import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-perfil-stars',
  templateUrl: './perfil-stars.component.html',
  styleUrls: ['./perfil-stars.component.css']
})
export class PerfilStarsComponent {
  constructor() { }
  @Input()
  user: User;
  ngOnInit() {
  }


}
