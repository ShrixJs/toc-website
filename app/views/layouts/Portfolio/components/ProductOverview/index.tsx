import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import RandomImage from '../../../../common/RandomImage';

import ParameterTable from './components/ParameterTable';
import './styles.css';

type Props = {
  label: string;
  image: string;
};

const ProductOverview: FC<Props> = ({ label, image }) => (
  <div className="product-details" id={label}>
    <div className="product-overview">
      <RandomImage alt="work photo" link={image} hasError={!image} className="pr-photo" />
      <div className="product-description">
        <h4><FormattedMessage id={label} /></h4>
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

export default ProductOverview;
