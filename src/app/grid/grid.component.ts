import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SavedList } from '../models/dto';
import { FakeDataService } from '../services/fake-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  savedList!: Array<SavedList>;
  filterdList!: Array<SavedList>;
  searchController = new FormControl('');

  selectedItem!: SavedList | undefined;

  constructor(private dataService: FakeDataService) {}

  ngOnInit(): void {
    this.savedList = this.dataService.savedList;
    this.filterdList = this.savedList;
    this.initSubscribres();
  }

  onSelectItem(item: SavedList) {
    this.selectedItem = item;
  }

  private initSubscribres() {
    this.searchController.valueChanges.subscribe((term: string) => {
      this.selectedItem = undefined;
      term = term.trim().toLowerCase();
      this.filterdList = this.savedList.filter((item) => {
        return item.name.toLowerCase().includes(term);
      });
    });
  }
}
