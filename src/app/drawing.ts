export class Drawing {
  id: string;
  name: string;
  creator: string;
  private: boolean;
  date: string;
  time: number;
  content: Array<Content>;
}

export class Content {
  width: number;
  color: string;
  coordinates: Array<{
    x: number;
    y: number;
  }>;
}
