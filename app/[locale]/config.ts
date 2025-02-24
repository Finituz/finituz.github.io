"use server";

interface title {
  en: string;
  br: string;
}

export interface dataInterface {
  title: title;
  path: string;
  thumbnail: string;
  thumbnailAlt: string;
  likes: number;
  createdAt: string;
  tags: Array<string>;
}
