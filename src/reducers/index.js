import { combineReducers } from 'redux';
import ProsReducer from './ProsReducer';
import ConsReducer from './ConsReducer';
import AddEmptyProsReducer from './AddEmptyProsReducer';
import AddEmptyConsReducer from './AddEmptyConsReducer';

const rootReducer = combineReducers({
	pros: ProsReducer,
	cons: ConsReducer,
	onLastPros: AddEmptyProsReducer,
	onLastCons: AddEmptyConsReducer,
});

export default rootReducer;
