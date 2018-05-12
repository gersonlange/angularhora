import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent implements OnInit {
  hora;
  constructor() {
   }

  ngOnInit() {
    setInterval(() => {
      this.hora = new Date();
    }, 1000);
 }

}
