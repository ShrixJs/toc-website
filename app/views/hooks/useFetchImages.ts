import { useState, useEffect } from 'react';
import getImages from '../../infrastructure/ApiClient';

interface UseFetchImagesProps {
  width: number;
  height: number;
  count: number;
}

interface UseFetchImagesReturn {
  images: string[];
  isLoading: boolean;
  error: Error | null;
}

const useFetchImages = ({
  width,
  height,
  count,
}: UseFetchImagesProps): UseFetchImagesReturn => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const newImages = await getImages(width, height, count);
        setImages(newImages || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch images'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, isLoading, error };
};

export default useFetchImages;
