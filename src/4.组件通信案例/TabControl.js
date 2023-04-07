import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class TabControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0
		};
	}
	static propTypes = {
		titles: PropTypes.array.isRequired
	};
	render() {
		const { titles } = this.props;
		const { currentIndex } = this.state;
		return (
			<div className='tab-control'>
				{titles.map((item, index) => {
					return (
						<div
							className={"tab-item" + (index === currentIndex ? " active" : "")}
							key={index}
							onClick={(e) => {
								this.itemClick(index);
							}}>
							{item}
						</div>
					);
				})}
			</div>
		);
	}

	itemClick(index) {
		this.setState({
			currentIndex: index
		});
		const { itemClick } = this.props;
		itemClick(index);
	}
}
