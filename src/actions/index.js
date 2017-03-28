// @flow

import {
	TEXT_CREATION,
	UPDATE_PROS,
	UPDATE_CONS,
	ADD_EMPTY_PROS_INPUT,
	ADD_EMPTY_CONS_INPUT,
} from './types';

export const updatePros = (text: string, id: number, length: number): ()=> void => {
	return (dispatch: any) => {
		dispatch({ type: UPDATE_PROS, text, id });

		if ( id >= length - 1 ) {
			dispatch({ type: ADD_EMPTY_PROS_INPUT });
		}

	};
};

export const updateCons = (text: string, id: number, length: number): ()=> void => {
	return (dispatch: any) => {
		dispatch({ type: UPDATE_CONS, text, id });

		if ( id >= length - 1 ) {
			dispatch({ type: ADD_EMPTY_CONS_INPUT });
		}

	};
};




