import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.css']
})
export class GeneratePasswordComponent implements OnInit {

  constructor(private api:ApiService) { }

  characters = "";
  length = "20";
  newLength = "20";
  pwd= "";
  upperCase = true;
  lowerCase = true;
  numeric = "";
  symbol = "";
  typing = false;
  typingTimeout = 0;

  ngOnInit(): void {
  }

  // const { upperCase, lowerCase, numeric, symbol, length } = this.state;
  //   let pwd = new RandomPassword()
      // let setLength = length;
      // let setLowerCase = lowerCase;
      // setUpperCase(upperCase);
      // setNumberCase(numeric);
      // setSymbol(symbol);
  //     .generate();
  //   this.setState({ pwd });

  setLength(length) {
    length = length;
    return this;
  };
  setUpperCase(isUpperCase) {
    if (isUpperCase) {
      // this.characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      this.characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      console.log(this.characters);
    };
    return this;
  };
  setLowerCase(isLowerCase) {
    if (isLowerCase) {
      this.characters += "abcdefghijklmnopqrstuvwxyz";
    };
    return this;
  };
  setNumberCase(isNumeric) {
    if (isNumeric) {
      this.characters += "0123456789";
    };
    return this;
  };
  setSymbol(isSymbolic) {
    if (isSymbolic) {
      this.characters += "!@$%&*()<>.?/[]{}-=_+";
    };
    return this;
  };

  generate() {
    // let characters = this.characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    // console.log(characters);
    let characterList = this.characters;
    if (characterList.length <= 0) {
      return "Selecione ao menos uma opção abaixo para gerar a senha!";
    }
    else {
      // console.log("Aqui");
    }
    var password = "";
    for (let i = 0; i < length; ++i) {
      password += characterList[getRandomInt(0, characterList.length - 1)];
    }
    console.log(password);
  };

  // click() {
  //   this.api.getAllPasswords().subscribe(
  //     data => {
  //       // this.members = data
  //       console.log(data);
  //     },
  //     error => {
  //       console.log("Aconteceu um erro", error.message);
  //     }
  //   );
    // console.log(data);
    // console.log("console");
  // };

}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
