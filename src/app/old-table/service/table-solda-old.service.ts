import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from "axios"
import { httpConfig } from 'config';
import { Itens } from 'src/app/table/Itens';
@Injectable({
  providedIn: 'root'
})
export class TableSoldaOldTsService {

  constructor() {
  }

  async getData(date: string): Promise<Itens[]> {
    date = date.replaceAll('-', '/')
    const { data } = await axios.get(`http://${httpConfig.ip}/tabelasolda/${encodeURIComponent(date)}`)
    return this.castData(data)
  }
  private castData(data: any[]): Itens[] {
    return data.map(filt => {
      return new Itens(filt.id, filt.item, filt.stt_hoje, filt.stt_amanha, filt.defeitos)
    })
  }
}
