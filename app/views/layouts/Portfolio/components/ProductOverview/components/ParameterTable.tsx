import React, { FC } from 'react';

import './style.css';

const parameters = [
  { parameter: 'Param 1', value: 'Green' },
  { parameter: 'Param 2', value: 'Blue' },
  { parameter: 'Param 3', value: 'Red' },
  { parameter: 'Param 4', value: 'Yellow' },
];

const ParameterTable: FC = () => (
  <div className="table-container">
    <table className="parameter-table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {parameters.map((param) => (
          <tr key={param.value}>
            <td>{param.parameter}</td>
            <td>{param.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ParameterTable;
