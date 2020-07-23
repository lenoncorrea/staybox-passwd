import { Component } from '@angular/core';
import { GeneratePasswordComponent } from './generate-password/generate-password.component';
import { ClipboardComponent } from './clipboard/clipboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'staybox-passwd-front';
  member = "";

    constructor(private generatePasswd:GeneratePasswordComponent, private clipboard:ClipboardComponent) { }

  generatePassword = () => {
    this.generatePasswd.generate();
    // console.log("click");
  };

  // onMouseOut = () => {
  //   this.clipboard.onMouse();
  // };

  onMouseOut = () => {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiar";
  };

  onClickMouse = () => {
    let copyText = document.getElementById("input");
    // copyText.getAttribute();
    console.log(copyText);
    // this.clipboard.onClick(value);
  };

}
