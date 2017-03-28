// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePros } from '../actions';

type
Props = {
	pros: Array < string >,
	onLastPros: boolean,
	updatePros: () => void
};

class ProsList extends Component {

	props: Props;
	renderProsList: ()=> void;
	renderEmptyInput: ()=> void;

	renderProsList () {
		const { pros } = this.props;
		const l: number = pros.length;

		return pros.map((text: string, id: number) => {
			return (
				<li key={id}>
					<input
						autoFocus="true"
						onChange={(e) => this.props.updatePros(e.target.value, id, l)}
						value={text}
					/>
				</li>
			)
		})
	}

	renderEmptyInput () {
		const l: number = this.props.pros.length;
		const id = l;

		return (
			<li key={id}>
				<input
					onChange={(e) => this.props.updatePros(e.target.value, id, l)}
				/>
			</li>
		)
	}

	render () {
		return (
			<div className="col-sm-6 prosList">
				<h2 className="tableHeading">Pros</h2>
				<hr/>
				<ol>
					{this.renderProsList()}
					{this.props.onLastPros ? this.renderEmptyInput() : null}
				</ol>
			</div>
		)
	}
}

const mapStateToProps = ({ pros, onLastPros }) => {
	return { pros, onLastPros }
};

export default connect(mapStateToProps, { updatePros })(ProsList);

