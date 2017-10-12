import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Route, BrowserRouter as Router, Link, Redirect, Switch } from 'react-router-dom';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import '../../assets/styles/main.scss';
import T from 'i18n-react';

class Works extends Component  {

	constructor(){
		super();
		this.state = {
			active: 0
		}
	}

	setActiveDot(index) {
		this.setState({ active: index });
	}

	render() {

		return (

			<div className="page">
				<Router>
					<div className="container">
						<h3 className="page-title">{T.translate("works.title")}</h3>
						<div className="works-wrapper">
							<Route render={({ location }) => (
								<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={800} transitionLeaveTimeout={800}>
									<Switch location={location} key={location.pathname}>
										<Route path="/works/1" component={First} />
										<Route path="/works/2" component={Second} />
										<Route path="/works/3" component={Third} />
										<Route path="/works/4" component={Fourth} />
										<Route path="/works/5" component={Fifth} />
										<Redirect from="/works" to="/works/1" />
									</Switch>
								</ReactCSSTransitionGroup>
							)}
							/>
						</div>
						<div className="work-pagination">
							<Link className={this.state.active === 0 ? 'activeDotGreen' : ''} onClick={this.setActiveDot.bind(this, 0)} to="/works/1"></Link>
							<Link className={this.state.active === 1 ? 'activeDotBlue' : ''} onClick={this.setActiveDot.bind(this, 1)} to="/works/2"></Link>
							<Link className={this.state.active === 2 ? 'activeDotRed' : ''} onClick={this.setActiveDot.bind(this, 2)} to="/works/3"></Link>
							<Link className={this.state.active === 3 ? 'activeDotGreen' : ''} onClick={this.setActiveDot.bind(this, 3)} to="/works/4"></Link>
							<Link className={this.state.active === 4 ? 'activeDotBlue' : ''} onClick={this.setActiveDot.bind(this, 4)} to="/works/5"></Link>
						</div>
					</div>
				</Router>
			</div>

		);
	}

}

export default Works;
