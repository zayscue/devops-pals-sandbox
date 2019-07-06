import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from './IntegrationsStore';
import IntegrationsComponent from './IntegrationsComponent';

function IntegrationsContainer({
  requestIntegrations,
  requestIntegrationTypes,
  addIntegration,
  removeIntegration,
  integrations,
  integrationTypes
}) {
  useEffect(() => {
    requestIntegrations();
    requestIntegrationTypes();
  }, [requestIntegrations, requestIntegrationTypes]);
  return (
    <IntegrationsComponent
      integrations={integrations}
      integrationTypes={integrationTypes}
      addIntegration={addIntegration}
      removeIntegration={removeIntegration}
    />
  );
}

export default connect(
  state => state.integrations,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(IntegrationsContainer);
