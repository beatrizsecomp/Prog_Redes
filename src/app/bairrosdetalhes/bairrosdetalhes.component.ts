import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BairroService} from 'src/app/bairro.service';
import {Bairro} from 'src/app/bairro';
import {NoticiasService} from '../noticias.service';
import {Chart} from 'chart.js';

@Component({
    selector: 'app-bairrosdetalhes',
    templateUrl: './bairrosdetalhes.component.html',
    styleUrls: ['./bairrosdetalhes.component.css']
})
export class BairrosdetalhesComponent implements OnInit, OnChanges {
    public Noticias;
    public Tipos;
    public tamanho;
    public noticias;
    public NoticiaTipo;
    public Noticiasbairro;
    public tamanhoTotal;
    public tamanhoNoticia;
    public atual;
    @Input() filtroBairro
    @Input() dataInicio;
    @Input() dataFim;


    grafico = [];

    constructor( private _noticiasService: NoticiasService) {
    }

    ngOnInit() {

        this._noticiasService.getNoticias()
            .subscribe(data => this.Noticias = data);
        this._noticiasService.getTipos()
            .subscribe(data => this.Tipos = data);

        this.atualizarDados();

    }

    ngOnChanges(changes: SimpleChanges) {
        // changes.prop contains the old and the new value...
        this.atualizarDados();
    }

    atualizarDados() {
        this._noticiasService.buscaDados()
            .subscribe(res => {
                this.atual = 0;
                this.noticias = res;
                // Filtrar todas as noticias do bairro pelo nome
                this.Noticiasbairro = this.noticias.map(res => res)
                    .filter(res => res.bairro == this.filtroBairro);
                if(this.filtroBairro =="Geral"){
                    this.Noticiasbairro = this.noticias;
                }
                    this.tamanhoTotal = this.Noticiasbairro.length;
                    this.tamanho =  this.Noticiasbairro.length;

                console.log(this.tamanho)
                // Filtrar noticias do bairro por data
                if (this.dataInicio) {
                    let dataInicial = new  Date(this.dataInicio.year, this.dataInicio.month, this.dataInicio.day);
                    console.log(dataInicial)
                    this.Noticiasbairro = this.Noticiasbairro.map(res => res)
                        .filter(res => {
                            let data = new  Date(res.ano, res.mes, 1);
                            return data >= dataInicial
                        });
                }
                if (this.dataFim) {
                    let dataFinal = new  Date(this.dataFim.year, this.dataFim.month, this.dataFim.day);
                    this.Noticiasbairro = this.Noticiasbairro.map(res => res)
                        .filter(res => {
                            let data = new  Date(res.ano, res.mes, 1);
                            return data <= dataFinal;
                        });
                }


                this.tamanhoNoticia = this.Noticiasbairro.length;
               
                this.tamanhoTotal =this.tamanho - this.tamanhoNoticia;
                this.atual = this.atual+ this.tamanhoNoticia;
                
                var data = {
                    datasets: [{
                        data: [this.tamanhoTotal, this.tamanhoNoticia],
                        backgroundColor: ["#3cba9f", "#666"],
                        borderWidth: [1]
                    }],
                    // Legendas
                    labels: [
                        'Outras',
                        'Tipo Crime'
                    ]
                };

                for (let i = 0; i < this.Tipos.length; i++) {
                    this.NoticiaTipo = this.Noticiasbairro.map(res => res)
                        .filter(res => res.tipo == this.Tipos[i].tipo);
                        
                   
                    this.tamanhoNoticia = this.NoticiaTipo.length;
                    this.tamanhoTotal =this.tamanho - this.tamanhoNoticia;
                    data = {
                        datasets: [{
                            data: [this.tamanhoTotal, this.tamanhoNoticia],
                            backgroundColor: [this.Tipos[i].cor, "#666"],
                            borderWidth: [1]
                        }],
                        // Legendas
                        labels: [
                            'Outros',
                            this.Tipos[i].tipo
                        ]
                    };


                    this.grafico = new Chart('chart_' + this.Tipos[i].id, {
                        type: 'doughnut',
                        data: data,
                        options: {
                            cutoutPercentage: 80
                        }
                    });
                }

            })
    }

}



