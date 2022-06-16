import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booth',
  templateUrl: './booth.component.html',
  styleUrls: ['./booth.component.css']
})
export class BoothComponent implements OnInit {

  booths = [
    {image: '../../assets/photos/booth/total-booths.svg',text: 'Total Booth', count: '20'},
    {image: '../../assets/photos/booth/booth-assigned.svg',text: 'Booth Assigned', count: '12'},
    {image: '../../assets/photos/booth/booth-president-appointed.svg',text: 'Booth President Appointed', count: '14'},
    {image: '../../assets/photos/booth/general-secretary.svg',text: 'General Secretary', count: '14'},
    {image: '../../assets/photos/booth/bla.svg',text: 'BLA', count: '06'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
