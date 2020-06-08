import React, {useEffect} from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs, deleteTech } from '../../actions/techActions'

const TechListModal = ({getTechs, deleteTech, tech: {techs, loading}}) => {
   useEffect (() =>{
      getTechs();
      //eslint-disable-next-line
   }, [])


   return (
      <div id='tech-list-modal' className='modal'>
        <div className='modal-content'>
          <h4>Technician List</h4>
          <ul className='collection'>
            {!loading &&
              techs !== null &&
              techs.map(tech => (
                 <TechItem tech={tech} key={tech.id}/>
              ))}
          </ul>
        </div>
      </div>
    );
  };

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
  deleteTech: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  tech: state.tech,
})
export default connect(mapStateToProps, { getTechs, deleteTech })(TechListModal);