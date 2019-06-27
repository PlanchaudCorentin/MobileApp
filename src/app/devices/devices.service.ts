import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

    lists = [
        {
            name: 'Device 1',
            id: '1',
            data: [
            ]
        },
        {
            name: 'Device 2',
            id: '2',
            data: [
            ]
        },
        {
            name: 'Device 3',
            id: '3',
            data: [
            ]
        },
        {
            name: 'Device 4',
            id: '4',
            data: [
            ]
        },
    ];
  constructor() {}

}
