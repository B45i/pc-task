import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../services/fake-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  savedList = this.dataService.savedList;

  constructor(private dataService: FakeDataService) {}

  ngOnInit(): void {}
}
