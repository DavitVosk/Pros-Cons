// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCons } from '../actions';

type
Props = {
	cons: Array < string >,
	onLastCons: boolean,
	updateCons: () => void
};

class ConsList extends Component {

	props: Props;
	renderConsList: ()=> void;
	renderEmptyInput: ()=> void;

	renderConsList () {
		const { cons } = this.props;
		const l: number = cons.length;

		return cons.map((text: string, id: number) => {
			return (
				<li key={id}>
					<input
						autoFocus="true"
						onChange={(e) => this.props.updateCons(e.target.value, id, l)}
						value={text}
					/>
				</li>
			)
		})
	}

	renderEmptyInput () {
		const l: number = this.props.cons.length;
		const id = l;

		return (
			<li key={id}>
				<input
					onChange={(e) => this.props.updateCons(e.target.value, id, l)}
				/>
			</li>
		)
	}

	render () {
		return (
			<div className="col-sm-6 consList">
				<h2 className="tableHeading">Cons</h2>
				<hr/>
				<ol>
					{this.renderConsList()}
					{this.props.onLastCons ? this.renderEmptyInput() : null}
				</ol>
			</div>
		)
	}
}

const mapStateToProps = ({ cons, onLastCons }) => {
	return { cons, onLastCons }
};

export default connect(mapStateToProps, { updateCons })(ConsList);

