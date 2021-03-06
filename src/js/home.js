import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';

export default class Home extends Component {

	render(){

		return(
			<div className="home">
				<img className="hero-image" src="../images/helping-hand.jpg"/>
				<Link to="/report-a-student">
					<button className="big-button">
						Report Now
					</button>
				</Link>
			</div>	
		)
	}
}

