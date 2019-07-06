import React from 'react';

function Modal({ id, title, saveText, hideSave, children, onSubmit }) {
  return (
    <div
      className="modal fade"
      id={id}
      role="dialog"
      aria-labelledby={id}
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`{id}Label`}>
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            {!hideSave && (
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={onSubmit}
              >
                {saveText ? saveText : 'Save changes'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
