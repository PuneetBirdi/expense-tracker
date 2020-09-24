import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expenseActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const ExpenseItem = ({ expense, deleteExpense }) => {
  const onDelete = () => {
    deleteExpense(expense.id);
    M.toast({ html: `Expense deleted` });
  };

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <li className='collection-item'>
      <div className=''>
        <span style={{ fontWeight: 'bold', fontSize: '1.0rem' }}>
          {capitalizeFirst(expense.name)} - $
          {parseFloat(expense.amount).toFixed(2)}
        </span>
        <br />
        <span>{capitalizeFirst(expense.category)}</span>
        <br />
        <span className='grey-text'>
          <Moment format='MMMM Do YYYY h:mm:ss a'>{expense.date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(null, { deleteExpense })(ExpenseItem);
