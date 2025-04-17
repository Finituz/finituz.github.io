import { useEffect, useState } from "react";

export type titleType = {
  en: string;
  br: string;
};

export type tagsType = {
  en: Array<string>;
  br: Array<string>;
  common?: Array<string>;
};

export interface dataInterface {
  title: titleType;
  path: string;
  manual?: boolean;
  thumbnail: string;
  thumbnailAlt: string;
  likes: number;
  createdAt: string;
  tags: tagsType;
}

export const GetLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("");

  useEffect(() => setCurrentLanguage(document.documentElement.lang), []);

  return { currentLanguage };
};
