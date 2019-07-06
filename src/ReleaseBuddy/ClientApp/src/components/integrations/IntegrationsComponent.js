import React, { useReducer, useEffect } from 'react';
import IntegrationModals from './IntegrationModals';
import IntegrationDropdown from './IntegrationsDropdown';
import IntegrationsTable from './IntegrationsTable';
import integrationService from './IntegrationService';

import bitbucket from '../../assets/bitbucket.png';
import jira from '../../assets/jira.png';
import octopusDeploy from '../../assets/octopusDeploy.png';
import outlook from '../../assets/outlook.png';
import slack from '../../assets/slack.png';

function reducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'LOAD_INTEGRATION_TYPES':
      newState.integrationTypes = action.integrationTypes;
      return newState;
    case 'LOAD_INTEGRATIONS':
      newState.integrations = action.integrations;
      return newState;
    case 'ADD_INTEGRATION':
      newState.integrations = [...newState.integrations, action.integration];
      return newState;
    case 'REMOVE_INTEGRATION':
      newState.integrations = newState.integrations.filter(
        integration => integration.id !== action.integrationId
      );
      return newState;
    case 'SET_INTEGRATION_TYPE':
      newState.integrationType = action.integrationType;
      return newState;
    default:
      return state;
  }
}

function IntegrationsComponent() {
  const [current, setCurrent] = useReducer(reducer, {
    icons: {
      'Bitbucket Server': bitbucket,
      Jira: jira,
      'Octopus Deploy': octopusDeploy,
      'E-Mail': outlook,
      Calendar: outlook,
      Slack: slack
    },
    integrationTypes: [],
    integrations: []
  });

  useEffect(() => {
    integrationService.getIntegrationTypes().then(response => {
      setCurrent({
        type: 'LOAD_INTEGRATION_TYPES',
        integrationTypes: response
      });
    });
    integrationService.getIntegrations().then(response => {
      setCurrent({
        type: 'LOAD_INTEGRATIONS',
        integrations: response
      });
    });
  }, []);

  function addIntegration(integration) {
    return integrationService.addIntegration(integration).then(response => {
      setCurrent({
        type: 'ADD_INTEGRATION',
        integration: response
      });
    });
  }

  function removeIntegration(integrationId) {
    integrationService.removeIntegration(integrationId).then(() => {
      setCurrent({
        type: 'REMOVE_INTEGRATION',
        integrationId: integrationId
      });
    });
  }

  return (
    <>
      <div className="row">
        <div className="col-10">
          <h1>Third Party Service Integrations</h1>
        </div>
        <IntegrationDropdown
          icons={current.icons}
          integrationTypes={current.integrationTypes}
        />
      </div>
      <br />
      <IntegrationModals
        integrationTypes={current.integrationTypes}
        addIntegration={addIntegration}
      />
      <IntegrationsTable
        icons={current.icons}
        integrations={current.integrations}
        removeIntegration={removeIntegration}
      />
    </>
  );
}

export default IntegrationsComponent;
