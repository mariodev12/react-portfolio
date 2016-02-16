/** @jsx React.DOM */

/*global require */

var React = require('react');
var ReactDOM = require('react-dom');

var Hello = require('./Hello');

ReactDOM.render(<Hello/>, document.getElementById('content'));
