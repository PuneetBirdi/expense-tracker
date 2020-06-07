import React, {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
//LAYOUT COMPONENTS ------------------------
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
//REDUX STATE ------------------------
import { Provider } from 'react-redux';
import Store from './store';



const App = () => {
  useEffect(() =>{
    //Initialize Materialize JS
    M.AutoInit();
  });


  return (
    <Provider store = {Store}>
      <Fragment>
        <SearchBar/>
        <div className="container">
          <AddBtn/>
          <AddLogModal/>
          <EditLogModal/>
          <AddTechModal/>
          <TechListModal/>
          <Logs/>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
