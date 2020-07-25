import { Component } from '@angular/core';
import { GeneratePasswordComponent } from './generate-password/generate-password.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'staybox-passwd-front';
  length = "";
  uppercase = "";
  lowercase = "";
  numeric = "";
  symbol = "";
  password = "";
  passwords = "";

  constructor(
    private generatePasswd: GeneratePasswordComponent,
    private clipboard: Clipboard,
    private api: ApiService
    ) { }

  ngOnInit(): void {
    this.generatePassword();
  }

  alterLength = (length) => {
    this.length = length;
    this.generatePasswd.setLength(length);
    this.generatePassword();
  };
  alterUppercase = (uppercase) => {
    this.uppercase = uppercase;
    this.generatePasswd.setUpperCase(uppercase);
    this.generatePassword();
  };
  alterLowerCase = (lowercase) => {
    this.lowercase = lowercase;
    this.generatePasswd.setLowerCase(lowercase);
    this.generatePassword();
  };
  alternumeric = (numeric) => {
    this.numeric = numeric;
    this.generatePasswd.setNumberCase(numeric);
    this.generatePassword();
  };
  altersymbol = (symbol) => {
    this.symbol = symbol;
    this.generatePasswd.setSymbol(symbol);
    this.generatePassword();
  };

  generatePassword = () => {
    this.password = this.generatePasswd.generate();
  };

  onMouseOut = () => {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiar";
  };

  getIpAddress = () => {
    this
    this.clipboard.copy(this.password);
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado";
    this.api.getAllPasswords().subscribe(
      data => {
        this.passwords = data
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };

  copyPassword = (password) => {
    this.clipboard.copy(this.password);
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado";
    this.getIp();
  };

  getIp = () => {
    this.api.getIpAddress().subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log("Aconteceu um erro", error.message);
        }
      );
  };
}
