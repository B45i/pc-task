import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { SavedList } from '../models/dto';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  data = [
    new SavedList('Competitive Intelligence'),
    new SavedList('My Vendors'),
    new SavedList('My Customers'),
  ];

  get savedList(): Array<SavedList> {
    return this.data;
  }

  get randomAttached(): Array<string> {
    const attached: Array<string> = [];

    for (let i = 0; i < Math.floor(Math.random() * 20) + 1; i++) {
      attached.push(
        `${faker.company.companyName()} ${faker.company.companySuffix()}`
      );
    }

    return attached;
  }

  constructor() {
    for (let i = 0; i < Math.floor(Math.random() * 30) + 15; i++) {
      this.data.push(
        new SavedList(
          faker.company.companyName(),
          faker.date.past(),
          Math.random() < 0.5 ? faker.company.bs() : undefined,
          Math.random() < 0.5 ? this.randomAttached : undefined,
          Math.floor(Math.random() * 30) + 15
        )
      );
    }
  }
}
