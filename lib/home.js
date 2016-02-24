var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Home = React.createClass({
  render: function(){
    return (
      <div className="container home-page page">
        <div className="intro message">
          <div className="intro-content">
            <span className="title-intro animate">
              I am a
            </span>
            <h1 className="subtitle-intro animate-2">
              <span>Front-end</span> <span>developer</span>
            </h1>
            <h1 className="subtitle2-intro animate-3">
             <span>&</span> <span>Javascript</span> <span>entusiast</span>.
            </h1>
          </div>
        </div>
        <div className="mostrecentWork">

        </div>
      </div>
    );
  }
});

module.exports = Home;
