import {
  GET_EXPENSES,
  SET_LOADING,
  EXPENSE_ERROR,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSES,
} from './types';

// get expenses from server
export const getExpenses = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/expenses');
    const data = await res.json();
    dispatch({
      type: GET_EXPENSES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXPENSE_ERROR,
      payload: error.response.statusText,
    });
  }
};

//Add new expense
export const addExpense = (expense) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/expenses', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_EXPENSE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXPENSE_ERROR,
      payload: error.response.statusText,
    });
  }
};

//Delete expense
export const deleteExpense = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/expenses/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_EXPENSE,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: EXPENSE_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Search expenses from server
export const searchExpenses = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/expenses?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_EXPENSES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EXPENSE_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
