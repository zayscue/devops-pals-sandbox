import React from 'react';
import { connect } from 'react-redux';
import IntegrationModals from './IntegrationModals';
import IntegrationDropdown from './IntegrationsDropdown';
import IntegrationsTable from './IntegrationsTable';

import bitbucket from '../../assets/bitbucket.png';
import jira from '../../assets/jira.png';
import octopusDeploy from '../../assets/octopusDeploy.png';
import outlook from '../../assets/outlook.png';
import slack from '../../assets/slack.png';

const icons = {
  'Bitbucket Server': bitbucket,
  Jira: jira,
  'Octopus Deploy': octopusDeploy,
  'E-Mail': outlook,
  Calendar: outlook,
  Slack: slack
};

function IntegrationsComponent({
  integrations,
  integrationTypes,
  addIntegration,
  removeIntegration
}) {
  return (
    <>
      <div className="row">
        <div className="col-10">
          <h1>Third Party Service Integrations</h1>
        </div>
        <IntegrationDropdown
          icons={icons}
          integrationTypes={integrationTypes}
        />
      </div>
      <br />
      <IntegrationModals
        integrationTypes={integrationTypes}
        addIntegration={addIntegration}
      />
      <IntegrationsTable
        icons={icons}
        integrations={integrations}
        removeIntegration={removeIntegration}
      />
    </>
  );
}

export default connect()(IntegrationsComponent);
