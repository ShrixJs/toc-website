import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import TabView from '../../common/TabView';
import ProjectGallery from './components/ProjectGallery';
import ProductOverview from './components/ProductOverview';
import useFetchImages from '../../hooks/useFetchImages';

import './styles.css';

const Portfolio: FC = () => {
  const { images, isLoading } = useFetchImages({ width: 200, height: 200, count: 35 });

  const getTabImages = (start: number, end: number) => images.slice(start, end);
  const tabs = [{ label: 'Tab 1', range: [0, 8] }, { label: 'Tab 2', range: [8, 16] }, { label: 'Tab 3', range: [16, 24] }];
  const products = [
    { label: 'Product 1', image: images[images.length - 1] },
    { label: 'Product 2', image: images[images.length - 2] },
    { label: 'Product 3', image: images[images.length - 3] },
  ];

  return !isLoading && (
    <section className="portfolio-container">
      <div id="our-work" className="portfolio-container">
        <h4 className="portfolio-title"><FormattedMessage id="ourWork" /></h4>
        <TabView key="project-gallery" direction="horizontal">
          {
            tabs.map((tab) => (
              <ProjectGallery
                key={tab.label}
                label={tab.label}
                images={getTabImages(tab.range[0], tab.range[1])}
              />
            ))
          }
        </TabView>
      </div>
      <div id="our-products" className="portfolio-container">
        <h4 className="portfolio-title"><FormattedMessage id="ourProducts" /></h4>
        <TabView key="project-overview" direction="vertical">
          {
            products.map((product) => (
              <ProductOverview key={product.label} label={product.label} image={product.image} />
            ))
          }
        </TabView>
      </div>
    </section>
  );
};

export default Portfolio;
