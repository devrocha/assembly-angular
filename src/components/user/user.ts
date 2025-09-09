import { Component, computed, inject, signal, effect } from '@angular/core';
import { FirstService } from '../../services/first-sevice/first-service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  private firstService = inject(FirstService)

  count = signal(2)
  doubleCountVariable = 0

  myServiceValue = this.firstService.getFirstService()

  doubleCount = computed(() => this.count() * 2);

  doubleCountFunction() {
    this.doubleCountVariable = this.count() * 2
  }

  setValueCount(value: number) {
    this.count.set(value)
  }

  updateValueCount(value: number) {
    this.count.update(oldValue => oldValue + value)
  }
}
