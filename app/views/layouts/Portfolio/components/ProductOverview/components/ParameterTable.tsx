import React, { FC } from 'react';

import './style.css';
import { FormattedMessage } from 'react-intl';

const parameters = [
  { title: 'Param 1', value: 'green' },
  { title: 'Param 2', value: 'blue' },
  { title: 'Param 3', value: 'red' },
  { title: 'Param 4', value: 'yellow' },
];

const ParameterTable: FC = () => (
  <div className="table-container">
    <table className="parameter-table">
      <thead>
        <tr>
          <th><FormattedMessage id="parameter" /></th>
          <th><FormattedMessage id="value" /></th>
        </tr>
      </thead>
      <tbody>
        {parameters.map((param) => (
          <tr key={param.value}>
            <td>{param.title}</td>
            <td><FormattedMessage id={param.value} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ParameterTable;
