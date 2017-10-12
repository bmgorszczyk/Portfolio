import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../assets/styles/main.scss';
import T from 'i18n-react';

class Skills extends Component {

	render() {

		return (

			<div className="page">
				<div className="container">
					<h3 className="page-title">{T.translate("skills.title")}</h3>
					<ReactCSSTransitionGroup
						transitionName="fadePhoto"
						transitionAppear={true}
						transitionAppearTimeout={2000}
						transitionEnter={false}
						transitionLeave={false}>
						<section className="skills-wrapper-top">
							<div className="row">
								<div className="col-md-6 col-sm-6 col-lg-3">
									<article className="skill html">
										<div className="skill-header">
											<span className="first devicon-html5-plain"></span>
											<span className="second devicon-css3-plain"></span>
										</div>
										<h4 className="skill-title">HTML/CSS</h4>
										<p className="skill-desc">{T.translate("skills.html")}</p>
										<ReactCSSTransitionGroup
											transitionName="fadeIn"
											transitionAppear={true}
											transitionAppearTimeout={2000}
											transitionEnter={false}
											transitionLeave={false}>
											<div className="skill-body">
												<ul>
													<li><span className="fa fa-circle"></span>HTML5</li>
													<li><span className="fa fa-circle"></span>CSS3</li>
													<li><span className="fa fa-circle"></span>SASS/LESS</li>
													<li><span className="fa fa-circle"></span>Bootstrap</li>
												</ul>
											</div>
										</ReactCSSTransitionGroup>
									</article>
								</div>
								<div className="col-md-6 col-sm-6 col-lg-3">
									<article className="skill js">
										<div className="skill-header">
											<span className="devicon-javascript-plain"></span>
										</div>
										<h4 className="skill-title">JavaScript</h4>
										<p className="skill-desc">{T.translate("skills.js")}</p>
										<ReactCSSTransitionGroup
											transitionName="fadeIn"
											transitionAppear={true}
											transitionAppearTimeout={2000}
											transitionEnter={false}
											transitionLeave={false}>
											<div className="skill-body">
												<div className="know-better">
													<ul>
														<li><span className="fa fa-circle"></span>JavaScript</li>
														<li><span className="fa fa-circle"></span>jQuery</li>
													</ul>
												</div>
												<div className="know-worse">
													<p>{T.translate("skills.knowLess")}</p>
													<ul>
														<li><span className="fa fa-circle"></span>React</li>
														<li><span className="fa fa-circle"></span>AngularJS</li>
														<li><span className="fa fa-circle"></span>NodeJS</li>
													</ul>
												</div>
											</div>
										</ReactCSSTransitionGroup>
									</article>
								</div>
								<div className="col-md-6 col-sm-6 col-lg-3">
									<article className="skill tools">
										<div className="skill-header">
											<span className="first fa fa-pencil"></span>
											<span className="second fa fa-paint-brush"></span>
										</div>
										<h4 className="skill-title">{T.translate("skills.tools")}</h4>
										<p className="skill-desc">{T.translate("skills.toolsDesc")}</p>
										<ReactCSSTransitionGroup
											transitionName="fadeIn"
											transitionAppear={true}
											transitionAppearTimeout={2000}
											transitionEnter={false}
											transitionLeave={false}>
											<div className="skill-body">
												<ul>
													<li><span className="fa fa fa-circle"></span>Git</li>
													<li><span className="fa fa fa-circle"></span>Adobe Photoshop</li>
													<li><span className="fa fa fa-circle"></span>Atom</li>
												</ul>
											</div>
										</ReactCSSTransitionGroup>
									</article>
								</div>
								<div className="col-md-6 col-sm-6 col-lg-3">
									<article className="skill other">
										<div className="skill-header">
											<span className="fa fa-plus-circle"></span>
										</div>
										<h4 className="skill-title">{T.translate("skills.other")}</h4>
										<p className="skill-desc">{T.translate("skills.otherDesc")}</p>
										<ReactCSSTransitionGroup
											transitionName="fadeIn"
											transitionAppear={true}
											transitionAppearTimeout={2000}
											transitionEnter={false}
											transitionLeave={false}>
											<div className="skill-body">
												<div className="know-better">
													<ul>
														<li><span className="fa fa-circle"></span>Wordpress</li>
														<li><span className="fa fa-circle"></span>PostgreSQL</li>
													</ul>
												</div>
												<div className="know-worse">
													<p>{T.translate("skills.knowLess")}</p>
													<ul>
														<li><span className="fa fa-circle"></span>MongoDB</li>
													</ul>
												</div>
											</div>
										</ReactCSSTransitionGroup>
									</article>
								</div>
							</div>
						</section>
					</ReactCSSTransitionGroup>
				</div>
			</div>

		);
	}

}

export default Skills;
