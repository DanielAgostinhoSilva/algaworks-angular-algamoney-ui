import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

import {AppComponent} from './app.component';
import {TooltipModule} from 'primeng/tooltip';
import {LancamentosPesquisaComponent} from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PessoasPesquisaComponent} from './pessoas-pesquisa/pessoas-pesquisa.component';
import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
