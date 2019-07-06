const getIntegrationTypes = function() {
  const url = encodeURI(`api/integrationtypes`);
  return fetch(url).then(res => {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return res.json();
  });
};

const BASE_URI = 'api/integrations';

const getIntegrations = function() {
  const url = encodeURI(BASE_URI);
  return fetch(url).then(res => {
    if (res.status >= 400) {
      throw new Error('Bad resonse from server');
    }
    return res.json();
  });
};

const addIntegration = function(integration) {
  const url = encodeURI(`api/integrations`);
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(integration)
  }).then(res => {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return res.json();
  });
};

const removeIntegration = function(integrationId) {
  const url = encodeURI(`api/integrations/${integrationId}`);
  return fetch(url, {
    method: 'delete'
  }).then(res => {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
  });
};

const integrationService = {
  getIntegrationTypes,
  getIntegrations,
  addIntegration,
  removeIntegration
};

export default integrationService;
