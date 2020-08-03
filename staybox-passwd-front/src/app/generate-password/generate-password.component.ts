import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.css']
})
export class GeneratePasswordComponent implements OnInit {

  constructor(private api:ApiService) { }
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%&*()<>.?/[]{}-=_+";
  length:number = 20;

  ngOnInit(): void {
  }

  setLength = (length) => {
    this.length = length;
  };

  setUpperCase = (isUpperCase) => {
    if (isUpperCase) {
      this.characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      this.characters = this.characters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
    };
  };

  setLowerCase = (isLowerCase) => {
    if (isLowerCase) {
      this.characters += "abcdefghijklmnopqrstuvwxyz";
    } else {
      this.characters = this.characters.replace("abcdefghijklmnopqrstuvwxyz", "");
    };
  };

  setNumberCase = (isNumeric) => {
    if (isNumeric) {
      this.characters += "0123456789";
    } else {
      this.characters = this.characters.replace("0123456789", "");
    };
  };

  setSymbol = (isSymbolic) => {
    if (isSymbolic) {
      this.characters += "!@$%&*()<>.?/[]{}-=_+";
    } else {
      this.characters = this.characters.replace("!@$%&*()<>.?/[]{}-=_+", "");
    };
  };

  generate = () => {
    let characterList = this.characters;
    if (this.length >= 10 && this.length <=40) {
      if (characterList.length <= 0) {
        return "Selecione ao menos uma opção abaixo para gerar a senha!";
      }
      var password = "";
      for (let i = 0; i < this.length; ++i) {
        password += characterList[getRandomInt(0, characterList.length - 1)];
      };
      return password
    } else {
      return "Insira um valor de 10 à 40!";
    }
  };
}

  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
