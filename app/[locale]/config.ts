"use server";

export type titleType = {
  en: string;
  br: string;
};

export interface dataInterface {
  title: titleType;
  path: string;
  thumbnail: string;
  thumbnailAlt: string;
  likes: number;
  createdAt: string;
  tags: Array<string>;
}
