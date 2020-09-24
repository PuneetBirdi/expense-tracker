import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import Preloader from '../layout/Preloader';
import SearchBar from '../layout/SearchBar';
import PropTypes from 'prop-types';
import { getExpenses } from '../../actions/expenseActions';

const Expenses = ({ expenses: { expenses }, loading, getExpenses }) => {
  useEffect(() => {
    getExpenses();
    //eslint-disable-next-line
  }, []);

  if (loading || expenses === null) {
    return <Preloader />;
  } else {
    const total = expenses.reduce((prev, curr) => {
      return prev + parseFloat(curr.amount);
    }, 0);
    return (
      <ul className='collection with-header'>
        <li className='collection-header blue white-text'>
          <h4 className='center' style={{ fontWeight: 'bold' }}>
            Expense Tracker
          </h4>
        </li>
        <SearchBar />
        <li className='collection-item'>
          <div className=''>
            <h5 className='center' style={{ fontWeight: 'bold' }}>
              Total: ${total.toFixed(2)}
            </h5>
          </div>
        </li>
        {!loading && expenses.length === 0 ? (
          <p className='center'>No expenses to show.</p>
        ) : (
          expenses.map((expense) => (
            <ExpenseItem expense={expense} key={expense.id} />
          ))
        )}
      </ul>
    );
  }
};

Expenses.propTypes = {
  expenses: PropTypes.object.isRequired,
  getExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  loading: state.expenses.loading,
});

export default connect(mapStateToProps, { getExpenses })(Expenses);
