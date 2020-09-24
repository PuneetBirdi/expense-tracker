import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchExpenses } from '../../actions/expenseActions';

export const SearchBar = ({ searchExpenses }) => {
  const text = useRef('');

  const onChange = (e) => {
    searchExpenses(text.current.value);
  };

  return (
    <nav style={{ marginBottom: '30px ' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Filter'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchExpenses: PropTypes.func.isRequired,
};
export default connect(null, { searchExpenses })(SearchBar);
