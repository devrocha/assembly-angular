import { Component, inject } from '@angular/core';
import { FirstService } from '../../services/first-sevice/first-service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  private firstService = inject(FirstService)

  myServiceValue = this.firstService.getFirstService()
}
