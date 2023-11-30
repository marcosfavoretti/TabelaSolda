import { Injectable } from '@angular/core';
import axios from "axios"
import { httpConfig } from 'config';
import { Itens } from '../Itens';
@Injectable({
  providedIn: 'root'
})
export class TableSoldaService {

  constructor() { }

  async getData() {
    const { data } = await axios.get(`http://${httpConfig.ip}/tabelasolda`)
    return this.castData(data)
  }
  private castData(data: any[]) {
    return data.map(filt => {
      return new Itens(filt.id, filt.item, filt.stt_hoje, filt.stt_amanha, filt.defeitos)
    })
  }
  async register(itens: Itens) {
    return await axios.put(`http://${httpConfig.ip}/tabelasolda/${itens.id}`, {
      ...itens
    }).catch(err => console.log(err))
  }
}
