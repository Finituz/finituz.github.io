export type titleType = {
  en: string;
  br: string;
};

export type tagsType = {
  en: Array<string>;
  br: Array<string>;
};

export type thumbnailAltType = {
  en: string;
  br: string;
};

export interface dataInterface {
  title: titleType;
  path: string;
  thumbnailPath: string;
  thumbnailAlt: thumbnailAltType;
  likes?: number;
  createdAt: string;
  lastUpdate?: string;
  tags: tagsType;
}
