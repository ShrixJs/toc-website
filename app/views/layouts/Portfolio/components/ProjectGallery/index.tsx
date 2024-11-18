import React, { FC } from 'react';
import useImage from '../../../../hooks/useImage';
import RandomImage from '../../../../common/RandomImage';

import './styles.css';

type Props = {
  label: string;
  page: number;
};

const ProjectGallery: FC<Props> = ({ label, page }) => {
  const { resources, hasError } = useImage({ type: 'list', page, limit: 8 });

  return (
    <div className="work-gallery" id={label}>
      {resources.map((img) => <RandomImage alt="work photo" link={img} hasError={hasError} className="work-photo" />)}
    </div>
  );
};

export default ProjectGallery;
