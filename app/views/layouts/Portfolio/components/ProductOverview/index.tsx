import React, { FC } from 'react';
import useImage from '../../../../hooks/useImage';
import RandomImage from '../../../../common/RandomImage';

import './styles.css';
import ParameterTable from './components/ParameterTable';

type Props = {
  label: string;
};

const ProductOverview: FC<Props> = ({ label }) => {
  const { resources, hasError } = useImage({ type: 'single', width: 200, height: 200 });

  return (
    <div className="product-details" id={label}>
      <div className="product-overview">
        {resources.map((img) => <RandomImage alt="work photo" link={img} hasError={hasError} className="pr-photo" />)}
        <div className="product-description">
          <h4>{label}</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Sint possimus perspiciatis illo enim voluptatum mollitia,
            eveniet recusandae, dolore deleniti itaque quis ducimus quam
            inventore molestiae laborum quasi optio.
          </p>
        </div>
      </div>
      <ParameterTable />
    </div>
  );
};

export default ProductOverview;
