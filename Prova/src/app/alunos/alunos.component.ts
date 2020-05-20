import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: Aluno = {} as Aluno;

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.getAluno();
  }

  getAluno() {
    this.aluno = this.alunosService.inicializarAluno();
  }
}
