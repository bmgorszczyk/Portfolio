import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../assets/styles/main.scss';
import yournurse from '../../assets/images/yournurse.png';
import T from 'i18n-react';

const First = () => {
	return (
    <section className="work row">
      <div className="col-md-5 col-sm-12">
        <ReactCSSTransitionGroup
          transitionName="fadeIn"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
            <article className="work-text">
              <h4 className="work-title">yournurse</h4>
              <p className="work-desc">{T.translate("works.1stdesc")}</p>
              <p>{T.translate("works.used")}</p>
              <ul className="techList">
                <li><span className="fa fa fa-circle"></span>HTML5</li>
                <li><span className="fa fa fa-circle"></span>CSS3/SCSS</li>
                <li><span className="fa fa fa-circle"></span>React</li>
                <li><span className="fa fa fa-circle"></span>NodeJS (Express)</li>
                <li><span className="fa fa fa-circle"></span>MongoDB (Mongoose)</li>
              </ul>
              <div className="workButtons">
                <a className="codeBtn" href="https://github.com/bmgorszczyk/yournurse" target="_blank" rel="noopener noreferrer" >{T.translate("works.gitBtn")}<span className="fa fa-github"></span></a>
                <a className="liveBtn" href="https://yournurse.herokuapp.com/" target="_blank" rel="noopener noreferrer" >{T.translate("works.liveBtn")}<span className="fa fa-eye"></span></a>
              </div>
            </article>
         </ReactCSSTransitionGroup>
      </div>
      <div className="col-md-7 col-sm-12">
        <ReactCSSTransitionGroup
          transitionName="rightSlide"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
            <article className="work-img">
              <img src={yournurse} alt="yournurseScreenShot"/>
            </article>
        </ReactCSSTransitionGroup>
      </div>
    </section>
	);
}

export default First;
