import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-voters',
  templateUrl: './key-voters.component.html',
  styleUrls: ['./key-voters.component.css']
})
export class KeyVotersComponent implements OnInit {

  keyVoters = [
    {name: 'Elected Representative', count: '20'},
    {name: 'Self Help Group', count: '20'},
    {name: 'Advocate', count: '20'},
    {name: 'Buisnessmen', count: '20'},
    {name: 'Retired Teachers', count: '20'},
    {name: 'Teachers', count: '20'},
    {name: 'Labour', count: '20'},
    {name: 'Social Leader', count: '20'},
    {name: 'Priest/Religious Leader', count: '20'},
    {name: 'Doctor', count: '20'},
    {name: 'Social Worker', count: '20'},
    {name: 'Asha Worker', count: '20'},
    {name: 'Aaganwadi Worker', count: '20'},
    {name: 'HomeMaker/HouseWife', count: '20'},
    {name: 'Student', count: '20'},
    {name: 'Farmer', count: '20'},
    {name: 'Others', count: '20'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
