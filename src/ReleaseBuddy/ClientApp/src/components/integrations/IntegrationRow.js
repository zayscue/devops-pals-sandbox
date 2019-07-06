import React from 'react';
import trashcan from '../../assets/icons/trashcan.svg';

function IntegrationRow({ icon, integration, removeIntegration }) {
  return (
    <tr>
      <td>
        <img src={icon} alt={integration.type.name} width="25" height="25" />
      </td>
      <td>{integration.id}</td>
      <td>{integration.nickName}</td>
      <td>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => removeIntegration(integration.id)}
        >
          <img
            src={trashcan}
            alt={`Remove ${integration.nickName}`}
            width="25"
            height="25"
          />
        </button>
      </td>
    </tr>
  );
}

export default IntegrationRow;
