/** @jsx React.DOM */
/*global require, module */
var React = require('react');
var Loading = require('./loading.js');
var ButtonClick = require('./buttonClick.js');
var NavbarSearch = require('./Navbar-Search.js');
var Calendar = require('./calendar.js');

var FollowButton = React.createClass({
	getInitialState: function(){
		var stateRandom = Math.floor(Math.random() * 9)+1 > 5? 'fa fa-heart unfollow' : 'fa fa-heart follow';
		return {data: stateRandom};
	},
	handleClick: function(){
		var idFollow = this.state.data === 'fa fa-heart unfollow' ? 'fa fa-heart follow' : 'fa fa-heart unfollow';
		this.setState({data: idFollow});
	},
	render: function(){
		return (
			<button className="btn btn-primary" onClick={this.handleClick}>
				<i className={this.state.data}></i>
			</button>
		);
	}
});

var DataRequest = React.createClass({
	getInitialState: function(){
		return {data: null};
	},
	loadTrackData: function () {
    $.get('http://api.tvmaze.com/singlesearch/shows?q='+this.props.show, function (data) {
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
					<div className="col-md-2">
						<h2>{this.state.data.name}</h2>
						<img src={this.state.data.image.medium}/>
					</div>
					<div className="col-md-offset-1 col-md-9">
						<h4>Summary</h4>
						<div dangerouslySetInnerHTML={{__html: this.state.data.summary}}></div>
						<h4>Genres:</h4>
						<ul>
							{this.state.data.genres.map(function(x, i){
								return <li key={i}>{x}</li>
							})}
						</ul>
						<h4>Network: {this.state.data.network.name}</h4>
						<FollowButton />
					</div>
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
			<div>
				<NavbarSearch />
				<Calendar />
				<div className="container-fluid">
					<DataRequest show='the simpsons'/>
					<hr/>
				</div>
			</div>
		);
	}
});
module.exports = Hello;
