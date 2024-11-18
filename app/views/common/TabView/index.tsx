import React, { FC, ReactElement, useState } from 'react';
import './styles.css';

type TabProps = { label: string };

type Props = {
  children: ReactElement<TabProps>[];
  direction: 'horizontal' | 'vertical';
};

const TabView: FC<Props> = ({ children, direction = 'horizontal' }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`tab-view ${direction}`}>
      <div className="tab-controls">
        {React.Children.map(children, (child, index) => (
          <button
            type="button"
            key={child.props.label}
            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};

export default TabView;
