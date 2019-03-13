import { NgModule } from '@angular/core';
import { PocContaComponent } from './poc-conta.component';
import { PocArquiteturaModule } from 'poc-arquitetura';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PocContaComponent],
  imports: [CommonModule, PocArquiteturaModule],
  exports: [PocContaComponent]
})
export class PocContaModule { }
