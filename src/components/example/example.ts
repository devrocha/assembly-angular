import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstService } from '../../services/first-sevice/first-service';

@Component({
  selector: 'app-example',
  imports: [FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './example.html',
  styleUrl: './example.scss'
})
export class Example {
  myService = new FirstService()
  private firstService = inject(FirstService)

  myServiceValue = this.firstService.getFirstService()

  protected title = 'first-angular';

  amount = 10

  today = new Date()

  isActive = true

  peoples = [
    {
      id: 1,
      name: 'Matheus',
      age: 31
    },
    {
      id: 2,
      name: 'Andre',
      age: 20
    },
    {
      id: 3,
      name: 'Alexandre',
      age: 30
    },
  ]

  changeTitle() {
    this.title = 'Olá Matheus, bem vindo ao Angular.'
  }
}
