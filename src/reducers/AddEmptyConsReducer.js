// @flow

import {
	ADD_EMPTY_CONS_INPUT,
} from '../actions/types';

type
State = boolean;

type
Action = {
	type: ADD_EMPTY_CONS_INPUT,
};

export default (state: State = false, action: Action): boolean => {
	switch (action.type) {
		case ADD_EMPTY_CONS_INPUT:
			return true;
	}
	return state;
}

