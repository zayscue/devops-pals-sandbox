import React from 'react';
import BitbucketServerIntegrationForm from './BitbucketServerIntegrationForm';
import Modal from '../Modal';

function IntegrationModals({ integrationTypes, integration, addIntegration }) {
  function toModalId(integrationTypeId) {
    return `modal_${integrationTypeId}`;
  }

  function renderModalByIntegrationType(integrationType) {
    switch (integrationType.name) {
      case 'Bitbucket Server':
        return (
          <BitbucketServerIntegrationForm
            key={toModalId(integrationType.id)}
            id={toModalId(integrationType.id)}
            type={integrationType}
            integration={integration}
            addIntegration={addIntegration}
          />
        );
      default:
        return (
          <Modal
            key={toModalId(integrationType.id)}
            id={toModalId(integrationType.id)}
            title="Not Supported"
            hideSave="true"
          >
            <p>Integration Type Not Supported!</p>
          </Modal>
        );
    }
  }

  return (
    <div id="integrationModals" className="row">
      <div className="col">
        {integrationTypes.map(integrationType =>
          renderModalByIntegrationType(integrationType)
        )}
      </div>
    </div>
  );
}

export default IntegrationModals;
