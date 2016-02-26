var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var recentWork = React.createClass({
  render: function(){
    return (
      <div className="mostrecentWork">
        <div className="work-selection">
          <div className="work-wrap">
            {this.props.dataJobs.jobs.map(function(res,i){
              return (
                <div key={i}>
                <Link to={res.src}>
                  <div className="work-area">
                    <span className="title-work">{res.title}</span>
                    <span className="counterWork">0{i+1}</span>
                  </div>
                </>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = recentWork;
