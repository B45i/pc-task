import { Injectable } from '@angular/core';
import * as faker from 'faker';

class SavedList {
  // todo move to model folder
  constructor(
    public name: string,
    public date?: Date,
    public description?: string,
    public attched?: Array<string>,
    public entries?: number
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  data = [
    new SavedList('Competitive Intelligence'),
    new SavedList('My Vendors'),
    new SavedList('My Customers'),
  ];

  attached: Array<string> = [];

  get savedList(): Array<SavedList> {
    return this.data;
  }

  constructor() {
    for (let i = 0; i < Math.floor(Math.random() * 20) + 1; i++) {
      this.attached.push(
        `${faker.company.companyName()} ${faker.company.companySuffix()}`
      );
    }

    for (let i = 0; i < Math.floor(Math.random() * 30) + 15; i++) {
      this.data.push(
        new SavedList(
          faker.company.companyName(),
          faker.date.past(),
          i % 2 === 0 ? faker.company.bs() : undefined,
          this.attached,
          Math.floor(Math.random() * 30) + 15
        )
      );
    }
  }
}
