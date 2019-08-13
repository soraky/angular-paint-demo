import { Drawing } from "./drawing";

export const DRAWINGS: Drawing[] = [
  {
    id: "1",
    name: "First",
    creator: "Admin",
    private: false,
    date: "11.8.2019",
    time: 10,
    content: [
      {
        width: 20,
        color: "#ffaabb",
        coordinates: [
          { x: 1, y: 1 },
          { x: 100, y: 200 },
          { x: 12, y: 14 },
          { x: 702, y: 166 }
        ]
      },
      {
        width: 5,
        color: "#00ff00",
        coordinates: [
          { x: 70, y: 800 },
          { x: 420, y: 700 },
          { x: 0, y: 500 },
          { x: 245, y: 0 }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Second",
    creator: "Admin",
    private: false,
    date: "12.8.2019",    
    time: 20,
    content: [
      {
        width: 10,
        color: "#0000ff",
        coordinates: [
          { x: 13, y: 13 },
          { x: 555, y: 564 },
          { x: 123, y: 321 },
          { x: 111, y: 666 }
        ]
      },
      {
        width: 30,
        color: "##aaffff",
        coordinates: [
          { x: 45, y: 99 },
          { x: 600, y: 123 },
          { x: 43, y: 321 },
          { x: 6, y: 99 }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Third",
    creator: "Admin",
    private: false,
    date: "13.8.2019",    
    time: 30,
    content: [
      {
        width: 3,
        color: "#000000",
        coordinates: [
          { x: 1, y: 1 },
          { x: 100, y: 100 },
          { x: 400, y: 400 },
          { x: 500, y: 4 }
        ]
      },
      {
        width: 2,
        color: "##2e3282",
        coordinates: [
          { x: 45, y: 99 },
          { x: 600, y: 123 },
          { x: 43, y: 321 },
          { x: 6, y: 99 }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Fourth",
    creator: "Admin",
    private: true,
    date: "13.8.2019",    
    time: 30,
    content: [
      {
        width: 3,
        color: "#000000",
        coordinates: [
          { x: 1, y: 1 },
          { x: 100, y: 100 },
          { x: 400, y: 400 },
          { x: 500, y: 4 }
        ]
      },
      {
        width: 2,
        color: "##2e3282",
        coordinates: [
          { x: 45, y: 99 },
          { x: 600, y: 123 },
          { x: 43, y: 321 },
          { x: 6, y: 99 }
        ]
      }
    ]
  }  
];
