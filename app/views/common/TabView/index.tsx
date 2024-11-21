import React, { FC, ReactElement, useEffect, useState } from 'react';
import './styles.css';
import { FormattedMessage } from 'react-intl';

type TabProps = { label: string };

type Props = {
  children: ReactElement<TabProps>[];
  direction: 'horizontal' | 'vertical';
};

const TabView: FC<Props> = ({ children, direction = 'horizontal' }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`tab-view ${direction && windowWidth > 768 ? direction : 'horizontal'}`}>
      <div className="tab-controls">
        {React.Children.map(children, (child, index) => (
          <button
            type="button"
            key={child.props.label}
            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <FormattedMessage id={child.props.label} />
          </button>
        ))}
      </div>
      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};

export default TabView;
