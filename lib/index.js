/** @jsx React.DOM */

/*global require */

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;
var Navbar = require('./NavigationBar.js');
var Home = require('./home.js');
var About = require('./about.js');
var Work = require('./work.js');
var Contact = require('./contact.js');
var Resume = require('./resume.js');
var tvShowCalendarDetail = require('./works/tvShowCalendarDetail.js');

var App = React.createClass({
	render: function(){
		return (
			<div className="home">
				<Navbar />
        {this.props.children}
			</div>
		);
	}
});

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
			<Route path="/tvshowcalendar" component={tvShowCalendarDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
    </Route>
  </Router>

), document.getElementById('content'));
//ReactDOM.render(<App/>, document.getElementById('content'));
