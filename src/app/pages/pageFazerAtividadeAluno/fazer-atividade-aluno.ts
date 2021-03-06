import { element } from 'protractor';
import { Component, AfterViewInit } from '@angular/core';
import {CdkDragDrop, CdkDragEnter, CdkDragHandle, CdkDragRelease, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fazer-atividade-aluno',
  templateUrl: 'fazer-atividade-aluno.html',
  styleUrls: ['./fazer-atividade-aluno.scss']
})
export class FazerAtividadeAluno implements AfterViewInit {
  public palavraList = ['no', 'Ri', 'te', 'ron','ce'];

  public palavra = 'Rinoceronte';
  public palavra2 = 'Arara';

  public validaPalavra : Boolean = false;
  
  public palavrasToSelec = ['Arara', 'Morcego', 'Rinoceronte', 'Aranha'];
  public palavraSelected = [];
  public palavra2Selected = [];

  public palavraSortList = ['no', 'Ri', 'te', 'ron','ce'];
  public palavraListValidation = ['Ri', 'no', 'ce', 'ron','te'];
  public palavraSortListSelected = ['RI', 'no', 'ce', 'ron','te'];

  public palavraListSize = this.palavraSortList.length;
  
  public acertouAtividade1: Boolean = false;
  public acertouAtividade2item1: Boolean = false;
  public acertouAtividade2item2: Boolean = false;
  public acertouAtividade3: Boolean = false;
  public acertou:Boolean = false;
  public acertouRemove:Boolean = true;
  router: any;
  public tipoAtividade: number = 1; //Controlador de Atividade
  public palavraSelected2List = [];
  public palavraSelected2Shuffle = [];
  public palavrasToSelec2 = ['Ri', 'no', 'ce', 'ron','te'];
  public palavrasToSelec2Random = ['ron','te', 'ce', 'Ri','no'];
  public audioCard = new Audio();
  public audioAtividade = new Audio();
  public msg = new SpeechSynthesisUtterance();
  //'

  public palavraSelected2fb = this.fb.group({
    id: [null],
    nome: [null],
    acerto: [false]
  });
  loginForm = this.fb.group({
    tipo: ['', Validators.required]
  });

  constructor(
    public fb: FormBuilder) {}

  ngAfterViewInit(): void {
    this.playAudioSuccess();
    this.setAudioTranslate();
    
    for (let index = 0; index < this.palavrasToSelec2.length; index++) {
      this.palavraSelected2fb.get('id').setValue(index);
      this.palavraSelected2fb.get('nome').setValue(this.palavrasToSelec2[index]);
      this.palavraSelected2List.push(this.palavraSelected2fb.value);
    }

    for (let index = 0; index < this.palavrasToSelec2Random.length; index++) {
      this.palavraSelected2fb.get('id').setValue(index);
      this.palavraSelected2fb.get('nome').setValue(this.palavrasToSelec2Random[index]);
      this.palavraSelected2Shuffle.push(this.palavraSelected2fb.value);
    }
  }
  setAudioTranslate(){
    this.msg.volume = 0.8;
    this.msg.rate = 0.8; 
    this.msg.pitch = 0.8; 
    this.msg.lang = "pt-BR";
    this.msg.text ="";
  }

  playAudioSuccess(){
    this.audioCard.src = "../../../assets/atividades/success.mp3";
    this.audioCard.load();

    this.audioAtividade.src = "../../../assets/atividades/atividade_success.mp3";
    this.audioAtividade.load();
    
  }


  validarPalavraAtividade5(item: any) {
    this.palavraSelected2List.forEach(x => {
      if(x.id == item.id){
        x.acerto = true;
        speechSynthesis.pause;
        this.audioCard.play();
        setTimeout(()=>{                
          this.msg.text = item.nome;
          this.audioAtividade.pause;
          speechSynthesis.speak(this.msg);
        }, 350);
      }
    });

    this.palavraSelected2Shuffle.forEach(x => {
      if(x.nome == item.nome){
        x.acerto = true;
      }
    });

    if(this.palavraSelected2List.find(x => x.acerto == false)){
      return;
    }
      setTimeout(()=>{                
        this.msg.text =  this.palavra;
        this.audioAtividade.pause;
        speechSynthesis.speak(this.msg);
      }, 500);
   
    setTimeout(()=>{
      this.acertou = true;
      this.acertouRemove = false;
      speechSynthesis.pause;
      this.audioAtividade.play();
    }, 1000);
  }
  //

  atividade1Touched(){
    console.log("event")
  // const item = event.srcElement.innerText;
  // this.msg.text = item;
  // speechSynthesis.speak(this.msg);
  }


  validacaoAtividade1(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.palavraList, event.previousIndex, event.currentIndex);
    let palavraConcatenada: string = '';
    this.palavraList.forEach(x => palavraConcatenada += x);


