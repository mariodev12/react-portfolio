/** @jsx React.DOM */
/*global require, module */
var React = require('react');
var Loading = require('./loading.js');
var Letters = require('./Letters.js');
var ButtonClick = require('./buttonClick.js');


var DataRequest = React.createClass({
	getInitialState: function(){
		return {data: null};
	},
	loadTrackData: function () {
    $.get('http://api.tvmaze.com/singlesearch/shows?q=girls', function (data) {
      this.setState({data: data});
    }.bind(this));
  },
	componentDidMount: function(){
		this.loadTrackData();
	},
	render: function(){
		var content = this.state.data ? <img src={this.state.data.image.medium}/> : <Loading />;
		if(this.state.data){
			return (
				<div>
					<h2>{this.state.data.name}</h2>
					<img src={this.state.data.image.medium}/>
					<h4>Summary</h4>
					<div dangerouslySetInnerHTML={{__html: this.state.data.summary}}></div>
					<h4>Genres:</h4>
					<ul>
						{this.state.data.genres.map(function(x, i){
							return <li key={i}>{x}</li>
						})}
					</ul>
					<h4>Network: {this.state.data.network.name}</h4>
				</div>
			);
		} else {
			return (
				<div>
					<Loading />
				</div>
			);
		}
	}
});

var Hello = React.createClass({
	getInitialState : function() {
			return {items: [], text: ''};
	},
	onChange: function(e){
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
		var nextText = '';
		this.setState({items: nextItems, text: nextText});
	},
	render: function() {
		return (
			<div className="todo">
				<h3>ToDo</h3>
				<DataRequest/>
				<ButtonClick/>
				<Letters items={this.state.items} />
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text}/>
					<button>{'Add #' + (this.state.items.length + 1)}</button>
				</form>
			</div>
		);
	}
});
module.exports = Hello;
