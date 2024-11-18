import { ApiImage } from './types';

export const getSingleImage = async (width: number, height: number) => {
  const response = await fetch(`https://picsum.photos/${width}/${height}.webp`);
  const blob = await response.blob();

  return URL.createObjectURL(blob);
};

export const getImageList = async (page: number, limit: number): Promise<Array<ApiImage>> => {
  const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
  const imageList = await response.json();

  return imageList;
};
