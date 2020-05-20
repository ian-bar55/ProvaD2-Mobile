import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  inicializarAluno() {
    let objetoAluno = {
      nome: 'Daniel de Nobrega da Silva',
      idade: 21,
      RA: 118112901
    };
    return objetoAluno;
  }
}
