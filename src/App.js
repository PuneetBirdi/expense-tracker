import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
//LAYOUT COMPONENTS ------------------------
import Expenses from './components/expenses/Expenses';
import AddBtn from './components/layout/AddBtn';
import AddExpenseModal from './components/expenses/AddExpenseModal';
//REDUX STATE ------------------------
import { Provider } from 'react-redux';
import Store from './store';

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={Store}>
      <Fragment>
        <div className='container'>
          <AddBtn />
          <AddExpenseModal />
          <Expenses />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
