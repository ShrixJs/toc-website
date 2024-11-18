/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import placeHolderImg from '../../assets/images/placeholder.png';

type Props = {
  link?: string;
  alt: string;
  hasError: boolean;
  className?: string;
};

const RandomImage: FC<Props> = ({ link, hasError, alt, className }) => {
  const src = hasError ? placeHolderImg : link;

  return (
    <img
      src={src}
      className={className}
      alt={alt}
    />
  );
};

export default RandomImage;