    if(this.palavra == palavraConcatenada){
      setTimeout(()=>{                
        this.msg.text = this.palavra;
        this.audioAtividade.pause;
        speechSynthesis.speak(this.msg);
      }, 500);
      setTimeout(()=>{                
        this.acertouAtividade1 = true;
        this.acertou = true;
        this.acertouRemove = false;
        this.audioAtividade.play();
   }, 1000);

    }
    else {
      this.acertouAtividade1 = false;
    }
  }


  validarPalavraAtividade2(event: CdkDragDrop<string[]>) {
    this.validaPalavra = event.previousContainer.data[event.previousIndex] == this.palavra;

    if (this.validaPalavra) {
      setTimeout(()=>{                
        this.msg.text =  this.palavra;
        this.audioAtividade.pause;
        speechSynthesis.speak(this.msg);
      }, 500);

      this.acertouAtividade2item1 = true;
      
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if(this.acertouAtividade2item2 == true){
        setTimeout(()=>{
          this.acertou = true;
          this.acertouRemove = false;
          this.audioAtividade.play();
     }, 1200);

      }
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }


  validarPalavra2Atividade2(event: CdkDragDrop<string[]>) {
    this.validaPalavra = event.previousContainer.data[event.previousIndex] == this.palavra2;

    if (this.validaPalavra) {
      this.acertouAtividade2item2 = true;
      setTimeout(()=>{                
        this.msg.text =  this.palavra2;
        this.audioAtividade.pause;
        speechSynthesis.speak(this.msg);
      }, 500);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if(this.acertouAtividade2item1 == true){
        setTimeout(()=>{                          
          this.acertou = true;
          this.acertouRemove = false;
          this.audioAtividade.play();
     }, 1000);

      }
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  validarPalavraAtividade3(event: CdkDragDrop<string[]>) {
    this.validaPalavra = event.previousContainer.data[event.previousIndex] == this.palavra;

    if (this.validaPalavra) {
      this.acertouAtividade3 = true;
      setTimeout(()=>{                
        this.msg.text =  this.palavra;
        this.audioAtividade.pause;
        speechSynthesis.speak(this.msg);
      }, 500);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      setTimeout(()=>{     
        this.acertou = true;
        this.acertouRemove = false;
        this.audioAtividade.play();
   }, 1000);

    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }


  validarPalavraAtividade4(event: CdkDragDrop<string[]>) {
    this.validaPalavra = event.previousContainer.data[event.previousIndex] == this.palavra2;
    setTimeout(()=>{                
      this.msg.text =  this.palavra2;
      this.audioAtividade.pause;
      speechSynthesis.speak(this.msg);
    }, 500);

    if (this.validaPalavra) {
      this.acertouAtividade2item2 = true;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
 
  
  //APENAS PARA APRESENTA????O
  //
  //
  //
  //
  //
  //
  //
  
  public atividade1ExerNumberTotal:number = 2;  
  public atividade2ExerNumberTotal:number = 6;
  public atividade3ExerNumberTotal:number = 4;
  public atividade4ExerNumberTotal:number = 1;
  public exercicioAtual: number = 1;
  public tipoAtividadeAtual: number = 1;
  public img1: String = "../../../assets/atividades/atividade"+this.tipoAtividadeAtual+"exe"+1+"img1.jpg";
  public img2: String = "../../../assets/atividades/atividade"+this.tipoAtividadeAtual+"exe"+1+"img2.jpg";

  resetGeneric(){
    this.palavraSelected = [];
    this.palavra2Selected = [];
    this.acertouAtividade1 = false;
    this.acertouAtividade2item1 = false;
    this.acertouAtividade2item2  = false;
    this.acertouAtividade3 = false;
    this.acertou  = false;
    this.acertouRemove = true;
  }

  case1(){
    if(this.exercicioAtual != this.atividade1ExerNumberTotal){
      switch(this.atividade1ExerNumberTotal){
        case 1:
          this.palavraList = ['no', 'Ri', 'te', 'ron','ce'];
          this.palavra = 'Rinoceronte';
          this.palavraSortList = ['no', 'Ri', 'te', 'ron','ce'];
          this.palavraListValidation = ['Ri', 'no', 'ce', 'ron','te'];
          this.palavraSortListSelected = ['RI', 'no', 'ce', 'ron','te'];
          this.palavraListSize = this.palavraSortList.length;
          break;
        case 2:  
          this.palavraList = ['nho', 'se', 'De',];
          this.palavra = 'Desenho'; 
          this.palavraSortList = ['nho', 'se', 'De',];
          this.palavraListValidation = ['De', 'se', 'nho'];
          this.palavraSortListSelected = ['De', 'se', 'nho'];
          this.palavraListSize = this.palavraSortList.length;
          break;
      }
      this.exercicioAtual++;
    }else{
      this.palavraList = ['no', 'Ri', 'te', 'ron','ce'];
      this.palavra = 'Rinoceronte';
      this.palavraSortList = ['no', 'Ri', 'te', 'ron','ce'];
      this.palavraListValidation = ['Ri', 'no', 'ce', 'ron','te'];
      this.palavraSortListSelected = ['RI', 'no', 'ce', 'ron','te'];
      this.palavraListSize = this.palavraSortList.length;
      this.exercicioAtual = 1;
      this.tipoAtividade = 2;
      this.img1 = "../../../assets/atividades/atividade"+this.tipoAtividadeAtual+"exe"+this.exercicioAtual+"img1.jpg";
      this.img2 = "../../../assets/atividades/atividade"+this.tipoAtividadeAtual+"exe"+this.exercicioAtual+"img2.jpg";
      this.case2();
    }
  }
  case2(){
    if(this.exercicioAtual != this.atividade2ExerNumberTotal){
      this.img1 = "../../../assets/atividades/atividade"+this.tipoAtividadeAtual+"exe"+this.exercicioAtual+"img1.jpg";
      this.img2 = "../../../assets/atividades/atividade"+this.tipoAtividadeAtual+"exe"+this.exercicioAtual+"img2.jpg";
      switch(this.exercicioAtual){
        case 1:
          this.resetGeneric();
          this.palavra = 'Rinoceronte';
          this.palavra2 = 'Arara';
          this.palavrasToSelec = ['Arara', 'Morcego', 'Rinoceronte', 'Aranha'];
          break;
        case 2:
          this.resetGeneric();
          this.palavra = '??rvore';
          this.palavra2 = 'Folha';
          this.palavrasToSelec = ['??rvore', 'Galho', 'Terra', 'Folha'];
          break;
        case 3:
          this.resetGeneric();
          this.palavra = 'Bola';
          this.palavra2 = 'Dado';
          this.palavrasToSelec = ['Caneta', 'Dado', 'Bola', 'Sol'];
          break;
        case 4:
          this.resetGeneric();
          this.palavra = 'Boneca';
          this.palavra2 = 'Her??i';
          this.palavrasToSelec = ['L??pis', 'Carro', 'Her??i', 'Boneca'];
          break;
        case 5:
          this.resetGeneric();
          this.palavra = 'Cachorro';
          this.palavra2 = 'Gato';
          this.palavrasToSelec = ['Cachorro', 'Arara', 'Gato', 'Peixe'];
          break;
        case 6:
          this.resetGeneric();
          this.palavra = 'Caderno';
          this.palavra2 = 'L??pis';
          this.palavrasToSelec = ['L??pis', 'Borracha', 'Caderno', 'Dado'];
          break;
      }
      this.exercicioAtual++;
    } else{
      this.tipoAtividadeAtual = 2;
      this.tipoAtividade = 3;
      this.exercicioAtual = 1;
      this.case3();
    }
  }
  case3(){
    if(this.exercicioAtual != this.atividade3ExerNumberTotal){
      this.tipoAtividadeAtual = 2;
      this.img1 = "../../../assets/atividades/atividade"+this.tipoAtividadeAtual+"exe"+this.exercicioAtual+"img1.jpg";
      switch(this.exercicioAtual){
        case 1:
          this.resetGeneric();
          this.palavra = 'Carro';
          this.palavrasToSelec = ['Carro', 'Borracha', 'Caderno', 'Dado'];
          break;
        case 2:
          this.resetGeneric();
          this.palavra = 'Linha';
          this.palavrasToSelec = ['L??pis', 'Linha', 'Caderno', 'Dado'];
          break;
        case 3:
          this.resetGeneric();
          this.palavra = '??nibus';
          this.palavrasToSelec = ['L??pis', 'Borracha', 'Caderno', '??nibus'];
          break;
        case 4:
          this.resetGeneric();
          this.palavra = 'Pipa';
          this.palavrasToSelec = ['??nibus', 'Borracha', 'Pipa', 'Dado'];
          break;
      }
      this.exercicioAtual++;
    }else{
      this.tipoAtividade = 4;
      this.exercicioAtual = 1;
      this.palavra = 'Rinoceronte';
      this.palavrasToSelec2 = ['Ri', 'no', 'ce', 'ron','te'];
    }      
  }
  case4(){
    if(this.exercicioAtual != this.atividade4ExerNumberTotal){
      switch(this.exercicioAtual){
        case 1:
          this.resetGeneric();
          this.palavra = 'Rinoceronte';
          this.palavrasToSelec2 = ['Ri', 'no', 'ce', 'ron','te'];
          this.palavraSelected2List = [];
          break;
      }
      this.exercicioAtual++;
    }else{
      this.tipoAtividade =0;
       window.location.reload();
    }      
  }

  irVoltar() {

    this.resetGeneric();
      
    switch(this.tipoAtividade){
      case 1:
        this.case1();
        break;  
      case 2:
          this.case2();
        break;
        case 3:
          this.case3();
          break;
        case 4:
          this.case4();
          break;

    }
    //this.router.navigateByUrl('/pageLogin');
  }


}