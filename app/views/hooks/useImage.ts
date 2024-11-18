/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getSingleImage, getImageList } from '../../infrastructure/ApiClient';
import { ApiImage } from '../../infrastructure/types';

type Status = {
  isLoading: boolean;
  hasError: boolean;
  error: string | null;
};

type ImageListOptions = {
  limit: number;
  page: number;
};

type SingleImageOptions = {
  width: number;
  height: number;
};

type RequestOptions =
| ({ type: 'list' } & ImageListOptions)
| ({ type: 'single' } & SingleImageOptions);

const useImage = (requestOptions: RequestOptions) => {
  const [status, setStatus] = useState<Status>({ isLoading: true, hasError: false, error: null });
  const [resources, setResources] = useState<string[]>([]);

  useEffect(() => {
    const fetchResources = async (): Promise<void> => {
      try {
        if (requestOptions.type === 'single') {
          const image = await getSingleImage(requestOptions.width, requestOptions.height);
          setResources([image]);
          setStatus({ ...status, isLoading: false });
          return;
        }

        const imageList = await getImageList(requestOptions.page, requestOptions.limit);
        setResources(imageList?.map((image: ApiImage) => image.download_url) || []);
        setStatus({ ...status, isLoading: false });
      } catch (e) {
        setStatus({ ...status, isLoading: false, hasError: true, error: e.message });
      }
    };

    fetchResources();
  }, []);

  return { resources, ...status };
};

export default useImage;
