import { combineReducers } from 'redux';
import QuotesAttempted from './reducer_quotes_attempted';
import LastDateAttempted from './reducer_last_date_attempted';

const rootReducer = combineReducers({
  amount: QuotesAttempted,
  lastDate: LastDateAttempted
});

export default rootReducer;
