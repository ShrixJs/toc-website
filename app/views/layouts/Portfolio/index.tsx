import React, { FC } from 'react';
import TabView from '../../common/TabView';
import ProjectGallery from './components/ProjectGallery';
import ProductOverview from './components/ProductOverview';
import useFetchImages from '../../hooks/useFetchImages';

import './styles.css';

const Portfolio: FC = () => {
  const { images, isLoading } = useFetchImages({ width: 200, height: 200, count: 35 });

  const getTabImages = (start: number, end: number) => images.slice(start, end);
  const tabs = [{ label: 'Tab One', range: [0, 8] }, { label: 'Tab Two', range: [8, 16] }, { label: 'Tab Three', range: [16, 24] }];
  const products = [
    { label: 'Product One', image: images[images.length - 1] },
    { label: 'Product Two', image: images[images.length - 2] },
    { label: 'Product Three', image: images[images.length - 3] },
  ];

  return !isLoading && (
    <section className="portfolio-container">
      <div id="our-work" className="portfolio-container">
        <h4 className="portfolio-title">Our Work</h4>
        <TabView direction="horizontal">
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
        <h4 className="portfolio-title">Our products</h4>
        <TabView direction="vertical">
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
