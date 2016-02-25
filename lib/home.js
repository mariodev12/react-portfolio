var React = require('react');
var RecentWork = require('./home/recentWork.js');
var IntroPresentation = require('./home/introPresentation.js');

var dataJobs = {
			jobs: [{
				title: "TV Show Calendar",
        type: 'Vanilla JS & jQuery',
				src: "/tvshowcalendar"
			}, {
        title: "React Portfolio",
        type: 'ReactJS',
				src: "/tvshowcalendar"
			}, {
        title: "AngularJS App",
        type: 'AngularJS',
				src: "/tvshowcalendar"
			},{
        title: "iOS TV Calendar",
        type: 'React Native',
				src: "/tvshowcalendar"
			}]
	};

var Home = React.createClass({
  render: function(){
    return (
      <div className="container">
        <IntroPresentation />
        <RecentWork dataJobs={dataJobs} />
      </div>
    );
  }
});

module.exports = Home;
