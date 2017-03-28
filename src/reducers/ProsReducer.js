// @flow

import {
	UPDATE_PROS,
} from '../actions/types';

const INITIAL_STATE = [
	"first pros",
	"second pros",
	""
];

type State = Array<string>;

type Action = {
	type: UPDATE_PROS,
	text: string,
	id: number
};

export default (state: State = INITIAL_STATE, action: Action): Array<string> => {
	switch (action.type) {
		case UPDATE_PROS:
			if ( action.id >= state.length ) {
				return [...state, action.text];
			}else if (action.text === ''){
				return[...state.slice(0,action.id), ...state.slice(action.id+1)]
			}else{
				return[...state.slice(0,action.id), action.text, ...state.slice(action.id+1)];
			}
	}
	return state;
}

