/** @jsx React.DOM */
/*global require, module */
var React = require('react');
var ReactDOM = require('react-dom');

var data = {
			logo: "./img/logo.png",
			navbar: [{
				title: "Home",
				src: "/"
			}, {
				title: "About",
				src: "/about"
			}, {
				title: "Work",
				src: "/work"
			},{
				title: "Contact",
				src: "/contact"
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
var App = React.createClass({
	render: function(){
		return (
			<div className="home">
				<Navbar />
			</div>
		);
	}
});

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
		if(this.props.data){
				console.log(this.props.data.logo);
		}
		return (
			<nav className="links">
				<ul>
				{this.props.data.navbar.map(function(list,i){
					return (
						<li key={i}>
							<a href={list.src}>{list.title}</a>
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

module.exports = App;
