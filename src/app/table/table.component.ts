import { Component } from '@angular/core';
import { ItensFabri } from './Itens.list';
import { IEdits } from './IEdits';
import { motivos_list } from './motivos.list';
import { TableSoldaService } from './service/table-solda.service';
import { Itens } from './Itens';
import { IValues } from './Ivalues';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  Iedit: IEdits = {
    index: undefined,
    field: undefined
  }
  Ivalues: IValues = {
    defeitos: undefined,
    stt_amanha: undefined,
    stt_hoje: undefined
  }
  myData !: Itens[]
  motivos = motivos_list

  constructor(private httpData: TableSoldaService) { }

  async ngOnInit() {

    const array_of_data = await this.httpData.getData()
    this.myData = array_of_data
    console.log(this.myData)

  }

  editModeOn(clickI: number, field: string, item: Itens): void {
    this.Iedit = { field: field, index: clickI }
    this.Ivalues = { ...item }
  }

  async saveChanges(item: Itens) {
    console.log(this.Ivalues)
    const newItem = { ...item, stt_amanha: this.Ivalues.stt_amanha ?? item.stt_amanha, stt_hoje: this.Ivalues.stt_hoje ?? item.stt_hoje, defeitos: this.Ivalues.defeitos ?? item.defeitos }
    this.myData = this.myData.map(filt => {
      if (filt === item) {
        return newItem
      }
      else {
        return filt
      }
    })
    await this.httpData.register(newItem).then(res => console.log('foi '))
    this.Iedit = { field: undefined, index: undefined }
    this.Ivalues = { defeitos: undefined, stt_amanha: undefined, stt_hoje: undefined }
  }
}
