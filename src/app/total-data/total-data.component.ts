import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-data',
  templateUrl: './total-data.component.html',
  styleUrls: ['./total-data.component.css']
})
export class TotalDataComponent implements OnInit {
  flag = false
  count;

  total_data = [
    {count: '1.', name: 'Yatin', mobile: '8888800000', zila: 'Morena',
      ac_name: 'Joura', mandal: '253; 252; 29', assigned_booth: '1',
      booth_president: '1', general_secretary: '0', bla: '1', member:'1',
    total_panna: '21', panna_samiti_member: '21', panna_pramukh: '1', key_voter: '1'},
    {count: '2.', name: 'Yatin', mobile: '8888800000', zila: 'Morena',
      ac_name: 'Joura', mandal: '253; 252; 29', assigned_booth: '1',
      booth_president: '1', general_secretary: '0', bla: '1', member:'1',
      total_panna: '21', panna_samiti_member: '21', panna_pramukh: '1', key_voter: '1'},
    {count: '3.', name: 'Yatin', mobile: '8888800000', zila: 'Morena',
      ac_name: 'Joura', mandal: '253; 252; 29', assigned_booth: '1',
      booth_president: '1', general_secretary: '0', bla: '1', member:'1',
      total_panna: '21', panna_samiti_member: '21', panna_pramukh: '1', key_voter: '1'},
    {count: '4.', name: 'Yatin', mobile: '8888800000', zila: 'Morena',
      ac_name: 'Joura', mandal: '253; 252; 29', assigned_booth: '1',
      booth_president: '1', general_secretary: '0', bla: '1', member:'1',
      total_panna: '21', panna_samiti_member: '21', panna_pramukh: '1', key_voter: '1'},
    {count: '5.', name: 'Yatin', mobile: '8888800000', zila: 'Morena',
      ac_name: 'Joura', mandal: '253; 252; 29', assigned_booth: '1',
      booth_president: '1', general_secretary: '0', bla: '1', member:'1',
      total_panna: '21', panna_samiti_member: '21', panna_pramukh: '1', key_voter: '1'},
    {count: '6.', name: 'Yatin', mobile: '8888800000', zila: 'Morena',
      ac_name: 'Joura', mandal: '253; 252; 29', assigned_booth: '1',
      booth_president: '1', general_secretary: '0', bla: '1', member:'1',
      total_panna: '21', panna_samiti_member: '21', panna_pramukh: '1', key_voter: '1'},
    {count: '7.', name: 'Yatin', mobile: '8888800000', zila: 'Morena',
      ac_name: 'Joura', mandal: '253; 252; 29', assigned_booth: '1',
      booth_president: '1', general_secretary: '0', bla: '1', member:'1',
      total_panna: '21', panna_samiti_member: '21', panna_pramukh: '1', key_voter: '1'},
    {count: '8.', name: 'Yatin', mobile: '8888800000', zila: 'Morena',
      ac_name: 'Joura', mandal: '253; 252; 29', assigned_booth: '1',
      booth_president: '1', general_secretary: '0', bla: '1', member:'1',
      total_panna: '21', panna_samiti_member: '21', panna_pramukh: '1', key_voter: '1'},
    {count: '9.', name: 'Yatin', mobile: '8888800000', zila: 'Morena',
      ac_name: 'Joura', mandal: '253; 252; 29', assigned_booth: '1',
      booth_president: '1', general_secretary: '0', bla: '1', member:'1',
      total_panna: '21', panna_samiti_member: '21', panna_pramukh: '1', key_voter: '1'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  editData(count) {
    alert("Are you want to edit?")
    this.flag = true
    this.count = count
    document.getElementById('table-form')
  }

  updateData() {
    this.flag = false
    let objIndex = this.total_data.findIndex((obj => obj.count == this.count));
    const name = (<HTMLInputElement>document.getElementById('name')).value
    const mobile = (<HTMLInputElement>document.getElementById('mobile')).value
    const zila = (<HTMLInputElement>document.getElementById('zila')).value
    const ac_name = (<HTMLInputElement>document.getElementById('ac_name')).value

    this.total_data[objIndex].name = name
    this.total_data[objIndex].mobile = mobile
    this.total_data[objIndex].zila = zila
    this.total_data[objIndex].ac_name = ac_name
  }

  deleteData(count) {
    alert("Are you want to delete?")
    this.total_data.splice(count-1, 1)
  }

}
