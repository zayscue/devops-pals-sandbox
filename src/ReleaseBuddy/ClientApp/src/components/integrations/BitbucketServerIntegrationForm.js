import React, {
  useReducer,
  forwardRef,
  useRef,
  useImperativeHandle
} from 'react';
import Modal from '../Modal';

function reducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'SET_ID':
      newState.id = action.id;
      return newState;
    case 'SET_NICK_NAME':
      newState.nickName = action.nickName;
      return newState;
    case 'SET_BASE_URI':
      newState.baseURI = action.baseURI;
      return newState;
    case 'SET_API_KEY':
      newState.apiKey = action.apiKey;
      return newState;
    case 'CLEAR_FORM':
      newState.nickName = 'My Bitbucket Server';
      newState.baseURI = '';
      newState.apiKey = '';
      return newState;
    default:
      return state;
  }
}

const BitbucketServerIntegrationForm = forwardRef(function(props, ref) {
  const [current, setCurrent] = useReducer(reducer, {
    id: props.id || '',
    nickName: props.nickName || 'My Bitbucket Server',
    baseURI: props.baseURI || '',
    apiKey: props.apiKey || '',
    type: props.type || null
  });

  function onNickNameChange(event) {
    const { value } = event.target;
    setCurrent({
      type: 'SET_NICK_NAME',
      nickName: value
    });
  }

  function onBaseURIChange(event) {
    const { value } = event.target;
    setCurrent({
      type: 'SET_BASE_URI',
      baseURI: value
    });
  }

  function onAPIKeyChange(event) {
    const { value } = event.target;
    setCurrent({
      type: 'SET_API_KEY',
      apiKey: value
    });
  }

  function addBitbucketServerIntegration() {
    const integration = {
      nickName: current.nickName,
      props: {
        apiKey: current.apiKey,
        baseURI: current.baseURI
      },
      type: props.type
    };
    props.addIntegration(integration).then(() => {
      setCurrent({ type: 'CLEAR_FORM' });
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    addBitbucketServerIntegration();
  }

  useImperativeHandle(ref, () => ({
    save() {
      addBitbucketServerIntegration();
    }
  }));

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="nickName">Nickname</label>
        <input
          type="text"
          className="form-control"
          id="nickName"
          placeholder="Enter Nickname"
          onChange={onNickNameChange}
          value={current.nickName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="baseURI">Bitbucket Server Address</label>
        <input
          type="text"
          className="form-control"
          id="baseURI"
          placeholder="Enter Bitbucket Server Address"
          onChange={onBaseURIChange}
          value={current.baseURI}
        />
      </div>
      <div className="form-group">
        <label htmlFor="apiKey">API Key</label>
        <input
          type="text"
          className="form-control"
          id="apiKey"
          placeholder="Enter API Key"
          onChange={onAPIKeyChange}
          value={current.apiKey}
        />
      </div>
    </form>
  );
});

function BitbucketServerIntegrationFormModal({
  id,
  type,
  integration,
  addIntegration
}) {
  const childRef = useRef();

  return (
    <Modal
      id={id}
      title="Add Bitbucket Server Configuration"
      onSubmit={() => childRef.current.save()}
      saveText="Create"
    >
      {integration ? (
        <BitbucketServerIntegrationForm
          ref={childRef}
          id={integration.id}
          nickName={integration.nickName}
          baseURI={integration.props.baseURI}
          apiKey={integration.props.apiKey}
          type={type}
          addIntegration={addIntegration}
        />
      ) : (
        <BitbucketServerIntegrationForm
          ref={childRef}
          type={type}
          addIntegration={addIntegration}
        />
      )}
    </Modal>
  );
}

export default BitbucketServerIntegrationFormModal;
