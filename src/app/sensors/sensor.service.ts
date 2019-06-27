import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  lists = [
    {
      id: "1",
      name: "Sensor 1",
      id_device: "1",
      data: [
        {
          id: "1",
          average: 25,
          data_sensor: [
            {
              humidity: 99,
              hours: "10:07"
            },
            {
              sum: 45,
              hours: "10:08"
            },
            {
              average: 14,
              sum: 34,
              hours: "10:09"
            },
            {
              average: 34,
              sum: 23,
              hours: "10:10"
            },
          ]
        },
        {
          id: "2",
          average: 20,
          data_sensor: [
            {
              average: 17,
              sum: 65,
              hours: "10:07"
            },
            {
              average: 11,
              sum: 76,
              hours: "10:08"
            },
            {
              average: 12,
              sum: 45,
              hours: "10:09"
            },
            {
              average: 18,
              sum: 98,
              hours: "10:10"
            },
          ]
        },
        {
          id: "3",
          average: 28,
          data_sensor: [
            {
              average: 29,
              sum: 13,
              hours: "10:07"
            },
            {
              average: 10,
              sum: 54,
              hours: "10:08"
            },
            {
              average: 9,
              sum: 87,
              hours: "10:09"
            },
            {
              average: 15,
              sum: 56,
              hours: "10:10"
            },
          ]
        },
        {
          id: "4",
          average: 29,
          data_sensor: [
            {
              average: 11,
              sum: 45,
              hours: "10:07"
            },
            {
              average: 12,
              sum: 11,
              hours: "10:08"
            },
            {
              average: 13,
              sum: 12,
              hours: "10:09"
            },
            {
              average: 2,
              sum: 87,
              hours: "10:10"
            },
          ]
        },
        {
          id: "5",
          average: 24,
          data_sensor: [
            {
              average: 7,
              sum: 11,
              hours: "10:07"
            },
            {
              average: 5,
              sum: 9,
              hours: "10:08"
            },
            {
              average: 9,
              sum: 13,
              hours: "10:09"
            },
            {
              average: 3,
              sum: 14,
              hours: "10:10"
            },
          ]
        },
        {
          id: "6",
          average: 28,
          data_sensor: [
            {
              average: 94,
              sum: 11,
              hours: "10:07"
            },
            {
              average: 12,
              sum: 76,
              hours: "10:08"
            },
            {
              average: 65,
              sum: 67,
              hours: "10:09"
            },
            {
              average: 34,
              sum: 47,
              hours: "10:10"
            },
          ]
        }
      ]
    },
    {
      id: "2",
      name: "Sensor 2",
      id_device: "1",
      data: [
        {
          id: "7",
          average: 25,
          data_sensor: [
            {
              average: 10,
              sum: 99,
              hours: "10:07"
            },
            {
              average: 25,
              sum: 45,
              hours: "10:08"
            },
            {
              average: 14,
              sum: 34,
              hours: "10:09"
            },
            {
              average: 34,
              sum: 23,
              hours: "10:10"
            },
          ]
        },
        {
          id: "8",
          average: 20,
          data_sensor: [
            {
              average: 17,
              sum: 65,
              hours: "10:07"
            },
            {
              average: 11,
              sum: 76,
              hours: "10:08"
            },
            {
              average: 12,
              sum: 45,
              hours: "10:09"
            },
            {
              average: 18,
              sum: 98,
              hours: "10:10"
            },
          ]
        },
        {
          id: "9",
          average: 28,
          data_sensor: [
            {
              average: 29,
              sum: 13,
              hours: "10:07"
            },
            {
              average: 10,
              sum: 54,
              hours: "10:08"
            },
            {
              average: 9,
              sum: 87,
              hours: "10:09"
            },
            {
              average: 15,
              sum: 56,
              hours: "10:10"
            },
          ]
        },
        {
          id: "10",
          average: 29,
          data_sensor: [
            {
              average: 11,
              sum: 45,
              hours: "10:07"
            },
            {
              average: 12,
              sum: 11,
              hours: "10:08"
            },
            {
              average: 13,
              sum: 12,
              hours: "10:09"
            },
            {
              average: 2,
              sum: 87,
              hours: "10:10"
            },
          ]
        }
      ]
    },
    {
      id: "3",
      name: "Sensor 3",
      id_device: "1",
      data: [
        {
          id: "11",
          average: 15,
          data_sensor: [
            {
              average: 10,
              sum: 99,
              hours: "10:07"
            },
            {
              average: 25,
              sum: 45,
              hours: "10:08"
            },
            {
              average: 14,
              sum: 34,
              hours: "10:09"
            },
            {
              average: 34,
              sum: 23,
              hours: "10:10"
            },
          ]
        },
        {
          id: "12",
          average: 45,
          data_sensor: [
            {
              average: 17,
              sum: 65,
              hours: "10:07"
            },
            {
              average: 11,
              sum: 76,
              hours: "10:08"
            },
            {
              average: 12,
              sum: 45,
              hours: "10:09"
            },
            {
              average: 18,
              sum: 98,
              hours: "10:10"
            },
          ]
        },
        {
          id: "13",
          average: 28,
          data_sensor: [
            {
              average: 29,
              sum: 13,
              hours: "10:07"
            },
            {
              average: 10,
              sum: 54,
              hours: "10:08"
            },
            {
              average: 9,
              sum: 87,
              hours: "10:09"
            },
            {
              average: 15,
              sum: 56,
              hours: "10:10"
            },
          ]
        },
        {
          id: "14",
          average: 29,
          data_sensor: [
            {
              average: 11,
              sum: 45,
              hours: "10:07"
            },
            {
              average: 12,
              sum: 11,
              hours: "10:08"
            },
            {
              average: 13,
              sum: 12,
              hours: "10:09"
            },
            {
              average: 2,
              sum: 87,
              hours: "10:10"
            },
          ]
        },
      ]
    },
    {
      id: "4",
      name: "Sensor 4",
      id_device: "2",
      data: [
        {
          id: "15",
          average: 15,
          data_sensor: [
            {
              average: 10,
              sum: 99,
              hours: "10:07"
            },
            {
              average: 25,
              sum: 45,
              hours: "10:08"
            },
            {
              average: 14,
              sum: 34,
              hours: "10:09"
            },
            {
              average: 34,
              sum: 23,
              hours: "10:10"
            },
          ]
        },
        {
          id: "16",
          average: 45,
          data_sensor: [
            {
              average: 17,
              sum: 65,
              hours: "10:07"
            },
            {
              average: 11,
              sum: 76,
              hours: "10:08"
            },
            {
              average: 12,
              sum: 45,
              hours: "10:09"
            },
            {
              average: 18,
              sum: 98,
              hours: "10:10"
            },
          ]
        },
        {
          id: "17",
          average: 28,
          data_sensor: [
            {
              average: 29,
              sum: 13,
              hours: "10:07"
            },
            {
              average: 10,
              sum: 54,
              hours: "10:08"
            },
            {
              average: 9,
              sum: 87,
              hours: "10:09"
            },
            {
              average: 15,
              sum: 56,
              hours: "10:10"
            },
          ]
        },
        {
          id: "18",
          average: 29,
          data_sensor: [
            {
              average: 11,
              sum: 45,
              hours: "10:07"
            },
            {
              average: 12,
              sum: 11,
              hours: "10:08"
            },
            {
              average: 13,
              sum: 12,
              hours: "10:09"
            },
            {
              average: 2,
              sum: 87,
              hours: "10:10"
            },
          ]
        },
      ]
    }
  ];
  datas = [];
  data: any;
  data_sensor: any;
  
  constructor() { }
}
