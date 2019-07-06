import integrationService from './IntegrationService';

const requestIntegrations = 'REQUEST_INTEGRATIONS';
const receiveIntegrations = 'RECEIVE_INTEGRATIONS';
const requestIntegrationTypes = 'REQUEST_INTEGRATION_TYPES';
const receiveIntegrationTypes = 'RECEIVE_INTEGRATION_TYPES';
const addIntegration = 'ADD_INTEGRATION';
const removeIntegration = 'REMOVE_INTEGRATION';
const initialState = {
  integrations: [],
  isLoadingIntegrations: false,
  integrationTypes: [],
  isLoadingIntegrationTypes: false
};

export const actionCreators = {
  requestIntegrations: () => (dispatch, getState) => {
    if (getState().integrations.integrations.count > 0) {
      return;
    }

    dispatch({ type: requestIntegrations });

    return integrationService.getIntegrations().then(response => {
      dispatch({ type: receiveIntegrations, integrations: response });
    });
  },
  requestIntegrationTypes: () => (dispatch, getState) => {
    if (getState().integrations.integrationTypes.count > 0) {
      return;
    }

    dispatch({ type: requestIntegrationTypes });

    return integrationService.getIntegrationTypes().then(response => {
      dispatch({ type: receiveIntegrationTypes, integrationTypes: response });
    });
  },
  addIntegration: integration => dispatch => {
    return integrationService.addIntegration(integration).then(response => {
      dispatch({ type: addIntegration, integration: response });
    });
  },
  removeIntegration: integrationId => dispatch => {
    return integrationService.removeIntegration(integrationId).then(() => {
      dispatch({ type: removeIntegration, integrationId: integrationId });
    });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;
  const newState = { ...state };
  switch (action.type) {
    case requestIntegrations:
      newState.isLoadingIntegrations = true;
      return newState;
    case receiveIntegrations:
      newState.integrations = action.integrations;
      newState.isLoadingIntegrations = false;
      return newState;
    case requestIntegrationTypes:
      newState.isLoadingIntegrationTypes = true;
      return newState;
    case receiveIntegrationTypes:
      newState.integrationTypes = action.integrationTypes;
      newState.isLoadingIntegrationTypes = false;
      return newState;
    case addIntegration:
      newState.integrations = [...newState.integrations, action.integration];
      return newState;
    case removeIntegration:
      newState.integrations = newState.integrations.filter(
        integration => integration.id !== action.integrationId
      );
      return newState;
    default:
      return state;
  }
};
