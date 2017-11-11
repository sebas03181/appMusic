import { Song } from "./song";

export class Lista {
  _id: number;
  title: string;
  summary: string;
  categoria: string;
  canciones: Song[];
}
