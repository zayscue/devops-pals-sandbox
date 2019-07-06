import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import IntegrationsPage from './components/integrations/IntegrationsPage';

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/integrations" component={IntegrationsPage} />
  </Layout>
);
