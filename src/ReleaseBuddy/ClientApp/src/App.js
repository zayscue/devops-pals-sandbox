import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import IntegrationsContainer from './components/integrations/IntegrationsContainer';

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/integrations" component={IntegrationsContainer} />
  </Layout>
);
