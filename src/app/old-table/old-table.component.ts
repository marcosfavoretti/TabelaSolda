import { Component } from '@angular/core';
import { DayCounterService } from '../navbar/day-counter.service';
import { Itens } from '../table/Itens';
import { TableSoldaOldTsService } from './service/table-solda-old.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-old-table',
  templateUrl: './old-table.component.html',
  styleUrls: ['./old-table.component.css']
})
export class OldTableComponent {
  day_ref  !: string
  today = new Date().toLocaleDateString('pt-br')
  myData !: Itens[]
  constructor(private dayCounter: DayCounterService, private data: TableSoldaOldTsService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.dayCounter.setInitialday(String(param['day']).replaceAll('-', "/"))
    })
    this.day_ref = this.dayCounter.current_day
    this.refreshTable()
    this.dayCounter.event_change.subscribe(n_date => {
      this.day_ref = n_date
      this.refreshTable()
    })
  }

  async refreshTable() {
    //criar serviço para mudar o valor das tableas
    if (this.today === this.day_ref) return
    this.data.getData(this.day_ref).then(res => {
      this.myData = res
    })
      .catch(err => {
        this.myData = []
        alert('sem dados para este dia')
      })
  }
}
