import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.css']
})
export class GeneratePasswordComponent implements OnInit {

  members = "";

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  characters = "";

  setLength(length) {
    length = length;
    return this;
  }
  setUpperCase(isUpperCase) {
    if (isUpperCase) {
      this.characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    return this;
  }
  setLowerCase(isLowerCase) {
    if (isLowerCase) {
      this.characters += "abcdefghijklmnopqrstuvwxyz";
    }
    return this;
  }
  setNumberCase(isNumeric) {
    if (isNumeric) {
      this.characters += "0123456789";
    }
    return this;
  }
  setSymbol(isSymbolic) {
    if (isSymbolic) {
      this.characters += "!@$%&*()<>.?/[]{}-=_+";
    }
    return this;
  }
  generate() {
    let characterList = this.characters;
    if (characterList.length <= 0) {
      return "Selecione ao menos uma opção abaixo para gerar a senha!";
    }
    var password = "";
    for (let i = 0; i < length; ++i) {
      password += characterList[getRandomInt(0, characterList.length - 1)];
    }
    return password;
  }

  click() {
    this.api.getAllPasswords().subscribe(
      data => {
        // this.members = data
        console.log(data);
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
    // console.log(data);
    // console.log("console");
  };


}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
