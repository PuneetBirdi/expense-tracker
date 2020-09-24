import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense } from '../../actions/expenseActions';

const AddExpenseModal = ({ addExpense }) => {
  //COMPONENT STATE --------------------------
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const onSubmit = () => {
    if (name === '' || amount === '' || category === '') {
      M.toast({ html: 'All fields are required.', classes: 'red' });
      return false;
    } else {
      const newExpense = {
        name,
        amount,
        category,
        date: new Date(),
      };
      addExpense(newExpense);

      setName('');
      setAmount('');
      setCategory('');
      return true;
    }
  };

  return (
    <div id='add-expense-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Expense</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='number'
              name='amount'
              value={amount}
              step='.01'
              placeholder='$00.00'
              max={10000}
              onChange={(e) => setAmount(e.target.value)}
            />
            <label htmlFor='amount' className='active'>
              Amount
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='category'
              value={category}
              className='browser-default'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='' disabled>
                Select Category
              </option>
              <option value='food'>Food</option>
              <option value='transportation'>Transportation</option>
              <option value='bills'>Bills</option>
              <option value='Entertainment'>Entertainment</option>
            </select>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close blue waves-effect waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddExpenseModal.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '50%',
  height: '50%',
};

export default connect(null, { addExpense })(AddExpenseModal);
