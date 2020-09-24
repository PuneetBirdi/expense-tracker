import {
  GET_EXPENSES,
  SET_LOADING,
  EXPENSE_ERROR,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSES,
} from '../actions/types';

const initialState = {
  expenses: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload.reverse(),
        loading: false,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
        loading: false,
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
        loading: false,
      };
    case SEARCH_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EXPENSE_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
