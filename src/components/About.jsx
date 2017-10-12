import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../assets/styles/main.scss';
import aboutme from '../assets/images/me_about.png'
import T from 'i18n-react';

class About extends Component {

	render() {

		let href = '';
		this.props.lang === 0 ? href = "../assets/files/CV_Bartłomiej_Górszczyk.pdf" : href = "../assets/files/CV_Bartłomiej_Górszczyk_ENG.pdf"

		return (
			<div className="page">
				<div className="container">
					<h3 className="page-title">{T.translate("about.aboutMe")}</h3>
					<div className="about-wrapper">
						<div className="row">
							<div className="col-sm-12 col-md-6">
								<ReactCSSTransitionGroup
									transitionName="scaleIn"
									transitionAppear={true}
									transitionAppearTimeout={2000}
									transitionEnter={false}
									transitionLeave={false}>
									<article className="image-part">
										<img src={aboutme} alt="myPhoto" />
									</article>
								</ReactCSSTransitionGroup>
							</div>
							<div className="col-sm-12 col-md-6">
								<ReactCSSTransitionGroup
									transitionName="rightSlide"
									transitionAppear={true}
									transitionAppearTimeout={2000}
									transitionEnter={false}
									transitionLeave={false}>
									<article className="text-part">
										<h4 className="medium-title">{T.translate("about.hi")}</h4>
										<p className="about-text">{T.translate("about.iam")}<span className="greenC">{T.translate("about.young")}</span> <span className="redC">{T.translate("about.feDev")}</span>{T.translate("about.1st")}</p>
										<p className="about-text">{T.translate("about.2nd")}</p>
										<p className="about-text">{T.translate("about.3rd")}</p>
										<p className="about-text">{T.translate("about.4th")}</p>
										<div className="workButtons">
											<a className="codeBtn" href={href} download >{T.translate("about.downloadBtn")}<span className="fa fa-github"></span></a>
										</div>
									</article>
								</ReactCSSTransitionGroup>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default About;
