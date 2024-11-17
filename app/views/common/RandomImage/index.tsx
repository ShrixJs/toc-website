import React, { FC, useState } from 'react';
import placeHolderImg from '../../assets/images/placeholder.png';

type Props = {
  width: string;
  height: string;
  alt: string;
  className?: string;
};

const RandomImage: FC<Props> = ({ width, height, alt, className }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const src = hasError || isLoading ? placeHolderImg : `https://picsum.photos/${width}/${height}.webp`;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoading(false)}
    />
  );
};

export default RandomImage;
