import {Component, OnInit, Input} from '@angular/core';
import {NoticiasService} from '../noticias.service';
import {BairroService} from "../bairro.service";


@Component({
    selector: 'app-top10',
    templateUrl: './top10.component.html',
    styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {
    public Noticias;
    public Tipos ;
    bairros: any;
    public noticias;
    @Input() dataInicio;
    @Input() dataFim;
    public Noticiasbairro;
    public tipo;


    constructor(private _noticiasService: NoticiasService, private _bairroservice: BairroService) {
    }

    ngOnInit() {
        this._noticiasService.getNoticias()
            .subscribe(data => this.Noticias = data);

        this._noticiasService.getTipos().subscribe(data => this.Tipos = data);
        this._bairroservice.getBairros().subscribe(data => this.bairros = data);

        this.atualizarDados(this.tipo);

    }


    atualizarDados(tipo) {
        this._noticiasService.buscaDados()
            .subscribe(res => {

                this.noticias = res;

                // Filtrar noticias do bairro por data
                if (this.dataInicio) {
                    let dataInicial = new Date(this.dataInicio.year, this.dataInicio.month, this.dataInicio.day);
                    console.log(dataInicial)
                    this.Noticiasbairro = this.Noticiasbairro.map(res => res)
                        .filter(res => {
                            let data = new Date(res.ano, res.mes, 1);
                            return data >= dataInicial
                        });
                }
                if (this.dataFim) {
                    let dataFinal = new Date(this.dataFim.year, this.dataFim.month, this.dataFim.day);
                    this.Noticiasbairro = this.Noticiasbairro.map(res => res)
                        .filter(res => {
                            let data = new Date(res.ano, res.mes, 1);
                            return data <= dataFinal;
                        });
                }

                if (tipo) {
                    console.log(tipo)
                    this.noticias = this.noticias.map(res => res)
                        .filter(res => res.tipo == tipo);
                }

                var ocorrencias = [];
                for (var i = 0; i < this.bairros.length; i++) {
                    ocorrencias = this.noticias.map(res => res)
                        .filter(res => res.bairro == this.bairros[i].nome);

                    this.bairros[i].total_ocorrencia = ocorrencias.length;
                }

                this.bairros.sort(function (bairro1, bairro2) {
                    if (bairro1.total_ocorrencia > bairro2.total_ocorrencia) {
                        return -1;
                    } else if (bairro1.total_ocorrencia < bairro2.total_ocorrencia) {
                        return 1;
                    } else {
                        return 0;
                    }
                });


            });
    }


}
