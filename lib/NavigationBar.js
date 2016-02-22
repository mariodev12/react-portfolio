/** @jsx React.DOM */
/*global require, module */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var data = {
			logo: "./img/logo.png",
			navbar: [{
				title: "Home",
				src: "/home"
			}, {
				title: "About",
				src: "/about"
			}, {
				title: "Work",
				src: "/work"
			},{
				title: "Contact",
				src: "/contact"
			},{
				title: "Resume",
				src: "/resume"
			}],
			jobs: {
				src: "Images/Sun.png",
				name: "sun1",
				hOffset: 250,
				vOffset: 250,
				alignment: "center"
			},
			footer: {
				twitter: "@mariodev_",
				github: "mariodev_"
			}
	};

var Navbar = React.createClass({
	render: function(){
		return (
			<header className= "clearfix">
				<Logo data={data}/>
				<NavBarLinks data={data} />
			</header>
		);
	}
});

var NavBarLinks = React.createClass({

	render: function(){
		/*
		if(this.props.data){
				console.log(this.props.data);
		}
		*/
		return (
			<nav className="links">
				<ul>
				{this.props.data.navbar.map(function(list,i){
					return (
						<li key={i}>
							<Link to={list.src}>{list.title}</Link>
						</li>
					);
				})}
				</ul>
			</nav>
		);
	}
});
var Logo = React.createClass({
	render: function(){
		return (
			<a href="/">
				<img className="main-logo" src={this.props.data.logo} alt="logo" />
			</a>
		);
	}
});

module.exports = Navbar;
