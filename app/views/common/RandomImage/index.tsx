import React, { FC, useState } from 'react';
import placeHolderImg from '../../assets/images/placeholder.png';

type Props = {
  width: string;
  height: string;
  alt: string;
  className: string;
}

const RandomImage: FC<Props> = ({width, height, alt, className}) => {
  const [hasError, setHasError] = useState(false);
  const src = hasError ? placeHolderImg : `https://picsum.photos/${width}/${height}.webp`;

  const handleError = () => setHasError(true);

  return <img
            className={className}
            src={src}
            alt={alt}
            width={width}
            height={height}
            onError={handleError}
          />
}

export default RandomImage;