import React, { Component } from 'react';
import axios from 'axios';
import '../assets/styles/main.scss';
import T from 'i18n-react';

class ContactMe extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			alertMessage: '',
			alertDanger: false,
			alertSuccess: false,
			sending: false
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e){
		e.preventDefault();

		this.setState({
			sending: true
		})

		axios.post('https://contact-bg.herokuapp.com/', {
			email: this.state.email,
			name: this.state.name,
			message: this.state.message
		  })
		  .then(function (res) {
			this.setState({
					alertSuccess: true,
					alertDanger: false,
					alertMessage: res.data.message,
					sending: true
				})
		  }.bind(this))
		  .catch(function (error) {
				this.setState({
					alertSuccess: false,
				  alertDanger: true,
				  alertMessage: 'Something went wrong. Try again later.',
					sending: false
			 })
			}.bind(this));

		this.setState({
			name: '',
			email: '',
			message: '',
			alertSuccess: '',
			alertDanger: ''
		})
	}

	render() {
		let alert = '', send = '';

		if(this.state.sending) {
			send = (
				<div><span className="loadingIco fa fa-circle-o-notch fa-spin"></span></div>
			)
		} else {
			send = ( <span>{T.translate("contact.sendBtn")}<span className="fa fa-paper-plane"></span></span>)
		}

		if(this.state.alertSuccess) {
			alert = ( <div className="alertSuccess"><span class="fa fa-check"></span>{this.state.alertMessage}</div> )
		}

		else if (this.state.alertDanger) {
			alert = ( <div className="alertDanger"><span class="fa fa-frown-o"></span>{this.state.alertMessage}</div> )
		} else alert = '';

		return (
			<div className="page">
				<div className="container">
					<h3 className="page-title">{T.translate("contact.title")}</h3>
					<div className="row contact">
						<div className="col-md-5 col-sm-12">
							<article className="text-wrapper">
								<h4>{T.translate("contact.touch")}</h4>
								<div className="contact-details">
									<p>{T.translate("contact.hire")}</p>
									<p>{T.translate("contact.reply")}</p>
									<div className="mail-tel">
										<ul>
											<li><span className="fa fa-phone"></span>+48 518 917 229</li>
											<li><span className="fa fa-envelope"></span>bmgorszczyk@gmail.com</li>
										</ul>
									</div>
									<div className="socials">
										<a href="https://www.linkedin.com/in/bart%C5%82omiej-g%C3%B3rszczyk-413846147/" target="_blank" rel="noopener noreferrer"><span className="fa fa-linkedin"></span></a>
										<a href="https://codepen.io/Barg_" target="_blank" rel="noopener noreferrer"><span className="fa fa-codepen"></span></a>
										<a href="https://github.com/bmgorszczyk" target="_blank" rel="noopener noreferrer"><span className="fa fa-github"></span></a>
									</div>
								</div>
							</article>
						</div>
						<div className="col-md-7 col-sm-12">
							<article className="form-wrapper">
							  {alert}
								<form onSubmit={this.handleSubmit.bind(this)} method="POST" action="mail.php">
									<div className="form-row">
										<div className="col">
											<input name="name" type="text" className="form-control contact-input red" id="name" placeholder={T.translate("contact.name")} value={this.state.name} onChange={this.handleChange.bind(this)} required/>
										</div>
										<div className="col">
											<input name="email" type="email" className="form-control contact-input blue" id="mail" placeholder={T.translate("contact.mail")} value={this.state.email} onChange={this.handleChange.bind(this)} required/>
										</div>
									</div>
									<div className="form-row">
										<div className="col">
											<textarea name="message" className="form-control contact-textarea" id="message" rows="5" placeholder={T.translate("contact.message")} value={this.state.message} onChange={this.handleChange.bind(this)} required></textarea>
										</div>
									</div>
									<div className="form-row">
										<div className="col text-right">
											<button className="sendBtn" type="submit">{send}</button>
										</div>
									</div>
								</form>
							</article>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactMe;
