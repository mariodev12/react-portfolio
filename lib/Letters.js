/** @jsx React.DOM */

/*global require, module */

var React = require('react');

var Letters = React.createClass({
	render: function() {
		var createData = function(item){
			return <li key={item.id}>{item.text}</li>;
		}
		return <ul>{this.props.items.map(createData)}</ul>
	}
});

module.exports = Letters;
