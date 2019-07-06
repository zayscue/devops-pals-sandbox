import React from 'react';

function IntegrationsDropdown({ icons, integrationTypes }) {
  function getImage(name) {
    return icons[name];
  }

  function onClick(event) {
    event.preventDefault();
  }

  return (
    <div id="integrationsDropdown" className="row">
      <div className="col">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Add Integration
          </button>
          <div className="dropdown-menu">
            {integrationTypes.map(integrationType => (
              <a
                key={integrationType.id}
                id={integrationType.id}
                className="dropdown-item"
                href="/"
                onClick={onClick}
                data-toggle="modal"
                data-target={`#modal_${integrationType.id}`}
              >
                <span>
                  <img
                    src={getImage(integrationType.name)}
                    alt={integrationType.name}
                    width="32"
                    height="32"
                  />
                  &nbsp;&nbsp;{integrationType.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationsDropdown;
