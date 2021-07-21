import { Component, OnInit } from '@angular/core';
import { SavedList } from '../models/dto';
import { FakeDataService } from '../services/fake-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  readonly savedList: Array<SavedList> = this.dataService.savedList;
  filterdList = this.savedList;

  selectedItem!: SavedList;

  constructor(private dataService: FakeDataService) {}

  ngOnInit(): void {}

  onSelectItem(item: SavedList) {
    this.selectedItem = item;
  }
}
