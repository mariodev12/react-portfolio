/** @jsx React.DOM */
/*global require, module */
var React = require('react');
var ReactDOM = require('react-dom');
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
				<App />
				<div className="container-fluid">
					<DataRequest show='the simpsons'/>
					<hr/>
				</div>
			</div>
		);
	}
});

var App = React.createClass({

    getInitialState: function() {
        return {
            searchResults: []
        }
    },

    showResults: function(response){
        this.setState({
            searchResults: response.results
        })
    },

    search: function(URL){
        $.ajax({
            type: "GET",
            dataType: 'jsonp',
            url: URL,
            success: function(response){
                this.showResults(response);
            }.bind(this)
        });
    },

    render: function(){
        return (
            <div>
                <SearchBox search={this.search} />
                <Results searchResults={this.state.searchResults} />
            </div>
        );
    },


});

var SearchBox = React.createClass({

    render: function(){
        return (
            <div>
                <input type="text" ref="query" />
                <select ref="category">
                    <option value="software">Apps</option>
                    <option value="movie">Films</option>
                </select>
                <input type="submit" onClick={this.createAjax} />
            </div>
        );
    },

    createAjax: function(){
        var query    = ReactDOM.findDOMNode(this.refs.query).value;
        var category = ReactDOM.findDOMNode(this.refs.category).value;
        var URL      = 'https://itunes.apple.com/search?term=' + query +'&country=us&entity=' + category;
        this.props.search(URL)
    }

});

var Results = React.createClass({

    render: function(){
        var resultItems = this.props.searchResults.map(function(result) {
            return <ResultItem key={result.trackId} trackName={result.trackName} />
        });
        return(
            <ul>
                {resultItems}
            </ul>
        );
    }
});

var ResultItem = React.createClass({

    render: function(){
        return <li>{this.props.trackName}</li>;
    }
});
module.exports = Hello;
