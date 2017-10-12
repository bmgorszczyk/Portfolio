import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link } from 'react-router-dom';
import T from 'i18n-react';

import '../assets/styles/main.scss';
import me from '../assets/images/me.png';

class Home extends Component  {

	render() {
		return (
			<div>
				<div className="page home">
					<div className="container">
						<div className="home-wrapper">
							<div className="leftSide">
								<ReactCSSTransitionGroup
									transitionName="leftSlide"
									transitionAppear={true}
									transitionAppearTimeout={2000}
									transitionEnter={false}
									transitionLeave={false}>
									<article className="leftWrapper">
										<p className="bigWord">{T.translate("header.simple")}</p>
										<p className="bigWord">{T.translate("header.bright")}</p>
										<p className="bigWord">{T.translate("header.and")}<span className="love">{T.translate("header.love")}</span></p>
										<p className="shortHeaderText">{T.translate("header.smallHello")}</p>
										<ReactCSSTransitionGroup
											transitionName="fadeIn"
											transitionAppear={true}
											transitionAppearTimeout={2000}
											transitionEnter={false}
											transitionLeave={false}>
											<Link className="homeClick" to="/about">{T.translate("header.seeMoreBtn")}<span className="fa fa-long-arrow-right"></span></Link>
										</ReactCSSTransitionGroup>
									</article>
								</ReactCSSTransitionGroup>
							</div>

							<ReactCSSTransitionGroup
								transitionName="fadePhoto"
								transitionAppear={true}
								transitionAppearTimeout={2000}
								transitionEnter={false}
								transitionLeave={false}>
								<article className="rightSide">
									<img src={me} alt="myPhoto" />
								</article>
							</ReactCSSTransitionGroup>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default Home;
