import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DayCounterService {
  today = new Date().toLocaleDateString('pt-br')
  current_day!: string
  event_change: EventEmitter<string> = new EventEmitter()

  constructor(private router: Router) { }

  setInitialday(param_day: string) {
    this.current_day = param_day
    this.changeRoute(param_day)
  }

  private setCurrentDay(day: string) {
    this.current_day = day
    this.event_change.emit(this.current_day)
  }

  getCurrentDay() {
    return this.current_day
  }

  decrement() {
    const currentDate = this.parseDateString(this.current_day);
    currentDate.setDate(currentDate.getDate() - 1);
    this.setCurrentDay(this.formatDate(currentDate));
    this.changeRoute(this.current_day)
  }

  increment() {
    const currentDate = this.parseDateString(this.current_day);
    currentDate.setDate(currentDate.getDate() + 1);
    this.setCurrentDay(this.formatDate(currentDate));
    this.changeRoute(this.current_day)
  }

  private parseDateString(dateString: string): Date {
    const [day, month, year] = dateString.split('/');
    return new Date(+year, +month - 1, +day); // Mês é baseado em zero, subtrai 1
  }

  private formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Adiciona 1, já que o mês é baseado em zero
    const year = date.getFullYear();
    return `${this.padNumber(day)}/${this.padNumber(month)}/${year}`;
  }

  private padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  private changeRoute(param: string) {
    param = param.replaceAll('/', '-')
    if (this.today === this.current_day) return this.router.navigate(['hoje'])
    return this.router.navigate(["/", param])
  }
}
