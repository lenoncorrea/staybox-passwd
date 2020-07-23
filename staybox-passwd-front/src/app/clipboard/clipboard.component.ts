import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // onMouse() {
  //   let tooltip = document.getElementById("myTooltip");
  //   tooltip.innerHTML = "Copiar";
  // };

  // copyPassword() {
  //   let copyText = document.getElementById("input");
  //   copyText.select();
  //   document.execCommand("copy");
  //   let tooltip = document.getElementById("myTooltip");
  //   tooltip.innerHTML = "Copiado";
  // };

}
