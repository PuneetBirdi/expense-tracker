import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

//Destructuring the redux state prop, including the getLogs action.
const Logs = ({log: {logs, loading}, getLogs}) => {

   useEffect (() =>{
      getLogs();
      //eslint-disable-next-line
   }, [])

   if(loading || logs === null ){
      return <Preloader/>
   }
   return (
      <ul className="collection with-header">
         <li className="collection-header">
            <h4 className="center">
               System Logs
            </h4>
         </li>
         {!loading && logs.length === 0 ? (<p className="center">No logs to show.</p>) :
            logs.map(log => 
            <LogItem
               log={log}
               key={log.id}
            />)
         }
      </ul>
   )
}

Logs.propTypes = {
   logs: PropTypes.object.isRequired,
   getLogs: PropTypes.func.isRequired
}


//This function connects the component to Redux, and imports the state into the component AS A PROP
const mapStateToProps = state => ({
   log: state.log
});

//NOTE that when you bring an an action, it also gets brought in as a prop.

export default connect(mapStateToProps, {getLogs})(Logs);