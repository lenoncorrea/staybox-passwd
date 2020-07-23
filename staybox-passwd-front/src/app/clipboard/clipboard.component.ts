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



  onClick = (value) => {
    console.log(value)
    // let copyText = document.getElementById("input");
    // copyText.select();
    document.execCommand("copy");
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado";
  };

  // copyPassword() {
  //   let copyText = document.getElementById("input");
  //   copyText.select();
  //   document.execCommand("copy");
  //   let tooltip = document.getElementById("myTooltip");
  //   tooltip.innerHTML = "Copiado";
  // };

}
