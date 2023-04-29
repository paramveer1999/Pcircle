import { Injectable } from '@angular/core';
import { IDetails, IVendorDetails } from '../Interface/response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }



  getList(): IVendorDetails[] {
    return [
      {
        date: new Date(),
        name: 'Competitive Intelligence',
        entities: 0,
        _id: 'azs12qswe'
      },
      {
        date: new Date(),
        name: 'My Vendors',
        entities: 10,
        _id: 'bzs12qswe'
      },
      {
        date: new Date(),
        name: 'My Customers',
        entities: 0,
        _id: 'czs12qswe'
      },
      {
        date: new Date(),
        name: 'Custom',
        entities: 20,
        _id: 'czs12qswe'
      },
      {
        date: new Date(),
        name: 'TO_index',
        entities: 20,
        _id: 'czs12qswe'
      },
      {
        date: new Date(),
        name: 'TEST_30_results',
        entities: 0,
        _id: 'czs12qswe'
      },
      {
        date: new Date(),
        name: 'TO_index',
        entities: 20,
        _id: 'czs12qswe'
      },
      {
        date: new Date(),
        name: 'TEST_30_results',
        entities: 20,
        _id: 'czs12qswe'
      },
      {
        date: new Date(),
        name: 'Mumbai',
        entities: 20,
        _id: 'czs12qswe'
      },
      {
        date: new Date(),
        name: 'TWO_Companies',
        entities: 20,
        _id: 'czs12qswe'
      },
      {
        date: new Date(),
        name: 'Halidram',
        entities: 20,
        _id: 'czs12qswe'
      },
      {
        date: new Date(),
        name: 'MaxWell',
        entities: 20,
        _id: 'czs12qswe'
      },
    ]

  }

  getDetails(id: string): IDetails[] {
    return [
      {
        name: 'Puma Sports India Private Limited',
        _id: 'azs12ji87hsq'
      },
      {
        name: 'Infosys Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Vodafone Idea Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Puma Sports India Private Limited',
        _id: 'azs12ji87hsq'
      },
      {
        name: 'Vodafone Idea Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Puma Sports India Private Limited',
        _id: 'azs12ji87hsq'
      },
      {
        name: 'Infosys Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Vodafone Idea Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Vodafone Idea Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Infosys Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Infosys Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Think & Learn Private Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'TCS PVT Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Infosys Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Think & Learn Private Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Infosys Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'TCS PVT Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Think & Learn Private Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Infosys Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Think & Learn Private Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Infosys Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'TCS PVT Limited',
        _id: 'fd12aaaq1234df'
      },
      {
        name: 'Think & Learn Private Limited',
        _id: 'fd12aaaq1234df'
      },
    ]
  }
}
