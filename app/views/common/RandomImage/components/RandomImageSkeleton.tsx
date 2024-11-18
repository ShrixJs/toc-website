import React, { FC } from 'react';
import './style.css';

type Props = {
  width: string;
  height: string;
};

const Skeleton: FC<Props> = ({ width, height }) => (
  <div
    className="skeleton-loader"
    style={{
      width,
      height,
    }}
  >
    <div className="skeleton-shimmer" />
  </div>
);

export default Skeleton;
