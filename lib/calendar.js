var React = require('react');
var Loading = require('./loading.js');

var calendarDay = React.createClass({
  getInitialState: function(){
    return {data: null};
  },
  loadCalendarData: function(){
    $.get('http://localhost:8500/events/groupby', function (data) {
      this.setState({data: data});
    }.bind(this));
  },
  componentDidMount: function(){
		this.loadCalendarData();
	},
  render: function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var fulldate = yyyy+'-'+mm+'-'+dd;

    var data = this.state.data;
    if(data){
        for (var s in data) {
          if (data.hasOwnProperty(s)) {
            for (var i in data[s]) {
              if (data[s].hasOwnProperty(i)) {
                //console.log(i);
                /*
                if(i === fulldate){
                  console.log(date[s][i].title);
                }
                */
                console.log(fulldate);
                for (var j = 0; j < data[s][i].length; i++) {
                  console.log(data[s][i][j].title);
                }
              }
            }
          }
        }
    }
    return (
        <div>
          <div className="day">
          </div>
        </div>
    );
  }
});
module.exports = calendarDay;
