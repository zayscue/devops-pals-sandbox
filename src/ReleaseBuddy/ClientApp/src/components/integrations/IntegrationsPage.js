import React from 'react';
import { connect } from 'react-redux';
import IntegrationsComponent from './IntegrationsComponent';

function IntegrationsPage() {
  return <IntegrationsComponent />;
}

export default connect()(IntegrationsPage);
