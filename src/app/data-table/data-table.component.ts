import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  users = [
    {
      name: 'lorem',
      phone: 7055727941,
      address: 'tbi mohali',
      city: 'colombo'
    },
    {
      name: 'lorem',
      phone: 7055727941,
      address: 'tbi mohali',
      city: 'colombo'
    },
     {
      name: 'lorem',
      phone: 7055727941,
      address: 'tbi mohali',
      city: 'colombo'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
