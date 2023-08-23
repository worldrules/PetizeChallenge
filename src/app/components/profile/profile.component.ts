import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  constructor() { }
  @Input()
  user: User;
  ngOnInit() {
  }

}
