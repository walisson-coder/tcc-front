import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pageFazerAtividadeAluno',
    pathMatch: 'full'
  },
  {
    path: 'pageLogin',
    loadChildren: () => import('./pages/pageLogin/page_Login.Module').then(m => m.Page_LoginModule)
  },
  {
    path: 'pageMenuAtividadesProfessor',
    loadChildren: () => import('./pages/pageMenuAtividadesProfessor/page_Menu_Atividades_Professor.Module').then(m => m.Page_Menu_Atividades_ProfessorModule)
  },
  {
    path: 'pageCadastrarProfessor',
    loadChildren: () => import('./pages/pageCadastrarProfessor/pageCadastrarProfessor.module').then(m => m.PageCadastrarProfessorModule)
  },
  {
    path: 'pageMenuPrincipalInstituicao',
    loadChildren: () => import('./pages/pageMenuPrincipalInstituicao/page_Menu_Principal_Instituicao.Module').then(m => m.Page_Menu_Principal_InstituicaoModule)
  },
  {
    path: 'pageCadastrarInstituicao',
    loadChildren: () => import('./pages/pageCadastrarInstituicao/cadastrar-instituicao.component.module').then(m => m.CadastrarInstituicaoModule)
  },
  {
    path: 'pageFazerAtividadeAluno',
    loadChildren: () => import('./pages/pageFazerAtividadeAluno/fazer-atividade-aluno.module').then(m => m.FazerAtividadeAlunoModule)
  },
  {
    path: 'pageMenuMinhaAtividadesAluno',
    loadChildren: () => import('./pages/pageMenuMinhaAtividadesAluno/page_Menu_Minha_Atividades_Aluno.Module').then(m => m.Page_Menu_Minha_Atividades_AlunoModule)
  },
  {
    path: 'pageMinhasAtividadesAluno',
    loadChildren: () => import('./pages/pageMinhasAtividadesAluno/page_Minhas_Atividades_Aluno.Module').then(m => m.Page_Minhas_Atividades_AlunoModule)
  },
  {
    path: 'pageCriarAtividadeProfessor',
    loadChildren: () => import('./pages/pageCriarAtividadeProfessor/page_Criar_Atividade_Professor.Module').then(m => m.Page_Criar_Atividade_ProfessorModule)
  },
  {
    path: 'pageCriarAtividadeImgensProfessor',
    loadChildren: () => import('./pages/pageCriarAtividadeImgensProfessor/page_Criar_Atividade_Imagens_Professor.Module').then(m => m.Page_Criar_Atividade_Imagens_ProfessorModule)
  },
  {
    path: 'pageComoFuncionaProfessor',
    loadChildren: () => import('./pages/pageComoFuncionaProfessor/page_Como_Funciona_Professor.Module').then(m => m.Page_Como_Funciona_ProfessorModule)
  },
  {
    path: 'pageMenuMinhaAtividadesProfessor',
    loadChildren: () => import('./pages/pageMenuMinhaAtividadesProfessor/page_Menu_Minha_Atividades_Professor.Module').then(m => m.Page_Menu_Minha_Atividades_ProfessorModule)
  },
  {
    path: 'pageCadastrarNovoAluno',
    loadChildren: () => import('./pages/pageCadastrarNovoAluno/pageCadastrarNovoAluno.Module').then(m => m.PageCadastrarNovoAlunoModule)
  },
  {
    path: 'pageAtividadeRealizadasAlunoProfessor',
    loadChildren: () => import('./pages/pageAtividadeRealizadasAlunoProfessor/page_Atividade_Realizadas_Aluno_Professor.module').then(m => m.page_Atividade_Realizadas_Aluno_ProfessorModule)
  },
  {
    path: 'pageAtividadePendentesAlunoProfessor',
    loadChildren: () => import('./pages/pageAtividadePendentesAlunoProfessor/page_Atividade_Pendentes_Aluno_Professor.Router').then(m => m.Page_Atividade_Pendentes_Aluno_ProfessorRouter)
  },
  {
    path: 'pageCriarAtividadeLetraProfessor',
    loadChildren: () => import('./pages/pageCriarAtividadeLetraProfessor/page_Criar_Atividade_Letra_Professor.Module').then(m => m.Page_Criar_Atividade_Letra_ProfessorModule)
  },
  {
    path: 'pageMinhasAtividadesPesquisaProfessor',
    loadChildren: () => import('./pages/pageMinhasAtividadesPesquisaProfessor/page_Minhas_Atividades_Pesquisa_Professor.Module').then(m => m.Page_Minhas_Atividades_Pesquisa_ProfessorModule)
  },
  {
    path: 'pageCriarAtividadeSilabaProfessor',
    loadChildren: () => import('./pages/pageCriarAtividadeSilabaProfessor/page_Criar_Atividade_Silaba_Professor.Module').then(m => m.Page_Criar_Atividade_Silaba_ProfessorModule)
  },
  {
    path: 'pageCriarAtividadeFinalizacaoProfessor',
    loadChildren: () => import('./pages/pageCriarAtividadeFinalizacaoProfessor/page_Criar_Atividade_Finalizacao_Professor.Module').then(m => m.page_Criar_Atividade_Finalizacao_ProfessorModule)
  },
  {
    path: 'pageMenuPrincipalAluno',
    loadChildren: () => import('./pages/pageMenuPrincipalAluno/page_Menu_Principal_Aluno.Module').then(m => m.Page_Menu_Principal_AlunoModule)
  },
  {
    path: 'pageAlterarAlunoProfessor',
    loadChildren: () => import('./pages/pageAlterarAlunoProfessor/Alterar_Aluno_professor.module').then(m => m.Alterar_Aluno_professorModule)
  },
  {
    path: 'pageMenuPrincipalProfessor',
    loadChildren: () => import('./pages/pageMenuPrincipalProfessor/page_Menu_Principal_Professor.Module').then(m => m.MapModule)
  },
  {
    path: 'pageMenuMeusAlunosProfessor',
    loadChildren: () => import('./pages/pageMenuMeusAlunosProfessor/page_Menu_Meus_Alunos_Professor.Module').then(m => m.Page_Menu_Meus_Alunos_ProfessorModule)
  },
  {
    path: 'pageMeusAlunosProfessor',
    loadChildren: () => import('./pages/pageMeusAlunosProfessor/page_Meus_Alunos_Professor.Module').then(m => m.Page_Meus_Alunos_ProfessorModule)
  },
  {
    path: 'pageMeuAlunoProfessor',
    loadChildren: () => import('./pages/pageMeuAlunoProfessor/page_Meu_Aluno_Professor.Module').then(m => m.Page_Meu_Aluno_ProfessorModule)
  },
  {
    path: 'pageParabenizacaoProfessor',
    loadChildren: () => import('./pages/pageParabenizacaoProfessor/page_Parabenizacao_Professor.Module').then(m => m.Page_Parabenizacao_ProfessorModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
