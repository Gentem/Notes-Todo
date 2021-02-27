export interface Note {
  title: string;
  body: string;
  media: string;
  status: string;
  created: Date;
  edited: Date;
  deleted: boolean;
  owner: string;
}
