import { Component } from '@angular/core';
import { DayCounterService } from './day-counter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private dayCounter: DayCounterService, private route: ActivatedRoute) { }
  current_day: string = new Date().toLocaleDateString('pt-br')

  ngOnInit() {
    this.route.params.subscribe(param => { console.log(param) })
    this.dayCounter.setInitialday(this.current_day)
    this.dayCounter.event_change.subscribe((n_date) => {
      this.current_day = n_date //quando mudar a data ele vai alterar a data
    })
  }
  goToRight() {
    console.log('direita')
    this.dayCounter.increment()
  }
  goToleft() {
    console.log('esquerda')

    this.dayCounter.decrement()
  }
  isToday() {
    return this.current_day === new Date().toLocaleDateString("pt-br")
  }
}
