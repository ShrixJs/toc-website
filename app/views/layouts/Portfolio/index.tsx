import React, { FC } from 'react';
import TabView from '../../common/TabView';
import ProjectGallery from './components/ProjectGallery';
import ProductOverview from './components/ProductOverview';

import './styles.css';

const Portfolio: FC = () => (
  <section className="portfolio-container">
    <div id="our-work" className="portfolio-container">
      <h4 className="portfolio-title">Our Work</h4>
      <TabView direction="horizontal">
        <ProjectGallery page={1} label="tab one" />
        <ProjectGallery page={2} label="tab two" />
        <ProjectGallery page={3} label="tab three" />
      </TabView>
    </div>
    <div id="our-products" className="portfolio-container">
      <h4 className="portfolio-title">Our products</h4>
      <TabView direction="vertical">
        <ProductOverview label="productOne" />
        <ProductOverview label="productOne" />
        <ProductOverview label="productOne" />
      </TabView>
    </div>
  </section>
);

export default Portfolio;
