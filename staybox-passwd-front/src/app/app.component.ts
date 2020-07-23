import { Component } from '@angular/core';
import { GeneratePasswordComponent } from './generate-password/generate-password.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'staybox-passwd-front';
  member = "";

  constructor(private generatePasswd:GeneratePasswordComponent) { }

  generatePassword = () => {
    this.generatePasswd.click();
    //   data => {
    //     this.member = data;
    //     console.log("click");
    //   },
    //   error => {
    //     console.log(error.message);
    //   }
    // );
    // console.log("click");
  };

}
