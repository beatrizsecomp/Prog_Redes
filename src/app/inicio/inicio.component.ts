import {BairroService} from './../bairro.service';
import {Bairro} from './../bairro';
import {Component, OnInit} from '@angular/core';
import {NoticiasService} from '../noticias.service';
@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    zoom: number = 12.5;
    title: string = "Mapa";
    lat: number = -12.2412174;
    lng: number = -38.952666913;
    public noticias: any;
    dataI;
    dataF;
    bairroselecionado: Bairro;
    public bairros;
    public bairro: any;
    constructor(private _noticiasService: NoticiasService, private _bairroservice: BairroService) {
    }
    ngOnInit() {
        this.bairro = null;
        this._noticiasService.getNoticias()
            .subscribe(data => this.noticias = data);
        this._bairroservice.getBairros()
            .subscribe(data => this.bairros = data);
        //this.getBairros();
        this.bairro = this._noticiasService.filtro;
    }
    atualizarFiltro(event) {
        this._noticiasService.filtro = this.bairro;
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    onSelect(bairro: Bairro): void {
        this.bairroselecionado = bairro;
        this.noticias.find(noticia => noticia.bairro === bairro);

    }

    /*onSelect(id) {
     this.noticiasBairro = this.noticias.filter(id);
     //this.noticias.find(noticia => noticia.bairro === id)
     //this._noticiasService.getNoticias().subscribe((item)=> item.paisid == id);
     //this.noticiasBairro = this._noticiasService.getNoticias().filter();
     }*/
    markers: marker[] = [
        {
            lat: -12.2047191,
            lng: -38.9255698,
            label: 'Aeroporto',
            draggable: false
        },
        {
            lat: -12.2073977,
            lng: -39.00112782,
            label: 'Asa Branca',
            draggable: false
        },
        {
            lat: -12.29802,
            lng: -38.9602371,
            label: 'Aviário',
            draggable: false
        },
        {
            lat: -12.2555844,
            lng: -39.0165172,
            label: 'Calumbi',
            draggable: false
        },
        {
            lat: -12.2280852,
            lng: -39.0377186,
            label: 'C. Gado Novo',
            draggable: false
        },
        {
            lat: -12.2114536,
            lng: -39.0120542,
            label: 'Campo Limpo',
            draggable: false
        },
        {
            lat: -12.2605999,
            lng: -38.9656139,
            label: 'Capuchinhos',
            draggable: false
        },
        {
            lat: -12.260512,
            lng: -39.0019106,
            label: 'Centro',
            draggable: false
        },
        {
            lat: -12.264961,
            lng: -39.0030175,
            label: 'C. São Cosme',
            draggable: false
        },
        {
            lat: -12.2261056,
            lng: -38.9626736,
            label: 'Cidade Nova',
            draggable: false
        },
        {
            lat: -12.2463567,
            lng: -39.0077745,
            label: 'Cruzeiro',
            draggable: false
        },
        {
            lat: -12.2520617,
            lng: -38.9682115,
            label: 'Conceição',
            draggable: false
        },
        { //aqui
            lat: -12.2534384,
            lng: -39.0215408,
            label: 'Feira IX',
            draggable: false
        },
        { //aqui
            lat: -12.2070347,
            lng: -38.9706831,
            label: 'Feira VI',
            draggable: false
        },
        { //aqui
            lat: 12.2733317,
            lng: -38.9995917,
            label: 'Feira VII',
            draggable: false
        },
        {
            lat: -12.2748683,
            lng: -38.9854754,
            label: 'Feira X',
            draggable: false
        },
        {
            lat: -12.2310538,
            lng: -38.9860522,
            label: 'Gabriela',
            draggable: false
        },
        {
            lat: -12.2426109,
            lng: -38.989080,
            label: 'Jardim Cruzeiro',
            draggable: false
        },
        {
            lat: -12.2718777,
            lng: -38.9253552,
            label: 'Lagoa Salgada',
            draggable: false
        },
        {
            lat: -12.2140673,
            lng: -38.9509828,
            label: 'Mangabeira',
            draggable: false
        },
        {
            lat: -12.2676897,
            lng: -38.9838443,
            label: 'Muchila',
            draggable: false
        },
        {
            lat: -12.1936895,
            lng: -38.9812147,
            label: 'Novo Horizonte',
            draggable: false
        },
        {
            lat: -12.2253986,
            lng: -38.9941792,
            label: 'Pampalona',
            draggable: false
        },
        {
            lat: -12.1986519,
            lng: -38.9641685,
            label: 'Papagaio',
            draggable: false
        },
        {
            lat: -12.2139786,
            lng: -38.9663836,
            label: 'Parque Ipê',
            draggable: false
        },
        {
            lat: -12.2662771,
            lng: -38.9890602,
            label: 'Pedra do Descanso',
            draggable: false
        },
        {
            lat: -12.2545801,
            lng: -38.9589146,
            label: 'Ponto Central',
            draggable: false
        },
        {
            lat: -12.2393232,
            lng: -38.9676162,
            label: 'Queimadinha',
            draggable: false
        },
        {
            lat: -12.2671733,
            lng: -38.9436454,
            label: 'Santa Mônica',
            draggable: false
        },
        {
            lat: -12.2408795,
            lng: -38.9696583,
            label: 'São João',
            draggable: false
        },
        {
            lat: -12.2486647,
            lng: -38.9193842,
            label: 'SIM',
            draggable: false
        },
        {
            lat: -12.2396778,
            lng: -38.9776827,
            label: 'Sobradinho',
            draggable: false
        },
        {
            lat: -12.2875413,
            lng: -38.9095885,
            label: 'Subaé',
            draggable: false
        },
        {
            lat: -12.2957139,
            lng: -38.9627986,
            label: 'Tomba',
            draggable: false
        },
        {
            lat: -12.2862708,
            lng: -38.9871204,
            label: 'Viveiros',
            draggable: false
        }
    ]
}
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}


