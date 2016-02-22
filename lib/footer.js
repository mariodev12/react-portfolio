var React = require('react');
var ReactDOM = require('react-dom');

var Footer = React.createClass({
  render: function(){
    return (
      <footer data={data}>
        <social />
      </footer>
    );
  }
});

var Social = React.createClass({
  render: function(){
    return (
      <ul>
      {this.props.data.footer.map(function(result,i){
        return (
          <li key={i}>
            <a href={result.src}>{result.twitter}</a>
          </li>
        )
      })}
    );
    </ul>
  }
});
