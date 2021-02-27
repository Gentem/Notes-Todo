export interface Note {
  title: string;
  body: string;
  media: string;
  status: string;
  created: {
    seconds: number;
    nanoseconds: number;
  };
  edited: {
    seconds: number;
    nanoseconds: number;
  };
  deleted: boolean;
  owner: string;
}
