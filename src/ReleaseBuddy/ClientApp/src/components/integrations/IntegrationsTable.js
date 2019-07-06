import React from 'react';
import IntegrationRow from './IntegrationRow';

function IntegrationsTable({ icons, integrations, removeIntegration }) {
  return (
    <div id="integrationsTable" className="row">
      <div className="col table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: '10%' }} scope="col">
                Type
              </th>
              <th style={{ width: '40%' }} scope="col">
                Id
              </th>
              <th style={{ width: '40%' }} scope="col">
                Nickname
              </th>
              <th style={{ width: '10%' }} scope="col">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {integrations.map(integration => (
              <IntegrationRow
                key={integration.id}
                integration={integration}
                icon={icons[integration.type.name]}
                removeIntegration={removeIntegration}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IntegrationsTable;
