import React, { useReducer, useEffect } from 'react';
import { getBranches } from '../services';

function reducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'LOAD_BRANCHES':
      newState.branches = action.branches;
      return newState;
    default:
      return state;
  }
}

function BranchList() {
  const [current, setCurrent] = useReducer(reducer, { branches: [] });

  useEffect(() => {
    getBranches('ced', 'iq').then(response => {
      setCurrent({ type: 'LOAD_BRANCHES', branches: response.values });
    });
  }, []);

  return (
    <div>
      <h2>Branches</h2>
      <ul>
        {current.branches.map(branch => (
          <Branch key={branch.id} id={branch.id} displayId={branch.displayId} />
        ))}
      </ul>
    </div>
  );
}

function Branch(props) {
  return <li>{props.displayId}</li>;
}

export default BranchList;
