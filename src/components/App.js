import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../assets/styles/main.scss';
import T from 'i18n-react';
import pl from '../locales/pl.json';
import en from '../locales/en.json';

import Home from './Home';
import About from './About';
import Works from './works/Works';
import Skills from './Skills';
import ContactMe from './ContactMe';

class App extends Component {

  constructor(){
      super();
      this.state = {
        active: '',
        activeLang: 1,
        menu: false,
        isLoading: false,
      }
  }

	setLang(lng, index) {

		this.setState({
      isLoading: true,
      activeLang: index
    });
    setTimeout(() => {
        T.setTexts(lng);
    }, 600)

    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1200)
	}

	setActive(index) {
		this.setState({
      active: index,
      menu: !this.state.menu
    });
	}

  componentWillMount() {
	  T.setTexts(en);

    let currRoute = this.props.location.pathname;

    switch(currRoute){
      case '/':
              this.setState({active: 0})
              break;
      case '/about':
              this.setState({active: 1})
              break;
      case '/skills':
              this.setState({active: 2})
              break;
      case '/works':
              this.setState({active: 3})
              break;
      case '/works/1':
              this.setState({active: 3})
              break;
      case '/works/2':
              this.setState({active: 3})
              break;
      case '/works/3':
              this.setState({active: 3})
              break;
      case '/works/4':
              this.setState({active: 3})
              break;
      case '/contact':
              this.setState({active: 4})
              break;
      default:
              this.setState({active: 0})
              break;
    }
  }

  slideMenu() {
    this.setState({menu: !this.state.menu})
  }

  render() {

    let loaderClass = this.state.isLoading ? 'loader' : 'loader hide';

    return (

      <div className="App">
          <div className={loaderClass}>
              <span className="fa fa-circle-o-notch fa-spin"></span>
          </div>
          <Router>
            <div className="app-container">
              <div className="top-wrapper">
                  <div className="flex-wrapper">
                      <button onClick={this.slideMenu.bind(this)} className="hamburgerBtn"><span className="fa fa-bars"></span></button>
                      <div className={this.state.menu ? "app-nav" : "app-nav hide"}>
                          <ul>
                              <li>
                                  <Link className={this.state.active === 0 ? 'active' : ''} onClick={this.setActive.bind(this, 0)} to="/">{T.translate("nav.home")}</Link>
                              </li>
                              <li>
                                  <Link className={this.state.active === 1 ? 'active' : ''} onClick={this.setActive.bind(this, 1)} to="/about">{T.translate("nav.about")}</Link>
                              </li>
                              <li>
                                  <Link className={this.state.active === 2 ? 'active' : ''} onClick={this.setActive.bind(this, 2)} to="/skills">{T.translate("nav.skills")}</Link>
                              </li>
                              <li>
                                  <Link className={this.state.active === 3 ? 'active' : ''} onClick={this.setActive.bind(this, 3)} to="/works">{T.translate("nav.works")}</Link>
                              </li>
                              <li>
                                  <Link className={this.state.active === 4 ? 'active' : ''} onClick={this.setActive.bind(this, 4)} to="/contact">{T.translate("nav.contact")}</Link>
                              </li>
                          </ul>
                          <div className="mobileLangSwitcher">
                					  <button className={this.state.activeLang === 0 ? 'activeLang' : ''} onClick={this.setLang.bind(this, pl, 0)}>PL</button>
                					  <button className={this.state.activeLang === 1 ? 'activeLang' : ''} onClick={this.setLang.bind(this, en, 1)}>EN</button>
                				  </div>
                      </div>
                  </div>
              </div>
              <div className="page-wrapper">
				  <aside className="langSwitcher">
					  <button className={this.state.activeLang === 0 ? 'activeLang' : ''} onClick={this.setLang.bind(this, pl, 0)}>PL</button>
					  <button className={this.state.activeLang === 1 ? 'activeLang' : ''} onClick={this.setLang.bind(this, en, 1)}>EN</button>
				  </aside>
				  <aside className="socialsHome">
					  <a href="https://github.com/bmgorszczyk" target="_blank" rel="noopener noreferrer"><span className="fa fa-github"></span></a>
					  <a href="https://www.linkedin.com/in/bart%C5%82omiej-g%C3%B3rszczyk-413846147/" target="_blank" rel="noopener noreferrer"><span className="fa fa-linkedin"></span></a>
					  <a href="https://codepen.io/Barg_" target="_blank" rel="noopener noreferrer"><span className="fa fa-codepen" rel="noopener noreferrer"></span></a>
				  </aside>
                <Route render={({ location }) => (
                  <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={800} transitionLeaveTimeout={800}>
                      <Switch location={location} key={location.pathname}>
                          <Route exact path="/" component={Home} />
                          <Route path="/about" render={(props) => ( <About lang={this.state.activeLang}/> )} />
                          <Route path="/skills" component={Skills} />
                          <Route path="/works" component={Works} />
                          <Route path="/contact" component={ContactMe} />
                          <Redirect to="/" component={Home} />
                      </Switch>
                  </ReactCSSTransitionGroup>
                  )}
                />
              </div>
            </div>
          </Router>
      </div>
    );
  }
}

export default withRouter(App);
