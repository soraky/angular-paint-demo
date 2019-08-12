export class Drawing {
  id: string;
  name: string;
  content: Array<{
    width: number;
    color: string;
    coordinates: Array<{
      x: number;
      y: number;
    }>;
  }>;
}

export class Content {
  width: number;
  color: string;
  coordinates: Array<{
    x: number;
    y: number;
  }>;
}
