export class Itens {
    id: string
    nome: string
    stt_hoje: string
    stt_amanha: string
    defeitos: number
    constructor(id: string, nome: string, stt_hoje: string, stt_amanha: string, defeitos: number) {
        this.id = id
        this.nome = nome
        this.stt_amanha = stt_amanha
        this.stt_hoje = stt_hoje
        this.defeitos = defeitos
    }
}