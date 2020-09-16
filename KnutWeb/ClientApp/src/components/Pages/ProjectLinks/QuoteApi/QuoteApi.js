import React, { Component } from 'react';
import axios from 'axios';
import './QuoteApi.css';

export class QuoteApi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: '',
			author: ''
		}
	}

	componentDidMount() {
		this.getQuote();
	}

	getQuote() {
		let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

		axios.get(url)
			.then(res => {
				let data = res.data.quotes;
				let quoteNum = Math.floor(Math.random() * data.length);
				let randomQuote = data[quoteNum];

				this.setState({
					quote: randomQuote['quote'],
					author: randomQuote['author']
				});
			});
	}

	getNewQuote = () => {
		this.getQuote();
	}

	render() {
		const { quote, author } = this.state;
		return (
			<div className='quote-wrapper'>
				<h1>Random Quote App</h1>
				<div id='quote-buttons'>
					<button id='new-quote' type="button" className='buttons btn btn-dark' onClick={this.getNewQuote}>New Quote</button>
				</div>
				<div id='quote-box'>
					<div id='quote-text'><q>{quote}</q></div>
					<div id='quote-author'><h5>{author}</h5></div>
				</div>
			</div>
		);
	}
}

export default QuoteApi