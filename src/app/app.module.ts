import { BairroService } from './bairro.service';
import { NoticiasService } from './noticias.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Top10Component } from './top10/top10.component';
import { AppRotasModule } from './/app-rotas.module';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import {NgbModule, NgbDatepickerI18n, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n } from 'src/app/CustomDatepickerI18n';
import { NgbDatePTParserFormatter } from 'src/app/NgbDatePTParserFormatter';
import { AgmCoreModule } from '@agm/core';
import { BairrosdetalhesComponent } from './bairrosdetalhes/bairrosdetalhes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Top10Component,
    BairrosdetalhesComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRotasModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjnHA9c01ondNIe8S9pqpIWfEEtzJILWc',
    }),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
     MatCheckboxModule
     
  ],
  providers: [NoticiasService,
    [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
    [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}],
    BairroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
