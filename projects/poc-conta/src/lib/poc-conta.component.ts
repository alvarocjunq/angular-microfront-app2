import { Component, OnInit } from '@angular/core';
import { ContextService } from 'poc-arquitetura';

@Component({
  selector: 'poc-poc-conta',
  template: `
  <p>
    Aplicação de Conta Corrente
  </p>
  <br>
  <p>
   Dados de Contexto: <br> {{data | json}}
  </p>
  `,
  styles: []
})
export class PocContaComponent implements OnInit {

  data: any;

  constructor(private contextService: ContextService) { }

  ngOnInit() {
    this.data = { ...this.contextService.data };
  }

}
