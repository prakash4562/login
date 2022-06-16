import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panna',
  templateUrl: './panna.component.html',
  styleUrls: ['./panna.component.css']
})
export class PannaComponent implements OnInit {

  pannas = [
    {image: '../../assets/photos/panna/panna%20samiti.svg', text: 'Total Panna', count: '20'},
    {image: '../../assets/photos/panna/panna-with-vistarak.svg', text: 'Panna with Vistarak', count: '12'},
    {image: '../../assets/photos/panna/panna%20samiti.svg', text: 'Panna Pramukh', count: '14'},
    {image: '../../assets/photos/panna/panna%20samiti.svg', text: 'Panna Samiti', count: '14'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
