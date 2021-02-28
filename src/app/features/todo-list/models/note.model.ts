export interface Note {
  id: string;
  title: string;
  body: string;
  media: string;
  status: string;
  created: {
    seconds: number;
  };
  edited: {
    seconds: number;
  };
  deleted: boolean;
  owner: string;
}
