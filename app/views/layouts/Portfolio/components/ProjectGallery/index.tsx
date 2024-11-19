import React, { FC } from 'react';
import RandomImage from '../../../../common/RandomImage';

import './styles.css';

type Props = {
  label: string;
  images: string[];
};

const ProjectGallery: FC<Props> = ({ label, images }) => (
  <div className="work-gallery" id={label}>
    {images.map((img) => <RandomImage alt="work photo" link={img} hasError={!images.length} className="work-photo" />)}
  </div>
);

export default ProjectGallery;
